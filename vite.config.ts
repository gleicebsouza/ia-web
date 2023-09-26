import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//resolve paths without error, using apis internas do node
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util']
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
