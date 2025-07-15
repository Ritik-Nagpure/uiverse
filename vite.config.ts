import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/uiverse/",
  // base: "/",
  plugins: [react(), tailwindcss()],

  server : {
    host: true
  }

})

