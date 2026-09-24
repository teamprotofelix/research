/**
 * 결정적 엔진 검증 — 규칙 4상태(TRUE/FALSE/UNKNOWN/NOT_APPLICABLE),
 * 문서 누락·추가·반례 전환, 기준일·버전 해석.
 */
import { describe, expect, it } from 'vitest'
import { evaluateCase, evaluateRule, resolveFact, resolveVersion } from '@/lab/engine'
import { getCase } from '@/data/cases'
import type { EvalInput } from '@/lab/engine'

const pat014 = getCase('PAT-014-DEMO')!
const patAmd = getCase('PAT-AMD-DEMO')!
const tmSearch = getCase('TM-SEARCH-DEMO')!
const dsg = getCase('DSG-PARTIAL-DEMO')!

function input(partial: Partial<EvalInput>): EvalInput {
  return { selectedDocs: {}, eventDate: null, requestedVersion: 'auto', overrides: {}, ...partial }
}

describe('PEQ-IS-014 사례 — UNKNOWN → TRUE → FALSE', () => {
  it('통지서 없음 → UNKNOWN (필요 문서 부재)', () => {
    const results = evaluateCase(pat014, input({ selectedDocs: { doc_claims: 'claims_v1', doc_citations: 'cit_v1', doc_oa: null }, eventDate: '2026-08-10' }))
    const r = results[0]
    expect(r.verdict).toBe('UNKNOWN')
    expect(r.verdictReasonKey).toBe('required-facts-missing')
    expect(r.missingFactIds).toContain('f_map_c')
  })

  it('샘플 통지서(C 대비 없음) 추가 → TRUE 진단 후보', () => {
    const results = evaluateCase(pat014, input({ selectedDocs: { doc_claims: 'claims_v1', doc_citations: 'cit_v1', doc_oa: 'oa_v1' }, eventDate: '2026-08-10' }))
    const r = results[0]
    expect(r.verdict).toBe('TRUE')
    expect(r.verdictReasonKey).toBe('mapping-missing')
    expect(r.usedSpanIds).toContain('span_oa1b')
    expect(r.ruleVersion).toBe('1.0.0') // 2026-08-10은 1.1.0 시행 전
  })

  it('반례 통지서(C 대비 포함) → FALSE', () => {
    const results = evaluateCase(pat014, input({ selectedDocs: { doc_claims: 'claims_v1', doc_citations: 'cit_v1', doc_oa: 'oa_v2' }, eventDate: '2026-08-10' }))
    const r = results[0]
    expect(r.verdict).toBe('FALSE')
    expect(r.verdictReasonKey).toBe('mapping-found')
  })

  it('부분 통지서(마지막 장 누락) → UNKNOWN (모호)', () => {
    const results = evaluateCase(pat014, input({ selectedDocs: { doc_claims: 'claims_v1', doc_citations: 'cit_v1', doc_oa: 'oa_v3' }, eventDate: '2026-08-10' }))
    const r = results[0]
    expect(r.verdict).toBe('UNKNOWN')
    expect(r.verdictReasonKey).toBe('required-facts-ambiguous')
  })

  it('기준일 2026-09-05 → 자동 버전 1.1.0 적용', () => {
    const results = evaluateCase(pat014, input({ selectedDocs: { doc_claims: 'claims_v1', doc_citations: 'cit_v1', doc_oa: 'oa_v1' }, eventDate: '2026-09-05' }))
    expect(results[0].ruleVersion).toBe('1.1.0')
    expect(results[0].verdict).toBe('TRUE')
  })

  it('기준일 불명확 → UNKNOWN', () => {
    const results = evaluateCase(pat014, input({ selectedDocs: { doc_claims: 'claims_v1', doc_citations: 'cit_v1', doc_oa: 'oa_v1' }, eventDate: null }))
    expect(results[0].verdict).toBe('UNKNOWN')
    expect(results[0].verdictReasonKey).toBe('event-date-unclear')
  })

  it('명시 버전 1.1.0 + 기준일 이전 → UNKNOWN (미시행)', () => {
    const results = evaluateCase(pat014, input({ selectedDocs: { doc_claims: 'claims_v1', doc_citations: 'cit_v1', doc_oa: 'oa_v1' }, eventDate: '2026-08-10', requestedVersion: '1.1.0' }))
    expect(results[0].verdict).toBe('UNKNOWN')
    expect(results[0].verdictReasonKey).toBe('version-not-effective')
  })

  it('결정적 — 같은 입력이면 같은 결과', () => {
    const sel = { doc_claims: 'claims_v1', doc_citations: 'cit_v1', doc_oa: 'oa_v1' }
    const a = evaluateCase(pat014, input({ selectedDocs: sel, eventDate: '2026-08-10' }))
    const b = evaluateCase(pat014, input({ selectedDocs: sel, eventDate: '2026-08-10' }))
    expect(a).toEqual(b)
  })
})

describe('보정 시점 사례 — 기준일·버전·보정서', () => {
  it('보정서 없음 → UNKNOWN', () => {
    const results = evaluateCase(patAmd, input({ selectedDocs: { doc_claims_orig: 'claims_v1', doc_amendment: null, doc_oa2: 'oa2_v1' }, eventDate: '2026-07-15' }))
    expect(results[0].verdict).toBe('UNKNOWN')
  })

  it('보정서 A + 보정 전 기준 통지서 → TRUE 재대비 후보', () => {
    const results = evaluateCase(patAmd, input({ selectedDocs: { doc_claims_orig: 'claims_v1', doc_amendment: 'amd_v1', doc_oa2: 'oa2_v1' }, eventDate: '2026-07-15' }))
    expect(results[0].verdict).toBe('TRUE')
    expect(results[0].verdictReasonKey).toBe('recheck-candidate')
  })

  it('반례 통지서(보정 후 기준) → FALSE', () => {
    const results = evaluateCase(patAmd, input({ selectedDocs: { doc_claims_orig: 'claims_v1', doc_amendment: 'amd_v1', doc_oa2: 'oa2_v2' }, eventDate: '2026-07-15' }))
    expect(results[0].verdict).toBe('FALSE')
  })

  it('규칙 시행(2026-06-01) 이전 기준일 → UNKNOWN', () => {
    const results = evaluateCase(patAmd, input({ selectedDocs: { doc_claims_orig: 'claims_v1', doc_amendment: 'amd_v1', doc_oa2: 'oa2_v1' }, eventDate: '2026-05-20' }))
    expect(results[0].verdict).toBe('UNKNOWN')
    expect(results[0].verdictReasonKey).toBe('version-before-first-effective')
  })

  it('기준일 불명확 → UNKNOWN', () => {
    const results = evaluateCase(patAmd, input({ selectedDocs: { doc_claims_orig: 'claims_v1', doc_amendment: 'amd_v1', doc_oa2: 'oa2_v1' }, eventDate: null }))
    expect(results[0].verdictReasonKey).toBe('event-date-unclear')
  })
})

describe('상표 사례 — 검색 축 토글', () => {
  const allAxes = { doc_mark: 'mark_v1', doc_axis_string: 'axs_v1', doc_axis_phonetic: 'axp_v1', doc_axis_image: 'axi_v1' }

  it('모든 축 켜짐 → 세 규칙 모두 TRUE (후보 존재)', () => {
    const results = evaluateCase(tmSearch, input({ selectedDocs: allAxes, eventDate: '2026-08-10' }))
    expect(results).toHaveLength(3)
    results.forEach((r) => expect(r.verdict).toBe('TRUE'))
  })

  it('이미지 축 끄면 해당 규칙만 UNKNOWN', () => {
    const results = evaluateCase(tmSearch, input({ selectedDocs: { ...allAxes, doc_axis_image: null }, eventDate: '2026-08-10' }))
    const byId = Object.fromEntries(results.map((r) => [r.ruleId, r]))
    expect(byId['TM-STR-001'].verdict).toBe('TRUE')
    expect(byId['TM-PHN-001'].verdict).toBe('TRUE')
    expect(byId['TM-IMG-001'].verdict).toBe('UNKNOWN')
    expect(byId['TM-IMG-001'].verdictReasonKey).toBe('required-facts-missing')
  })

  it('권리유형 불일치 → NOT_APPLICABLE (엔진 단위)', () => {
    const rule = tmSearch.rules[0]
    const fake = { ...tmSearch, rightType: 'PATENT' as const }
    const r = evaluateRule(fake, rule, input({ selectedDocs: allAxes, eventDate: '2026-08-10' }))
    expect(r.verdict).toBe('NOT_APPLICABLE')
    expect(r.verdictReasonKey).toBe('not-applicable-right')
  })
})

describe('디자인 사례 — 범위·회전 도면', () => {
  const base = { doc_scope: 'scp_partial', doc_drawings: 'dwg_v1', doc_views: null }

  it('부분 범위 + 회전 도면 없음 → TRUE', () => {
    const results = evaluateCase(dsg, input({ selectedDocs: base, eventDate: '2026-08-10' }))
    expect(results[0].verdict).toBe('TRUE')
    expect(results[0].verdictReasonKey).toBe('rotation-missing-candidate')
  })

  it('회전 도면 추가 → FALSE', () => {
    const results = evaluateCase(dsg, input({ selectedDocs: { ...base, doc_views: 'rv_v1' }, eventDate: '2026-08-10' }))
    expect(results[0].verdict).toBe('FALSE')
    expect(results[0].verdictReasonKey).toBe('all-views-present')
  })

  it('전체 범위 지정 → FALSE (조건 미충족)', () => {
    const results = evaluateCase(dsg, input({ selectedDocs: { doc_scope: 'scp_whole', doc_drawings: 'dwg_v1', doc_views: null }, eventDate: '2026-08-10' }))
    expect(results[0].verdict).toBe('FALSE')
    expect(results[0].verdictReasonKey).toBe('whole-scope')
  })

  it('보호범위 지정서 제외 → UNKNOWN', () => {
    const results = evaluateCase(dsg, input({ selectedDocs: { doc_scope: null, doc_drawings: 'dwg_v1', doc_views: null }, eventDate: '2026-08-10' }))
    expect(results[0].verdict).toBe('UNKNOWN')
  })
})

describe('Fact 해석과 버전 선택', () => {
  it('문서가 없는 Fact는 MISSING', () => {
    const fact = pat014.facts.find((f) => f.id === 'f_map_c')!
    const r = resolveFact(fact, pat014, { doc_oa: null }, {})
    expect(r.status).toBe('MISSING')
    expect(r.value).toBeNull()
  })

  it('불완전 변형의 Fact는 AMBIGUOUS', () => {
    const fact = pat014.facts.find((f) => f.id === 'f_map_c')!
    const r = resolveFact(fact, pat014, { doc_oa: 'oa_v3' }, {})
    expect(r.status).toBe('AMBIGUOUS')
  })

  it('override가 값과 상태를 대체한다', () => {
    const fact = pat014.facts.find((f) => f.id === 'f_map_c')!
    const r = resolveFact(fact, pat014, { doc_oa: null }, { f_map_c: true })
    expect(r.status).toBe('AVAILABLE')
    expect(r.value).toBe(true)
  })

  it('버전 자동 선택은 기준일 이하 최신', () => {
    const rule = pat014.rules[0]
    expect(resolveVersion(rule, 'auto', '2026-08-10').version?.version).toBe('1.0.0')
    expect(resolveVersion(rule, 'auto', '2026-09-10').version?.version).toBe('1.1.0')
    expect(resolveVersion(rule, 'auto', '2025-01-01').version).toBeNull()
  })
})
