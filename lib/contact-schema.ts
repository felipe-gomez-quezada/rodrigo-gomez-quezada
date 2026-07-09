import { isValidPhoneNumber } from "libphonenumber-js/min";
import { z } from "zod";

const REQUIRED_MESSAGE = "Este campo es obligatorio";
const INVALID_PHONE_MESSAGE =
  "Por favor, introduce un número de teléfono válido";

export const contactSchema = z.object({
  nombre: z.string().trim().min(1, REQUIRED_MESSAGE),
  telefono: z
    .union([z.string(), z.undefined()])
    .transform((value) => value ?? "")
    .pipe(
      z
        .string()
        .min(1, REQUIRED_MESSAGE)
        .refine((phone) => isValidPhoneNumber(phone), {
          message: INVALID_PHONE_MESSAGE,
        }),
    ),
  email: z
    .string()
    .trim()
    .min(1, REQUIRED_MESSAGE)
    .email("Por favor, introduce un correo electrónico válido"),
  mensaje: z.string().trim().optional(),
});

export type ContactFormInput = z.input<typeof contactSchema>;
export type ContactFormData = z.output<typeof contactSchema>;

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof ContactFormData, string>>;
};

export const initialContactFormState: ContactFormState = {
  success: false,
};
