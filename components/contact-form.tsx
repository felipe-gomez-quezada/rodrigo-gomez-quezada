"use client";

import { useActionState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { submitContactRequest } from "@/app/actions";
import { PhoneInputField } from "@/components/phone-input-field";
import { CONTACT_PREFERENCES } from "@/lib/constants";
import {
  contactSchema,
  initialContactFormState,
  type ContactFormData,
  type ContactFormInput,
} from "@/lib/contact-schema";

function SubmitButton({ disabled }: { disabled: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all hover:brightness-95 active:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    >
      Enviar &gt;
    </button>
  );
}

type FormFieldProps = {
  id: keyof ContactFormInput;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function FormField({ id, label, required, error, children }: FormFieldProps) {
  const hasError = Boolean(error);

  return (
    <div>
      <label
        htmlFor={id}
        className={`mb-1.5 block text-sm font-medium ${
          hasError ? "text-red-500" : "text-navy"
        }`}
      >
        {label}
        {required ? <span className="text-red-500"> *</span> : null}
      </label>
      {children}
      {hasError ? (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      ) : null}
    </div>
  );
}

const inputBaseClass =
  "w-full rounded-md border px-4 py-2.5 text-navy outline-none transition-colors focus:ring-2";

function inputClassName(hasError: boolean) {
  return hasError
    ? `${inputBaseClass} border-red-500 focus:border-red-500 focus:ring-red-500/20`
    : `${inputBaseClass} border-navy/20 focus:border-gold focus:ring-gold/20`;
}

export function ContactForm() {
  const [state, formAction, isActionPending] = useActionState(
    submitContactRequest,
    initialContactFormState,
  );
  const [isTransitionPending, startTransition] = useTransition();
  const isPending = isActionPending || isTransitionPending;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput, unknown, ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      nombre: "",
      telefono: undefined,
      email: "",
      mensaje: "",
      preferencia_contacto: "cualquiera",
    },
  });

  const getFieldError = (field: keyof ContactFormInput) =>
    errors[field]?.message ?? state.fieldErrors?.[field];

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("telefono", data.telefono);
    formData.append("email", data.email);
    formData.append("mensaje", data.mensaje ?? "");
    formData.append(
      "preferencia_contacto",
      data.preferencia_contacto ?? "cualquiera",
    );

    startTransition(() => {
      formAction(formData);
    });
  });

  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 md:py-24"
    >
      <div className="mx-auto max-w-2xl px-6 md:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Contáctanos
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-gold" />
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Somos especialistas en Derecho Civil, Litigios y Herencias. ¡Solicita
            tu asesoría!
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-2xl shadow-navy/20">
          {state.success && state.submitted ? (
            <div
              role="status"
              className="space-y-3 rounded-lg border border-gold/30 bg-gold/5 px-4 py-4 text-sm leading-relaxed text-navy"
            >
              <p>
                Gracias,{" "}
                <span className="font-semibold">{state.submitted.nombre}</span>.
                Tu solicitud fue enviada correctamente.
              </p>
              <p>
                Mantente atento a tu teléfono{" "}
                <span className="font-semibold">
                  {formatPhoneNumberIntl(state.submitted.telefono) ||
                    state.submitted.telefono}
                </span>{" "}
                y a tu correo{" "}
                <span className="font-semibold">{state.submitted.email}</span>.
              </p>
              <p>Nos pondremos en contacto contigo a la brevedad.</p>
            </div>
          ) : state.success ? (
            <div
              role="status"
              className="rounded-lg border border-gold/30 bg-gold/5 px-4 py-3 text-sm text-navy"
            >
              Tu mensaje fue enviado correctamente. Nos pondremos en contacto
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

              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <FormField
                  id="nombre"
                  label="Nombre"
                  required
                  error={getFieldError("nombre")}
                >
                  <input
                    id="nombre"
                    type="text"
                    autoComplete="name"
                    className={inputClassName(Boolean(getFieldError("nombre")))}
                    {...register("nombre")}
                  />
                </FormField>

                <FormField
                  id="telefono"
                  label="Teléfono"
                  required
                  error={getFieldError("telefono")}
                >
                  <PhoneInputField
                    name="telefono"
                    control={control}
                    hasError={Boolean(getFieldError("telefono"))}
                    disabled={isPending}
                  />
                </FormField>

                <FormField
                  id="email"
                  label="E-mail"
                  required
                  error={getFieldError("email")}
                >
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={inputClassName(Boolean(getFieldError("email")))}
                    {...register("email")}
                  />
                </FormField>

                <FormField
                  id="preferencia_contacto"
                  label="¿Con quién prefieres hablar?"
                  error={getFieldError("preferencia_contacto")}
                >
                  <select
                    id="preferencia_contacto"
                    className={inputClassName(
                      Boolean(getFieldError("preferencia_contacto")),
                    )}
                    {...register("preferencia_contacto")}
                  >
                    {CONTACT_PREFERENCES.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField
                  id="mensaje"
                  label="Mensaje"
                  error={getFieldError("mensaje")}
                >
                  <textarea
                    id="mensaje"
                    rows={4}
                    className={`${inputClassName(Boolean(getFieldError("mensaje")))} resize-y`}
                    {...register("mensaje")}
                  />
                </FormField>

                <div className="flex justify-end pt-1">
                  <SubmitButton disabled={isPending} />
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
