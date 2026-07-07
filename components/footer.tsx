import { InstagramIcon, LinkedInIcon } from "@/components/social-icons";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold text-gold">
              Rodrigo Gómez Quezada
            </p>
            <p className="mt-2 text-sm text-cream/70">
              Abogado · Tutor de Examen de Grado · Talca, Región del Maule
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg text-gold">Navegación</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg text-gold">Redes</h3>
            <div className="flex flex-col gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
              >
                <InstagramIcon className="h-5 w-5" />
                @misiongrado._
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="text-sm text-cream/60">
            © 2026 Rodrigo Gómez Quezada. Todos los derechos reservados.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-cream/40">
            La información contenida en este sitio web tiene fines informativos y
            no constituye asesoría legal vinculante. Para casos específicos,
            consulte directamente con un profesional del derecho.
          </p>
        </div>
      </div>
    </footer>
  );
}
