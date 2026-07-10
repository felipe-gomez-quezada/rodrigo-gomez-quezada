import { ArrowRight } from "lucide-react";
import { LawyerPortrait } from "@/components/lawyer-portrait";
import { PARTNERS } from "@/lib/constants";

export function Hero() {
  return (
    <section id="inicio" className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl leading-tight text-navy md:text-5xl lg:text-6xl">
            Asesoría legal especializada y representación civil
          </h1>
          <p className="text-lg leading-relaxed text-navy/70">
            Rodrigo Quezada y María Ignacia Suárez, abogados especializados en
            Derecho Civil, con representación en la Región del Maule y
            asesorías online a todo Chile.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Ver Servicios
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Solicitar Evaluación Legal
            </a>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-3 md:max-w-none md:gap-4">
          {PARTNERS.map((partner, index) => (
            <LawyerPortrait
              key={partner.id}
              src={partner.image}
              alt={partner.imageAlt}
              priority={index === 0}
              decoration={index === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
