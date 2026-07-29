import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const base = (process.env.BASE_PATH ?? '/').replace(/\/?$/, '/');

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://victoralonsoheringer.github.io',
  base,
  output: 'static',
  integrations: [react(), sitemap()],
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
