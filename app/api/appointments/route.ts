import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { createAppointmentSchema } from "@/lib/validators/appointment"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ success: false }, { status: 401 })

  const clinicId = (session.user as any).clinicId
  if (!clinicId) return NextResponse.json({ success: false, error: "No clinic assigned" }, { status: 400 })

  const appointments = await prisma.appointment.findMany({
    where: {
      patient: { clinicId },
    },
    include: {
      patient: true,
      doctor: true,
      invoice: true,
    },
    orderBy: { scheduledAt: "desc" },
  })

  return NextResponse.json({ success: true, data: appointments })
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ success: false }, { status: 401 })

  const clinicId = (session.user as any).clinicId
  if (!clinicId) return NextResponse.json({ success: false, error: "No clinic assigned" }, { status: 400 })

  const body = await req.json()
  const parsed = createAppointmentSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ success: false, error: parsed.error.message }, { status: 400 })
  }

  const appointment = await prisma.appointment.create({
    data: {
      patientId: parsed.data.patientId,
      doctorId: parsed.data.doctorId,
      scheduledAt: new Date(parsed.data.scheduledAt),
      reason: parsed.data.reason,
    },
  })

  return NextResponse.json({ success: true, data: appointment })
}