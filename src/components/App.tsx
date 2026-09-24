/** 앱 셸 — 스킵 링크, 헤더, 본문, 푸터, 체험 상태 칩. */
import type { ReactNode } from 'react'
import { I18nProvider, useI18n } from '@/i18n'
import { ThemeProvider } from '@/state/theme'
import { Header } from './Header'
import { Footer } from './Footer'
import { ExperienceChip } from './ExperienceChip'

function Shell({ children }: { children: ReactNode }) {
  const { t } = useI18n()
  return (
    <>
      <a className="skip-link" href="#main">
        {t('common.skipToContent')}
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <ExperienceChip />
    </>
  )
}

export function App({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <ThemeProvider>
        <Shell>{children}</Shell>
      </ThemeProvider>
    </I18nProvider>
  )
}
