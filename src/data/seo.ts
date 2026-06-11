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
      "Ardila y Alba Instalaciones S.L. Empresa de instalaciones eléctricas, placas solares, aire acondicionado y mantenimiento en Villanueva del Trabuco y Málaga. Solicita presupuesto sin compromiso.",
  },
  servicios: {
    title: "Servicios — Instalaciones eléctricas y climatización",
    description:
      "Servicios profesionales de instalaciones eléctricas, reparaciones, mantenimiento, placas solares, aire acondicionado y más. Solicita presupuesto sin compromiso en Villanueva del Trabuco y Málaga.",
  },
  trabajos: {
    title: "Trabajos realizados — Galería de proyectos",
    description:
      "Conoce algunos de nuestros trabajos en instalaciones eléctricas, climatización y energía solar. Contacta para presupuesto sin compromiso en Málaga.",
  },
  empresa: {
    title: "Sobre nosotros — Ardila y Alba Instalaciones",
    description:
      "Empresa de instalaciones eléctricas en Villanueva del Trabuco (Málaga). Conoce nuestros valores: profesionalidad, cercanía, compromiso y seguridad. Solicita presupuesto.",
  },
  contacto: {
    title: "Contacto — Solicita presupuesto sin compromiso",
    description:
      "Contacta con Ardila y Alba Instalaciones por teléfono, WhatsApp o email. Solicita presupuesto sin compromiso para instalaciones eléctricas en Villanueva del Trabuco y Málaga.",
  },
  "aviso-legal": {
    title: "Aviso legal — Ardila y Alba Instalaciones",
    description:
      "Aviso legal del sitio web de Ardila y Alba Instalaciones S.L. Información sobre condiciones de uso y datos identificativos.",
  },
  "politica-privacidad": {
    title: "Política de privacidad — Ardila y Alba Instalaciones",
    description:
      "Política de privacidad del sitio web de Ardila y Alba Instalaciones S.L. Información sobre el tratamiento de datos personales.",
  },
  "politica-cookies": {
    title: "Política de cookies — Ardila y Alba Instalaciones",
    description:
      "Política de cookies del sitio web de Ardila y Alba Instalaciones S.L. Información sobre el uso de cookies.",
  },
  gracias: {
    title: "Mensaje enviado — Gracias",
    description:
      "Gracias por contactar con Ardila y Alba Instalaciones. Hemos recibido tu mensaje y te responderemos lo antes posible.",
  },
  presupuesto: {
    title: "Presupuesto — Solicita presupuesto sin compromiso",
    description:
      "Solicita presupuesto sin compromiso para instalaciones eléctricas, climatización, placas solares y más en Villanueva del Trabuco y Málaga.",
  },
  sectores: {
    title: "Sectores — Soluciones para particulares, empresas y comunidades",
    description:
      "Soluciones profesionales adaptadas a cada sector: particulares, empresas, comunidades, locales comerciales y naves en Málaga.",
  },
  "preguntas-frecuentes": {
    title: "Preguntas frecuentes — Resuelve tus dudas",
    description:
      "Respuestas a las preguntas más frecuentes sobre instalaciones eléctricas, presupuestos, climatización y servicios en Villanueva del Trabuco.",
  },
  consejos: {
    title: "Consejos y artículos — Información útil",
    description:
      "Artículos y consejos sobre instalaciones eléctricas, climatización, energía solar y mantenimiento para hogares y negocios.",
  },
  "energia-solar": {
    title: "Energía solar — Instalación de placas solares",
    description:
      "Instalación de placas solares y sistemas de energía solar fotovoltaica para autoconsumo en viviendas y negocios en Málaga.",
  },
  climatizacion: {
    title: "Climatización — Aire acondicionado y climatización",
    description:
      "Instalación y mantenimiento de sistemas de climatización y aire acondicionado para hogares, locales y oficinas en Málaga.",
  },
  mantenimiento: {
    title: "Mantenimiento eléctrico — Revisiones periódicas",
    description:
      "Revisión y mantenimiento periódico de instalaciones eléctricas para garantizar su seguridad y correcto funcionamiento en Málaga.",
  },
} as const;
