// =============================================
// DATOS DE GALERÍA / TRABAJOS
// =============================================
// Archivo para gestionar la galería de
// trabajos y sus categorías.
//
// CÓMO EDITAR:
//   1. Categorías → cambia GALLERY_CATEGORIES
//   2. Trabajos   → completa GALLERY_ITEMS
//
// CÓMO AÑADIR UN TRABAJO NUEVO:
//   1. Coloca la foto en public/images/trabajos/
//   2. Añade un objeto a GALLERY_ITEMS
//   3. Asigna category, title, description y alt
// =============================================

// =============================================
// CATEGORÍAS
// =============================================
export const GALLERY_CATEGORIES = [
  "Todos",
  "Instalaciones eléctricas",
  "Placas solares",
  "Climatización",
  "Bombas de pozo",
  "Mantenimiento",
] as const;

// =============================================
// INTERFAZ DE CADA TRABAJO
// =============================================
export interface GalleryItem {
  /** Identificador único */
  id: string;
  /** Título del trabajo (ej: "Instalación eléctrica en vivienda") */
  title: string;
  /** Categoría (debe coincidir con GALLERY_CATEGORIES) */
  category: string;
  /** Descripción breve del trabajo realizado */
  description: string;
  /**
   * Ruta de la imagen real.
   * Cuando tengas fotos, colócalas en public/images/trabajos/
   * y escribe aquí la ruta (ej: "/images/trabajos/obra-1.jpg")
   */
  image: string;
  /** Texto alternativo para accesibilidad y SEO */
  alt: string;
  /** Si está pendiente de foto real */
  isPlaceholder: boolean;
}

// =============================================
// LISTA DE TRABAJOS (placeholders)
// =============================================
// ANTES DE PUBLICAR:
//   Sustituye estos placeholders por trabajos
//   reales con fotos y descripciones.
//   Cambia isPlaceholder a false cuando
//   tengas la imagen real y la ruta correcta.
// =============================================
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "trabajo-1",
    title: "Instalación eléctrica — pendiente de foto",
    category: "Instalaciones eléctricas",
    description:
      "Foto pendiente — Instalación eléctrica completa realizada. La imagen se añadirá próximamente.",
    image: "",
    alt: "Fotografía pendiente de una instalación eléctrica",
    isPlaceholder: true,
  },
  {
    id: "trabajo-2",
    title: "Placas solares — pendiente de foto",
    category: "Placas solares",
    description:
      "Foto pendiente — Instalación de paneles solares. La imagen se añadirá próximamente.",
    image: "",
    alt: "Fotografía pendiente de una instalación de placas solares",
    isPlaceholder: true,
  },
  {
    id: "trabajo-3",
    title: "Climatización — pendiente de foto",
    category: "Climatización",
    description:
      "Foto pendiente — Instalación de aire acondicionado. La imagen se añadirá próximamente.",
    image: "",
    alt: "Fotografía pendiente de una instalación de climatización",
    isPlaceholder: true,
  },
  {
    id: "trabajo-4",
    title: "Bomba de pozo — pendiente de foto",
    category: "Bombas de pozo",
    description:
      "Foto pendiente — Instalación de bomba de pozo. La imagen se añadirá próximamente.",
    image: "",
    alt: "Fotografía pendiente de una instalación de bomba de pozo",
    isPlaceholder: true,
  },
  {
    id: "trabajo-5",
    title: "Mantenimiento eléctrico — pendiente de foto",
    category: "Mantenimiento",
    description:
      "Foto pendiente — Trabajo de mantenimiento eléctrico realizado. La imagen se añadirá próximamente.",
    image: "",
    alt: "Fotografía pendiente de un trabajo de mantenimiento eléctrico",
    isPlaceholder: true,
  },
  {
    id: "trabajo-6",
    title: "Instalación eléctrica — pendiente de foto",
    category: "Instalaciones eléctricas",
    description:
      "Foto pendiente — Instalación eléctrica en vivienda. La imagen se añadirá próximamente.",
    image: "",
    alt: "Fotografía pendiente de una instalación eléctrica en vivienda",
    isPlaceholder: true,
  },
  {
    id: "trabajo-7",
    title: "Placas solares — pendiente de foto",
    category: "Placas solares",
    description:
      "Foto pendiente — Instalación de energía solar. La imagen se añadirá próximamente.",
    image: "",
    alt: "Fotografía pendiente de instalación solar",
    isPlaceholder: true,
  },
  {
    id: "trabajo-8",
    title: "Climatización — pendiente de foto",
    category: "Climatización",
    description:
      "Foto pendiente — Sistema de climatización instalado. La imagen se añadirá próximamente.",
    image: "",
    alt: "Fotografía pendiente de sistema de climatización",
    isPlaceholder: true,
  },
  {
    id: "trabajo-9",
    title: "Mantenimiento — pendiente de foto",
    category: "Mantenimiento",
    description:
      "Foto pendiente — Revisión de mantenimiento eléctrico. La imagen se añadirá próximamente.",
    image: "",
    alt: "Fotografía pendiente de revisión de mantenimiento eléctrico",
    isPlaceholder: true,
  },
];
