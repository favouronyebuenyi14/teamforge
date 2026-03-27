import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { initiateInterswitchPayment } from "@/lib/interswitch"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ success: false }, { status: 401 })

  const body = await req.json()
  const { invoiceId } = body

  if (!invoiceId) {
    return NextResponse.json({ success: false, error: "invoiceId is required" }, { status: 400 })
  }

  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: { patient: true },
  })

  if (!invoice) {
    return NextResponse.json({ success: false, error: "Invoice not found" }, { status: 404 })
  }

  const init = await initiateInterswitchPayment({
    amount: invoice.totalAmount,
    customerName: invoice.patient.fullName,
    customerPhone: invoice.patient.phone,
    invoiceId: invoice.id,
  })

  const transaction = await prisma.paymentTransaction.create({
    data: {
      invoiceId: invoice.id,
      amount: invoice.totalAmount,
      transactionRef: init.transactionRef,
      status: "INITIATED",
      rawResponse: init as any,
    },
  })

  await prisma.invoice.update({
    where: { id: invoice.id },
    data: { status: "PENDING" },
  })

  return NextResponse.json({
    success: true,
    data: {
      checkoutUrl: init.checkoutUrl,
      transactionRef: transaction.transactionRef,
    },
  })
}