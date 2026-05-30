import { defineConfig } from 'vite';

const basePath = process.env.PLAYGROUND_BASE_PATH || '/';

export default defineConfig({
  base: basePath.endsWith('/') ? basePath : `${basePath}/`,
  build: {
    outDir: 'dist-playground',
  },
});