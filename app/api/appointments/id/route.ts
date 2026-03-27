import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET(_: Request, context: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ success: false }, { status: 401 })

  const appointmentId = context.params.id

  const appointment = await prisma.appointment.findUnique({
    where: { id: appointmentId },
    include: {
      patient: true,
      doctor: true,
      encounter: true,
      invoice: true,
    },
  })

  if (!appointment) {
    return NextResponse.json({ success: false, error: "Appointment not found" }, { status: 404 })
  }

  return NextResponse.json({ success: true, data: appointment })
}