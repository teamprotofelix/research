/** 페이지 공통 도입부 — 제목 + 리드 문단 + 배지 묶음. */
import type { ReactNode } from 'react'
import { useI18n } from '@/i18n'
import { usePageMeta } from '@/i18n'

export function PageIntro({
  titleKey,
  leadKey,
  badges,
}: {
  titleKey: string
  leadKey?: string
  badges?: ReactNode
}) {
  const { t } = useI18n()
  usePageMeta(titleKey)
  return (
    <div className="page-intro">
      {badges && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>{badges}</div>}
      <h1>{t(titleKey)}</h1>
      {leadKey && <p className="lead">{t(leadKey)}</p>}
    </div>
  )
}
