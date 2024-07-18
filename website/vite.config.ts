import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), basicSsl()],
  server: {
    // 启用 HTTPS
    host: '0.0.0.0',
    https: true,
    port: 8991,
    // 如果你有自定义的证书和密钥文件，可以这样指定它们的路径
    // https: {
    //   key: fs.readFileSync('/path/to/server.key'),
    //   cert: fs.readFileSync('/path/to/server.crt')
    // }
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8993',
        changeOrigin: true, // 是否允许跨域
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
