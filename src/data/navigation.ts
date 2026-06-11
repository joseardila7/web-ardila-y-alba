export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sectores", href: "/sectores" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Empresa", href: "/empresa" },
  { label: "Consejos", href: "/consejos" },
  { label: "Contacto", href: "/contacto" },
];
