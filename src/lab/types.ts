/**
 * 가상 사례 데이터 계약 — 개발계획 5.1의 구조를 따른다.
 * 사례 본문은 i18n 사전의 키만 참조하고, 값은 이 파일에 두지 않는다.
 */

export type Verdict = 'TRUE' | 'FALSE' | 'UNKNOWN' | 'NOT_APPLICABLE'
export type RightType = 'PATENT' | 'UTILITY_MODEL' | 'TRADEMARK' | 'DESIGN'
export type EvidenceOrigin = 'EXAMINER_CITED' | 'AI_DISCOVERED' | 'CASE_DOCUMENT'
export type FactStatus = 'AVAILABLE' | 'MISSING' | 'AMBIGUOUS'

export interface DemoSpan {
  id: string
  textKey: string
  locationKey: string
}

export interface DemoDocVariant {
  versionLabelKey: string
  complete: boolean
  spans: DemoSpan[]
}

export interface DemoDocument {
  id: string
  kind: string
  titleKey: string
  availableAtStart: boolean
  defaultVariant: string
  /** 이 문서가 심사관 인용 자료인지, AI가 새로 찾은 후보인지, 사건 문서인지 */
  origin: EvidenceOrigin
  variants: Record<string, DemoDocVariant>
}

export interface DemoFact {
  id: string
  labelKey: string
  explainKey: string
  /** '*' = 기본값, 'absent' = 문서 없음, variantId = 해당 변형 선택 시 값 */
  values: Record<string, boolean | string | null>
  /** variantId(또는 'absent', '*') → 증거 위치(span) 목록 */
  sources: Record<string, string[]>
  status: FactStatus
  extractor: 'PREPARED_DEMO' | 'USER_EDIT'
  /** 이 Fact는 해당 문서가 있어야 추출 가능하다 */
  requiresDocId?: string
}

export interface RuleVersion {
  version: string
  effectiveFrom: string // ISO 날짜
  requiredFactIds: string[]
  conditionKey: string
  changelogKey: string
}

export interface DemoRule {
  id: string
  titleKey: string
  applicableRightTypes: RightType[]
  authorityLabelKey: string
  /** 엔진의 조건 레지스트리에서 쓰는 조건 식별자 */
  condition: string
  /** 최신 버전이 먼저 오도록 정렬 */
  versions: RuleVersion[]
  /** 기준일이 진단에 직접 영향을 주는 규칙 — 기준일 불명확 시 UNKNOWN */
  dateSensitive?: boolean
}

export interface SearchCandidate {
  id: string
  markKey: string
  /** 모의 유사도 점수(0~100). 법적 유사판단이 아니라는 라벨이 항상 함께 표시된다. */
  score: number
  axis: 'STRING' | 'PHONETIC' | 'IMAGE'
}

export interface DemoCase {
  id: string
  rightType: RightType
  fictional: true
  titleKey: string
  blurbKey: string
  /** 스테퍼 첫 화면에서 보여줄 사건 개요 문단 키 목록 */
  summaryKeys: string[]
  documents: DemoDocument[]
  examinerCitedReferenceIds: string[]
  aiDiscoveredCandidateIds: string[]
  facts: DemoFact[]
  ruleIds: string[]
  /** 규칙 정의(ruleIds 순서로 표시) */
  rules: DemoRule[]
  /** 상표·디자인 사례의 모의 검색 후보 */
  candidates?: SearchCandidate[]
  /** 디자인 사례의 도면 이미지(인라인 SVG 컴포넌트 id) */
  figureIds?: string[]
}

/** 사람 검토 기록 — 브라우저 세션 안의 시연 기록 */
export interface ReviewEntry {
  id: string
  caseId: string
  ruleId: string
  ruleVersion: string
  verdict: Verdict
  decision: 'CONFIRMED' | 'DEFERRED' | 'REJECTED'
  reasonKey: string
  note?: string
  at: number
}

/** 사건 선택·검토 기록 — sessionStorage에만 둔다 */
export interface SessionState {
  caseId: string | null
  /** docId → variantId | null(제외됨) */
  selectedDocs: Record<string, string | null>
  eventDate: string | null
  /** 'auto' | 특정 버전 문자열 */
  ruleVersionChoice: string
  overrides: Record<string, boolean | string | null>
  reviewLog: ReviewEntry[]
  step: number
}
