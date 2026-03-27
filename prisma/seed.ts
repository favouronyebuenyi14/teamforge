import { prisma } from "../lib/prisma"
import bcrypt from "bcryptjs"

async function main() {
  const clinic = await prisma.clinic.create({
    data: {
      name: "AstraLab Demo Clinic",
      address: "Lagos, Nigeria",
      phone: "08000000000",
    },
  })

  const passwordHash = await bcrypt.hash("admin123", 10)

  await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@astralab.com",
      password: passwordHash,
      role: "ADMIN",
      clinicId: clinic.id,
    },
  })

  console.log("Seeded clinic + admin user.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })