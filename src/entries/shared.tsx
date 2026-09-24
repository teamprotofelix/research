/** 모든 페이지 진입점이 공유하는 부트스트랩 — CSS와 마운트 로직. */
import '@/styles/tokens.css'
import '@/styles/base.css'
import '@/styles/components.css'
import '@/styles/pages.css'
import { createRoot } from 'react-dom/client'
import type { ReactNode } from 'react'
import { App } from '@/components/App'

export function mount(page: ReactNode): void {
  const el = document.getElementById('root')
  if (!el) throw new Error('#root 요소가 없습니다')
  createRoot(el).render(<App>{page}</App>)
}
