import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 设置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 自动导入全局变量和混入
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/variables.scss" as *;
        @use "@/styles/mixins.scss" as *;
      `
      }
    }
  }
})
