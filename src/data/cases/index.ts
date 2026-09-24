/**
 * 가상 사례 레지스트리.
 * 모든 사례는 fictional: true이며 실제 출원 사건이 아니다.
 */
import type { DemoCase } from '@/lab/types'
import pat014 from './pat-014-demo.json'
import patAmd from './pat-amd-demo.json'
import tmSearch from './tm-search-demo.json'
import dsgPartial from './dsg-partial-demo.json'

const raw: unknown[] = [pat014, patAmd, tmSearch, dsgPartial]

/** 데이터 계약 검증 — 필드 오류가 있으면 빌드가 아닌 런타임에서도 명확히 실패한다. */
function asCase(c: unknown): DemoCase {
  const data = c as DemoCase
  if (!data || typeof data !== 'object') throw new Error('사례 데이터 형식 오류')
  if (data.fictional !== true) throw new Error(`사례 ${String(data.id)}는 fictional: true 여야 합니다`)
  if (!Array.isArray(data.documents) || !Array.isArray(data.facts) || !Array.isArray(data.rules)) {
    throw new Error(`사례 ${String(data.id)}의 documents/facts/rules 배열이 없습니다`)
  }
  return data
}

export const CASES: DemoCase[] = raw.map(asCase)

export const CASE_REGISTRY: Map<string, DemoCase> = new Map(CASES.map((c) => [c.id, c]))

export function getCase(id: string | null | undefined): DemoCase | undefined {
  if (!id) return undefined
  return CASE_REGISTRY.get(id)
}
