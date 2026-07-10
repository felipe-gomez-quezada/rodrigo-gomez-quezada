import { InstagramIcon, LinkedInIcon } from "@/components/social-icons";
import {
  FIRM_NAME,
  FIRM_TAGLINE,
  NAV_LINKS,
  PARTNERS,
  SOCIAL_LINKS,
} from "@/lib/constants";

const footerLinkClassName =
  "text-sm text-cream/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-sm";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold text-gold">
              {FIRM_NAME}
            </p>
            <p className="mt-2 text-sm text-cream/70">{FIRM_TAGLINE}</p>
            <ul className="mt-4 space-y-2">
              {PARTNERS.map((partner) => (
                <li key={partner.id}>
                  <a
                    href={partner.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${footerLinkClassName}`}
                  >
                    <LinkedInIcon className="h-4 w-4 shrink-0" />
                    {partner.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg text-gold">Navegación</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={footerLinkClassName}>
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
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${footerLinkClassName}`}
              >
                <InstagramIcon className="h-5 w-5" />
                @misiongrado._
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="text-sm text-cream/60">
            © 2026 {FIRM_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
