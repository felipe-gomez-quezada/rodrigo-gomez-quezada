export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/rodrigo-gomez-abogado/",
  instagram: "https://www.instagram.com/misiongrado._/",
} as const;

export const TESTIMONIALS = [
  {
    name: "Valentina Morales",
    university: "Universidad de Chile",
    year: "2025",
    text: "Rodrigo transformó mi preparación para el examen de grado. Sus interrogaciones simuladas fueron tan precisas que el día del examen me sentí completamente preparada. Su método es exigente, pero justo.",
  },
  {
    name: "Tomás Riquelme",
    university: "Universidad de Talca",
    year: "2024",
    text: "Aprobé a la primera gracias a la paciencia y el rigor de Rodrigo. No solo domina el derecho, sino que sabe enseñarlo con claridad. Cada sesión tenía un objetivo concreto y medible.",
  },
  {
    name: "María José Olivares",
    university: "???",
    year: "2025",
    text: "Valoro muchísimo la parte humana de los chicos de Misión Grado. Siempre están ahí para apoyarnos en cualquier imprevisto",
  },
] as const;

export const SERVICES = [
  {
    title: "Trámites y Gestiones Legales (Presencial y Online)",
    description:
      "Representación y asesoría en Derecho Civil: litigios, posesiones efectivas, contratos y conflictos de arrendamiento en la Región del Maule, con atención online a todo Chile.",
    features: [
      "Litigios y representación judicial en causas civiles",
      "Posesiones efectivas y trámites sucesorios",
      "Contratos y asesoría preventiva",
      "Conflictos de arrendamiento en la Región del Maule",
      "Atención presencial y online a nivel nacional",
    ],
    icon: "building" as const,
  },
  {
    title: "Tutorías para Examen de Grado",
    description:
      "Preparación académica personalizada para el examen de grado, con simulacros de interrogaciones orales y seguimiento individual.",
    features: [
      "Plan de estudio adaptado a tu universidad y perfil",
      "Simulacros de interrogaciones orales",
      "Retroalimentación detallada y seguimiento continuo",
      "Metodología rigurosa orientada a la aprobación",
    ],
    icon: "video" as const,
  },
] as const;
