/** 스모크 테스트 — 주요 페이지가 런타임 오류 없이 렌더되는지 확인한다. */
import { describe, expect, it } from 'vitest'
import { act } from 'react'
import { createRoot } from 'react-dom/client'
import type { ReactNode } from 'react'
import { App } from '@/components/App'
import { HomePage } from '@/pages/HomePage'
import { ResearchPage } from '@/pages/ResearchPage'
import { ExperiencePage } from '@/pages/ExperiencePage'
import { LabPage } from '@/pages/LabPage'
import { CasesPage } from '@/pages/CasesPage'
import { MethodPage } from '@/pages/MethodPage'
import { EvaluationPage } from '@/pages/EvaluationPage'
import { GovernancePage } from '@/pages/GovernancePage'
import { RoadmapPage } from '@/pages/RoadmapPage'
import { SourcesPage } from '@/pages/SourcesPage'

function render(node: ReactNode): { text: string; unmount: () => void } {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const root = createRoot(container)
  act(() => {
    root.render(<App>{node}</App>)
  })
  return {
    text: container.textContent ?? '',
    unmount: () =>
      act(() => {
        root.unmount()
        container.remove()
      }),
  }
}

const pages: Array<[string, ReactNode, string]> = [
  ['홈', <HomePage />, '심사품질'],
  ['연구 개요', <ResearchPage />, '연구'],
  ['미래의 하루', <ExperiencePage />, '역할'],
  ['사건 실험실', <LabPage />, '사건'],
  ['권리별 사례', <CasesPage />, '사례'],
  ['연구 방법', <MethodPage />, 'UNKNOWN'],
  ['평가 시뮬레이터', <EvaluationPage />, '가정값'],
  ['거버넌스', <GovernancePage />, '자료'],
  ['로드맵', <RoadmapPage />, '시나리오'],
  ['자료와 용어', <SourcesPage />, '용어집'],
]

describe.each(pages)('%s 페이지', (_name, node, expectText) => {
  it('런타임 오류 없이 렌더되고 본문 문구가 있다', () => {
    const { text, unmount } = render(node)
    expect(text.length).toBeGreaterThan(100)
    expect(text).toContain(expectText)
    unmount()
  })
})

describe('실험실 상호작용 스모크', () => {
  it('언어 전환 후에도 실험실이 유지된다', () => {
    const { text, unmount } = render(<LabPage />)
    expect(text).toContain('사건')
    unmount()
  })
})
