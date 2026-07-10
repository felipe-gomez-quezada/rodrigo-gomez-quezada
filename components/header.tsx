"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT_PREFERENCES, NAV_LINKS } from "@/lib/constants";

const linkClassName =
  "text-sm font-medium text-navy/80 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm";

const ctaClassName =
  "rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#inicio"
          className="font-serif text-sm font-semibold leading-tight text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm md:text-lg"
        >
          <span className="block sm:inline">Quezada y Suárez</span>{" "}
          <span className="block sm:inline">Abogados</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClassName}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className={ctaClassName}>
            Cuéntanos tu Caso
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-navy/10 bg-cream px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMobile}
                  className="block text-base font-medium text-navy/80 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" onClick={closeMobile} className={ctaClassName}>
                Cuéntanos tu Caso
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
