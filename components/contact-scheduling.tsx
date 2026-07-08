import { Calendar, CheckCircle2, Clock } from "lucide-react";
import { CALENDAR_URL, CONSULTATION_BULLETS } from "@/lib/constants";

export function ContactScheduling() {
  return (
    <section id="contacto" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <h2 className="font-serif text-3xl text-navy md:text-4xl">
          Agenda tu Consulta Legal
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 bg-gold" />
        <p className="mx-auto mt-4 max-w-xl text-navy/70">
          Reserva una primera consulta para evaluar tu situación legal y recibir
          orientación sobre los pasos a seguir.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-lg border border-navy/10 bg-beige p-8 text-left shadow-sm">
          <ul className="space-y-4">
            {CONSULTATION_BULLETS.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-sm text-navy/80"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-2 text-sm text-navy/60">
            <Clock className="h-4 w-4 text-gold" />
            Presencial en Talca u online vía videollamada
          </div>
        </div>

        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 text-base font-semibold text-navy shadow-lg shadow-gold/20 transition-colors hover:bg-gold-light"
        >
          <Calendar className="h-5 w-5" />
          Reservar Consulta Legal
        </a>
      </div>
    </section>
  );
}
