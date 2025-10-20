import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // TODO: replace with your repo name, e.g. '/rankingboard/'
  base: '/<REPO_NAME>/',
  plugins: [react()],
})
