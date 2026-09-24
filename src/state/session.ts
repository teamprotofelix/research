/**
 * 사건 선택·검토 기록은 sessionStorage에만 둔다.
 * 공유 URL은 사례 ID·모드·문서 선택 ID·Rule 버전 같은 비민감한 열거값만 담고,
 * 복원 전에 반드시 검증한다. 개인 문서 전문이나 자유 입력 메모는 URL에 넣지 않는다.
 */
import type { DemoCase, SessionState } from '@/lab/types'

const KEY = 'eqr.session'

export const EMPTY_SESSION: SessionState = {
  caseId: null,
  selectedDocs: {},
  eventDate: null,
  ruleVersionChoice: 'auto',
  overrides: {},
  reviewLog: [],
  step: 0,
}

export function loadSession(): SessionState {
  try {
    const raw = sessionStorage.getItem(KEY)
    if (!raw) return { ...EMPTY_SESSION }
    const parsed = JSON.parse(raw) as Partial<SessionState>
    return {
      caseId: typeof parsed.caseId === 'string' ? parsed.caseId : null,
      selectedDocs: parsed.selectedDocs && typeof parsed.selectedDocs === 'object' ? parsed.selectedDocs : {},
      eventDate: typeof parsed.eventDate === 'string' ? parsed.eventDate : null,
      ruleVersionChoice: typeof parsed.ruleVersionChoice === 'string' ? parsed.ruleVersionChoice : 'auto',
      overrides: parsed.overrides && typeof parsed.overrides === 'object' ? parsed.overrides : {},
      reviewLog: Array.isArray(parsed.reviewLog) ? parsed.reviewLog : [],
      step: typeof parsed.step === 'number' ? parsed.step : 0,
    }
  } catch {
    return { ...EMPTY_SESSION }
  }
}

export function saveSession(s: SessionState): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(s))
  } catch {
    /* 저장 불가 환경에서는 무시 */
  }
}

export function clearSession(): void {
  try {
    sessionStorage.removeItem(KEY)
  } catch {
    /* noop */
  }
}

/** 사례에 대한 기본 문서 선택 상태(시작 시점) */
export function initialDocsFor(caseData: DemoCase): Record<string, string | null> {
  const out: Record<string, string | null> = {}
  for (const doc of caseData.documents) {
    out[doc.id] = doc.availableAtStart ? doc.defaultVariant : null
  }
  return out
}

/* ── 공유 URL (해시) ── */

export interface SharePayload {
  caseId: string
  selectedDocs: Record<string, string>
  ruleVersionChoice: string
  eventDate: string | null
}

function isValidIsoDate(s: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s))
}

/** 해시의 공유 파라미터를 사례 레지스트리로 검증해 복원한다. */
export function parseSharePayload(hash: string, registry: Map<string, DemoCase>): SharePayload | null {
  const q = hash.startsWith('#') ? hash.slice(1) : hash
  const i = q.indexOf('?')
  const params = new URLSearchParams(i >= 0 ? q.slice(i + 1) : '')
  const caseId = params.get('case')
  if (!caseId) return null
  const caseData = registry.get(caseId)
  if (!caseData) return null

  const selectedDocs: Record<string, string> = {}
  const docsParam = params.get('docs')
  if (docsParam) {
    for (const pair of docsParam.split(',')) {
      const [docId, variantId] = pair.split(':')
      const doc = caseData.documents.find((d) => d.id === docId)
      if (!doc || !variantId || !(variantId in doc.variants)) continue
      selectedDocs[docId] = variantId
    }
  }

  const ruleVersionChoice = params.get('rule') ?? 'auto'
  const ruleOk =
    ruleVersionChoice === 'auto' ||
    caseData.rules.some((r) => r.versions.some((v) => v.version === ruleVersionChoice))
  if (!ruleOk) return null

  const eventDate = params.get('date')
  if (eventDate && !isValidIsoDate(eventDate)) return null

  return { caseId, selectedDocs, ruleVersionChoice, eventDate }
}

/** 현재 사건 상태를 공유용 해시 문자열로 만든다. */
export function buildShareHash(p: SharePayload): string {
  const params = new URLSearchParams()
  params.set('case', p.caseId)
  const docs = Object.entries(p.selectedDocs)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}:${v}`)
  if (docs.length > 0) params.set('docs', docs.join(','))
  if (p.ruleVersionChoice !== 'auto') params.set('rule', p.ruleVersionChoice)
  if (p.eventDate) params.set('date', p.eventDate)
  return `#/lab?${params.toString()}`
}
