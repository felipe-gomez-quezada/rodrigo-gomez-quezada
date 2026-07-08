export const CALENDAR_URL =
  process.env.NEXT_PUBLIC_CALENDAR_URL ??
  "https://calendar.app.google/placeholder";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
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
    title: "Asesoría y Representación en Derecho Civil",
    description:
      "Consultoría jurídica, representación judicial y gestión de trámites en materia civil. Atención presencial en la Región del Maule y asesorías online para clientes en todo Chile.",
    features: [
      "Representación judicial en causas civiles",
      "Consultoría jurídica especializada",
      "Trámites y gestiones administrativas",
      "Atención presencial en Talca y online a nivel nacional",
    ],
    icon: "building" as const,
  },
] as const;

export const CONSULTATION_BULLETS = [
  "Evaluación inicial de tu situación legal",
  "Orientación sobre las opciones disponibles",
  "Resolución de dudas sobre tu caso o trámite",
  "Duración aproximada: 30 minutos",
] as const;
