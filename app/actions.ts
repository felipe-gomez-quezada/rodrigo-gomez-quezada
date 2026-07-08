"use server";

import { Resend } from "resend";
import {
  contactSchema,
  type ContactFormState,
} from "@/lib/contact-schema";
import { createServerSupabaseClient } from "@/lib/supabase";

function getFieldErrors(
  error: ReturnType<typeof contactSchema.safeParse>["error"],
) {
  if (!error) return undefined;

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  for (const issue of error.issues) {
    const field = issue.path[0];
    if (
      field === "nombre" ||
      field === "telefono" ||
      field === "email" ||
      field === "mensaje"
    ) {
      fieldErrors[field] = issue.message;
    }
  }
  return fieldErrors;
}

export async function submitContactRequest(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    nombre: String(formData.get("nombre") ?? ""),
    telefono: String(formData.get("telefono") ?? ""),
    email: String(formData.get("email") ?? ""),
    mensaje: String(formData.get("mensaje") ?? ""),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      error: "Revisa los campos marcados e intenta nuevamente.",
      fieldErrors: getFieldErrors(parsed.error),
    };
  }

  const { nombre, telefono, email, mensaje } = parsed.data;

  try {
    const supabase = createServerSupabaseClient();
    const { error: dbError } = await supabase.from("contact_requests").insert({
      nombre,
      telefono,
      email,
      mensaje: mensaje || null,
    });

    if (dbError) {
      console.error("Error al guardar contacto en Supabase:", dbError);
      return {
        success: false,
        error:
          "No pudimos enviar tu mensaje en este momento. Intenta nuevamente más tarde.",
      };
    }
  } catch (error) {
    console.error("Error de configuración de Supabase:", error);
    return {
      success: false,
      error:
        "No pudimos enviar tu mensaje en este momento. Intenta nuevamente más tarde.",
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (resendApiKey && fromEmail && notificationEmail) {
    try {
      const resend = new Resend(resendApiKey);
      const timestamp = new Date().toLocaleString("es-CL", {
        timeZone: "America/Santiago",
      });

      await resend.emails.send({
        from: fromEmail,
        to: notificationEmail,
        subject: `Nuevo contacto — ${nombre}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje ? mensaje.replace(/\n/g, "<br>") : "<em>Sin mensaje</em>"}</p>
          <hr>
          <p><small>Recibido el ${timestamp}</small></p>
        `,
      });
    } catch (error) {
      console.error("Error al enviar notificación por Resend:", error);
    }
  } else {
    console.warn(
      "Variables de Resend no configuradas; el contacto se guardó sin notificación por email.",
    );
  }

  return { success: true };
}
