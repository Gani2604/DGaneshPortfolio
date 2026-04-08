import { defineConfig } from 'vite'
// Trigger restart
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
