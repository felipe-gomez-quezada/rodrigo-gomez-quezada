import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js/min";
import { z } from "zod";

const REQUIRED_MESSAGE = "Este campo es obligatorio";
const PHONE_REQUIRED_MESSAGE = "Por favor, agrega tu número de teléfono";
const INVALID_PHONE_MESSAGE =
  "Por favor, introduce un número de teléfono válido";

function hasPhoneDigits(phone: string) {
  if (!phone.trim()) return false;

  try {
    const parsed = parsePhoneNumber(phone);
    return Boolean(parsed?.nationalNumber?.length);
  } catch {
    return false;
  }
}

export const contactSchema = z.object({
  nombre: z.string().trim().min(1, REQUIRED_MESSAGE),
  telefono: z
    .union([z.string(), z.undefined(), z.null()])
    .transform((value) => value ?? "")
    .pipe(
      z.string().superRefine((phone, ctx) => {
        if (!hasPhoneDigits(phone)) {
          ctx.addIssue({
            code: "custom",
            message: PHONE_REQUIRED_MESSAGE,
          });
          return;
        }

        if (!isValidPhoneNumber(phone)) {
          ctx.addIssue({
            code: "custom",
            message: INVALID_PHONE_MESSAGE,
          });
        }
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
  submitted?: {
    nombre: string;
    telefono: string;
    email: string;
  };
};

export const initialContactFormState: ContactFormState = {
  success: false,
};
