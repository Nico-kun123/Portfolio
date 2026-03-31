import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

//! ESLint
// import eslint from 'vite-plugin-eslint'

//! Minify html in production
import { ViteMinifyPlugin } from 'vite-plugin-minify'

//! Для Vite с версией 5+
import pluginPurgeCss from 'vite-plugin-purgecss-updated-v5'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  const isDevelopment = mode === 'development'

  return {
    plugins: [
      vue(),
      // react(),

      // Плагины для режима "Development"
      ...(isDevelopment
        ? [
            // Плагин для проверки кода с помощью ESLint
            // eslint({
            //   cache: false,
            //   include: ['src/**/*.{js,mjs,cjs,html,ts,tsx,jsx,tsx,vue}'],
            //   exclude: ['node_modules', 'dist'],
            // }),
          ]
        : []),

      // Плагины для режима "Production"
      ...(isProduction
        ? [
            //  Плагин для минификации HTML
            ViteMinifyPlugin({}),

            // Плагин для оптимизации CSS
            pluginPurgeCss({
              variables: true, // Включаем подстановку переменных
              safelist: ['html', 'body'], // Добавляем safelist для важных классов
              rejected: true, // Исключаем файлы node_modules из обработки
            }),
          ]
        : []),
    ],

    // Базовый путь для ссылок
    base: './',

    // Сокращение названий папок, для более удобного использования
    resolve: {
      alias: {
        '@': '/src',
        '@assets': '/src/assets',
        '@components': '/src/components',
        '@fonts': '/src/assets/fonts',
        '@pages': '/src/pages',
        '@styles': '/src/assets/css',
      },
    },

    // Настройки для режима "Development"
    server: {
      port: 5173,
      open: true,
      host: false,
    },

    // Настройки для режима "Production" (preview)
    preview: {
      port: 4173,
      open: true,
      host: false,
    },

    // Настройки сборки для режима "Production"
    build: {
      // Увеличиваем лимит для предупреждений о размере чанков
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        // Кэширование и сжатие файлов
        output: {
          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: assetInfo => {
            const info = assetInfo.name.split('.')
            const ext = info[info.length - 1]
            if (/\.(css)$/.test(assetInfo.name)) {
              return `assets/css/[name].[hash].${ext}`
            }
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
              return `assets/images/[name].[hash].${ext}`
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
              return `assets/fonts/[name].[hash].${ext}`
            }
            return `assets/[name].[hash].${ext}`
          },

          // Более детальное разделение чанков
          manualChunks: id => {
            // Vue библиотеки
            if (id.includes('vue') || id.includes('vue-i18n')) {
              return 'vue-vendor'
            }

            // Остальные node_modules
            if (id.includes('node_modules')) {
              return 'vendor'
            }

            // другие библиотеки
            // ...
          },
        },
      },
    },

    // Оптимизация зависимостей
    optimizeDeps: {
      include: ['vue', 'vue-i18n'],

      // Исключаем проблемные пакеты из pre-bundling
      exclude: [],
    },
  }
})
