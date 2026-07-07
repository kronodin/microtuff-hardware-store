import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base './' so the built assets work whether served from a subpath (GitHub Pages)
// or the domain root.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
