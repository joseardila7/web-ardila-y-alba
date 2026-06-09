// =============================================
// DATOS DE SERVICIOS
// =============================================
// Cada servicio tiene: título, descripción,
// icono, slug y categoría.
//
// NOTA: Esta lista es el catálogo inicial.
//       Más adelante se revisará para quitar
//       los servicios que no correspondan.
//
// PARA PERSONALIZAR:
// 1. Cambia title y description por los reales.
// 2. Sustituye los emojis por SVG si quieres.
// 3. Añade o quita servicios del array.
// 4. La web los mostrará automáticamente.
// =============================================

export interface Service {
  /** Título del servicio */
  title: string;
  /** Descripción profesional pero prudente */
  description: string;
  /** Icono visual (emoji o ruta a SVG) */
  icon: string;
  /** Slug para identificar el servicio (ej: en URL) */
  slug: string;
  /** Categoría para agrupar visualmente */
  category?: string;
  /** Si es true, aparece destacado en inicio */
  featured?: boolean;
}

export const SERVICES: Service[] = [
  // ══════════════════════════════════════════
  // SERVICIOS DESTACADOS (featured = true)
  // Se muestran en la página de inicio
  // ══════════════════════════════════════════
  {
    title: "Instalaciones eléctricas",
    description:
      "Instalaciones eléctricas completas para viviendas, locales, comunidades e industrias. Proyectos adaptados a la normativa vigente.",
    icon: "⚡",
    slug: "instalaciones-electricas",
    category: "Instalaciones eléctricas",
    featured: true,
  },
  {
    title: "Placas solares",
    description:
      "Instalación de sistemas de energía solar fotovoltaica para autoconsumo. Aprovecha la energía renovable y reduce tu factura eléctrica.",
    icon: "☀️",
    slug: "placas-solares",
    category: "Solar",
    featured: true,
  },
  {
    title: "Aire acondicionado",
    description:
      "Instalación y mantenimiento de sistemas de aire acondicionado. Climatización eficiente para hogares y locales comerciales.",
    icon: "❄️",
    slug: "aire-acondicionado",
    category: "Climatización",
    featured: true,
  },
  {
    title: "Mantenimiento eléctrico",
    description:
      "Revisión y mantenimiento periódico de instalaciones eléctricas para garantizar su correcto funcionamiento y seguridad.",
    icon: "🛠️",
    slug: "mantenimiento-electrico",
    category: "Instalaciones eléctricas",
    featured: true,
  },
  {
    title: "Bombas de pozo",
    description:
      "Instalación, reparación y mantenimiento de bombas de pozo y sistemas de bombeo para captación de agua.",
    icon: "💧",
    slug: "bombas-de-pozo",
    category: "Instalaciones",
    featured: true,
  },
  {
    title: "Reparaciones eléctricas",
    description:
      "Diagnóstico y reparación de averías eléctricas. Solucionamos problemas de forma rápida y segura, tanto en hogares como en negocios.",
    icon: "🔧",
    slug: "reparaciones-electricas",
    category: "Instalaciones eléctricas",
    featured: true,
  },

  // ══════════════════════════════════════════
  // RESTO DE SERVICIOS (no destacados)
  // ══════════════════════════════════════════
  {
    title: "Cuadros eléctricos",
    description:
      "Instalación, renovación y adecuación de cuadros eléctricos según normativa. Cuadros para viviendas, locales e industrias.",
    icon: "📊",
    slug: "cuadros-electricos",
    category: "Instalaciones eléctricas",
  },
  {
    title: "Boletines eléctricos y certificados",
    description:
      "Tramitación de boletines eléctricos (CIE) y certificados de instalación. Documentación necesaria para legalizar instalaciones.",
    icon: "📋",
    slug: "boletines-electricos",
    category: "Instalaciones eléctricas",
  },
  {
    title: "Instalaciones en viviendas",
    description:
      "Instalaciones eléctricas completas para viviendas unifamiliares y pisos. Desde obra nueva hasta reformas integrales.",
    icon: "🏠",
    slug: "instalaciones-viviendas",
    category: "Instalaciones eléctricas",
  },
  {
    title: "Instalaciones en locales y negocios",
    description:
      "Instalaciones eléctricas para locales comerciales, oficinas y negocios. Proyectos adaptados a la actividad del local.",
    icon: "🏪",
    slug: "instalaciones-locales",
    category: "Instalaciones eléctricas",
  },
  {
    title: "Instalaciones en comunidades",
    description:
      "Instalaciones y mantenimiento eléctrico para comunidades de vecinos. Zonas comunes, garajes, porteros automáticos y más.",
    icon: "🏢",
    slug: "instalaciones-comunidades",
    category: "Instalaciones eléctricas",
  },
  {
    title: "Climatización",
    description:
      "Soluciones de climatización para todo tipo de espacios. Sistemas eficientes adaptados a cada necesidad.",
    icon: "🌡️",
    slug: "climatizacion",
    category: "Climatización",
  },
  {
    title: "Iluminación LED",
    description:
      "Instalación de sistemas de iluminación LED para hogares, comercios y espacios exteriores. Ahorro energético y mayor durabilidad.",
    icon: "💡",
    slug: "iluminacion-led",
    category: "Iluminación y automatismos",
  },
  {
    title: "Automatismos",
    description:
      "Instalación de automatismos para puertas, persianas, toldos y cancelas. Mayor comodidad y control en tu hogar o negocio.",
    icon: "⚙️",
    slug: "automatismos",
    category: "Iluminación y automatismos",
  },
  {
    title: "Porteros automáticos y videoporteros",
    description:
      "Instalación de porteros automáticos y videoporteros para viviendas y comunidades. Sistemas actuales con audio y vídeo.",
    icon: "📹",
    slug: "porteros-automaticos",
    category: "Telecomunicaciones y domótica",
  },
  {
    title: "Telecomunicaciones",
    description:
      "Instalación de infraestructuras de telecomunicaciones en viviendas y edificios. Antenas, fibra óptica y redes de datos.",
    icon: "📡",
    slug: "telecomunicaciones",
    category: "Telecomunicaciones y domótica",
  },
  {
    title: "Domótica",
    description:
      "Instalación de sistemas de domótica para la automatización y control inteligente del hogar: iluminación, climatización, seguridad y más.",
    icon: "🤖",
    slug: "domotica",
    category: "Telecomunicaciones y domótica",
  },
  {
    title: "Reformas eléctricas",
    description:
      "Renovación de instalaciones eléctricas antiguas. Actualizamos tu cuadro, cableado y mecanismos para cumplir la normativa actual.",
    icon: "🔨",
    slug: "reformas-electricas",
    category: "Instalaciones eléctricas",
  },
  {
    title: "Averías eléctricas",
    description:
      "Asistencia para averías eléctricas: cortocircuitos, saltos del diferencial, apagones parciales y otras incidencias. Consulta disponibilidad para urgencias.",
    icon: "⚠️",
    slug: "averias-electricas",
    category: "Instalaciones eléctricas",
  },
];
