"use server";

import { Resend } from "resend";
import {
  contactSchema,
  type ContactFormState,
} from "@/lib/contact-schema";
import { createServerSupabaseClient } from "@/lib/supabase";

const CONSULTA_RECIBIDA_TEMPLATE_ID = "2807201a-642f-43e7-9921-8e7c4c32abee";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

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
  const fechaRecepcion = new Date().toLocaleString("es-CL", {
    timeZone: "America/Santiago",
  });
  const direccionEstudio =
    process.env.DIRECCION_ESTUDIO ?? "Talca, Región del Maule";
  const sitioWeb =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rodrigoquezada.cl";
  const mensajeTexto = mensaje?.trim() || "Sin mensaje";
  const templateVariables = {
    nombre,
    telefono,
    email,
    mensaje: mensajeTexto,
    fecha_recepcion: fechaRecepcion,
    direccion_estudio: direccionEstudio,
    sitio_web: sitioWeb,
  };

  const sendClientConfirmation =
    process.env.CONTACT_SEND_CLIENT_CONFIRMATION !== "false";

  const lawyerNotification = resend.emails.send({
    from: fromEmail,
    to: notificationEmail,
    replyTo: email,
    subject: `Nuevo contacto — ${nombre}`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#0b1d3a;max-width:560px;margin:0 auto;">
        <div style="background-color:#0b1d3a;padding:24px;text-align:center;border-radius:8px 8px 0 0;">
          <div style="width:56px;height:56px;background-color:#c4a35a;border-radius:50%;margin:0 auto;line-height:56px;font-family:Georgia,serif;font-weight:bold;color:#0b1d3a;">RQ</div>
          <p style="margin:12px 0 0;font-family:Georgia,serif;font-size:20px;color:#fdfcfa;">Rodrigo Quezada</p>
          <p style="margin:4px 0 0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#c4a35a;">Abogado</p>
        </div>
        <div style="background-color:#fdfcfa;padding:24px;border:1px solid rgba(11,29,58,0.08);border-top:none;border-radius:0 0 8px 8px;">
          <h2 style="margin:0 0 16px;font-family:Georgia,serif;font-size:22px;">Nuevo mensaje de contacto</h2>
          <p style="margin:0 0 8px;"><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
          <p style="margin:0 0 8px;"><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
          <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin:0 0 4px;"><strong>Mensaje:</strong></p>
          <p style="margin:0 0 16px;white-space:pre-wrap;">${escapeHtml(mensajeTexto)}</p>
          <hr style="border:none;border-top:1px solid rgba(11,29,58,0.1);margin:16px 0;" />
          <p style="margin:0;font-size:13px;opacity:0.6;">Recibido el ${escapeHtml(fechaRecepcion)}</p>
        </div>
      </div>
    `,
  });

  const clientConfirmation = sendClientConfirmation
    ? resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Confirmación de consulta — Rodrigo Quezada",
        template: {
          id: CONSULTA_RECIBIDA_TEMPLATE_ID,
          variables: templateVariables,
        },
      })
    : Promise.resolve({ data: null, error: null });

  const [lawyerResult, clientResult] = await Promise.all([
    lawyerNotification,
    clientConfirmation,
  ]);

  if (lawyerResult.error) {
    console.error("Resend rechazó la notificación al abogado:", {
      message: lawyerResult.error.message,
      name: lawyerResult.error.name,
      fromEmail,
      notificationEmail,
    });
    return {
      sent: false,
      reason: "resend_error" as const,
      details: lawyerResult.error.message,
    };
  }

  if (clientResult.error) {
    console.error("Resend rechazó la confirmación al cliente:", {
      message: clientResult.error.message,
      name: clientResult.error.name,
      fromEmail,
      clientEmail: email,
    });
  }

  const data = lawyerResult.data;

  if (!data?.id) {
    console.error("Resend no devolvió ID de envío:", { data, fromEmail, notificationEmail });
    return { sent: false, reason: "missing_message_id" as const };
  }

  console.info("Correos de contacto enviados con Resend:", {
    lawyer: lawyerResult.data?.id,
    client: clientResult.data?.id ?? "omitido",
  });
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
