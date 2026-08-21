import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://itsjuanit.dev',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
