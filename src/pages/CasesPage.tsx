/** 권리별 사례 — 특허·실용, 상표, 디자인 가상 사례 비교·선택. 각 카드에서 실험실 바로 열기. */
import { useI18n } from '@/i18n'
import { PageIntro } from '@/components/PageIntro'
import { DemoBadge } from '@/components/badges'
import { CASES } from '@/data/cases'
import { updateSessionState } from '@/state/sessionStore'
import { initialDocsFor } from '@/state/session'
import { CASE_DEFAULTS } from '@/lab/labState'
import { sitePath } from '@/lib/path'
import { IconArrowRight } from '@/components/icons'

const RIGHT_LABELS: Record<string, string> = {
  PATENT: '특허',
  UTILITY_MODEL: '실용신안',
  TRADEMARK: '상표',
  DESIGN: '디자인',
}

export function CasesPage() {
  const { t } = useI18n()

  const openCase = (caseId: string) => {
    const data = CASES.find((c) => c.id === caseId)
    if (!data) return
    updateSessionState((s) => ({
      ...s,
      caseId,
      selectedDocs: initialDocsFor(data),
      eventDate: (CASE_DEFAULTS[caseId] ?? {}).eventDate ?? null,
      ruleVersionChoice: 'auto',
      overrides: {},
      step: 0,
    }))
    // 실험실로 이동
    window.location.href = sitePath('lab/')
  }

  return (
    <div className="container page">
      <PageIntro titleKey="cases.title" leadKey="cases.lead" badges={<DemoBadge />} />

      <div className="section">
        <h2>{t('cases.compareTitle')}</h2>
        <div className="table-wrap">
          <table className="data-table">
            <caption>{t('cases.compareNote')}</caption>
            <thead>
              <tr>
                <th scope="col">{t('cases.colCase')}</th>
                <th scope="col">{t('cases.colRight')}</th>
                <th scope="col">{t('cases.colManipulation')}</th>
                <th scope="col">{t('cases.colPoint')}</th>
                <th scope="col">
                  <span className="sr-only">{t('cases.openInLab')}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {CASES.map((c) => (
                <tr key={c.id}>
                  <td>
                    <strong>{t(c.titleKey)}</strong>
                    <div className="small faint" style={{ fontFamily: 'var(--font-mono)' }}>
                      {c.id}
                    </div>
                  </td>
                  <td>{RIGHT_LABELS[c.rightType]}</td>
                  <td className="small">{t(c.summaryKeys[0])}</td>
                  <td className="small">{t(c.summaryKeys[2])}</td>
                  <td>
                    <button type="button" className="btn btn-sm btn-secondary" onClick={() => openCase(c.id)} aria-label={t('cases.openInLabAria', { case: t(c.titleKey) })}>
                      {t('cases.openInLab')} <IconArrowRight width={13} height={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2>{t('nav.groups.cases.items.cases.label')}</h2>
        <div className="grid grid-2">
          {CASES.map((c) => (
            <div className="card" key={c.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
                <h3 style={{ marginBottom: 4 }}>{t(c.titleKey)}</h3>
                <span className="badge badge-neutral">{RIGHT_LABELS[c.rightType]}</span>
              </div>
              <p className="small muted">{t(c.blurbKey)}</p>
              <ul className="arrow-list small" style={{ fontSize: '0.88rem' }}>
                {c.summaryKeys.map((k) => (
                  <li key={k}>{t(k)}</li>
                ))}
              </ul>
              <button type="button" className="btn btn-sm" onClick={() => openCase(c.id)} aria-label={t('cases.openInLabAria', { case: t(c.titleKey) })}>
                {t('cases.openInLab')} <IconArrowRight width={13} height={13} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
