/** 체험 상태 칩 — 진행 중인 사례·판정·단계를 요약하고 이어하기/처음부터를 제공한다.
 *  팝업이나 대형 고정 버튼을 남발하지 않는 작은 카드이며, 숨길 수 있다. */
import { useEffect, useState } from 'react'
import { useI18n } from '@/i18n'
import { getSessionState, resetSessionState, subscribeSession } from '@/state/sessionStore'
import { getCase } from '@/data/cases'
import { evaluateCase } from '@/lab/engine'
import { sitePath } from '@/lib/path'
import { VerdictBadge } from './badges'
import { IconArrowRight, IconReset, IconX } from './icons'

export function ExperienceChip() {
  const { t } = useI18n()
  const [hidden, setHidden] = useState(false)
  const [session, setSession] = useState(getSessionState())

  useEffect(() => subscribeSession(setSession), [])

  // 실험실 페이지에서는 이미 전체 상태가 보이므로 칩을 표시하지 않는다
  if (/\/lab\/?$/.test(window.location.pathname)) return null
  const caseData = session.caseId ? getCase(session.caseId) : undefined
  if (!caseData || hidden) return null

  const results = evaluateCase(caseData, {
    selectedDocs: session.selectedDocs,
    eventDate: session.eventDate,
    requestedVersion: session.ruleVersionChoice,
    overrides: session.overrides,
  })
  const hasFinding = results.some((r) => r.verdict === 'TRUE')
  const anyUnknown = results.some((r) => r.verdict === 'UNKNOWN')
  const verdict = hasFinding ? 'TRUE' : anyUnknown ? 'UNKNOWN' : results[0]?.verdict ?? 'NOT_APPLICABLE'

  return (
    <aside className="experience-chip" aria-label={t('chip.title')}>
      <button type="button" className="chip-close" aria-label={t('chip.dismiss')} onClick={() => setHidden(true)}>
        <IconX width={14} height={14} />
      </button>
      <div className="chip-head">
        <span>{t('chip.title')}</span>
      </div>
      <div className="chip-body">
        <strong>{t(caseData.titleKey)}</strong>
        <br />
        {t('chip.stepLabel')} {session.step + 1}/5 ·{' '}
        <VerdictBadge verdict={verdict} />
      </div>
      <div className="chip-actions">
        <a className="btn btn-sm" href={sitePath('lab/')}>
          {t('chip.resume')} <IconArrowRight width={14} height={14} />
        </a>
        <button type="button" className="btn btn-sm btn-secondary" onClick={resetSessionState}>
          <IconReset width={14} height={14} />
          {t('chip.restart')}
        </button>
      </div>
    </aside>
  )
}
