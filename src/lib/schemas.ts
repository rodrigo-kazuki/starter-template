import {z } from "zod";
export const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  postalCode:  z.string().regex(/^[A-Za-z0-9]{6}$/, "O código postal deve ter exatamente 6 caracteres alfanuméricos, sem espaços."),
  service: z.string().min(8),
})