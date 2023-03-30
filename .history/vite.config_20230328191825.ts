import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from "path"
import { AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport([
      resolve: [
        AntdResolve()
      ]
    ])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
})
