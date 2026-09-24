/** 전역 내비게이션 — 6개 묶음(연구 소개/체험하기/사례/평가와 방법/신뢰와 구축/자료). */
import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/i18n'
import { useTheme } from '@/state/theme'
import { sitePath } from '@/lib/path'
import { BrandMark, IconChevron, IconGlobe, IconMenu, IconMoon, IconSun, IconX } from './icons'

interface NavItem {
  path: string
  label: string
  sub: string
}
interface NavGroup {
  id: string
  items: NavItem[]
}

function useNavGroups(): NavGroup[] {
  const { t } = useI18n()
  return [
    { id: 'intro', items: [{ path: 'research/', label: t('nav.groups.intro.items.research.label'), sub: t('nav.groups.intro.items.research.sub') }] },
    {
      id: 'experience',
      items: [
        { path: 'experience/', label: t('nav.groups.experience.items.experience.label'), sub: t('nav.groups.experience.items.experience.sub') },
        { path: 'lab/', label: t('nav.groups.experience.items.lab.label'), sub: t('nav.groups.experience.items.lab.sub') },
      ],
    },
    { id: 'cases', items: [{ path: 'cases/', label: t('nav.groups.cases.items.cases.label'), sub: t('nav.groups.cases.items.cases.sub') }] },
    {
      id: 'evaluate',
      items: [
        { path: 'method/', label: t('nav.groups.evaluate.items.method.label'), sub: t('nav.groups.evaluate.items.method.sub') },
        { path: 'evaluation/', label: t('nav.groups.evaluate.items.evaluation.label'), sub: t('nav.groups.evaluate.items.evaluation.sub') },
      ],
    },
    {
      id: 'trust',
      items: [
        { path: 'governance/', label: t('nav.groups.trust.items.governance.label'), sub: t('nav.groups.trust.items.governance.sub') },
        { path: 'roadmap/', label: t('nav.groups.trust.items.roadmap.label'), sub: t('nav.groups.trust.items.roadmap.sub') },
      ],
    },
    { id: 'sources', items: [{ path: 'sources/', label: t('nav.groups.sources.items.sources.label'), sub: t('nav.groups.sources.items.sources.sub') }] },
  ]
}

/** 현재 경로 기준으로 활성 여부 판단 */
function isActivePath(path: string): boolean {
  const here = window.location.pathname
  return here.endsWith(`/${path}`) || (path === '' && (here === import.meta.env.BASE_URL || here.endsWith('/index.html')))
}

export function Header() {
  const { t, lang, setLang } = useI18n()
  const { pref, resolved, cycle } = useTheme()
  const groups = useNavGroups()
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // 바깥 클릭·Esc로 드롭다운/메뉴 닫기
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenGroup(null)
        setMenuOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenGroup(null)
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // 언어 변경 시 메뉴 닫기
  const pickLang = (l: typeof lang) => {
    setLang(l)
    setMenuOpen(false)
  }

  const themeLabel =
    pref === 'system' ? t('themes.systemCurrent', { mode: t(`themes.${resolved}`) }) : t('themes.current', { mode: t(`themes.${resolved}`) })

  return (
    <header className="app-header no-print" ref={headerRef}>
      <div className="container">
        <a className="brand" href={sitePath('')}>
          <BrandMark width={26} height={26} />
          <span>
            {t('common.brand')}
            <span className="brand-sub">{t('common.brandSub')}</span>
          </span>
        </a>

        <nav aria-label={t('nav.menu')}>
          <ul className="main-nav">
            {groups.map((g) => {
              const active = g.items.some((i) => isActivePath(i.path))
              return (
                <li key={g.id}>
                  <button
                    type="button"
                    className={`nav-group-btn ${active ? 'active' : ''}`}
                    aria-expanded={openGroup === g.id}
                    aria-haspopup="true"
                    onClick={() => setOpenGroup(openGroup === g.id ? null : g.id)}
                  >
                    {t(`nav.groups.${g.id}.label`)}
                    <IconChevron className="caret" width={10} height={10} />
                  </button>
                  {openGroup === g.id && (
                    <div className="nav-dropdown" role="menu">
                      {g.items.map((item) => (
                        <a key={item.path} role="menuitem" href={sitePath(item.path)} onClick={() => setOpenGroup(null)}>
                          {item.label}
                          <span className="dd-sub">{item.sub}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="header-controls">
          <button
            type="button"
            className="icon-btn"
            onClick={cycle}
            aria-label={t('a11y.themeToggleAria')}
            title={themeLabel}
          >
            {resolved === 'dark' ? <IconSun /> : <IconMoon />}
            <span className="sr-only">{themeLabel}</span>
          </button>
          <label className="icon-btn" style={{ cursor: 'pointer' }}>
            <IconGlobe />
            <select
              aria-label={t('a11y.langSelectAria')}
              value={lang}
              onChange={(e) => pickLang(e.target.value as typeof lang)}
              style={{ border: 'none', background: 'transparent', padding: 0, color: 'inherit', fontWeight: 600, fontSize: '0.82rem' }}
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </label>
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.menu')}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={`mobile-menu open`} aria-label={t('nav.menu')}>
          <div className="container">
            {groups.map((g) => (
              <div key={g.id}>
                <div className="m-group-label">{t(`nav.groups.${g.id}.label`)}</div>
                {g.items.map((item) => (
                  <a
                    key={item.path}
                    href={sitePath(item.path)}
                    className={isActivePath(item.path) ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
