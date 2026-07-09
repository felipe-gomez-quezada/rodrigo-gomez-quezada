import { GraduationCap, MapPin, Scale } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formación académica",
    text: "Licenciado en Ciencias Jurídicas y Sociales, Universidad de Talca.",
  },
  {
    icon: MapPin,
    title: "Ejercicio profesional",
    text: "Más de 5 años de experiencia en Derecho Civil. Práctica en Talca, Región del Maule.",
  },
  {
    icon: Scale,
    title: "Especialización",
    text: "Asesoría, representación judicial y gestiones en materia civil.",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Sobre Mí</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-gold" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-navy/80 leading-relaxed">
            <p>
              Soy abogado egresado de la Universidad de Talca, con más de cinco
              años de experiencia en Derecho Civil. Mi práctica se centra en la
              asesoría jurídica, la representación judicial y la gestión de
              trámites para personas y empresas en la Región del Maule, con
              asesorías online disponibles para clientes en todo Chile.
            </p>
            <p>
              Mi enfoque combina rigor técnico con una atención cercana: cada
              caso se analiza con estrategia, claridad y compromiso con los
              intereses de quien confía en mi representación. Trabajo para que
              cada cliente comprenda sus opciones y tome decisiones informadas
              en cada etapa del proceso.
            </p>
            <p>
              Además, soy fundador de{" "}
              <a
                href="#mision-grado"
                className="font-medium text-navy underline decoration-gold/50 underline-offset-2 transition-colors hover:text-gold"
              >
                Misión Grado
              </a>
              , academia de preparación para el examen de grado en la que he
              preparado a cientos de estudiantes de derecho — un proyecto que
              refuerza mi dominio del derecho y mi vocación docente.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-lg border border-navy/10 bg-cream p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
