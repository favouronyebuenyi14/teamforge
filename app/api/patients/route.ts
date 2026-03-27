import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { fullName, phone, gender, dob, address } = await req.json();

    if (!fullName || !phone) {
      return NextResponse.json(
        { message: "Full name and phone are required" },
        { status: 400 }
      );
    }

    const patient = await prisma.patient.create({
      data: {
        fullName,
        phone,
        gender,
        dob: dob ? new Date(dob) : null,
        address,
        clinicId: (session.user as any).clinicId,
      },
    });

    return NextResponse.json(patient, { status: 201 });
  } catch (error: any) {
    console.error("Patient creation error:", error);
    return NextResponse.json(
      { message: "Error creating patient", error: error.message },
      { status: 500 }
    );
  }
}