/** 세션 상태의 반응형 스토어 — 실험실과 체험 상태 칩이 같은 상태를 공유한다. */
import type { SessionState } from '@/lab/types'
import { EMPTY_SESSION, clearSession, loadSession, saveSession } from './session'

type Listener = (s: SessionState) => void

let current: SessionState = loadSession()
const listeners = new Set<Listener>()

export function getSessionState(): SessionState {
  return current
}

export function updateSessionState(updater: (s: SessionState) => SessionState): SessionState {
  current = updater(current)
  try {
    saveSession(current)
  } catch {
    /* noop */
  }
  listeners.forEach((l) => l(current))
  return current
}

export function resetSessionState(): void {
  current = { ...EMPTY_SESSION }
  clearSession()
  listeners.forEach((l) => l(current))
}

export function subscribeSession(l: Listener): () => void {
  listeners.add(l)
  return () => {
    listeners.delete(l)
  }
}
