import { ExternalLink, TrendingUp, Users } from "lucide-react";
import { InstagramIcon } from "@/components/social-icons";
import { SOCIAL_LINKS } from "@/lib/constants";

export function MisionGrado() {
  return (
    <section id="mision-grado" className="bg-navy py-12 text-cream md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Un proyecto de Rodrigo Quezada
            </p>
            <h2 className="font-serif text-2xl md:text-3xl">
              Misión Grado
            </h2>
            <p className="leading-relaxed text-cream/80">
              Soy fundador de{" "}
              <strong className="text-gold">Misión Grado</strong>, una academia
              especializada en la preparación del examen de grado en derecho.
              Junto a un equipo de tutores comprometidos, hemos acompañado a
              cientos de estudiantes de universidades de todo Chile en su camino
              hacia el título de abogado.
            </p>
            <p className="leading-relaxed text-cream/80">
              Nuestra metodología combina rigor académico, simulaciones de
              interrogaciones orales y un seguimiento personalizado que ha
              permitido alcanzar tasas de aprobación sobresalientes, superando
              consistentemente el promedio nacional del examen.
            </p>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              <InstagramIcon className="h-4 w-4" />
              @misiongrado._
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg border border-gold/20 bg-navy-light p-6 text-center">
              <Users className="mx-auto h-8 w-8 text-gold" />
              <p className="mt-4 font-serif text-3xl font-bold text-gold">
                +300
              </p>
              <p className="mt-1 text-sm text-cream/60">
                Estudiantes preparados
              </p>
            </div>
            <div className="rounded-lg border border-gold/20 bg-navy-light p-6 text-center">
              <TrendingUp className="mx-auto h-8 w-8 text-gold" />
              <p className="mt-4 font-serif text-3xl font-bold text-gold">
                85%+
              </p>
              <p className="mt-1 text-sm text-cream/60">
                Tasa de aprobación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
