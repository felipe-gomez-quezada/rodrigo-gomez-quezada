import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre"),
  telefono: z.string().trim().min(8, "Ingresa un teléfono válido"),
  email: z.string().trim().email("Ingresa un correo válido"),
  mensaje: z.string().trim().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof ContactFormData, string>>;
};

export const initialContactFormState: ContactFormState = {
  success: false,
};
