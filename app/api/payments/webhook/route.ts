import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { verifyWebhookSignature } from "@/lib/interswitch"

export async function POST(req: Request) {
  const signature = req.headers.get("x-interswitch-signature") || ""
  const rawBody = await req.text()

  const isValid = verifyWebhookSignature(rawBody, signature)

  if (!isValid) {
    return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 401 })
  }

  const payload = JSON.parse(rawBody)

  /**
   * EXPECTED PAYLOAD FORMAT (example)
   * {
   *   "transactionRef": "...",
   *   "status": "SUCCESS" | "FAILED",
   *   "paymentReference": "...",
   *   "amount": 5000
   * }
   */

  const { transactionRef, status, paymentReference } = payload

  if (!transactionRef) {
    return NextResponse.json({ success: false, error: "Missing transactionRef" }, { status: 400 })
  }

  const txn = await prisma.paymentTransaction.findUnique({
    where: { transactionRef },
    include: { invoice: true },
  })

  if (!txn) {
    return NextResponse.json({ success: false, error: "Transaction not found" }, { status: 404 })
  }

  const paymentStatus = status === "SUCCESS" ? "SUCCESS" : "FAILED"

  await prisma.paymentTransaction.update({
    where: { id: txn.id },
    data: {
      status: paymentStatus,
      paymentReference,
      rawResponse: payload,
    },
  })

  if (paymentStatus === "SUCCESS") {
    await prisma.invoice.update({
      where: { id: txn.invoiceId },
      data: { status: "PAID" },
    })
  }

  return NextResponse.json({ success: true })
}