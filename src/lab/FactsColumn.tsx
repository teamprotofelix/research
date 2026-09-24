/** 중앙 열 — 사건 개요(1단계)와 수집 계획·Fact·근거 위치. */
import { useI18n } from '@/i18n'
import type { DemoCase, SessionState } from './types'
import { resolveFact } from './engine'
import { IconLink, IconReset } from '@/components/icons'

interface Props {
  caseData: DemoCase
  session: SessionState
  onEvidenceClick: (spanId: string) => void
  onOverride: (factId: string, value: boolean | null) => void
  onRemoveOverride: (factId: string) => void
}

function factValueLabel(t: (k: string) => string, value: boolean | string | null): string {
  if (value === true) return t('lab.factValueTrue')
  if (value === false) return t('lab.factValueFalse')
  return t('lab.factValueUnknown')
}

export function FactsColumn({ caseData, session, onEvidenceClick, onOverride, onRemoveOverride }: Props) {
  const { t } = useI18n()

  return (
    <div className="lab-col" data-col="facts">
      <h2>{t('lab.colFacts')}</h2>

      {session.step === 0 && (
        <div className="card-flat" style={{ borderColor: 'var(--accent-line)' }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>{t(caseData.titleKey)}</div>
          {caseData.summaryKeys.map((k) => (
            <p key={k} style={{ fontSize: '0.88rem', color: 'var(--muted)', margin: '0 0 8px' }}>
              {t(k)}
            </p>
          ))}
          <p className="small faint" style={{ margin: 0 }}>
            {t('common.fictionalNote')}
          </p>
        </div>
      )}

      {caseData.facts.map((fact) => {
        const resolved = resolveFact(fact, caseData, session.selectedDocs, session.overrides)
        const overridden = session.overrides[fact.id] !== undefined
        const statusClass = { AVAILABLE: 's-available', MISSING: 's-missing', AMBIGUOUS: 's-ambiguous' }[resolved.status]
        return (
          <section key={fact.id} className={`fact-card ${statusClass}`}>
            <div className="fact-head">
              <span className="fact-label">{t(fact.labelKey)}</span>
              <span className={`badge ${resolved.status === 'AVAILABLE' ? 'badge-demo' : 'badge-verdict v-unknown'}`}>
                {t(`lab.factStatus.${resolved.status}`)}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 8 }}>
              <span className="fact-value">{factValueLabel(t, resolved.value)}</span>
              {overridden && <span className="badge badge-neutral">{t('lab.advancedPanel')}</span>}
              <span className="badge badge-neutral">
                {t(fact.extractor === 'USER_EDIT' ? 'lab.advancedPanel' : 'common.simulatedRun')}
              </span>
            </div>

            <p className="fact-explain">
              <strong>{t('lab.explain')}: </strong>
              {t(fact.explainKey)}
            </p>

            <div className="evidence-links">
              <strong style={{ fontSize: '0.78rem', color: 'var(--faint)' }}>{t('lab.evidenceLocation')}:</strong>
              {resolved.spanIds.length > 0 ? (
                resolved.spanIds.map((sid) => (
                  <button key={sid} type="button" className="evidence-chip" onClick={() => onEvidenceClick(sid)}>
                    <IconLink width={11} height={11} /> {sid.replace('span_', '')}
                  </button>
                ))
              ) : (
                <span className="faint">{t('lab.noEvidence')}</span>
              )}
            </div>

            <details className="review-form" style={{ marginTop: 10 }}>
              <summary style={{ cursor: 'pointer', fontSize: '0.8rem', fontWeight: 650, color: 'var(--muted)' }}>
                {t('lab.advancedPanel')}
              </summary>
              <p className="small" style={{ margin: '8px 0 10px' }}>{t('lab.advancedHint')}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-sm btn-quiet" onClick={() => onOverride(fact.id, true)}>
                  {t('lab.factValueTrue')}
                </button>
                <button type="button" className="btn btn-sm btn-quiet" onClick={() => onOverride(fact.id, false)}>
                  {t('lab.factValueFalse')}
                </button>
                {overridden && (
                  <button type="button" className="btn btn-sm btn-secondary" onClick={() => onRemoveOverride(fact.id)}>
                    <IconReset width={12} height={12} /> {t('common.reset')}
                  </button>
                )}
              </div>
            </details>
          </section>
        )
      })}
    </div>
  )
}
