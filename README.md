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
│   │   ├── ContactForm.astro    # Formulario de contacto (maqueta visual)
│   │   ├── Footer.astro         # Pie de página (4 columnas)
│   │   ├── GalleryPlaceholder.astro # Placeholders para galería de trabajos
│   │   ├── Header.astro         # Barra de navegación principal
│   │   ├── Hero.astro           # Portada principal
│   │   ├── MapPlaceholder.astro # Placeholder para mapa
│   │   ├── SectionTitle.astro   # Título de sección reutilizable
│   │   ├── SEO.astro            # Datos estructurados JSON-LD (Schema.org)
│   │   ├── ServiceCard.astro    # Tarjeta de servicio
│   │   └── ValuesBlock.astro    # Bloque de valores de empresa
│   ├── data/                    # Datos centralizados de la empresa
│   │   ├── company.ts           # Nombre, logo, valores, secciones del footer
│   │   ├── contact.ts           # Teléfono, email, dirección, horario, zona
│   │   ├── services.ts          # Listado de servicios ofrecidos (19 servicios)
│   │   ├── home.ts              # Textos de la página de inicio (hero, secciones)
│   │   ├── gallery.ts           # Galería de trabajos y categorías
│   │   ├── seo.ts               # SEO local (Schema.org) y metadatos por página
│   │   └── navigation.ts        # Enlaces del menú de navegación
│   ├── layouts/                 # Plantillas de página
│   │   └── Layout.astro         # Layout principal con SEO, header y footer
│   ├── pages/                   # Páginas del sitio (cada .astro = una ruta)
│   │   ├── index.astro          # Inicio
│   │   ├── servicios.astro      # Servicios
│   │   ├── trabajos.astro       # Galería de trabajos
│   │   ├── empresa.astro        # Sobre nosotros
│   │   └── contacto.astro       # Contacto
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
| Conexión formulario | `ContactForm.astro` |

## Estado de la demo

Esta es una **versión demo presentable** para enseñar al cliente/familiar. Incluye:

- Diseño profesional, responsive, optimizado para rendimiento (sin animaciones pesadas, sin blur, transiciones ligeras).
- Datos reales: nombre, teléfono, WhatsApp, email, dirección, coordenadas, zona de trabajo, 19 servicios, 5 valores.
- Mapa de ubicación interactivo (click-to-load: el iframe solo se carga al pulsar "Ver mapa").
- Formulario de contacto (maqueta visual sin envío real).
- Placeholders para galería de trabajos con categorías visibles.
- Navegación completa (Inicio, Servicios, Trabajos, Empresa, Contacto).
- SEO básico con Schema.org (Electrician).
- Footer con datos de contacto y acceso rápido.

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

## Dónde cambiar los datos

### Estructura de archivos de datos

Los datos están separados por responsabilidad en `src/data/`:

| Archivo | Contenido |
|---------|-----------|
| `company.ts` | Nombre legal, nombre comercial, tagline, logo, valores, secciones del footer |
| `contact.ts` | Teléfono, WhatsApp, email, dirección, horario, zona, coordenadas, tipos de servicio |
| `services.ts` | Listado de 19 servicios (título, descripción, icono, slug, categoría, destacado) |
| `home.ts` | Textos editables de la portada (hero, secciones destacadas, etc.) |
| `gallery.ts` | Categorías y trabajos de la galería (cada uno con título, descripción, imagen) |
| `seo.ts` | Datos Schema.org (`LOCAL_DATA`) y metadatos SEO por página (`SEO_PAGES`) |
| `navigation.ts` | Enlaces del menú de navegación (`NAV_LINKS`) |

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

- `featured: true` → aparece en la página de inicio (6 servicios destacados)
- `featured: false` → solo en la página de servicios completa
- Para añadir/quitar: edita el array. Cada servicio tiene título, descripción, icono, slug, categoría y featured.

**Nota:** La lista es el catálogo inicial. Cuando se confirme, se revisará para quitar servicios que no correspondan.

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
- [ ] **Formulario**: se ve bien, aunque no envíe datos todavía.
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
- [ ] Conectar el formulario de contacto (Netlify Forms, Formspree, Resend...)
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

## Cómo probar los enlaces de contacto

1. **Teléfono:** Al hacer clic en "Llama ahora" se abre el marcador del teléfono con el 656 183 884
2. **WhatsApp:** Al hacer clic en "Escríbenos" se abre WhatsApp con el mensaje predefinido
3. **Email:** Al hacer clic en el email se abre el cliente de correo con la dirección ardilayalba_instalaciones@hotmail.com

Pruébalos en local con `npm run dev` y haz clic en cada botón.

## Siguientes pasos recomendados

Los pasos 1–3 son **inmediatos** (para la demo). El resto es para la publicación final.

1. ✅ ~~Desplegar preview en Vercel~~ (sigue la guía de más arriba)
2. [ ] **Enseñar la demo al cliente** y recoger feedback
3. [ ] **Ajustar según feedback** (servicios, textos, etc.)
4. [ ] **Añadir logo real** en `public/images/logo.svg`
5. [ ] **Añadir fotos reales** de trabajos
6. [ ] **Confirmar horario de atención**
7. [ ] **Comprar/confirmar dominio** y configurarlo en todos los archivos
8. [ ] **Conectar formulario de contacto** (Netlify Forms, Formspree, o similar)
9. [ ] **Revisar servicios** y quitar los que no correspondan
10. [ ] **Crear páginas legales**
11. [ ] **Añadir OG image** (1200×630px)
12. [ ] **Publicar con dominio definitivo**
