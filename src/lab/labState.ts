/** 실험실 세션 상태 훅과 액션 — sessionStore를 useSyncExternalStore로 구독한다. */
import { useCallback, useSyncExternalStore } from 'react'
import type { ReviewEntry, SessionState } from './types'
import { getSessionState, resetSessionState, subscribeSession, updateSessionState } from '@/state/sessionStore'
import { getCase } from '@/data/cases'
import { initialDocsFor } from '@/state/session'

export function useSessionState(): SessionState {
  return useSyncExternalStore(subscribeSession, getSessionState)
}

/** 사례별 기본 기준일·선택지 — 모두 가상의 날짜다. */
export const CASE_DEFAULTS: Record<string, { eventDate: string; dateOptions: Array<string | null> }> = {
  'PAT-014-DEMO': { eventDate: '2026-08-10', dateOptions: ['2026-08-10', '2026-09-05', null] },
  'PAT-AMD-DEMO': { eventDate: '2026-07-15', dateOptions: ['2026-07-15', '2026-05-20', null] },
  'TM-SEARCH-DEMO': { eventDate: '2026-08-10', dateOptions: ['2026-08-10', null] },
  'DSG-PARTIAL-DEMO': { eventDate: '2026-08-10', dateOptions: ['2026-08-10', null] },
}

let reviewSeq = 0

export function useLabActions() {
  const selectCase = useCallback((caseId: string) => {
    const caseData = getCase(caseId)
    if (!caseData) return
    const def = CASE_DEFAULTS[caseId] ?? { eventDate: '2026-08-10', dateOptions: [] }
    updateSessionState((s) => ({
      ...s,
      caseId,
      selectedDocs: initialDocsFor(caseData),
      eventDate: def.eventDate,
      ruleVersionChoice: 'auto',
      overrides: {},
      step: 0,
    }))
  }, [])

  const setStep = useCallback((step: number) => {
    updateSessionState((s) => ({ ...s, step }))
  }, [])

  const setDoc = useCallback((docId: string, variantId: string | null) => {
    updateSessionState((s) => ({
      ...s,
      selectedDocs: { ...s.selectedDocs, [docId]: variantId },
    }))
  }, [])

  const setEventDate = useCallback((date: string | null) => {
    updateSessionState((s) => ({ ...s, eventDate: date }))
  }, [])

  const setRuleVersion = useCallback((v: string) => {
    updateSessionState((s) => ({ ...s, ruleVersionChoice: v }))
  }, [])

  const setOverride = useCallback((factId: string, value: boolean | string | null) => {
    updateSessionState((s) => {
      const overrides = { ...s.overrides }
      if (value === null) delete overrides[factId]
      else overrides[factId] = value
      return { ...s, overrides }
    })
  }, [])

  const addReview = useCallback((entry: Omit<ReviewEntry, 'id' | 'at'>) => {
    reviewSeq += 1
    const full: ReviewEntry = {
      ...entry,
      id: `review-${Date.now()}-${reviewSeq}`,
      at: Date.now(),
    }
    updateSessionState((s) => ({ ...s, reviewLog: [...s.reviewLog, full], step: 4 }))
  }, [])

  const reset = useCallback(() => {
    resetSessionState()
    const first = getCase('PAT-014-DEMO')
    if (first) {
      updateSessionState((s) => ({
        ...s,
        caseId: first.id,
        selectedDocs: initialDocsFor(first),
        eventDate: (CASE_DEFAULTS[first.id] ?? {}).eventDate ?? null,
        ruleVersionChoice: 'auto',
        overrides: {},
        step: 0,
      }))
    }
  }, [])

  const clearReviews = useCallback(() => {
    updateSessionState((s) => ({ ...s, reviewLog: [] }))
  }, [])

  return { selectCase, setStep, setDoc, setEventDate, setRuleVersion, setOverride, addReview, reset, clearReviews }
}
