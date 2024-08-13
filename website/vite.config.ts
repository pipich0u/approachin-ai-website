import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 5120,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: false, // 编译后默认打开浏览器
    host: '0.0.0.0',  // 域名
    port: 8080,  // 端口
    proxy: {
      '/api': {
        target: 'http://localhost:11123', // 你的后端服务器地址
        changeOrigin: true, // 是否允许跨域
      }
    }
  },

  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          // vue vue-router合并打包
          vue: ['vue', 'vue-router'],
          lodash: ['lodash'],
          // 两个文件合并成一个a文件
          helloWorld: ['src/components/a.vue', 'src/components/b.vue'],
        }
      }
    }
  },
})
