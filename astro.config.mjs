import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';

// TODO: cambia este dominio por el definitivo de Cloudflare Pages cuando lo tengas.
// Se usa para la URL canónica y para el sitemap si se añade más adelante.
const site = 'https://jere792.github.io';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
  },
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          loadPaths: [fileURLToPath(new URL('./src', import.meta.url))],
        },
      },
    },
  },
});
