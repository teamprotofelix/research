/**
 * 사용자 선호(테마·언어) 저장소. localStorage에만 둔다.
 * 테마 선택값은 정확히 system | light | dark, 언어는 ko | en | ja.
 * localStorage가 막힌 환경에서도 기본값으로 동작해야 한다.
 */

export type ThemePref = 'system' | 'light' | 'dark'
export type Lang = 'ko' | 'en' | 'ja'

export interface Prefs {
  theme: ThemePref
  lang: Lang
}

const KEY = 'eqr.prefs'

const DEFAULTS: Prefs = { theme: 'system', lang: 'ko' }

export function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULTS }
    const parsed = JSON.parse(raw) as Partial<Prefs>
    return {
      theme: parsed.theme === 'light' || parsed.theme === 'dark' ? parsed.theme : 'system',
      lang: parsed.lang === 'en' || parsed.lang === 'ja' ? parsed.lang : 'ko',
    }
  } catch {
    return { ...DEFAULTS }
  }
}

export function savePrefs(prefs: Prefs): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(prefs))
  } catch {
    /* 저장 불가 환경에서는 무시 */
  }
}

/** URL의 ?lang=ja 등 명시적 언어가 있으면 우선 적용한다. */
export function langFromUrl(): Lang | null {
  try {
    const v = new URLSearchParams(window.location.search).get('lang')
    if (v === 'ko' || v === 'en' || v === 'ja') return v
  } catch {
    /* noop */
  }
  return null
}
