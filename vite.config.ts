/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// GitHub Pages 멀티 페이지 진입점.
// 각 경로에 index.html이 있어야 하위 경로 직접 접속·새로고침이 동작한다.
const pages = {
  main: resolve(__dirname, 'index.html'),
  research: resolve(__dirname, 'research/index.html'),
  experience: resolve(__dirname, 'experience/index.html'),
  lab: resolve(__dirname, 'lab/index.html'),
  cases: resolve(__dirname, 'cases/index.html'),
  method: resolve(__dirname, 'method/index.html'),
  evaluation: resolve(__dirname, 'evaluation/index.html'),
  governance: resolve(__dirname, 'governance/index.html'),
  roadmap: resolve(__dirname, 'roadmap/index.html'),
  sources: resolve(__dirname, 'sources/index.html'),
}

export default defineConfig({
  // 커스텀 도메인(research.caipex.site)은 '/', 저장소 하위 경로는 '/REPO/'로 설정.
  // 예: VITE_BASE=/research.caipex.site/ npm run build
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: pages,
    },
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,tsx}'],
  },
})
