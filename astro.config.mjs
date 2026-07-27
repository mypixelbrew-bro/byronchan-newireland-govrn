import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://byronchan.com.pg',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
