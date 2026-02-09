import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://manlisas.com',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  compressHTML: true,
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  server: {
    host: true,
    allowedHosts: true,
  },
});
