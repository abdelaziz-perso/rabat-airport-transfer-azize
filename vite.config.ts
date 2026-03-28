import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compressAssetPlugin } from './vite-plugin-compress-assets'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compressAssetPlugin()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['lucide-react'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    // Broader than esnext so older iOS Safari can parse the bundle (esnext can emit unsupported syntax).
    target: ['es2020', 'safari14'],
    reportCompressedSize: true,
  },
})
