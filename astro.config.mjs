// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// =============================================
// CONFIGURACIÓN PRINCIPAL DE ASTRO
// =============================================
//
// site: URL real del dominio cuando esté listo.
//   Dominio preferido: ardilayalbainstalaciones.es
//   Alternativa: ardilayalbainstalaciones.com
//   Antes de desplegar, cambia el valor por
//   tu dominio real.
//
//   Actualmente usa un valor provisional.
//
// build.output: "static" genera archivos HTML
//   planos sin servidor. Funciona en cualquier
//   hosting estático (Vercel, Netlify, GitHub Pages).
// =============================================

// https://astro.build/config
export default defineConfig({
  site: "https://ejemplo.com",
  build: {
    output: "static",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
