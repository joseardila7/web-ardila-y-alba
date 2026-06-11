# Ardila y Alba Instalaciones S.L. — Web Corporativa

Web profesional para una empresa de instalaciones eléctricas, climatización y servicios técnicos, ubicada en Villanueva del Trabuco (Málaga).

## Tecnología utilizada

- **[Astro](https://astro.build) v6** — Framework estático (genera HTML, cero JavaScript por defecto)
- **[Tailwind CSS](https://tailwindcss.com) v4** — Estilos utilitarios con tema personalizado
- **TypeScript** — Tipado en componentes y archivos de datos
- **Sin framework JS** — No se usa React, Vue ni Svelte (máximo rendimiento)

## Estructura del proyecto

```
ardila-alba-web/
├── public/                      # Archivos estáticos (se copian tal cual al build)
│   ├── favicon.ico              # Favicon — sustituir por el logo real
│   ├── favicon.svg              # Favicon SVG
│   ├── robots.txt               # Configuración para buscadores
│   ├── sitemap.xml              # Mapa del sitio para SEO
│   └── images/                  # Aquí van las imágenes (logo, trabajos, etc.)
│       └── logo.svg             # Logo real (cuando lo tengas)
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── Button.astro         # Botón con variantes (primary, accent, outline)
│   │   ├── ContactForm.astro    # Formulario de contacto con Formspree
│   │   ├── CTABanner.astro      # Banner de llamada a la acción reutilizable
│   │   ├── Footer.astro         # Pie de página (5 columnas)
│   │   ├── GalleryPlaceholder.astro # Placeholders para galería de trabajos
│   │   ├── Header.astro         # Barra de navegación principal
│   │   ├── Hero.astro           # Portada principal
│   │   ├── MapPlaceholder.astro # Placeholder para mapa
│   │   ├── SectionTitle.astro   # Título de sección reutilizable
│   │   ├── SEO.astro            # Datos estructurados JSON-LD (Schema.org)
│   │   ├── ServiceCard.astro    # Tarjeta de servicio
│   │   ├── RelatedServices.astro # Grid de servicios relacionados
│   │   ├── Breadcrumbs.astro     # Navegación en ruta de detalle
│   │   └── ValuesBlock.astro    # Bloque de valores de empresa
│   ├── data/                    # Datos centralizados de la empresa
│   │   ├── company.ts           # Nombre, logo, valores, secciones del footer
│   │   ├── contact.ts           # Teléfono, email, dirección, horario, zona
│   │   ├── services.ts          # Listado de servicios ofrecidos (19 servicios)
│   │   ├── home.ts              # Textos de la página de inicio (hero, secciones)
│   │   ├── gallery.ts           # Galería de trabajos y categorías
│   │   ├── seo.ts               # SEO local (Schema.org) y metadatos por página
│   │   ├── navigation.ts        # Enlaces del menú de navegación
│   │   ├── sectors.ts           # Sectores de clientes (particulares, empresas, etc.)
│   │   ├── faqs.ts              # Preguntas frecuentes
│   │   ├── consejos.ts          # Artículos del blog/consejos
│   │   └── budget.ts            # Contenido de la página de presupuesto
│   ├── layouts/                 # Plantillas de página
│   │   └── Layout.astro         # Layout principal con SEO, header y footer
│   ├── pages/                   # Páginas del sitio (cada .astro = una ruta)
│   │   ├── index.astro          # Inicio
│   │   ├── servicios.astro      # Servicios (con categorías)
│   │   ├── servicios/
│   │   │   └── [slug].astro     # Detalle de servicio individual (19 páginas)
│   │   ├── sectores.astro       # Sectores de clientes
│   │   ├── presupuesto.astro    # Solicitar presupuesto
│   │   ├── preguntas-frecuentes.astro # FAQ
│   │   ├── consejos/
│   │   │   ├── index.astro      # Listado de artículos
│   │   │   └── [slug].astro     # Artículo individual
│   │   ├── energia-solar.astro  # Página específica de energía solar
│   │   ├── climatizacion.astro  # Página específica de climatización
│   │   ├── mantenimiento.astro  # Página específica de mantenimiento
│   │   ├── trabajos.astro       # Galería de trabajos
│   │   ├── empresa.astro        # Sobre nosotros
│   │   ├── contacto.astro       # Contacto con formulario
│   │   ├── gracias.astro        # Confirmación de envío
│   │   ├── aviso-legal.astro
│   │   ├── politica-privacidad.astro
│   │   └── politica-cookies.astro
│   └── styles/                  # Estilos globales
│       └── global.css           # Colores de marca, Tailwind, animaciones
├── .env.example                 # Ejemplo de variables de entorno
├── astro.config.mjs             # Configuración de Astro
├── package.json                 # Dependencias y scripts
├── tsconfig.json                # Configuración de TypeScript
└── README.md                    # Este archivo
```

## Cómo empezar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en local

```bash
npm run dev
```

Esto abre el servidor de desarrollo en `http://localhost:4321`.

### 3. Generar versión de producción

```bash
npm run build
```

Los archivos generados se guardan en la carpeta `dist/`.

### 4. Previsualizar el build

```bash
npm run preview
```

## Estado actual de los datos

### Datos reales introducidos ✓

| Dato | Valor | Archivo |
|------|-------|---------|
| Razón social | Ardila y Alba Instalaciones S.L. | `company.ts` |
| Nombre comercial | Ardila y Alba Instalaciones | `company.ts` |
| Tipo de empresa | Instalaciones eléctricas y servicios técnicos | `company.ts` |
| Localidad | Villanueva del Trabuco (Málaga) | `seo.ts` |
| Provincia | Málaga | `seo.ts` |
| Teléfono | 656 183 884 | `contact.ts` |
| WhatsApp | 656 183 884 | `contact.ts` |
| Email | ardilayalba_instalaciones@hotmail.com | `contact.ts` |
| Dirección | Polígono P. Emp. El Polear, Vial 3, 51, Villanueva del Trabuco, Málaga | `contact.ts` |
| Coordenadas | 37.060320, -4.326985 | `contact.ts` |
| Zona de trabajo | Villanueva del Trabuco, alrededores, Málaga | `contact.ts` |
| Mensaje WhatsApp | "Hola, he visto vuestra web..." | `contact.ts` |
| Valores empresa | 5 valores con descripciones reales | `company.ts` |
| Servicios | 19 servicios (6 destacados) | `services.ts` |
| Categorías galería | 5 categorías reales | `gallery.ts` |

### Datos pendientes de confirmar ⏳

| Dato | Dónde se añadirá |
|------|-----------------|
| Logo real en buena calidad | `public/images/logo.svg` + `company.ts` → `LOGO` |
| Fotos reales de trabajos | `public/images/trabajos/` + `gallery.ts` |
| Fotos de nave/vehículos | `public/images/` |
| Horario de atención | `contact.ts` → `SCHEDULE.details` |
| Dominio definitivo | `astro.config.mjs` + `seo.ts` + `sitemap.xml` + `robots.txt` |
| Páginas legales | Crear aviso legal, privacidad, cookies |
| Redes sociales | `contact.ts` → `SOCIAL` |
| Conexión formulario | Conectado — Formspree (fetch + fallback HTML nativo) |
| Página de presupuesto | Creada — enlaza al formulario de contacto y ofrece datos recomendados |
| Página de sectores | Creada — 6 sectores con soluciones generales |
| Página de FAQ | Creada — 10 preguntas frecuentes con acordeón |
| Blog / Consejos | Creado — 5 artículos iniciales con páginas individuales |
| Páginas específicas | Creadas — /energia-solar, /climatizacion, /mantenimiento |

## Estado de la demo

Esta es una **versión demo presentable** para enseñar al cliente/familiar. Incluye:

- Diseño profesional, responsive, optimizado para rendimiento (sin animaciones pesadas, sin blur, transiciones ligeras).
- Datos reales: nombre, teléfono, WhatsApp, email, dirección, coordenadas, zona de trabajo, 19 servicios, 5 valores.
- Mapa de ubicación interactivo (click-to-load: el iframe solo se carga al pulsar "Ver mapa").
- Formulario de contacto funcional con Formspree (HTML nativo + fetch JS).
- Placeholders para galería de trabajos con categorías visibles.
- **40 páginas:** Inicio, Servicios (con categorías), Detalle de servicios (19 páginas dinámicas), Sectores, Presupuesto, FAQ, Consejos (5 artículos), Energía Solar, Climatización, Mantenimiento, Trabajos, Empresa, Contacto, Gracias, 3 legales.
- Navegación completa con menú principal (7 enlaces) y footer de 5 columnas.
- SEO básico con Schema.org (Electrician) y metadatos por página.
- Páginas de servicio específicas para energía solar, climatización y mantenimiento.

### Cosas a revisar con el cliente

- [ ] ¿El nombre comercial "Ardila y Alba Instalaciones" es correcto?
- [ ] ¿Los servicios listados corresponden a los que realmente ofrecéis?
- [ ] ¿Faltan/quitan servicios de la lista?
- [ ] ¿La dirección y coordenadas son correctas?
- [ ] ¿El horario de atención?
- [ ] ¿El mensaje de WhatsApp es adecuado?
- [ ] ¿Las frases y el tono general te parecen profesionales y cercanos?
- [ ] ¿Quieres que cambie algún color o aspecto visual?
- [ ] ¿Tienes logo en buena calidad para sustituir el placeholder?
- [ ] ¿Fotos de trabajos reales para la galería?

## Páginas legales

Se han creado tres páginas legales base con los datos del archivo `src/data/legal.ts`:

| Página | Ruta | Contenido |
|--------|------|-----------|
| Aviso legal | `/aviso-legal` | Datos identificativos, condiciones de uso, propiedad intelectual, responsabilidad, legislación |
| Política de privacidad | `/politica-privacidad` | Responsable, datos tratados, finalidad, base legal, conservación, derechos ARSOL |
| Política de cookies | `/politica-cookies` | Qué son, cookies actuales (ninguna), gestión en navegadores, enlaces de interés |

### Datos pendientes de confirmar

- **CIF/NIF**: actualmente pone "Pendiente de confirmar"
- **Dominio definitivo**: actualmente pone "Pendiente de confirmar"
- **Proveedor del formulario**: Formspree — debe añadirse como encargado de tratamiento en la política de privacidad

### Notas importantes

- Los textos son una **base editable**, no constituyen asesoramiento legal. Se recomienda revisión por un profesional antes de la publicación final.
- Si en el futuro se añaden **Google Analytics, píxeles de redes sociales, mapas con tracking** u otras herramientas externas, habrá que actualizar la política de cookies y valorar la implementación de un banner de consentimiento.
- Las páginas usan `noindex` para evitar que Google las indexe mientras tengan datos provisionales.
- El formulario de contacto incluye un **checkbox obligatorio** de aceptación de la política de privacidad.

## Formulario de contacto con Formspree

El formulario de contacto se envía a **Formspree** mediante `fetch()` con JavaScript mínimo. Si el usuario tiene JavaScript desactivado, el formulario mantiene el envío HTML nativo como fallback (redirigiendo a la página de Formspree).

### Configuración actual

| Concepto | Valor |
|----------|-------|
| URL de Formspree | `https://formspree.io/f/mpqerynz` |
| Dónde se configura | `src/components/ContactForm.astro` → `const FORMSPREE_URL` |
| Campos enviados (todos obligatorios) | nombre, telefono, email, servicio, localidad, mensaje, privacidad, subject |
| Asunto del email | "Nuevo contacto web - Ardila y Alba Instalaciones" |
| Validación | HTML5 nativa (`required`) |
| Envío con JS | `fetch()` + `FormData` |
| Fallback sin JS | POST HTML nativo al mismo endpoint |

### Cómo funciona

1. El usuario rellena el formulario y pulsa "Enviar mensaje".
2. El navegador valida los campos `required` con mensajes nativos. Si algún campo obligatorio está vacío, el navegador bloquea el envío y muestra un mensaje de error.
3. Si todo es válido, JavaScript envía los datos con `fetch()` a Formspree.
4. **Éxito:** aparece un mensaje verde dentro de la página: *"Mensaje enviado correctamente. Gracias por contactar con Ardila y Alba Instalaciones."* El formulario se limpia.
5. **Error:** aparece un mensaje rojo dentro de la página y el botón se reactiva para reintentar.
6. Si JavaScript está desactivado, el formulario se envía mediante POST HTML nativo y el usuario es redirigido a la página de Formspree.

### Notas sobre el campo email

- El campo email usa `type="email"` con validación nativa del navegador.
- Se requiere un correo con formato válido (ej: `usuario@dominio.com`).
- **Correos de prueba o genéricos** (como `alex@gmail.com`, `prueba@test.com`, etc.) pueden no ser aceptados por Formspree o no aparecer correctamente en las submissions.
- Para pruebas reales, utiliza un correo válido y activo.

### Para cambiar la URL de Formspree

1. Abre `src/components/ContactForm.astro`
2. Localiza `const FORMSPREE_URL` (línea ~3)
3. Sustituye la URL por la nueva

### Para cambiar los mensajes de éxito/error

En `src/components/ContactForm.astro`, localiza `SUCCESS_MSG` y `ERROR_MSG` (líneas ~6-7) y cámbialos. También actualiza las constantes `SUCCESS_HTML` y `ERROR_HTML` en el `<script>` si necesitas cambiar el estilo.

### Campos del formulario y cómo los recibe Formspree

Cada campo tiene un `name` que Formspree usa como clave en el email recibido:

| name del campo | visible en el email como |
|----------------|--------------------------|
| `nombre` | nombre |
| `telefono` | telefono |
| `email` | email (Formspree lo usa como Reply-To) |
| `servicio` | servicio |
| `localidad` | localidad |
| `mensaje` | mensaje |
| `privacidad` | privacidad (valor: "Aceptada") |
| `subject` | Asunto del email (oculto) |

### Cómo probar el envío en local

1. Ejecuta `npm run dev`
2. Abre http://localhost:4321/contacto
3. Rellena **todos** los campos obligatorios (tienen `*`) y marca el checkbox de privacidad
4. Pulsa "Enviar mensaje"
5. Si el envío funciona, verás el mensaje de éxito en la propia página
6. Inicia sesión en https://formspree.io para verificar que los datos llegan completos

> **Importante:** Usa un correo válido y real para las pruebas. Correos como `alex@gmail.com`, `prueba@test.com` u otros genéricos pueden no ser aceptados o no aparecer en las submissions.

### Gestión de mensajes

Los mensajes recibidos se gestionan desde el panel de Formspree (no desde el código). Allí puedes:
- Leer los mensajes entrantes
- Configurar la dirección de email donde se notifican los nuevos mensajes
- Ver estadísticas básicas

## Navegación

Los enlaces del menú principal se definen en `src/data/navigation.ts`:

| Etiqueta | Ruta |
|----------|------|
| Inicio | `/` |
| Servicios | `/servicios` |
| Sectores | `/sectores` |
| Trabajos | `/trabajos` |
| Empresa | `/empresa` |
| Consejos | `/consejos` |
| Contacto | `/contacto` |

Además, hay un botón destacado a `/presupuesto` en el hero y enlaces internos desde el footer.

## Dónde cambiar los datos

### Estructura de archivos de datos

Los datos están separados por responsabilidad en `src/data/`:

| Archivo | Contenido |
|---------|-----------|
| `company.ts` | Nombre legal, nombre comercial, tagline, logo, valores, secciones del footer |
| `contact.ts` | Teléfono, WhatsApp, email, dirección, horario, zona, coordenadas, tipos de servicio |
| `services.ts` | Listado de 19 servicios con datos completos (título, descripción, icono, slug, categoría, destacado, beneficios, cuándo contactar, servicios relacionados) |
| `home.ts` | Textos editables de la portada (hero, secciones destacadas, procesos, confianza, etc.) |
| `gallery.ts` | Categorías y trabajos de la galería (cada uno con título, descripción, imagen) |
| `seo.ts` | Datos Schema.org (`LOCAL_DATA`) y metadatos SEO por página (`SEO_PAGES`) |
| `navigation.ts` | Enlaces del menú de navegación (`NAV_LINKS`) |
| `sectors.ts` | Sectores de clientes: particulares, empresas, comunidades, etc. |
| `faqs.ts` | Preguntas frecuentes (pregunta + respuesta) |
| `consejos.ts` | Artículos del blog/consejos (título, slug, contenido, categoría, fecha) |
| `budget.ts` | Contenido de la página de presupuesto (textos e información recomendada) |

### Dónde cambiar teléfono, WhatsApp y email

Todos en **`src/data/contact.ts`** → `CONTACT`:

- `CONTACT.phone` → texto visible: "656 183 884"
- `CONTACT.phoneLink` → para enlaces tel: "+34656183884"
- `CONTACT.whatsapp` → texto visible: "656 183 884"
- `CONTACT.whatsappLink` → para enlaces wa.me: "+34656183884"
- `CONTACT.whatsappMessage` → mensaje predefinido de WhatsApp
- `CONTACT.email` → "ardilayalba_instalaciones@hotmail.com"

**Para cambiar el mensaje de WhatsApp:** edita `CONTACT.whatsappMessage` en `contact.ts`. Luego se codifica automáticamente con `encodeURIComponent` en los enlaces.

### Dónde cambiar servicios

**`src/data/services.ts`** — Array `SERVICES` con 19 servicios.

Cada servicio tiene los siguientes campos:

| Campo | Descripción |
|-------|-------------|
| `title` | Nombre del servicio (ej: "Instalaciones eléctricas") |
| `description` | Descripción corta para tarjetas y listados |
| `icon` | Emoji o ruta de icono |
| `slug` | Identificador para la URL (ej: "instalaciones-electricas" → `/servicios/instalaciones-electricas`) |
| `category` | Categoría para agrupar en la página de servicios |
| `featured` | `true` → aparece en la página de inicio (6 servicios destacados) |
| `benefits` | Array de strings con lo que incluye el servicio (se muestra en la página de detalle) |
| `whenToContact` | Array de strings con situaciones en las que puede interesar el servicio |
| `relatedServices` | Array de slugs de servicios relacionados (se muestran en la página de detalle) |

Cada servicio genera automáticamente una página en `/servicios/[slug]` con toda su información.

**Para añadir un servicio nuevo:**
1. Añade un objeto al array `SERVICES` en `src/data/services.ts`
2. El `slug` debe ser único y en kebab-case (ej: "nuevo-servicio")
3. La URL será automáticamente `/servicios/nuevo-servicio`
4. Los `relatedServices` deben contener slugs de servicios existentes
5. El servicio aparecerá en la página de servicios agrupado por su `category`

**Para quitar un servicio:** elimínalo del array `SERVICES`.

**Para cambiar el orden:** reordena los objetos en el array. Los `featured` se muestran primero en inicio.

**Nota:** La lista es el catálogo inicial. Cuando se confirme, se revisará para quitar servicios que no correspondan.

### Dónde cambiar servicios relacionados

En `src/data/services.ts`, cada servicio tiene un campo `relatedServices` que es un array de slugs. Por ejemplo:

```typescript
{
  title: "Placas solares",
  slug: "placas-solares",
  relatedServices: ["instalaciones-electricas", "mantenimiento-electrico", "iluminacion-led"],
}
```

Esto mostrará "Instalaciones eléctricas", "Mantenimiento eléctrico" e "Iluminación LED" como servicios relacionados en la página de detalle de Placas solares.

**Importante:** Los slugs en `relatedServices` deben coincidir exactamente con el campo `slug` de algún servicio existente en el mismo archivo.

### Dónde añadir el logo real

1. Coloca el archivo en `public/images/logo.svg` (o `.png`)
2. En `src/data/company.ts`, ajusta `LOGO.path`, `LOGO.alt`, `LOGO.width`, `LOGO.height`
3. En `Header.astro` y `Footer.astro`, sustituye el placeholder SVG por `<img src={LOGO.path} alt={LOGO.alt} />`

### Dónde añadir fotos reales de trabajos

1. Coloca las imágenes en `public/images/trabajos/` (ej: `instalacion-1.jpg`)
2. En `src/data/gallery.ts`, completa cada objeto en `GALLERY_ITEMS`:
   - `image`: ruta de la foto (ej: `"/images/trabajos/instalacion-1.jpg"`)
   - `isPlaceholder`: cámbialo a `false`
   - `alt`: texto descriptivo para accesibilidad y SEO

### Dónde confirmar horario y dirección

- **Dirección:** `src/data/contact.ts` → `CONTACT.address`
- **Horario:** `src/data/contact.ts` → `SCHEDULE.details`
- **Mapa:** Cuando tengas dirección definitiva, sustituye `MapPlaceholder.astro` por un iframe de Google Maps

## SEO y metadatos

- **Por página:** El `title` y `description` se pasan como props al Layout desde cada página y están centralizados en `src/data/seo.ts` (`SEO_PAGES`).
- **Datos estructurados (Schema.org):** Se generan automáticamente en `SEO.astro` usando `company.ts`, `contact.ts` y `seo.ts`. Incluye nombre, teléfono, email, localidad, coordenadas y zona de servicio.
- **Open Graph:** Las etiquetas OG se generan en el Layout.
- **Sitemap:** `public/sitemap.xml` — actualizar con dominio real antes de publicar.
- **Robots.txt:** `public/robots.txt` — cambiar URL del sitemap antes de publicar.

## Cómo subir una preview a Vercel

Sigue estos pasos para obtener una URL temporal y compartir la web desde el móvil.

### 1. Subir el proyecto a GitHub

```bash
# En la raíz del proyecto:
git init
git add .
git commit -m "Primera versión demo"
```

Luego crea un repositorio en GitHub (https://github.com/new) y sube el código:

```bash
git remote add origin https://github.com/tuusuario/ardila-alba-web.git
git branch -M main
git push -u origin main
```

### 2. Entrar en Vercel

1. Ve a [https://vercel.com](https://vercel.com) e inicia sesión (con GitHub, GitLab o email).
2. Haz clic en **"Add New..."** → **"Project"**.
3. Conecta tu cuenta de GitHub si no lo está ya.
4. Busca y selecciona el repositorio `ardila-alba-web`.

### 3. Configurar el proyecto en Vercel

Vercel detecta Astro automáticamente y rellena estos valores. Verifica que sean correctos:

| Campo | Valor |
|-------|-------|
| **Framework Preset** | `Astro` (se detecta solo) |
| **Build Command** | `npm run build` (se detecta solo) |
| **Output Directory** | `dist` (se detecta solo) |
| **Install Command** | `npm install` (se detecta solo) |
| **Root Directory** | Dejarlo vacío (es la raíz del repo) |

No hace falta tocar nada más. Haz clic en **"Deploy"**.

### 4. Obtener la URL temporal

Vercel generará una URL similar a:

```
https://ardila-alba-web.vercel.app
```

Esa URL ya es accesible desde cualquier dispositivo. Puedes compartirla para enseñar la demo.

### 5. Para actualizar tras cambios

Cada vez que hagas `git push` a la rama `main`, Vercel despliega automáticamente los cambios.

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

## Checklist después del deploy

Revisa estos puntos desde la URL temporal, especialmente en **móvil**:

- [ ] **Home**: hero, servicios destacados, valores, zona de actuación — todo visible y sin roturas.
- [ ] **Menú móvil**: al pulsar el icono hamburguesa se abre y cierra correctamente.
- [ ] **Servicios**: todas las tarjetas se ven bien, sin solapamientos.
- [ ] **Trabajos**: placeholders visibles con categorías, sin imágenes rotas.
- [ ] **Empresa**: bloques de presentación y valores correctos.
- [ ] **Contacto**: datos de contacto visibles (teléfono, WhatsApp, email, dirección).
- [ ] **Botones**: "Llama ahora" abre el marcador, "Escríbenos" abre WhatsApp, email abre el cliente de correo.
- [ ] **Mapa**: al hacer clic en "Ver mapa" se carga el iframe correctamente.
- [ ] **Formulario**: funciona y envía datos a Formspree correctamente.
- [ ] **Footer**: enlaces funcionan, datos de contacto correctos.
- [ ] **Rendimiento**: scroll fluido, sin tirones ni FPS bajos.
- [ ] **No hay datos inventados**: todo lo que aparece es real o está marcado como pendiente.

## Preparación para publicación final

Esto solo cuando tengas dominio definitivo y datos completamente confirmados.

### Antes de publicar (checklist)

- [ ] Sustituir todos los "Pendiente de confirmar" por datos reales
- [ ] Colocar el logo real en `public/images/logo.svg`
- [ ] Crear OG image (1200×630px) en `public/images/og-image.jpg`
- [ ] Añadir fotos reales de trabajos en `public/images/trabajos/`
- [ ] Configurar dominio real en `astro.config.mjs` → `site`
- [ ] Actualizar `LOCAL_DATA.siteUrl` en `src/data/seo.ts`
- [ ] Revisar servicios en `src/data/services.ts` — quitar los que no correspondan
- [x] Conectar el formulario de contacto (Formspree — fetch + HTML nativo)
- [ ] Actualizar `public/sitemap.xml` y `public/robots.txt` con dominio real
- [ ] Crear páginas legales: Aviso legal, Privacidad, Cookies
- [ ] Actualizar `SOCIAL` en `src/data/contact.ts` con redes reales
- [ ] Probar todos los botones de contacto (teléfono, WhatsApp, email)
- [ ] Probar la web en móvil, tablet y escritorio
- [ ] Probar el build final: `npm run build`

### Dónde cambiar la URL del dominio

Antes de publicar, cambia la URL del dominio en estos archivos:

| Archivo | Campo |
|---------|-------|
| `astro.config.mjs` | `site: "https://ejemplo.com"` |
| `src/data/seo.ts` | `LOCAL_DATA.siteUrl` |
| `public/sitemap.xml` | Cada `<loc>` |
| `public/robots.txt` | `Sitemap:` |

### Variables de entorno (opcional)

El archivo `.env.example` contiene un ejemplo de variables de entorno. Para usarlas:

1. Copia `.env.example` a `.env`
2. Completa los valores reales
3. Las variables `PUBLIC_*` estarán disponibles en el código

Actualmente el proyecto no depende de variables de entorno; los datos se leen directamente de `src/data/`.

## Cómo editar los sectores

Los sectores se definen en `src/data/sectors.ts` (`SECTORS`). Cada sector tiene:

- `title` — Nombre del sector (ej: "Particulares")
- `description` — Descripción general de las soluciones para ese sector
- `icon` — Emoji o ruta de icono
- `services` — Lista de servicios relacionados (para mostrar etiquetas)

Para añadir, quitar o modificar sectores, edita el array `SECTORS`.

## Cómo editar las preguntas frecuentes

Las FAQs se definen en `src/data/faqs.ts` (`FAQS`). Cada FAQ tiene:

- `question` — Pregunta
- `answer` — Respuesta (texto plano)

Para añadir, quitar o modificar FAQs, edita el array `FAQS`.

## Cómo editar los consejos / blog

Los artículos se definen en `src/data/consejos.ts` (`CONSEJOS`). Cada artículo tiene:

| Campo | Descripción |
|-------|-------------|
| `slug` | Identificador para la URL (ej: "cuando-revisar-instalacion-electrica") |
| `title` | Título del artículo |
| `description` | Resumen para la tarjeta y SEO |
| `content` | HTML del contenido completo |
| `date` | Fecha de publicación (formato "YYYY-MM") |
| `category` | Categoría para filtrar (ej: "Electricidad", "Energía solar") |

Para añadir un artículo nuevo:
1. Añade un objeto al array `CONSEJOS` en `src/data/consejos.ts`
2. El `slug` determinará la URL: `/consejos/{slug}`
3. El `content` acepta HTML (etiquetas `<p>`, `<h3>`, `<ul>`, `<li>`)

## Cómo editar la página de presupuesto

El contenido de `/presupuesto` se define en `src/data/budget.ts` (`BUDGET_PAGE`):
- `title` / `subtitle` / `description` — Textos principales
- `recommendedInfo` — Lista de datos recomendados para enviar
- `ctaText` — Texto del botón de llamada a la acción

## Servicios: organización por categorías

Los servicios se agrupan en 4 categorías en la página `/servicios`:

| Categoría | Servicios incluidos |
|-----------|-------------------|
| **Electricidad** | Instalaciones eléctricas, Reparaciones, Cuadros eléctricos, Reformas, Averías, Boletines |
| **Energía y eficiencia** | Placas solares, Iluminación LED, Mantenimiento eléctrico |
| **Climatización y equipos** | Aire acondicionado, Climatización, Bombas de pozo |
| **Instalaciones para inmuebles** | Viviendas, Locales, Comunidades, Automatismos, Porteros, Telecomunicaciones, Domótica |

Para cambiar la categoría de un servicio, edita el campo `category` en `src/data/services.ts`. Para cambiar las definiciones de categoría, edita `src/pages/servicios.astro` → `CATEGORIES` y `CATEGORY_DESCRIPTIONS`.

### Páginas de detalle de servicio

Cada servicio tiene su propia página generada dinámicamente en `/servicios/[slug]`:

- `/servicios/instalaciones-electricas`
- `/servicios/placas-solares`
- `/servicios/aire-acondicionado`
- `/servicios/mantenimiento-electrico`
- `/servicios/bombas-de-pozo`
- `/servicios/reparaciones-electricas`
- `/servicios/cuadros-electricos`
- `/servicios/boletines-electricos`
- `/servicios/instalaciones-viviendas`
- `/servicios/instalaciones-locales`
- `/servicios/instalaciones-comunidades`
- `/servicios/climatizacion`
- `/servicios/iluminacion-led`
- `/servicios/automatismos`
- `/servicios/porteros-automaticos`
- `/servicios/telecomunicaciones`
- `/servicios/domotica`
- `/servicios/reformas-electricas`
- `/servicios/averias-electricas`

Cada página de detalle incluye:
- Breadcrumbs de navegación (`Breadcrumbs.astro`)
- Hero con icono y descripción
- Sección "Qué incluye este servicio" (beneficios)
- Sección "¿Cuándo puede interesarte?"
- Servicios relacionados (`RelatedServices.astro`)
- CTA final con contacto y presupuesto

La plantilla se define en `src/pages/servicios/[slug].astro` y los datos se leen de `src/data/services.ts`.

### Nota sobre páginas específicas existentes

Además de las páginas de detalle dinámicas, existen tres páginas específicas con contenido más extenso que se mantienen separadas:

- `/energia-solar` — Contenido detallado sobre instalación de placas solares
- `/climatizacion` — Contenido detallado sobre sistemas de climatización
- `/mantenimiento` — Contenido detallado sobre mantenimiento eléctrico

Estas páginas tienen sus propios datos y estructura, independientes del sistema de rutas dinámicas.

---

## Sistema de animaciones scroll reveal

La web implementa un sistema de animaciones al hacer scroll basado en **IntersectionObserver** para que las secciones, tarjetas y bloques aparezcan de forma progresiva y elegante conforme el usuario baja por la página.

El sistema está definido en `src/styles/global.css` (clases CSS) y `src/layouts/Layout.astro` (script inline).

### Cómo funciona

1. Los elementos con clase `.reveal`, `.reveal-up`, `.reveal-left`, `.reveal-right` o `.reveal-scale` comienzan con `opacity: 0` y un desplazamiento inicial (`translateY`, `translateX` o `scale`).
2. Un **único IntersectionObserver global** (~800 B), inyectado al final del `<body>` en `Layout.astro`, vigila todos esos elementos.
3. Cuando un elemento entra en el viewport, el observer le añade la clase `.reveal-visible`, que aplica `opacity: 1` y `transform: none`. La transición es CSS pura (`transition: opacity 0.6s, transform 0.6s`).
4. El observer deja de vigilar el elemento inmediatamente después de revelarlo (se ejecuta una sola vez).

### Clases reutilizables

| Clase | Efecto | Distancia |
|-------|--------|-----------|
| `reveal` | Opacidad de 0 a 1 | — |
| `reveal-up` | Aparece desde abajo | 20 px (12 px móvil) |
| `reveal-left` | Aparece desde la izquierda | 16 px (10 px móvil) |
| `reveal-right` | Aparece desde la derecha | 16 px (10 px móvil) |
| `reveal-scale` | Aparece con escala | 0.96 (0.97 móvil) |
| `stagger-item` | Ayudante para escalonado (usa `--stagger-index`) | — |

Todas usan `cubic-bezier(0.25, 0.46, 0.45, 0.94)` con duración 0.6 s (0.4 s en móvil).

### Cómo añadir animación a una nueva sección

```html
<!-- Sección que aparece al hacer scroll -->
<section class="reveal-up">
  <h2>Título</h2>
</section>

<!-- Tarjeta con entrada desde la izquierda -->
<div class="reveal-left">
  <p>Contenido</p>
</div>

<!-- Grid con aparición escalonada -->
<div class="grid grid-cols-3">
  <div class="reveal-up" style="transition-delay: 100ms">...</div>
  <div class="reveal-up" style="transition-delay: 200ms">...</div>
  <div class="reveal-up" style="transition-delay: 300ms">...</div>
</div>

<!-- O usando stagger-item (CSS custom property) -->
<div class="reveal-up stagger-item" style="--stagger-index: 0">...</div>
<div class="reveal-up stagger-item" style="--stagger-index: 1">...</div>
<div class="reveal-up stagger-item" style="--stagger-index: 2">...</div>
```

### Stagger (aparición escalonada)

Los grids usan `transition-delay` con incrementos de 80–100 ms para que las tarjetas aparezcan una tras otra. Los delays se aplican mediante `style="transition-delay: ${i * 100}ms"` (inline) o con la clase auxiliar `stagger-item` + `--stagger-index`.

### Variedades según el bloque

- **Secciones / títulos →** `reveal-up`
- **Tarjetas en grid →** `reveal-up` con stagger
- **Columnas dobles (texto/imagen) →** `reveal-left` / `reveal-right` en cada lado
- **CTAs →** `reveal-up`
- **Pasos / procesos →** stagger vertical con `reveal-up`
- **Galerías →** `reveal-up` con stagger

### prefers-reduced-motion

Si el usuario tiene activada `prefers-reduced-motion: reduce`:

1. El IntersectionObserver se desactiva y **todos los elementos se revelan inmediatamente** (sin animación).
2. Las transiciones y animaciones CSS se anulan con `transition-duration: 0.01ms !important`.
3. Las clases de micro-interacción (`card-hover`, `badge-hover`, `group-icon`, etc.) pierden su efecto.

No queda contenido invisible si JavaScript falla: el sistema tiene un **timeout de seguridad de 2.5 s** que fuerza `.reveal-visible` en todos los elementos pendientes.

### Reglas para mantener el rendimiento

- ✅ Solo anima `opacity` y `transform` (propiedades composited, no provocan reflow)
- ✅ Un único IntersectionObserver global (no listeners de scroll)
- ✅ `contain: layout style` en secciones y tarjetas para aislar el pintado
- ✅ `will-change: transform` solo en elementos con hover animado (no en todos)
- ✅ Distancias reducidas en móvil (menos desplazamiento = mejor rendimiento)
- ❌ No usar animaciones infinitas
- ❌ No usar `transition-all` en elementos con muchos hijos
- ❌ No animar `height`, `width`, `top`, `left`, `filter`
- ❌ No observar elementos innecesarios ni cientos de nodos

Para añadir una nueva animación, edita `src/styles/global.css` y añade una clase de transición siguiendo el patrón de las existentes.

## Medición de contactos

Actualmente la web no utiliza Google Analytics ni cookies de seguimiento. Sin embargo, se pueden medir los contactos recibidos mediante estos métodos:

### Métodos de medición sin cookies

| Método | Cómo medirlo |
|--------|-------------|
| **Formspree** | El panel de Formspree muestra los envíos recibidos, fecha, hora y contenido de cada mensaje |
| **WhatsApp** | Cada enlace wa.me incluye un mensaje predefinido que permite identificar la procedencia (ej: "información sobre un trabajo" vs "presupuesto para un trabajo") |
| **Llamadas telefónicas** | Preguntar "¿De dónde nos has conocido?" al atender la llamada permite saber si vienen de la web |
| **Consultas por email** | Revisar el asunto y contenido del email para identificar el origen |

### Mensajes WhatsApp diferenciados por página

Para poder identificar mejor el origen de los contactos, se han definido mensajes específicos:

| Página | Mensaje WhatsApp |
|--------|-----------------|
| General (Hero, Contacto, servicios) | "Hola, he visto vuestra web y me gustaría solicitar información sobre un trabajo." |
| Presupuesto | "Hola, he visto vuestra web y me gustaría solicitar presupuesto para un trabajo." |

Estos mensajes se configuran en `src/data/contact.ts` → `CONTACT.whatsappMessage` y `CONTACT.whatsappBudgetMessage`.

### Cuándo añadir Analytics

Si en el futuro se necesita un análisis más detallado (páginas más visitadas, embudos de conversión, etc.), se puede instalar un script de analytics respetuoso con la privacidad:
- **Google Analytics 4** → requiere actualizar política de cookies y añadir banner de consentimiento
- **Plausible** o **Fathom** → analytics sin cookies, sin necesidad de banner

---

## Modelo de monetización de la web

Esta web está diseñada para la **captación de clientes** a través de solicitudes de presupuesto, llamadas y mensajes de WhatsApp. No está pensada para generar ingresos mediante publicidad.

### Por qué NO se han añadido anuncios

- **Profesionalidad:** Los banners y anuncios pueden restar seriedad a una web corporativa de un negocio local de instalaciones.
- **Distracción:** Los anuncios desvían la atención del usuario de los CTAs principales (pedir presupuesto, llamar, contactar).
- **Confianza:** Una web sin publicidad transmite más confianza al cliente, que busca un servicio profesional.
- **Rentabilidad:** Para generar ingresos relevantes con AdSense se necesita un volumen de tráfico muy alto que un negocio local no suele alcanzar. Los ingresos potenciales no compensan el impacto negativo en la imagen de marca.

### Modelo de ingresos para el negocio

El negocio puede generar ingresos a través de la web mediante estos modelos (no excluyentes):

1. **Captación de leads** — El objetivo principal de la web es generar solicitudes de presupuesto, llamadas y contactos por WhatsApp que se convierten en clientes.
2. **Servicios de mayor valor** — Energía solar, climatización y mantenimiento son servicios con mayor margen que se promocionan en páginas específicas.
3. **SEO local** — La web está optimizada para aparecer en búsquedas locales como "electricista en Villanueva del Trabuco" o "instalaciones eléctricas Málaga", atrayendo clientes sin coste por clic.
4. **Contenido útil** — Los artículos del blog/consejos atraen tráfico orgánico y posicionan a la empresa como referente en su sector.
5. **Presencia en WhatsApp** — El contacto directo por WhatsApp es un canal de conversión clave para presupuestos rápidos sin fricción.
6. **Futuro: Google Ads** — Cuando se quiera invertir en publicidad, se pueden crear campañas locales dirigidas a palabras clave del sector, sin necesidad de modificar la web.

### Modelo de ingresos para el desarrollador

Si esta web se entrega como proyecto profesional:

- **Creación de la web** — Cobro único por el diseño y desarrollo
- **Mantenimiento mensual** — Actualizaciones, nuevo contenido, seguridad, hosting si aplica
- **SEO mensual** — Mejora continua de posicionamiento local, optimización de contenido
- **Campañas Google Ads** — Gestión de campañas de publicidad local (opcional)

### Qué no se ha añadido (ni se recomienda)

- ❌ Google AdSense o cualquier red de anuncios
- ❌ Cookies de marketing/publicidad
- ❌ Scripts de terceros no esenciales
- ❌ Pop-ups o intersticiales
- ❌ Enlaces patrocinados

---

## Cómo probar los enlaces de contacto

1. **Teléfono:** Al hacer clic en "Llama ahora" se abre el marcador del teléfono con el 656 183 884
2. **WhatsApp:** Al hacer clic en "Escríbenos" se abre WhatsApp con el mensaje predefinido
3. **Email:** Al hacer clic en el email se abre el cliente de correo con la dirección ardilayalba_instalaciones@hotmail.com

Pruébalos en local con `npm run dev` y haz clic en cada botón.

## Siguientes pasos recomendados

### Para la demo (inmediato)

1. ✅ ~~Desplegar preview en Vercel~~ (sigue la guía de más arriba)
2. [ ] **Enseñar la demo al cliente** y recoger feedback
3. [ ] **Ajustar según feedback** (servicios, textos, secciones, etc.)

### Para la publicación final

4. [ ] **Añadir logo real** en `public/images/logo.svg`
5. [ ] **Añadir fotos reales** de trabajos en la galería
6. [ ] **Confirmar horario de atención** y actualizar `src/data/contact.ts`
7. [ ] **Comprar/confirmar dominio** y configurarlo en `astro.config.mjs`, `seo.ts`, `sitemap.xml`, `robots.txt`
8. [x] ~~Conectar formulario de contacto~~ (Formspree — funcionando)
9. [ ] **Revisar servicios** y quitar los que no correspondan
10. [x] ~~Crear páginas legales~~ (aviso legal, privacidad, cookies)
11. [ ] **Añadir OG image** (1200×630px) en `public/images/og-image.jpg`
12. [ ] **Publicar con dominio definitivo**

### Para expansión futura

13. [ ] **Ampliar blog/consejos** con más artículos para mejorar SEO local
14. [ ] **Añadir fotos reales** a páginas de servicio (energía solar, climatización, mantenimiento)
15. [ ] **Completar redes sociales** en `src/data/contact.ts` → `SOCIAL`
16. [ ] **Evaluar Google Ads** para campañas locales de captación (sin modificar la web)
17. [ ] **Añadir testimonios reales** (solo si los clientes autorizan explícitamente)
18. [ ] **Configurar un CRM** para gestionar leads desde el formulario y WhatsApp
