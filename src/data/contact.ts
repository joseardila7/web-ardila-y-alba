// =============================================
// DATOS DE CONTACTO
// =============================================
// Archivo para toda la información de contacto
// de la empresa: teléfono, WhatsApp, email,
// dirección, horario, redes sociales y zona
// de actuación.
//
// CÓMO EDITAR:
//   Sustituye los valores provisionales por
//   los datos reales de la empresa.
//   No dejes campos vacíos; pon "Pendiente"
//   si aún no tienes el dato.
// =============================================

// =============================================
// TELÉFONO, EMAIL Y DIRECCIÓN
// =============================================
export const CONTACT = {
  /** Teléfono visible en la web */
  phone: "656 183 884",
  /** Teléfono con código internacional para enlace */
  phoneLink: "+34656183884",
  /** Número de WhatsApp visible */
  whatsapp: "656 183 884",
  /** WhatsApp con código internacional para enlace */
  whatsappLink: "+34656183884",
  /**
   * Mensaje predefinido al abrir WhatsApp.
   * Para cambiarlo: edita este texto manteniendo el encodeURIComponent
   * en los enlaces wa.me de Hero.astro, contacto.astro, etc.
   */
  whatsappMessage:
    "Hola, he visto vuestra web y me gustaría solicitar información sobre un trabajo.",
  /** Correo electrónico */
  email: "ardilayalba_instalaciones@hotmail.com",
  /**
   * Dirección física completa.
   * Formato: calle, número, localidad, provincia.
   * Si cambias la ubicación, actualiza también COORDINATES y LOCAL_DATA en seo.ts.
   */
  address: "Polígono P. Emp. El Polear, Vial 3, 51, Villanueva del Trabuco, Málaga",
  /** URL de Google Maps (basada en coordenadas) */
  mapUrl: "https://maps.google.com/?q=37.060320,-4.326985",
  /** Etiqueta del botón de llamada */
  callLabel: "Llama ahora",
  /** Etiqueta del botón de WhatsApp */
  whatsappLabel: "Escríbenos",
  /** Etiqueta del botón principal de contacto */
  quoteLabel: "Contactar",
} as const;

// =============================================
// COORDENADAS (para mapa y datos estructurados)
// =============================================
export const COORDINATES = {
  lat: 37.060320,
  lng: -4.326985,
} as const;

// =============================================
// HORARIO (pendiente de confirmar)
// =============================================
export const SCHEDULE = {
  title: "Horario",
  details: [
    "Pendiente de confirmar — consultar disponibilidad para trabajos urgentes.",
  ],
} as const;

// =============================================
// REDES SOCIALES (pendientes de confirmar)
// =============================================
export const SOCIAL = {
  facebook: "#",
  instagram: "#",
  linkedin: "#",
} as const;

// =============================================
// ZONA DE ACTUACIÓN
// =============================================
export const ZONE = {
  title: "Zona de actuación",
  description:
    "Trabajamos en Villanueva del Trabuco, alrededores y distintos puntos de la provincia de Málaga según el tipo de trabajo.",
  areas: [
    "Villanueva del Trabuco",
    "Alrededores y comarca",
    "Provincia de Málaga",
  ],
} as const;

// =============================================
// TIPOS DE SERVICIO (para el formulario)
// =============================================
// Revisar más adelante para quitar servicios que no correspondan.
export const SERVICE_TYPES = [
  "Selecciona un servicio",
  "Instalaciones eléctricas",
  "Reparaciones eléctricas",
  "Mantenimiento eléctrico",
  "Aire acondicionado / Climatización",
  "Placas solares",
  "Bombas de pozo",
  "Iluminación y automatismos",
  "Telecomunicaciones y domótica",
  "Reformas eléctricas",
  "Otros",
] as const;
