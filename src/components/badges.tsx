/** 상태·출처·자료등급 배지와 가상/모의 표시.
 *  색만으로 상태를 구분하지 않는다 — 항상 단어·아이콘·짧은 문장을 함께 쓴다. */
import { useI18n } from '@/i18n'
import type { EvidenceOrigin, Verdict } from '@/lab/types'
import { IconBeaker, IconCheck, IconFlag, IconHuman, IconMinus, IconQuestion } from './icons'

export function VerdictBadge({ verdict, withIcon = true }: { verdict: Verdict; withIcon?: boolean }) {
  const { t } = useI18n()
  const cls = {
    TRUE: 'v-true',
    FALSE: 'v-false',
    UNKNOWN: 'v-unknown',
    NOT_APPLICABLE: 'v-na',
  }[verdict]
  const icon = {
    TRUE: <IconFlag />,
    FALSE: <IconCheck />,
    UNKNOWN: <IconQuestion />,
    NOT_APPLICABLE: <IconMinus />,
  }[verdict]
  const label =
    verdict === 'TRUE'
      ? t('common.researchDemoFinding')
      : t(`lab.verdict.${verdict}`)
  return (
    <span className={`badge badge-verdict ${cls}`} title={t(`lab.verdict.${verdict}`)}>
      {withIcon && icon}
      <span>{label}</span>
    </span>
  )
}

export function OriginBadge({ origin }: { origin: EvidenceOrigin }) {
  const { t } = useI18n()
  const cls = {
    EXAMINER_CITED: 'o-examiner',
    AI_DISCOVERED: 'o-ai',
    CASE_DOCUMENT: 'o-case',
  }[origin]
  return <span className={`badge badge-origin ${cls}`}>{t(`lab.origin.${origin}`)}</span>
}

export function DemoBadge() {
  const { t } = useI18n()
  return <span className="badge badge-demo">{t('common.demoBadge')}</span>
}

export function SimulatedBadge() {
  const { t } = useI18n()
  return <span className="badge badge-neutral">{t('common.simulatedBadge')}</span>
}

export function HumanFinalBadge() {
  const { t } = useI18n()
  return (
    <span className="badge badge-neutral">
      <IconHuman />
      {t('common.finalByHuman')}
    </span>
  )
}

export function GradeBadge({ grade }: { grade: 'PUBLIC' | 'UNPUBLISHED' | 'RESTRICTED' }) {
  const { t } = useI18n()
  const cls = { PUBLIC: 'g-public', UNPUBLISHED: 'g-unpublished', RESTRICTED: 'g-restricted' }[grade]
  return <span className={`badge badge-grade ${cls}`}>{t(`governance.grades.${grade}.name`)}</span>
}

/** 가상·모의 데이터 안내 문단 */
export function DemoNote({ children }: { children: string }) {
  return (
    <div className="demo-note">
      <IconBeaker width={16} height={16} />
      <span>{children}</span>
    </div>
  )
}
