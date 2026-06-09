import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Test-Website/',   // 👈 add this line
  plugins: [
    tailwindcss(),
  ],
})