import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: './postcss.config.js',
  },
  plugins: [react()],
})
