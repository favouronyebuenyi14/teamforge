import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: string
      clinicId?: string
      name?: string | null
      email?: string | null
    }
  }
}S