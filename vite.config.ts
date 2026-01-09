import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html'


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
  plugins: [
    react(),
    tailwindcss(),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_UMAMI_URL: env.VITE_UMAMI_URL,
          VITE_UMAMI_WEBSITE_ID: env.VITE_UMAMI_WEBSITE_ID,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 1234,
    proxy: {
      "/api": {
        target: "http://test.approaching-ai.com/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/nest": {
        target: "http://localhost:3210",
        changeOrigin: true,
      },
      "/static": {
        target: "http://test.approaching-ai.com/api",
        changeOrigin: true,
      },
    },
  }
  }
})
