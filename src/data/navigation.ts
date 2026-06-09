// =============================================
// DATOS DE NAVEGACIÓN PRINCIPAL
// =============================================
// Aquí defines los enlaces del menú superior.
// Para añadir o modificar páginas, solo tienes
// que editar este array. El Header lo leerá
// automáticamente.
// =============================================

export interface NavLink {
  /** Texto visible del enlace */
  label: string;
  /** Ruta de la página (ej: "/servicios") */
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Empresa", href: "/empresa" },
  { label: "Contacto", href: "/contacto" },
];
