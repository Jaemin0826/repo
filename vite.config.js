import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base set for GitHub Pages deployment
  base: '/repo/',
  plugins: [react()],
})
