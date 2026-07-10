import { LawyerBioCard } from "@/components/lawyer-bio-card";
import { PARTNERS } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre-nosotros" className="bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">
            Sobre Nosotros
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-navy/70">
            Somos un estudio de abogados con especialización en Derecho Civil y
            Derecho Médico, con práctica en la Región del Maule y asesorías
            online disponibles para clientes en todo Chile.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {PARTNERS.map((partner) => (
            <LawyerBioCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
