// @ts-check
import path from 'path'

import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/__tests__/*.ts'],
    exclude: [
      ...configDefaults.exclude,
      'scripts/**/*.ts',
      'playground/*.ts'
    ],
    environment: 'happy-dom'
  },
  build: {
    lib: {
      formats: ['es'],
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'hesoyam'
    }
  }
})
