"use client";

import { useActionState, useState } from "react";
import { submitContactRequest } from "@/app/actions";
import {
  contactSchema,
  initialContactFormState,
  type ContactFormData,
} from "@/lib/contact-schema";

function SubmitButton({ disabled }: { disabled: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="inline-flex w-full items-center justify-center rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      Enviar &gt;
    </button>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactRequest,
    initialContactFormState,
  );
  const [clientErrors, setClientErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const raw = {
      nombre: String(formData.get("nombre") ?? ""),
      telefono: String(formData.get("telefono") ?? ""),
      email: String(formData.get("email") ?? ""),
      mensaje: String(formData.get("mensaje") ?? ""),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      event.preventDefault();
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (
          field === "nombre" ||
          field === "telefono" ||
          field === "email" ||
          field === "mensaje"
        ) {
          errors[field] = issue.message;
        }
      }
      setClientErrors(errors);
      return;
    }

    setClientErrors({});
  };

  const fieldErrors = {
    nombre: clientErrors.nombre ?? state.fieldErrors?.nombre,
    telefono: clientErrors.telefono ?? state.fieldErrors?.telefono,
    email: clientErrors.email ?? state.fieldErrors?.email,
    mensaje: clientErrors.mensaje ?? state.fieldErrors?.mensaje,
  };

  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 md:py-24"
    >
      <div className="mx-auto max-w-2xl px-6 md:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Contáctame
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-gold" />
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Soy especialista en Derecho Civil, Litigios y Herencias. ¡Solicita
            tu asesoría!
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-2xl shadow-navy/20">
          {state.success ? (
            <div
              role="status"
              className="rounded-lg border border-teal/30 bg-teal/5 px-4 py-3 text-sm text-navy"
            >
              Tu mensaje fue enviado correctamente. Me pondré en contacto
              contigo a la brevedad.
            </div>
          ) : (
            <>
              {state.error ? (
                <div
                  role="alert"
                  className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                >
                  {state.error}
                </div>
              ) : null}

              <form
                action={formAction}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
            <div>
              <label
                htmlFor="nombre"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                Nombre <span className="text-red-600">*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md border border-navy/20 px-4 py-2.5 text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
              {fieldErrors.nombre ? (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.nombre}</p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="telefono"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                Teléfono <span className="text-red-600">*</span>
              </label>
              <input
                id="telefono"
                name="telefono"
                type="text"
                required
                autoComplete="tel"
                className="w-full rounded-md border border-navy/20 px-4 py-2.5 text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
              {fieldErrors.telefono ? (
                <p className="mt-1 text-sm text-red-600">
                  {fieldErrors.telefono}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                E-mail <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-navy/20 px-4 py-2.5 text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
              {fieldErrors.email ? (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="w-full resize-y rounded-md border border-navy/20 px-4 py-2.5 text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
              {fieldErrors.mensaje ? (
                <p className="mt-1 text-sm text-red-600">
                  {fieldErrors.mensaje}
                </p>
              ) : null}
            </div>

                <SubmitButton disabled={isPending} />
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
