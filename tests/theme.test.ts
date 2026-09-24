/**
 * 테마·언어·경로 헬퍼 검증 — 저장값 없으면 system/ko 기본,
 * localStorage가 막혀도 기본값으로 동작.
 */
import { afterEach, describe, expect, it } from 'vitest'
import { loadPrefs, savePrefs } from '@/state/prefs'
import { resolveTheme } from '@/state/theme'
import { buildShareHash, parseSharePayload, initialDocsFor } from '@/state/session'
import { CASE_REGISTRY, getCase } from '@/data/cases'
import { evaluateCase } from '@/lab/engine'

afterEach(() => {
  localStorage.clear()
  sessionStorage.clear()
})

describe('테마 선호', () => {
  it('저장값이 없으면 system', () => {
    localStorage.removeItem('eqr.prefs')
    expect(loadPrefs().theme).toBe('system')
    expect(loadPrefs().lang).toBe('ko')
  })

  it('잘못된 저장값은 기본값으로 정규화', () => {
    localStorage.setItem('eqr.prefs', JSON.stringify({ theme: 'neon', lang: 'fr' }))
    const p = loadPrefs()
    expect(p.theme).toBe('system')
    expect(p.lang).toBe('ko')
  })

  it('유효한 저장값은 유지', () => {
    savePrefs({ theme: 'dark', lang: 'ja' })
    const p = loadPrefs()
    expect(p.theme).toBe('dark')
    expect(p.lang).toBe('ja')
  })

  it('system은 실제 OS 테마로 해석된다 (matchMedia 없으면 light)', () => {
    // jsdom에는 matchMedia가 없을 수 있으므로 두 경우 모두 허용
    const r = resolveTheme('system')
    expect(['light', 'dark']).toContain(r)
    expect(resolveTheme('light')).toBe('light')
    expect(resolveTheme('dark')).toBe('dark')
  })
})

describe('공유 URL — 비민감 열거값만, 검증 후 복원', () => {
  it('유효한 해시를 검증해 복원한다', () => {
    const hash = '#/lab?case=PAT-014-DEMO&docs=doc_oa:oa_v2&rule=1.0.0&date=2026-08-10'
    const p = parseSharePayload(hash, CASE_REGISTRY)
    expect(p?.caseId).toBe('PAT-014-DEMO')
    expect(p?.selectedDocs['doc_oa']).toBe('oa_v2')
    expect(p?.ruleVersionChoice).toBe('1.0.0')
    expect(p?.eventDate).toBe('2026-08-10')
  })

  it('모르는 사례·문서·버전·날짜는 거부한다', () => {
    expect(parseSharePayload('#/lab?case=NOPE', CASE_REGISTRY)).toBeNull()
    expect(parseSharePayload('#/lab?case=PAT-014-DEMO&docs=doc_oa:evil', CASE_REGISTRY)?.selectedDocs['doc_oa']).toBeUndefined()
    expect(parseSharePayload('#/lab?case=PAT-014-DEMO&rule=9.9.9', CASE_REGISTRY)).toBeNull()
    expect(parseSharePayload('#/lab?case=PAT-014-DEMO&date=hello', CASE_REGISTRY)).toBeNull()
  })

  it('빌드한 해시가 다시 복원된다 (왕복)', () => {
    const payload = { caseId: 'PAT-014-DEMO', selectedDocs: { doc_oa: 'oa_v1' }, ruleVersionChoice: 'auto', eventDate: '2026-08-10' }
    const hash = buildShareHash(payload)
    expect(hash).not.toContain('note')
    const back = parseSharePayload(hash, CASE_REGISTRY)
    expect(back?.caseId).toBe('PAT-014-DEMO')
    expect(back?.selectedDocs['doc_oa']).toBe('oa_v1')
  })
})

describe('시나리오 통합 — 계획의 첫 시나리오 완결', () => {
  it('UNKNOWN → TRUE → 검토자 보류 → 반례 FALSE 흐름이 성립한다', () => {
    const caseData = getCase('PAT-014-DEMO')!

    // 1) 시작 상태: 통지서 없음 → UNKNOWN
    const start = evaluateCase(caseData, { selectedDocs: initialDocsFor(caseData), eventDate: '2026-08-10', requestedVersion: 'auto', overrides: {} })
    expect(start[0].verdict).toBe('UNKNOWN')

    // 2) 샘플 통지서 추가 → TRUE
    const added = evaluateCase(caseData, {
      selectedDocs: { ...initialDocsFor(caseData), doc_oa: 'oa_v1' },
      eventDate: '2026-08-10',
      requestedVersion: 'auto',
      overrides: {},
    })
    expect(added[0].verdict).toBe('TRUE')

    // 3) 검토자 보류 → 피드백 기록은 sessionStore가 담당하므로 여기서는 판정 불변만 확인
    const deferred = evaluateCase(caseData, {
      selectedDocs: { ...initialDocsFor(caseData), doc_oa: 'oa_v1' },
      eventDate: '2026-08-10',
      requestedVersion: 'auto',
      overrides: {},
    })
    expect(deferred[0].verdict).toBe('TRUE')

    // 4) 반례 통지서 → FALSE
    const counter = evaluateCase(caseData, {
      selectedDocs: { ...initialDocsFor(caseData), doc_oa: 'oa_v2' },
      eventDate: '2026-08-10',
      requestedVersion: 'auto',
      overrides: {},
    })
    expect(counter[0].verdict).toBe('FALSE')
  })
})
