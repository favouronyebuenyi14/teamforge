import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET(_: Request, context: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ success: false }, { status: 401 })

  const clinicId = (session.user as any).clinicId
  const patientId = context.params.id

  const patient = await prisma.patient.findFirst({
    where: { id: patientId, clinicId },
    include: {
      appointments: { orderBy: { createdAt: "desc" } },
      invoices: { orderBy: { createdAt: "desc" } },
      encounters: { orderBy: { createdAt: "desc" } },
    },
  })

  if (!patient) {
    return NextResponse.json({ success: false, error: "Patient not found" }, { status: 404 })
  }

  return NextResponse.json({ success: true, data: patient })
}S