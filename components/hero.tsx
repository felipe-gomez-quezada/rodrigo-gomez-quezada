import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy py-24 md:py-32"
    >
      {/* Textured background: fine diagonal ruling + soft gold glow, evokes legal-document / letterhead ruling */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--gold) 0px, var(--gold) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
        <span className="inline-block font-serif text-sm uppercase tracking-[0.3em] text-gold">
          Quezada y Suárez Abogados
        </span>
        <h1 className="mt-6 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
          Asesoría legal especializada y representación civil
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
          Rodrigo Quezada, especialista en Derecho Civil, y María Ignacia Suárez,
          en Derecho Médico y Responsabilidad Civil, con representación en la
          Región del Maule y asesorías online a todo Chile.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-gold/60 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-gold hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Ver Servicios
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Solicitar Evaluación Legal
          </a>
        </div>
      </div>
    </section>
  );
}
