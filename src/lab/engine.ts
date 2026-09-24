/**
 * 결정적 시뮬레이터 — 외부 호출 없이 항상 같은 입력에 같은 결과를 낸다.
 * 순서: 적용 가능성 → 기준일·버전 → required Facts 존재·모호성 → 증거 위치 → 조건 → Trace
 * 필요한 Fact나 증거가 없으면 UNKNOWN, 권리유형·절차가 맞지 않으면 NOT_APPLICABLE.
 * 오직 필요한 문서와 근거가 갖춰진 경우에만 TRUE 또는 FALSE.
 */
import type {
  DemoCase,
  DemoDocument,
  DemoFact,
  DemoRule,
  RuleVersion,
  Verdict,
} from './types'

export interface EvalInput {
  selectedDocs: Record<string, string | null>
  eventDate: string | null
  requestedVersion: string // 'auto' 또는 특정 버전
  overrides: Record<string, boolean | string | null>
}

export interface ResolvedFact {
  fact: DemoFact
  status: 'AVAILABLE' | 'MISSING' | 'AMBIGUOUS'
  value: boolean | string | null
  spanIds: string[]
}

export type StepId = 'APPLICABILITY' | 'VERSION' | 'FACTS' | 'EVIDENCE' | 'CONDITION'

export interface EvalStep {
  step: StepId
  ok: boolean
  detailKey: string
}

export interface EvalResult {
  ruleId: string
  ruleVersion: string | null
  verdict: Verdict
  verdictReasonKey: string
  usedFactIds: string[]
  usedSpanIds: string[]
  missingFactIds: string[]
  ambiguousFactIds: string[]
  steps: EvalStep[]
}

/** 문서의 현재 변형(선택되지 않았으면 null) */
function currentVariant(doc: DemoDocument, selectedDocs: Record<string, string | null>): string | null {
  const chosen = selectedDocs[doc.id]
  if (chosen === undefined) return doc.availableAtStart ? doc.defaultVariant : null
  return chosen && chosen in doc.variants ? chosen : null
}

/** Fact 하나를 현재 문서 선택 상태에서 해석한다. */
export function resolveFact(
  fact: DemoFact,
  caseData: DemoCase,
  selectedDocs: Record<string, string | null>,
  overrides: Record<string, boolean | string | null>,
): ResolvedFact {
  const docId = fact.requiresDocId
  let variantKey: string | null = null
  if (docId) {
    const doc = caseData.documents.find((d) => d.id === docId)
    variantKey = doc ? currentVariant(doc, selectedDocs) : null
  }

  const override = overrides[fact.id]
  if (override !== undefined) {
    return {
      fact,
      status: 'AVAILABLE',
      value: override,
      spanIds: fact.sources['*'] ?? [],
    }
  }

  if (docId && !variantKey) {
    // 'absent' 값이 boolean/string이면 문서 부재 자체가 확정 가능한 사실이다
    // (예: 회전 도면 세트가 없으면 "회전 도면 없음 = false").
    // null이거나 정의되지 않았으면 문서가 필요하므로 MISSING.
    const absentVal = fact.values['absent']
    if (typeof absentVal === 'boolean' || typeof absentVal === 'string') {
      return {
        fact,
        status: 'AVAILABLE',
        value: absentVal,
        spanIds: fact.sources['absent'] ?? [],
      }
    }
    return {
      fact,
      status: 'MISSING',
      value: null,
      spanIds: fact.sources['absent'] ?? [],
    }
  }

  const doc = docId ? caseData.documents.find((d) => d.id === docId) : undefined
  const variant = doc?.variants[variantKey as string]
  const value = fact.values[variantKey ?? '*'] ?? fact.values['*'] ?? null
  const spanIds = fact.sources[variantKey ?? '*'] ?? fact.sources['*'] ?? []

  if (variant && variant.complete === false) {
    return { fact, status: 'AMBIGUOUS', value, spanIds }
  }
  if (value === null || value === undefined) {
    return { fact, status: 'AMBIGUOUS', value: null, spanIds }
  }
  return { fact, status: 'AVAILABLE', value, spanIds }
}

/** 버전 선택: 'auto'면 기준일 이하 최신 버전. 명시 선택이면 해당 버전의 시행일을 검사한다. */
export function resolveVersion(
  rule: DemoRule,
  requestedVersion: string,
  eventDate: string | null,
): { version: RuleVersion | null; failKey: string | null } {
  const sorted = [...rule.versions].sort((a, b) => (a.effectiveFrom < b.effectiveFrom ? 1 : -1))

  if (requestedVersion !== 'auto') {
    const found = sorted.find((v) => v.version === requestedVersion)
    if (!found) return { version: null, failKey: 'version-not-found' }
    if (eventDate && eventDate < found.effectiveFrom) {
      return { version: null, failKey: 'version-not-effective' }
    }
    return { version: found, failKey: null }
  }

  if (eventDate === null) return { version: sorted[sorted.length - 1], failKey: null }
  const applicable = sorted.filter((v) => eventDate >= v.effectiveFrom)
  if (applicable.length === 0) return { version: null, failKey: 'version-before-first-effective' }
  return { version: applicable[0], failKey: null }
}

/** 조건 레지스트리 — 사례 데이터는 condition 문자열만 참조하고 로직은 여기서 닫힌 형태로 관리한다. */
type ConditionFn = (resolved: Record<string, ResolvedFact>) => { verdict: Verdict; reasonKey: string }

const CONDITIONS: Record<string, ConditionFn> = {
  /** 종속항 추가구성의 대비 누락 검토 (PEQ-IS-014 스타일) */
  'claim-mapping-coverage': (f) => {
    const mapC = f['f_map_c']?.value
    const complete = f['f_oa_complete']?.value
    if (mapC === true) return { verdict: 'FALSE', reasonKey: 'mapping-found' }
    if (mapC === false && complete === true) return { verdict: 'TRUE', reasonKey: 'mapping-missing' }
    return { verdict: 'UNKNOWN', reasonKey: 'document-incomplete' }
  },
  /** 보정 전후 대비 대상 재평가 검토 */
  'amendment-recheck': (f) => {
    const changed = f['f_amend_changed']?.value
    const mapping = f['f_amended_mapping']?.value
    if (changed === false) return { verdict: 'FALSE', reasonKey: 'no-claim-change' }
    if (changed === true && mapping === true) return { verdict: 'FALSE', reasonKey: 'mapping-found' }
    if (changed === true && mapping === false) return { verdict: 'TRUE', reasonKey: 'recheck-candidate' }
    return { verdict: 'UNKNOWN', reasonKey: 'condition-unknown' }
  },
  /** 부분디자인 범위·회전 도면 대조 */
  'design-scope': (f) => {
    const partial = f['f_scope_partial']?.value
    const lines = f['f_partial_lines']?.value
    const rotated = f['f_rotated_views']?.value
    if (partial === false) return { verdict: 'FALSE', reasonKey: 'whole-scope' }
    if (partial === true && lines === true && rotated === false) {
      return { verdict: 'TRUE', reasonKey: 'rotation-missing-candidate' }
    }
    if (partial === true && lines === true && rotated === true) {
      return { verdict: 'FALSE', reasonKey: 'all-views-present' }
    }
    return { verdict: 'UNKNOWN', reasonKey: 'condition-unknown' }
  },
}

/** 검색 축별 유사표장 검토 후보 존재 여부 — 축별로 레지스트리에 등록한다. */
function tmAxisCondition(axis: 'STRING' | 'PHONETIC' | 'IMAGE'): ConditionFn {
  return (f) => {
    const key = `f_axis_${axis.toLowerCase()}`
    const v = f[key]?.value
    if (v === true) return { verdict: 'TRUE', reasonKey: 'candidates-exist' }
    if (v === false) return { verdict: 'FALSE', reasonKey: 'no-candidates' }
    return { verdict: 'UNKNOWN', reasonKey: 'axis-not-searched' }
  }
}

for (const axis of ['STRING', 'PHONETIC', 'IMAGE'] as const) {
  CONDITIONS[`tm-candidates:${axis}`] = tmAxisCondition(axis)
}

export function evaluateRule(caseData: DemoCase, rule: DemoRule, input: EvalInput): EvalResult {
  const steps: EvalStep[] = []

  // 1) 적용 가능성
  if (!rule.applicableRightTypes.includes(caseData.rightType)) {
    return {
      ruleId: rule.id,
      ruleVersion: null,
      verdict: 'NOT_APPLICABLE',
      verdictReasonKey: 'not-applicable-right',
      usedFactIds: [],
      usedSpanIds: [],
      missingFactIds: [],
      ambiguousFactIds: [],
      steps: [{ step: 'APPLICABILITY', ok: false, detailKey: 'right-type-mismatch' }],
    }
  }
  steps.push({ step: 'APPLICABILITY', ok: true, detailKey: 'ok' })

  // 2) 기준일·버전
  if (rule.dateSensitive && input.requestedVersion === 'auto' && input.eventDate === null) {
    return {
      ruleId: rule.id,
      ruleVersion: null,
      verdict: 'UNKNOWN',
      verdictReasonKey: 'event-date-unclear',
      usedFactIds: [],
      usedSpanIds: [],
      missingFactIds: [],
      ambiguousFactIds: [],
      steps: [...steps, { step: 'VERSION', ok: false, detailKey: 'event-date-unclear' }],
    }
  }
  const { version, failKey } = resolveVersion(rule, input.requestedVersion, input.eventDate)
  if (!version) {
    return {
      ruleId: rule.id,
      ruleVersion: null,
      verdict: 'UNKNOWN',
      verdictReasonKey: failKey ?? 'version-unknown',
      usedFactIds: [],
      usedSpanIds: [],
      missingFactIds: [],
      ambiguousFactIds: [],
      steps: [...steps, { step: 'VERSION', ok: false, detailKey: failKey ?? 'version-unknown' }],
    }
  }
  steps.push({ step: 'VERSION', ok: true, detailKey: 'ok' })

  // 3) required Facts 존재·모호성
  const resolved: Record<string, ResolvedFact> = {}
  const missing: string[] = []
  const ambiguous: string[] = []
  for (const factId of version.requiredFactIds) {
    const fact = caseData.facts.find((f) => f.id === factId)
    if (!fact) {
      missing.push(factId)
      continue
    }
    const r = resolveFact(fact, caseData, input.selectedDocs, input.overrides)
    resolved[factId] = r
    if (r.status === 'MISSING') missing.push(factId)
    else if (r.status === 'AMBIGUOUS') ambiguous.push(factId)
  }
  if (missing.length > 0) {
    return {
      ruleId: rule.id,
      ruleVersion: version.version,
      verdict: 'UNKNOWN',
      verdictReasonKey: 'required-facts-missing',
      usedFactIds: version.requiredFactIds.filter((id) => resolved[id]?.status === 'AVAILABLE'),
      usedSpanIds: Object.values(resolved)
        .filter((r) => r.status === 'AVAILABLE')
        .flatMap((r) => r.spanIds),
      missingFactIds: missing,
      ambiguousFactIds: ambiguous,
      steps: [...steps, { step: 'FACTS', ok: false, detailKey: 'required-facts-missing' }],
    }
  }
  if (ambiguous.length > 0) {
    return {
      ruleId: rule.id,
      ruleVersion: version.version,
      verdict: 'UNKNOWN',
      verdictReasonKey: 'required-facts-ambiguous',
      usedFactIds: version.requiredFactIds.filter((id) => resolved[id]?.status === 'AVAILABLE'),
      usedSpanIds: Object.values(resolved)
        .filter((r) => r.status === 'AVAILABLE')
        .flatMap((r) => r.spanIds),
      missingFactIds: missing,
      ambiguousFactIds: ambiguous,
      steps: [...steps, { step: 'FACTS', ok: false, detailKey: 'required-facts-ambiguous' }],
    }
  }
  steps.push({ step: 'FACTS', ok: true, detailKey: 'ok' })

  // 4) 증거 위치 존재 확인 — 근거가 현재 문서 선택 안에 실제로 있어야 한다
  const allSpans = new Set(
    caseData.documents.flatMap((doc) => {
      const v = currentVariant(doc, input.selectedDocs)
      if (!v) return []
      return (doc.variants[v]?.spans ?? []).map((s) => s.id)
    }),
  )
  const usedSpanIds = version.requiredFactIds.flatMap((id) => resolved[id].spanIds)
  for (const spanId of usedSpanIds) {
    if (!allSpans.has(spanId)) {
      return {
        ruleId: rule.id,
        ruleVersion: version.version,
        verdict: 'UNKNOWN',
        verdictReasonKey: 'evidence-location-missing',
        usedFactIds: version.requiredFactIds,
        usedSpanIds,
        missingFactIds: [],
        ambiguousFactIds: [],
        steps: [...steps, { step: 'EVIDENCE', ok: false, detailKey: 'evidence-location-missing' }],
      }
    }
  }
  steps.push({ step: 'EVIDENCE', ok: true, detailKey: 'ok' })

  // 5) 조건 평가
  const fn = CONDITIONS[rule.condition]
  if (!fn) {
    return {
      ruleId: rule.id,
      ruleVersion: version.version,
      verdict: 'UNKNOWN',
      verdictReasonKey: 'condition-unknown',
      usedFactIds: version.requiredFactIds,
      usedSpanIds,
      missingFactIds: [],
      ambiguousFactIds: [],
      steps: [...steps, { step: 'CONDITION', ok: false, detailKey: 'condition-unknown' }],
    }
  }
  const outcome = fn(resolved)
  steps.push({
    step: 'CONDITION',
    ok: outcome.verdict === 'TRUE' || outcome.verdict === 'FALSE',
    detailKey: 'ok',
  })

  return {
    ruleId: rule.id,
    ruleVersion: version.version,
    verdict: outcome.verdict,
    verdictReasonKey: outcome.reasonKey,
    usedFactIds: version.requiredFactIds,
    usedSpanIds,
    missingFactIds: [],
    ambiguousFactIds: [],
    steps,
  }
}

export function evaluateCase(caseData: DemoCase, input: EvalInput): EvalResult[] {
  return caseData.ruleIds
    .map((id) => caseData.rules.find((r) => r.id === id))
    .filter((r): r is DemoRule => Boolean(r))
    .map((rule) => evaluateRule(caseData, rule, input))
}

/** 사례의 규칙을 id로 찾는다 */
export function findRule(caseData: DemoCase, ruleId: string): DemoRule | undefined {
  return caseData.rules.find((r) => r.id === ruleId)
}
