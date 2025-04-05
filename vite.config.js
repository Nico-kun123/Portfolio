import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

//! Minify html in production
import { ViteMinifyPlugin } from 'vite-plugin-minify'

//! Для Vite с версией 5+
import pluginPurgeCss from 'vite-plugin-purgecss-updated-v5'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  optimizeDeps: { include: ['vue'] },
  plugins: [vue(), ViteMinifyPlugin({}), pluginPurgeCss({ variables: true })],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})
