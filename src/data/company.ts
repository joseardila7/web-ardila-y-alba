// =============================================
// DATOS DE LA EMPRESA
// =============================================
// Contiene la información corporativa básica:
// nombre, logo, valores y secciones del footer.
//
// NOTA: Los datos de contacto, horarios, SEO
// y galería están en archivos separados:
//   - contact.ts   → teléfono, email, dirección, horario, redes, zona
//   - services.ts  → lista de servicios
//   - home.ts      → textos de la página de inicio
//   - gallery.ts   → trabajos y categorías
//   - seo.ts       → SEO local y metadatos por página
//   - navigation.ts → enlaces del menú
// =============================================

import { CONTACT } from "./contact";

// =============================================
// DATOS BÁSICOS DE LA EMPRESA
// =============================================
export const COMPANY = {
  /** Nombre legal completo (footer, copyright, Schema.org) */
  name: "Ardila y Alba Instalaciones S.L.",
  /** Nombre comercial para usar en la web (header, títulos, etc.) */
  shortName: "Ardila y Alba Instalaciones",
  /** Eslogan / tagline principal del hero */
  tagline: "Instalaciones eléctricas y servicios técnicos",
  /** Descripción breve para footer y metadatos SEO */
  description:
    "Empresa de instalaciones eléctricas y servicios técnicos ubicada en Villanueva del Trabuco (Málaga). Ofrecemos soluciones profesionales para hogares, comunidades, locales y negocios.",
} as const;

// =============================================
// LOGO — Configuración del logotipo
// =============================================
export const LOGO = {
  /** Ruta del archivo del logo (relativa a public/) */
  path: "/images/logo.svg",
  /** Texto alternativo para accesibilidad y SEO */
  alt: "Ardila y Alba Instalaciones — Logo de la empresa",
  /** Ancho en píxeles */
  width: 180,
  /** Alto en píxeles */
  height: 50,
} as const;

// =============================================
// VALORES DE LA EMPRESA
// =============================================
export interface Value {
  title: string;
  description: string;
  icon: string;
}

export const VALUES: Value[] = [
  {
    title: "Profesionalidad",
    description:
      "Trabajamos con seriedad y rigor en cada proyecto, cumpliendo la normativa vigente y aportando soluciones técnicas adaptadas a cada necesidad.",
    icon: "👔",
  },
  {
    title: "Cercanía",
    description:
      "Atención directa y personalizada. Escuchamos a cada cliente para entender sus necesidades y ofrecerle la mejor solución.",
    icon: "🤝",
  },
  {
    title: "Compromiso",
    description:
      "Nos implicamos en cada trabajo con responsabilidad, cumpliendo plazos y ofreciendo un servicio honesto y transparente.",
    icon: "🎯",
  },
  {
    title: "Seguridad",
    description:
      "Todas nuestras intervenciones se realizan siguiendo las normas de seguridad y reglamentación del sector eléctrico.",
    icon: "🛡️",
  },
  {
    title: "Soluciones adaptadas",
    description:
      "Cada proyecto es único. Analizamos cada caso y proponemos soluciones a medida, ya sea para una vivienda, un local o una comunidad.",
    icon: "🔧",
  },
];

// =============================================
// SECCIONES DEL FOOTER
// =============================================
export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "/empresa" },
      { label: "Valores", href: "/empresa#valores" },
      { label: "Trabajos", href: "/trabajos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Instalaciones eléctricas", href: "/servicios" },
      { label: "Reparaciones", href: "/servicios" },
      { label: "Aire acondicionado", href: "/servicios" },
      { label: "Placas solares", href: "/servicios" },
    ],
  },
  {
    title: "Contacto",
    links: [
      {
        label: CONTACT.phone,
        href: `tel:${CONTACT.phoneLink}`,
      },
      { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
      {
        label: "WhatsApp",
        href: `https://wa.me/${CONTACT.whatsappLink}`,
      },
      { label: "Formulario de contacto", href: "/contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Política de privacidad", href: "/politica-privacidad" },
      { label: "Política de cookies", href: "/politica-cookies" },
    ],
  },
];
