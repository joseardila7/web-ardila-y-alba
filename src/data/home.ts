// =============================================
// CONTENIDO DE LA PÁGINA DE INICIO
// =============================================
// Todos los textos editables de la portada.
// Los componentes de la página index.astro
// consumen estos datos.
//
// CÓMO EDITAR:
//   Cambia los valores de este archivo y la
//   página de inicio se actualizará sola.
//   No toques los componentes a menos que
//   quieras cambiar la estructura visual.
// =============================================

// =============================================
// HERO (Portada principal)
// =============================================
export const HERO = {
  /** Etiqueta que aparece sobre el título */
  badge: "Instalaciones eléctricas y servicios técnicos",
  /** Título principal (se renderiza como <h1>) */
  title: "Ardila y Alba Instalaciones",
  /** Subtítulo debajo del título */
  subtitle:
    "Soluciones profesionales para instalaciones, mantenimiento y reparaciones eléctricas en Villanueva del Trabuco y Málaga.",
} as const;

// =============================================
// SECCIÓN: SERVICIOS DESTACADOS
// =============================================
export const HOME_SERVICES = {
  title: "Nuestros servicios",
  subtitle:
    "Ofrecemos soluciones profesionales en instalaciones eléctricas, climatización, energía solar y servicios técnicos relacionados.",
  linkText: "Ver todos los servicios",
} as const;

// =============================================
// SECCIÓN: POR QUÉ ELEGIRNOS
// =============================================
export const HOME_WHY_US = {
  title: "¿Por qué elegirnos?",
  subtitle:
    "Atención cercana, trabajo profesional y soluciones adaptadas a cada proyecto. La confianza de nuestros clientes es nuestra mejor carta de presentación.",
} as const;

// =============================================
// SECCIÓN: TRABAJOS DESTACADOS
// =============================================
export const HOME_WORKS = {
  title: "Algunos de nuestros trabajos",
  subtitle:
    "Próximamente podrás ver aquí imágenes reales de nuestros proyectos. Estamos preparando la galería con fotos de nuestras instalaciones.",
  linkText: "Ver más trabajos",
  /** Número de placeholders a mostrar en inicio */
  galleryCount: 6,
  /** Columnas en escritorio */
  galleryColumns: 3,
} as const;

// =============================================
// ZONA DE ACTUACIÓN
// =============================================
export const HOME_ZONE = {
  title: "Zona de actuación",
  subtitle:
    "Trabajamos en Villanueva del Trabuco, alrededores y distintos puntos de la provincia de Málaga según el tipo de trabajo.",
} as const;
