export interface Sector {
  title: string;
  description: string;
  icon: string;
  services: string[];
}

export const SECTORS: Sector[] = [
  {
    title: "Particulares",
    description:
      "Soluciones eléctricas para viviendas unifamiliares, pisos y chalets. Realizamos instalaciones completas, reparaciones, reformas y mejoras para hacer tu hogar más seguro y eficiente.",
    icon: "🏠",
    services: [
      "Instalaciones eléctricas",
      "Reparaciones y averías",
      "Aire acondicionado",
      "Iluminación LED",
      "Placas solares",
    ],
  },
  {
    title: "Empresas",
    description:
      "Instalaciones eléctricas profesionales para oficinas, naves industriales y centros de trabajo. Proyectos adaptados a la actividad de cada negocio, cumpliendo la normativa vigente.",
    icon: "🏭",
    services: [
      "Instalaciones eléctricas",
      "Mantenimiento eléctrico",
      "Cuadros eléctricos",
      "Iluminación eficiente",
      "Climatización",
    ],
  },
  {
    title: "Locales comerciales",
    description:
      "Instalaciones para tiendas, restaurantes, bares y todo tipo de comercios. Proyectamos la instalación según las necesidades del negocio, con atención a la normativa sectorial.",
    icon: "🏪",
    services: [
      "Instalaciones eléctricas",
      "Aire acondicionado",
      "Iluminación comercial",
      "Reformas eléctricas",
      "Telecomunicaciones",
    ],
  },
  {
    title: "Comunidades de vecinos",
    description:
      "Instalaciones y mantenimiento eléctrico para comunidades. Zonas comunes, garajes, porteros automáticos, videoporteros e infraestructuras de telecomunicaciones.",
    icon: "🏢",
    services: [
      "Mantenimiento de zonas comunes",
      "Porteros y videoporteros",
      "Telecomunicaciones",
      "Iluminación LED",
      "Reformas eléctricas",
    ],
  },
  {
    title: "Fincas y entornos rurales",
    description:
      "Instalaciones para fincas, cortijos y explotaciones agrícolas. Soluciones de bombeo de agua, sistemas eléctricos para riego y edificaciones rurales.",
    icon: "🌳",
    services: [
      "Bombas de pozo",
      "Instalaciones eléctricas",
      "Cuadros eléctricos",
      "Automatismos",
    ],
  },
  {
    title: "Naves e instalaciones técnicas",
    description:
      "Instalaciones para naves industriales, almacenes y centros logísticos. Proyectos que cumplen con la normativa de seguridad industrial y eléctrica.",
    icon: "🏗️",
    services: [
      "Instalaciones eléctricas",
      "Cuadros eléctricos",
      "Mantenimiento",
      "Climatización industrial",
      "Iluminación de alto rendimiento",
    ],
  },
];
