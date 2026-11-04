import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://centralscaffolding.id',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      serialize(item) {
        if (item.url === 'https://centralscaffolding.id/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        }
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
});
