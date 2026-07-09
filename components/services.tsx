import { BookOpen, Building2, CheckCircle2, FileText, Video } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  video: Video,
  building: Building2,
} as const;

export function Services() {
  return (
    <section id="servicios" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Servicios</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-navy/70">
            Asesoría jurídica y representación civil adaptada a tus necesidades,
            con atención presencial en la Región del Maule y consultas online en
            todo Chile.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            const SecondaryIcon =
              service.icon === "video" ? BookOpen : FileText;

            return (
              <div
                key={service.title}
                className="group rounded-lg border border-navy/10 bg-beige p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <SecondaryIcon className="h-5 w-5 text-gold/60" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-navy/80"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
