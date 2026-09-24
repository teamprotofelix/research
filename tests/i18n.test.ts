/**
 * 다국어 무결성 — en/ja는 ko와 같은 키 구조를 가져야 하고,
 * 빈 값이 없어야 한다. 번역이 비어 있으면 빌드 검사(테스트)가 실패한다.
 */
import { describe, expect, it } from 'vitest'
import { ko } from '@/i18n/ko'
import { en } from '@/i18n/en'
import { ja } from '@/i18n/ja'

type Node = string | { [k: string]: Node }

function flatten(node: Node, prefix = ''): Record<string, string> {
  let out: Record<string, string> = {}
  for (const [k, v] of Object.entries(node)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (typeof v === 'string') out[key] = v
    else out = { ...out, ...flatten(v, key) }
  }
  return out
}

function collectKeys(node: Node, prefix = ''): Set<string> {
  const out = new Set<string>()
  for (const [k, v] of Object.entries(node)) {
    const key = prefix ? `${prefix}.${k}` : k
    out.add(key)
    if (typeof v !== 'string') for (const sub of collectKeys(v, key)) out.add(sub)
  }
  return out
}

const koFlat = flatten(ko as unknown as Node)
const enFlat = flatten(en as unknown as Node)
const jaFlat = flatten(ja as unknown as Node)

const koKeys = collectKeys(ko as unknown as Node)
const enKeys = collectKeys(en as unknown as Node)
const jaKeys = collectKeys(ja as unknown as Node)

describe('언어 사전 무결성', () => {
  it('en에 ko의 모든 키가 있다', () => {
    const missing = [...koKeys].filter((k) => !enKeys.has(k))
    expect(missing).toEqual([])
  })

  it('ja에 ko의 모든 키가 있다', () => {
    const missing = [...koKeys].filter((k) => !jaKeys.has(k))
    expect(missing).toEqual([])
  })

  it('en·ja에 ko에 없는 키가 없다 (구조 동일)', () => {
    const extraEn = [...enKeys].filter((k) => !koKeys.has(k))
    const extraJa = [...jaKeys].filter((k) => !koKeys.has(k))
    expect(extraEn).toEqual([])
    expect(extraJa).toEqual([])
  })

  it('번역 값이 비어 있지 않다', () => {
    const empty = [...Object.entries(koFlat), ...Object.entries(enFlat), ...Object.entries(jaFlat)].filter(([, v]) => v.trim() === '')
    expect(empty.map(([k]) => k)).toEqual([])
  })

  it('모든 언어에서 {var} 플레이스홀더 개수가 일치한다', () => {
    for (const key of koKeys) {
      const k = koFlat[key]
      if (!k) continue
      const vars = (k.match(/\{\w+\}/g) ?? []).sort().join(',')
      const ev = (enFlat[key]?.match(/\{\w+\}/g) ?? []).sort().join(',')
      const jv = (jaFlat[key]?.match(/\{\w+\}/g) ?? []).sort().join(',')
      if (vars !== ev || vars !== jv) {
        // 플레이스홀더 이름 집합이 같아야 한다
        const set = (s: string) => new Set(s ? s.split(',') : [])
        const kSet = set(vars)
        const eSet = set(ev)
        const jSet = set(jv)
        expect([...eSet].filter((x) => !kSet.has(x)), `en의 ${key}에 불필요한 플레이스홀더`).toEqual([])
        expect([...kSet].filter((x) => !eSet.has(x)), `en의 ${key}에 누락된 플레이스홀더`).toEqual([])
        expect([...kSet].filter((x) => !jSet.has(x)), `ja의 ${key}에 누락된 플레이스홀더`).toEqual([])
      }
    }
  })

  it('실험실에서 참조하는 키가 모두 존재한다 (사례 데이터 계약)', async () => {
    const { CASES } = await import('@/data/cases')
    for (const c of CASES) {
      for (const d of c.documents) {
        expect(koFlat[d.titleKey], `${d.id}의 titleKey`).toBeTruthy()
        for (const v of Object.values(d.variants)) {
          expect(koFlat[v.versionLabelKey], `${d.id}의 versionLabelKey`).toBeTruthy()
          for (const s of v.spans) {
            expect(koFlat[s.textKey], `${s.id}의 textKey`).toBeTruthy()
            expect(koFlat[s.locationKey], `${s.id}의 locationKey`).toBeTruthy()
          }
        }
      }
      for (const f of c.facts) {
        expect(koFlat[f.labelKey], `${f.id}의 labelKey`).toBeTruthy()
        expect(koFlat[f.explainKey], `${f.id}의 explainKey`).toBeTruthy()
      }
      for (const r of c.rules) {
        expect(koFlat[r.titleKey], `${r.id}의 titleKey`).toBeTruthy()
        expect(koFlat[r.authorityLabelKey], `${r.id}의 authorityLabelKey`).toBeTruthy()
        for (const v of r.versions) {
          expect(koFlat[v.conditionKey], `${r.id} ${v.version}의 conditionKey`).toBeTruthy()
          expect(koFlat[v.changelogKey], `${r.id} ${v.version}의 changelogKey`).toBeTruthy()
        }
      }
      for (const cand of c.candidates ?? []) {
        expect(koFlat[cand.markKey], `${cand.id}의 markKey`).toBeTruthy()
      }
    }
  })
})
