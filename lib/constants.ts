export const CALENDAR_URL =
  process.env.NEXT_PUBLIC_CALENDAR_URL ??
  "https://calendar.app.google/placeholder";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Misión Grado", href: "#mision-grado" },
  { label: "Testimonios", href: "#testimonios" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/rodrigo-gomez-quezada",
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
    name: "Camila Fuentes",
    university: "Universidad Católica de Valparaíso",
    year: "2025",
    text: "Tomé tutorías 100% remotas desde Valparaíso y la experiencia fue impecable. Rodrigo detectó mis debilidades en derecho civil y penal con una precisión que ningún otro tutor logró. Totalmente recomendado.",
  },
] as const;

export const SERVICES = [
  {
    title: "Tutorías para Examen de Grado (100% Remoto)",
    description:
      "Preparación personalizada para el examen de grado con enfoque estratégico. Incluye plan de estudio adaptado, repaso de materias clave e interrogaciones simuladas con retroalimentación detallada.",
    features: [
      "Plan de estudio personalizado",
      "Interrogaciones orales simuladas",
      "Cobertura en todo Chile",
      "Seguimiento continuo del progreso",
    ],
    icon: "video" as const,
  },
  {
    title: "Trámites y Gestiones Legales (Presencial - Talca)",
    description:
      "Representación judicial, consultoría jurídica y gestión de trámites administrativos en la Región del Maule. Atención profesional y cercana para personas y empresas.",
    features: [
      "Representación judicial local",
      "Consultoría jurídica especializada",
      "Trámites administrativos",
      "Atención presencial en Talca",
    ],
    icon: "building" as const,
  },
] as const;

export const CONSULTATION_BULLETS = [
  "Evaluación inicial de tu nivel de preparación",
  "Recomendaciones personalizadas de estudio",
  "Resolución de dudas sobre el proceso del examen",
  "Duración aproximada: 30 minutos",
] as const;
