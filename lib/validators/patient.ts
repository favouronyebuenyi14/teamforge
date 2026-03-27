import { z } from 'zod'

export const createPatientSchema = z.object({
  fullName: z.string().min(3),
  phone: z.string().min(8),
  gender: z.string().optional(),
  address: z.string().optional(),
  dob: z.string().optional(), // ISO string
})

export type CreatePatientInput = z.infer<typeof createPatientSchema>