/**
 * i18n — ko / en / ja.
 * 언어 전환 시 같은 페이지·같은 체험 단계·선택한 사례가 유지된다.
 * 우선순위: ?lang= URL → 저장된 선택 → 한국어.
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
import { ko, type KoDict } from './ko'
import { en } from './en'
import { ja } from './ja'
import { langFromUrl, loadPrefs, savePrefs, type Lang } from '@/state/prefs'

export type Dict = KoDict

const dicts: Record<Lang, Dict> = { ko, en, ja }

export const HTML_LANG: Record<Lang, string> = { ko: 'ko-KR', en: 'en', ja: 'ja-JP' }

/** 중첩 키 조회 + {var} 치환. 키가 없으면 키 문자열을 돌려준다(테스트가 잡는다). */
export function t(dict: Dict, key: string, vars?: Record<string, string | number>): string {
  const parts = key.split('.')
  let node: unknown = dict
  for (const p of parts) {
    if (node && typeof node === 'object' && p in (node as object)) {
      node = (node as Record<string, unknown>)[p]
    } else {
      if (import.meta.env.DEV) console.warn(`[i18n] 누락된 키: ${key}`)
      return key
    }
  }
  let out = typeof node === 'string' ? node : key
  if (typeof out === 'string' && vars) {
    for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, String(v))
  }
  return out
}

interface I18nCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string, vars?: Record<string, string | number>) => string
  dict: Dict
}

const Ctx = createContext<I18nCtx | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => langFromUrl() ?? loadPrefs().lang)

  useEffect(() => {
    document.documentElement.setAttribute('lang', HTML_LANG[lang])
    const prefs = loadPrefs()
    savePrefs({ ...prefs, lang })
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])

  const value = useMemo<I18nCtx>(() => {
    const dict = dicts[lang]
    return {
      lang,
      setLang,
      dict,
      t: (key, vars) => t(dict, key, vars),
    }
  }, [lang, setLang])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n은 I18nProvider 안에서 사용해야 합니다')
  return ctx
}

/** 페이지 메타(제목·설명)를 현재 언어로 갱신한다. */
export function usePageMeta(titleKey: string, descKey?: string): void {
  const { lang, t } = useI18n()
  useEffect(() => {
    document.title = `${t(titleKey)} · ${t('meta.siteName')}`
    if (descKey) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', t(descKey))
    }
  }, [lang, t, titleKey, descKey])
}
