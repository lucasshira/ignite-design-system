/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ignite-ui/tokens': path.resolve(__dirname, '../path/to/tokens'), // Ajuste o caminho para o diretório do pacote
    },
  },
})