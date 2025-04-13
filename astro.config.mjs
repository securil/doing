import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isDev = process.env.NODE_ENV !== 'production';
console.log('Current environment:', isDev ? 'development' : 'production');

export default defineConfig({
  base: isDev ? '/' : '/doing/',
  integrations: [tailwind()],
  server: {
    port: 4321,
  }
});