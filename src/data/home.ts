export const HERO = {
  badge: "Instalaciones eléctricas y servicios técnicos",
  title: "Ardila y Alba Instalaciones",
  subtitle:
    "Soluciones profesionales para instalaciones, mantenimiento y reparaciones eléctricas en Villanueva del Trabuco y Málaga.",
} as const;

export const HOME_SERVICES = {
  title: "Nuestros servicios",
  subtitle:
    "Ofrecemos soluciones profesionales en instalaciones eléctricas, climatización, energía solar y servicios técnicos relacionados.",
  linkText: "Ver todos los servicios",
} as const;

export const HOME_SOLUTIONS = {
  title: "Soluciones para cada necesidad",
  subtitle:
    "Trabajamos con particulares, empresas y comunidades para ofrecer soluciones eléctricas y técnicas adaptadas a cada tipo de proyecto.",
  items: [
    {
      title: "Particulares",
      description:
        "Instalaciones, reparaciones y mejoras para tu hogar. Desde una avería hasta una instalación completa.",
      icon: "🏠",
      href: "/sectores#particulares",
    },
    {
      title: "Empresas y comercios",
      description:
        "Instalaciones profesionales para negocios, oficinas y naves. Proyectos adaptados a la actividad de tu empresa.",
      icon: "🏢",
      href: "/sectores#empresas",
    },
    {
      title: "Comunidades",
      description:
        "Mantenimiento de zonas comunes, porteros automáticos, telecomunicaciones y reformas para comunidades de vecinos.",
      icon: "🏘️",
      href: "/sectores#comunidades-de-vecinos",
    },
  ],
} as const;

export const HOME_PROCESS = {
  title: "Cómo trabajamos",
  subtitle:
    "Un proceso claro y transparente para que sepas en todo momento qué esperar.",
  steps: [
    {
      step: "01",
      title: "Contacto inicial",
      description:
        "Nos cuentas qué necesitas por teléfono, WhatsApp o el formulario de contacto.",
    },
    {
      step: "02",
      title: "Revisión del trabajo",
      description:
        "Valoramos el alcance del proyecto y, si es necesario, visitamos el lugar.",
    },
    {
      step: "03",
      title: "Presupuesto",
      description:
        "Te enviamos un presupuesto claro y sin compromiso con las soluciones propuestas.",
    },
    {
      step: "04",
      title: "Ejecución",
      description:
        "Realizamos el trabajo con profesionalidad, cumpliendo plazos y normativa.",
    },
    {
      step: "05",
      title: "Seguimiento",
      description:
        "Nos aseguramos de que todo funcione correctamente y quedamos a tu disposición.",
    },
  ],
} as const;

export const HOME_STRATEGIC = {
  title: "Servicios especializados",
  subtitle:
    "Áreas clave en las que ofrecemos soluciones técnicas adaptadas a las necesidades de cada cliente.",
  items: [
    {
      title: "Instalaciones eléctricas",
      description:
        "Instalaciones completas para viviendas, locales y comunidades.",
      icon: "⚡",
      href: "/servicios",
    },
    {
      title: "Mantenimiento eléctrico",
      description:
        "Revisión periódica para garantizar el correcto funcionamiento de tus instalaciones.",
      icon: "🛠️",
      href: "/mantenimiento",
    },
    {
      title: "Placas solares",
      description:
        "Energía solar fotovoltaica para autoconsumo en viviendas y negocios.",
      icon: "☀️",
      href: "/energia-solar",
    },
    {
      title: "Climatización",
      description:
        "Instalación y mantenimiento de sistemas de aire acondicionado y climatización.",
      icon: "❄️",
      href: "/climatizacion",
    },
    {
      title: "Bombas de pozo",
      description:
        "Instalación y reparación de sistemas de bombeo para captación de agua.",
      icon: "💧",
      href: "/servicios",
    },
    {
      title: "Averías eléctricas",
      description:
        "Diagnóstico y reparación de averías. Consulta disponibilidad para urgencias.",
      icon: "⚠️",
      href: "/servicios",
    },
  ],
} as const;

export const HOME_TRUST = {
  title: "Por qué confiar en nosotros",
  subtitle:
    "Trabajamos con seriedad, transparencia y compromiso en cada proyecto.",
  items: [
    {
      title: "Atención profesional",
      description:
        "Trato directo y personalizado. Escuchamos tus necesidades y te ofrecemos la mejor solución.",
      icon: "👔",
    },
    {
      title: "Soluciones adaptadas",
      description:
        "Cada proyecto es único. Analizamos tu caso y proponemos soluciones a medida.",
      icon: "🎯",
    },
    {
      title: "Trabajo seguro",
      description:
        "Todas las intervenciones se realizan cumpliendo la normativa de seguridad y reglamentación del sector.",
      icon: "🛡️",
    },
    {
      title: "Experiencia en el sector",
      description:
        "Conocimiento y experiencia en instalaciones eléctricas y servicios técnicos para todo tipo de clientes.",
      icon: "🔧",
    },
  ],
} as const;

export const HOME_ZONE = {
  title: "Zona de actuación",
  subtitle:
    "Trabajamos en Villanueva del Trabuco, alrededores y distintos puntos de la provincia de Málaga según el tipo de trabajo.",
} as const;

export const HOME_CTA = {
  title: "¿Necesitas un presupuesto?",
  subtitle:
    "Cuéntanos qué necesitas y te orientaremos sin compromiso. También puedes llamarnos o escribirnos por WhatsApp.",
} as const;
