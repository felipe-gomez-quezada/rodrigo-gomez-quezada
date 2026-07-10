export const FIRM_NAME = "Quezada y Suárez Abogados";

export const FIRM_TAGLINE =
  "Derecho Civil y Médico · Talca, Región del Maule";

export const PARTNERS = [
  {
    id: "rodrigo",
    fullName: "Rodrigo Ignacio Gómez Quezada",
    shortName: "Rodrigo Quezada",
    title: "Abogado",
    university: "Universidad de Talca",
    specialization: "Derecho Civil",
    yearsExperience: "5+",
    image: "/images/Rodrigo.webp",
    imageAlt:
      "Rodrigo Ignacio Gómez Quezada, abogado especializado en Derecho Civil",
    linkedin: "https://www.linkedin.com/in/rodrigo-gomez-abogado/",
    associateLabel: "Abogado Asociado",
    headline:
      "Dedicado a la asesoría jurídica y representación civil en el Maule, con atención online en todo Chile.",
    tags: ["Derecho Civil", "Litigios", "Asesoría Jurídica"] as const,
    bio: "Egresado de la Universidad de Talca con más de cinco años de experiencia en Derecho Civil. Su práctica se centra en asesoría jurídica, representación judicial y gestión de trámites para personas y empresas en la Región del Maule, con asesorías online a todo Chile.",
  },
  {
    id: "ignacia",
    fullName: "María Ignacia Suárez Sanhueza",
    shortName: "María Ignacia Suárez",
    title: "Abogada",
    university: "Universidad de Talca",
    specialization: "Derecho Médico y Responsabilidad Civil",
    yearsExperience: "3+",
    image: "/images/Ignacia.webp",
    imageAlt:
      "María Ignacia Suárez Sanhueza, abogada especializada en Derecho Médico y Responsabilidad Civil",
    linkedin:
      "https://www.linkedin.com/in/mar%C3%ADa-ignacia-su%C3%A1rez-sanhueza-8ab6aa230/",
    associateLabel: "Abogada Asociada",
    headline:
      "Dedicada a proteger los derechos de las personas frente a decisiones clínicas y normativas.",
    tags: [
      "Derecho Médico",
      "Derecho Sanitario",
      "Litigación",
    ] as const,
    bio: "Abogada por la Universidad de Talca, experta en la intersección entre el derecho público, la normativa administrativa y el sistema de salud. Con experiencia directa en Departamentos de Salud Municipal, Nachi se especializa en responsabilidad civil médica, litigación y la aplicación práctica del derecho sanitario. Su enfoque combina un alto rigor técnico con el compromiso de proteger los derechos de las personas frente a decisiones clínicas y normativas, aportando claridad y seguridad jurídica en el ámbito de la salud.",
    specialties: [
      {
        title: "Derecho Médico y Sanitario",
        description:
          "Asesoría en la aplicación de normativas ministeriales y su impacto en el ejercicio clínico.",
      },
      {
        title: "Responsabilidad Civil Médica",
        description:
          "Análisis jurídico, representación y defensa en situaciones derivadas de la práctica asistencial.",
      },
      {
        title: "Derecho Administrativo y Público",
        description:
          "Especialista en el Estatuto de Atención Primaria de Salud (Ley N° 19.378) y Estatuto Administrativo.",
      },
      {
        title: "Litigación Civil",
        description:
          "Representación estratégica en tribunales con enfoque en el ámbito sanitario.",
      },
    ],
  },
] as const;

export type Partner = (typeof PARTNERS)[number];

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/misiongrado._/",
} as const;

export const CONTACT_PREFERENCES = [
  { value: "cualquiera", label: "Cualquiera" },
  { value: "rodrigo", label: "Rodrigo Quezada" },
  { value: "ignacia", label: "María Ignacia Suárez" },
] as const;

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
