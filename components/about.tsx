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
    text: "Residencia y práctica en Talca, Región del Maule.",
  },
  {
    icon: Scale,
    title: "Especialización",
    text: "Preparación de examen de grado y gestiones legales.",
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
              Soy abogado egresado de la Universidad de Talca, con ejercicio
              profesional en la ciudad de Talca, Región del Maule. Mi trayectoria
              combina la práctica jurídica con una vocación docente que me ha
              llevado a dedicarme de forma integral a la preparación de futuros
              abogados para el examen de grado.
            </p>
            <p>
              A lo largo de los años he desarrollado una metodología propia de
              enseñanza que prioriza la comprensión profunda del derecho, la
              argumentación oral y la simulación de condiciones reales de examen.
              Mi enfoque es exigente y estructurado, orientado a que cada
              estudiante llegue al día de la prueba con seguridad y dominio de las
              materias evaluadas.
            </p>
            <p>
              Como Tutor Fundador de Misión Grado, he acompañado a cientos de
              estudiantes de diversas universidades del país, logrando tasas de
              aprobación que respaldan la efectividad de un método basado en la
              preparación estratégica, la retroalimentación constante y el
              compromiso con el éxito de cada alumno.
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
