import { z } from 'zod'

export const createAppointmentSchema = z.object({
  patientId: z.string().min(1),
  doctorId: z.string().optional(),
  scheduledAt: z.string().min(1), // ISO date string
  reason: z.string().optional(),
})

export type CreateAppointmentInput = z.infer<typeof createAppointmentSchema>