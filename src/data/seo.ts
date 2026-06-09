// =============================================
// DATOS SEO — Metadatos por página
// =============================================
// Archivo central para:
//   - Datos de negocio local (Schema.org)
//   - Metadatos SEO de cada página
//   - Open Graph
//
// CÓMO EDITAR:
//   1. LOCAL_DATA → datos del negocio para buscadores
//   2. SEO_PAGES  → title y description de cada página
//
// CADA PÁGINA DEBE TENER:
//   - title:    Máx. 60 caracteres
//   - description: Máx. 160 caracteres
// =============================================

// =============================================
// DATOS DE NEGOCIO LOCAL (Schema.org)
// =============================================
export const LOCAL_DATA = {
  /** Tipo de negocio en Schema.org (Electrician, LocalBusiness...) */
  businessType: "Electrician",
  /** Ciudad principal donde opera */
  city: "Villanueva del Trabuco",
  /** Provincia */
  province: "Málaga",
  /** Código postal */
  postalCode: "29300",
  /** País (código ISO 3166-1 alpha-2) */
  country: "ES",
  /** Moneda (EUR, USD...) */
  currency: "EUR",
  /** Rango de precios */
  priceRange: "€€",
  /** URL del sitio web. Cambiar cuando el dominio esté confirmado. */
  siteUrl: "https://ejemplo.com",
  /** Ruta de la imagen para Open Graph (1200×630px) */
  ogImage: "/images/og-image.jpg",
  /** Nombre de la empresa para Schema.org */
  businessName: "Ardila y Alba Instalaciones S.L.",
} as const;

// =============================================
// METADATOS SEO POR PÁGINA
// =============================================
// Para editar el SEO de una página concreta,
// cambia el title o description aquí o directamente
// en el <Layout> de cada página.
//
// Estos son los valores por defecto si no se
// especifica otro en la página.
// =============================================

export interface SeoPage {
  title: string;
  description: string;
}

export const SEO_PAGES: Record<string, SeoPage> = {
  index: {
    title: "Inicio — Instalaciones eléctricas en Villanueva del Trabuco",
    description:
      "Ardila y Alba Instalaciones S.L. Empresa de instalaciones eléctricas, placas solares, aire acondicionado y mantenimiento en Villanueva del Trabuco y Málaga.",
  },
  servicios: {
    title: "Servicios — Instalaciones eléctricas y climatización",
    description:
      "Servicios profesionales de instalaciones eléctricas, reparaciones, mantenimiento, placas solares, aire acondicionado y más en Villanueva del Trabuco y Málaga.",
  },
  trabajos: {
    title: "Trabajos realizados — Galería de proyectos",
    description:
      "Conoce algunos de nuestros trabajos. Próximamente con imágenes reales de instalaciones eléctricas, climatización y energía solar.",
  },
  empresa: {
    title: "Sobre nosotros — Ardila y Alba Instalaciones",
    description:
      "Empresa de instalaciones eléctricas en Villanueva del Trabuco (Málaga). Conoce nuestros valores: profesionalidad, cercanía, compromiso y seguridad.",
  },
  contacto: {
    title: "Contacto — Solicita presupuesto sin compromiso",
    description:
      "Contacta con Ardila y Alba Instalaciones por teléfono, WhatsApp o email. Solicita presupuesto sin compromiso para instalaciones eléctricas en Málaga.",
  },
} as const;
