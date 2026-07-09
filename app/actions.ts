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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendContactNotification({
  nombre,
  telefono,
  email,
  mensaje,
}: {
  nombre: string;
  telefono: string;
  email: string;
  mensaje?: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!resendApiKey || !fromEmail || !notificationEmail) {
    console.error(
      "Resend no configurado. Faltan variables:",
      {
        RESEND_API_KEY: Boolean(resendApiKey),
        RESEND_FROM_EMAIL: Boolean(fromEmail),
        NOTIFICATION_EMAIL: Boolean(notificationEmail),
      },
    );
    return { sent: false, reason: "missing_env" as const };
  }

  const resend = new Resend(resendApiKey);
  const timestamp = new Date().toLocaleString("es-CL", {
    timeZone: "America/Santiago",
  });

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: notificationEmail,
    replyTo: email,
    subject: `Nuevo contacto — ${nombre}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje ? escapeHtml(mensaje).replace(/\n/g, "<br>") : "<em>Sin mensaje</em>"}</p>
      <hr>
      <p><small>Recibido el ${escapeHtml(timestamp)}</small></p>
    `,
  });

  if (error) {
    console.error("Resend rechazó el envío:", {
      message: error.message,
      name: error.name,
      fromEmail,
      notificationEmail,
    });
    return { sent: false, reason: "resend_error" as const, details: error.message };
  }

  if (!data?.id) {
    console.error("Resend no devolvió ID de envío:", { data, fromEmail, notificationEmail });
    return { sent: false, reason: "missing_message_id" as const };
  }

  console.info("Correo de contacto enviado con Resend:", data.id);
  return { sent: true, messageId: data.id };
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
  const supabase = createServerSupabaseClient();

  let contactId: string;
  try {
    const { data: inserted, error: dbError } = await supabase
      .from("contact_requests")
      .insert({
        nombre,
        telefono,
        email,
        mensaje: mensaje || null,
        correo_enviado: false,
      })
      .select("id")
      .single();

    if (dbError || !inserted) {
      console.error("Error al guardar contacto en Supabase:", dbError);
      return {
        success: false,
        error:
          "No pudimos enviar tu mensaje en este momento. Intenta nuevamente más tarde.",
      };
    }

    contactId = inserted.id;
  } catch (error) {
    console.error("Error de configuración de Supabase:", error);
    return {
      success: false,
      error:
        "No pudimos enviar tu mensaje en este momento. Intenta nuevamente más tarde.",
    };
  }

  const emailResult = await sendContactNotification({
    nombre,
    telefono,
    email,
    mensaje,
  });

  if (emailResult.sent) {
    const { error: updateError } = await supabase
      .from("contact_requests")
      .update({ correo_enviado: true })
      .eq("id", contactId);

    if (updateError) {
      console.error(
        "Correo enviado, pero no se pudo actualizar correo_enviado:",
        updateError,
      );
    }
  }

  return {
    success: true,
    submitted: { nombre, telefono, email },
  };
}
