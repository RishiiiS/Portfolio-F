import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      'theater-coach-earthy.ngrok-free.dev'
    ]
  }
})