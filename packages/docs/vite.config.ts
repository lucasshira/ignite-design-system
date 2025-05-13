/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ignite-design-system/',
  plugins: [react()],
  resolve: {
    alias: {
      '@ignite-ui/tokens': path.resolve(__dirname, '../path/to/tokens'),
    },
  },
})