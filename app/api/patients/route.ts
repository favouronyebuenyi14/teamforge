import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { createPatientSchema } from "@/lib/validators/patient"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ success: false }, { status: 401 })

  const clinicId = (session.user as any).clinicId
  if (!clinicId) return NextResponse.json({ success: false, error: "No clinic assigned" }, { status: 400 })

  const { searchParams } = new URL(req.url)
  const query = searchParams.get("q") || ""

  const patients = await prisma.patient.findMany({
    where: {
      clinicId,
      OR: [
        { fullName: { contains: query, mode: "insensitive" } },
        { phone: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json({ success: true, data: patients })
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ success: false }, { status: 401 })

  const clinicId = (session.user as any).clinicId
  if (!clinicId) return NextResponse.json({ success: false, error: "No clinic assigned" }, { status: 400 })

  const body = await req.json()
  const parsed = createPatientSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ success: false, error: parsed.error.message }, { status: 400 })
  }

  const { fullName, phone, gender, address, dob } = parsed.data

  const patient = await prisma.patient.create({
    data: {
      clinicId,
      fullName,
      phone,
      gender,
      address,
      dob: dob ? new Date(dob) : undefined,
    },
  })

  return NextResponse.json({ success: true, data: patient })
}