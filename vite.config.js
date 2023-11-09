import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Agrupa los archivos de Capacitor y sus dependencias en un solo archivo
          'capacitor': ['@capacitor/app'],
        },
      },
    },
  },
})
