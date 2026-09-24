/**
 * 테마 — 선택값은 정확히 system | light | dark.
 * 새 방문자(저장값 없음)는 system으로 시작하고,
 * system 모드는 OS 설정 변경에 즉시 반응한다. 수동 선택은 시스템을 따르지 않는다.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { loadPrefs, savePrefs, type ThemePref } from './prefs'

export type ResolvedTheme = 'light' | 'dark'

function systemPrefersDark(): boolean {
  if (typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function resolveTheme(pref: ThemePref): ResolvedTheme {
  return pref === 'system' ? (systemPrefersDark() ? 'dark' : 'light') : pref
}

interface ThemeCtx {
  pref: ThemePref
  resolved: ResolvedTheme
  setPref: (p: ThemePref) => void
  cycle: () => void
}

const Ctx = createContext<ThemeCtx | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [pref, setPrefState] = useState<ThemePref>(() => loadPrefs().theme)
  const [resolved, setResolved] = useState<ResolvedTheme>(() => resolveTheme(loadPrefs().theme))

  // system 모드일 때 OS 설정 변경 즉시 반영
  useEffect(() => {
    if (pref !== 'system') return
    if (typeof window.matchMedia !== 'function') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setResolved(mq.matches ? 'dark' : 'light')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [pref])

  const apply = useCallback((p: ThemePref) => {
    setPrefState(p)
    setResolved(resolveTheme(p))
    const prefs = loadPrefs()
    savePrefs({ ...prefs, theme: p })
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme-pref', pref)
    document.documentElement.setAttribute('data-theme', resolved)
  }, [pref, resolved])

  const cycle = useCallback(() => {
    const next: ThemePref = pref === 'system' ? 'light' : pref === 'light' ? 'dark' : 'system'
    apply(next)
  }, [pref, apply])

  const value = useMemo(() => ({ pref, resolved, setPref: apply, cycle }), [pref, resolved, apply, cycle])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useTheme은 ThemeProvider 안에서 사용해야 합니다')
  return ctx
}
