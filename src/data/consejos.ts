export type BlockType = "heading" | "paragraph" | "list" | "note";

export interface ArticleBlock {
  type: BlockType;
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  blocks: ArticleBlock[];
}

export const CONSEJOS: Article[] = [
  {
    slug: "cuando-revisar-instalacion-electrica",
    title: "¿Cuándo revisar una instalación eléctrica?",
    description:
      "Conoce los signos que indican que tu instalación eléctrica necesita una revisión profesional para evitar riesgos.",
    category: "Electricidad",
    date: "2026-05",
    blocks: [
      {
        type: "paragraph",
        text: "Las instalaciones eléctricas no duran para siempre. Con el paso del tiempo, los componentes se desgastan y pueden aparecer problemas que conviene detectar a tiempo.",
      },
      {
        type: "heading",
        text: "Señales de que tu instalación necesita revisión",
      },
      {
        type: "list",
        items: [
          "Luces que parpadean sin motivo aparente",
          "Plomos o diferenciales que saltan con frecuencia",
          "Enchufes o interruptores que calientan al usarlos",
          "Olor a quemado cerca de algún punto eléctrico",
          "Instalación con más de 20 años sin actualizar",
        ],
      },
      {
        type: "heading",
        text: "¿Cada cuánto revisar?",
      },
      {
        type: "paragraph",
        text: "Se recomienda una revisión general cada 5-10 años, aunque si detectas alguna de las señales anteriores, no esperes tanto. En caso de duda, lo mejor es contactar con un profesional.",
      },
      {
        type: "note",
        text: "Este contenido es informativo. Para cualquier intervención eléctrica, contacta siempre con un instalador autorizado.",
      },
    ],
  },
  {
    slug: "consejos-antes-instalar-placas-solares",
    title: "Consejos antes de instalar placas solares",
    description:
      "Aspectos clave a tener en cuenta si estás pensando en instalar energía solar fotovoltaica en tu vivienda o negocio.",
    category: "Energía solar",
    date: "2026-05",
    blocks: [
      {
        type: "paragraph",
        text: "La energía solar es una opción cada vez más popular para reducir el consumo eléctrico. Antes de decidirte, ten en cuenta estos aspectos.",
      },
      {
        type: "heading",
        text: "Factores a considerar",
      },
      {
        type: "list",
        items: [
          "Orientación y superficie disponible en el tejado",
          "Consumo eléctrico actual de tu vivienda o negocio",
          "Normativa urbanística de tu municipio",
          "Presupuesto y opciones de financiación",
        ],
      },
      {
        type: "heading",
        text: "¿Merece la pena?",
      },
      {
        type: "paragraph",
        text: "Depende de cada caso. Una instalación bien dimensionada puede reducir notablemente la factura eléctrica, pero es importante que un profesional evalúe tu situación concreta antes de decidir.",
      },
      {
        type: "note",
        text: "La viabilidad técnica y económica depende de cada proyecto. Solicita un estudio personalizado.",
      },
    ],
  },
  {
    slug: "como-detectar-problemas-electricos",
    title: "Cómo detectar problemas eléctricos en una vivienda",
    description:
      "Identifica a tiempo los síntomas más comunes de problemas eléctricos y actúa antes de que sea demasiado tarde.",
    category: "Electricidad",
    date: "2026-05",
    blocks: [
      {
        type: "paragraph",
        text: "Detectar a tiempo un problema eléctrico puede evitar averías mayores y garantizar la seguridad de tu hogar.",
      },
      {
        type: "heading",
        text: "Síntomas comunes",
      },
      {
        type: "list",
        items: [
          "Un interruptor o enchufe no funciona correctamente",
          "La luz de una habitación va y viene sin control",
          "Los electrodomésticos funcionan con menos potencia de la habitual",
          "El cuadro eléctrico emite un zumbido extraño",
        ],
      },
      {
        type: "heading",
        text: "Qué hacer si detectas algún problema",
      },
      {
        type: "paragraph",
        text: "Si observas cualquiera de estas señales, desconecta los aparatos afectados y contacta con un electricista profesional. No intentes manipular la instalación por tu cuenta.",
      },
      {
        type: "note",
        text: "No intentes reparar problemas eléctricos sin formación. La electricidad puede ser peligrosa.",
      },
    ],
  },
  {
    slug: "mantenimiento-basico-aire-acondicionado",
    title: "Mantenimiento básico del aire acondicionado",
    description:
      "Consejos sencillos para mantener tu equipo de climatización en buen estado y alargar su vida útil.",
    category: "Climatización",
    date: "2026-05",
    blocks: [
      {
        type: "paragraph",
        text: "Un mantenimiento adecuado del aire acondicionado mejora su rendimiento y alarga su vida útil. Aquí tienes algunas pautas básicas.",
      },
      {
        type: "heading",
        text: "Recomendaciones de mantenimiento",
      },
      {
        type: "list",
        items: [
          "Limpia o cambia los filtros cada temporada",
          "Revisa el estado de las rejillas y conductos",
          "Comprueba que no haya obstrucciones en la unidad exterior",
          "Vigila posibles fugas de agua o refrigerante",
        ],
      },
      {
        type: "heading",
        text: "¿Cuándo llamar a un profesional?",
      },
      {
        type: "paragraph",
        text: "Si el equipo no enfría correctamente, hace ruidos extraños o tiene pérdidas de agua, contacta con un técnico especializado. El mantenimiento profesional periódico es recomendable al menos una vez al año.",
      },
      {
        type: "note",
        text: "Algunas tareas requieren formación técnica. No fuerces el equipo si notas algo anormal.",
      },
    ],
  },
  {
    slug: "que-informacion-enviar-para-presupuesto",
    title: "Qué información enviar para pedir presupuesto eléctrico",
    description:
      "Prepara los datos clave para que podamos orientarte mejor y darte un presupuesto más ajustado a tu trabajo.",
    category: "Presupuesto",
    date: "2026-06",
    blocks: [
      {
        type: "paragraph",
        text: "Cuanta más información nos proporciones, más preciso podrá ser nuestro presupuesto. Aquí tienes una guía de los datos que ayudan a prepararlo.",
      },
      {
        type: "heading",
        text: "Información útil para el presupuesto",
      },
      {
        type: "list",
        items: [
          "Tipo de trabajo: instalación nueva, reparación, reforma, mantenimiento...",
          "Localidad: dónde se encuentra el inmueble",
          "Descripción: qué necesitas hacer, con el máximo detalle posible",
          "Urgencia: si es para una fecha concreta o requiere atención inmediata",
          "Fotos: si puedes, adjunta imágenes del lugar o del problema",
        ],
      },
      {
        type: "paragraph",
        text: "Puedes enviarnos esta información a través del formulario de contacto, por WhatsApp o por teléfono.",
      },
      {
        type: "note",
        text: "El presupuesto definitivo puede requerir una visita técnica para evaluar el trabajo in situ.",
      },
    ],
  },
];
