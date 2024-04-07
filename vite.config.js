// @ts-check
import path from 'path'

import { defineConfig } from 'vite'

export default defineConfig({
  //   test: {
  //     include: ['src/**/*.test.ts'],
  //     environment: 'happy-dom',
  //   },
  build: {
    lib: {
      formats: ['es'],
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'hesoyam'
    }
  }
})
