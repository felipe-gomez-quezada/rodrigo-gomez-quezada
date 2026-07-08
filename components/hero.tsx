import Image from "next/image";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { CALENDAR_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section id="inicio" className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl leading-tight text-navy md:text-5xl lg:text-6xl">
            Asesoría Legal Especializada y Representación Civil.
          </h1>
          <p className="text-lg leading-relaxed text-navy/70">
            Rodrigo Quezada. Abogado especializado en Derecho Civil brindando
            representación en la Región del Maule y asesorías online a todo
            Chile. Tutor fundador de Misión Grado.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              Ver Servicios
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              <CalendarCheck className="h-4 w-4" />
              Agendar Consulta Legal
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative overflow-hidden rounded-lg border-2 border-gold/30 shadow-2xl shadow-navy/10">
            <div className="relative bg-beige w-full h-full aspect-[4/5]">
              <Image
                src="/images/portrait.jpeg"
                alt="Rodrigo Quezada, abogado especializado en Derecho Civil"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-2 border-gold/40 md:block" />
        </div>
      </div>
    </section>
  );
}
