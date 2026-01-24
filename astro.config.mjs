import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://manlisas.com',
  integrations: [tailwind()],
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
