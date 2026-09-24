/** 우측 열 — Rule 결과(판정·추적)와 사람 검토, 피드백 기록. */
import { useMemo, useState } from 'react'
import { useI18n } from '@/i18n'
import type { DemoCase, ReviewEntry, SessionState, Verdict } from './types'
import { evaluateCase } from './engine'
import { VerdictBadge } from '@/components/badges'
import { CASE_DEFAULTS } from './labState'
import { IconHuman, IconPlus, IconRefresh } from '@/components/icons'

type Decision = 'CONFIRMED' | 'DEFERRED' | 'REJECTED'

interface Props {
  caseData: DemoCase
  session: SessionState
  onSetRuleVersion: (v: string) => void
  onSetEventDate: (d: string | null) => void
  onAddReview: (e: Omit<ReviewEntry, 'id' | 'at'>) => void
  onClearReviews: () => void
  onRequestDoc: (docId: string) => void
}

export function RulesColumn({
  caseData,
  session,
  onSetRuleVersion,
  onSetEventDate,
  onAddReview,
  onClearReviews,
  onRequestDoc,
}: Props) {
  const { t } = useI18n()
  const [reviewFor, setReviewFor] = useState<{ ruleId: string; verdict: Verdict; decision: Decision } | null>(null)
  const [reason, setReason] = useState('agree')
  const [note, setNote] = useState('')
  const [announce, setAnnounce] = useState('')

  const input = useMemo(
    () => ({
      selectedDocs: session.selectedDocs,
      eventDate: session.eventDate,
      requestedVersion: session.ruleVersionChoice,
      overrides: session.overrides,
    }),
    [session.selectedDocs, session.eventDate, session.ruleVersionChoice, session.overrides],
  )
  const results = useMemo(() => evaluateCase(caseData, input), [caseData, input])
  const dateOptions = CASE_DEFAULTS[caseData.id]?.dateOptions ?? []

  const caseReviews = session.reviewLog.filter((r) => r.caseId === caseData.id)

  const submitReview = () => {
    if (!reviewFor) return
    onAddReview({
      caseId: caseData.id,
      ruleId: reviewFor.ruleId,
      ruleVersion: results.find((r) => r.ruleId === reviewFor.ruleId)?.ruleVersion ?? '',
      verdict: reviewFor.verdict,
      decision: reviewFor.decision,
      reasonKey: reason,
      note: note.trim() || undefined,
    })
    setReviewFor(null)
    setNote('')
    setReason('agree')
    setAnnounce(t('lab.review.recorded'))
    window.setTimeout(() => setAnnounce(''), 3000)
  }

  return (
    <div className="lab-col" data-col="rules">
      <h2>{t('lab.colRules')}</h2>
      <p aria-live="polite" className="sr-only">
        {announce}
      </p>

      {caseData.ruleIds.map((ruleId) => {
        const rule = caseData.rules.find((r) => r.id === ruleId)
        const result = results.find((r) => r.ruleId === ruleId)
        if (!rule || !result) return null
        const axis = /^tm-candidates:([A-Z]+)$/.exec(rule.condition)?.[1]
        const candidates = axis ? (caseData.candidates ?? []).filter((c) => c.axis === axis) : []
        const requiredFacts = rule.versions
          .filter((v) => v.version === result.ruleVersion)
          .map((v) => v.requiredFactIds)
          .flat()

        return (
          <section key={ruleId} className={`rule-card ${result.verdict === 'TRUE' ? 'has-finding' : ''}`}>
            <div className="rule-head">
              <div>
                <div className="rule-title">{t(rule.titleKey)}</div>
                <div className="rule-authority">
                  <span style={{ fontFamily: 'var(--font-mono)' }}>{rule.id}</span> · {t(rule.authorityLabelKey)}
                </div>
              </div>
              <VerdictBadge verdict={result.verdict} />
            </div>

            <div className="rule-controls">
              <label className="field">
                {t('lab.ruleVersionLabel')}
                <select value={session.ruleVersionChoice} onChange={(e) => onSetRuleVersion(e.target.value)}>
                  <option value="auto">{t('lab.ruleVersionAuto')}</option>
                  {[...rule.versions]
                    .sort((a, b) => (a.effectiveFrom < b.effectiveFrom ? 1 : -1))
                    .map((v) => (
                      <option key={v.version} value={v.version}>
                        v{v.version}
                      </option>
                    ))}
                </select>
              </label>
              <label className="field">
                {t('lab.eventDateLabel')}
                <select
                  value={session.eventDate ?? ''}
                  onChange={(e) => onSetEventDate(e.target.value === '' ? null : e.target.value)}
                >
                  {dateOptions.map((d) => (
                    <option key={String(d)} value={d ?? ''}>
                      {d ?? t('lab.eventDateUnknown')}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className={`verdict-panel v-${result.verdict.toLowerCase()}`}>
              <div className="vp-head">
                <VerdictBadge verdict={result.verdict} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--muted)' }}>
                  {result.ruleVersion ? `v${result.ruleVersion}` : '—'}
                </span>
              </div>
              <p className="vp-text">{t(`lab.verdictReasons.${result.verdictReasonKey}`)}</p>
              {result.verdict === 'TRUE' && (
                <div className="vp-note">
                  <IconHuman width={14} height={14} />
                  {t('common.notLegalConclusion')} {t('common.finalByHuman')}
                </div>
              )}
            </div>

            {/* 추적 */}
            <details style={{ fontSize: '0.82rem' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 650, color: 'var(--muted)' }}>{t('lab.trace.title')}</summary>
              <ul className="trace-steps" style={{ marginTop: 8 }}>
                {result.steps.map((s, i) => (
                  <li key={i} className={s.ok ? '' : 'failed'}>
                    <span className="trace-dot" />
                    {t(`lab.trace.${s.step.toLowerCase()}`)} — {s.ok ? t('lab.trace.pass') : t(`lab.verdictReasons.${s.detailKey}`)}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {requiredFacts.map((fid) => {
                  const fact = caseData.facts.find((f) => f.id === fid)
                  if (!fact) return null
                  const inUsed = result.usedFactIds.includes(fid)
                  const inMissing = result.missingFactIds.includes(fid)
                  const inAmbiguous = result.ambiguousFactIds.includes(fid)
                  const cls = inMissing || inAmbiguous ? 'badge-verdict v-unknown' : inUsed ? 'badge-demo' : 'badge-neutral'
                  return (
                    <span key={fid} className={`badge ${cls}`} title={t(fact.explainKey)}>
                      {t(fact.labelKey)}
                    </span>
                  )
                })}
              </div>
            </details>

            {/* UNKNOWN 안내 — 무엇이 부족한지 + 왜 + 어디에서 */}
            {result.verdict === 'UNKNOWN' && (result.missingFactIds.length > 0 || result.ambiguousFactIds.length > 0) && (
              <div className="unknown-box">
                <h4>{t('lab.unknownExplain.title')}</h4>
                <ul>
                  <li>
                    <strong>{t('lab.unknownExplain.what')}:</strong>{' '}
                    {[...result.missingFactIds, ...result.ambiguousFactIds]
                      .map((fid) => t(caseData.facts.find((f) => f.id === fid)?.labelKey ?? fid))
                      .join(', ')}
                  </li>
                  <li>
                    <strong>{t('lab.unknownExplain.why')}:</strong>{' '}
                    {[...result.missingFactIds, ...result.ambiguousFactIds]
                      .map((fid) => t(caseData.facts.find((f) => f.id === fid)?.explainKey ?? fid))
                      .join(' ')}
                  </li>
                  <li>
                    <strong>{t('lab.unknownExplain.where')}:</strong>{' '}
                    {[...new Set(
                      [...result.missingFactIds, ...result.ambiguousFactIds]
                        .map((fid) => caseData.facts.find((f) => f.id === fid)?.requiresDocId)
                        .filter((x): x is string => Boolean(x)),
                    )].map((docId) => {
                      const doc = caseData.documents.find((d) => d.id === docId)
                      return doc ? (
                        <button key={docId} type="button" className="evidence-chip" onClick={() => onRequestDoc(docId)}>
                          <IconPlus width={11} height={11} /> {t(doc.titleKey)}
                        </button>
                      ) : null
                    })}
                  </li>
                </ul>
              </div>
            )}

            {/* 상표 후보 */}
            {candidates.length > 0 && result.verdict === 'TRUE' && (
              <div>
                <div className="small muted" style={{ margin: '10px 0 6px' }}>
                  {t('lab.verdictReasons.candidates-exist')}
                </div>
                <div className="candidates-grid">
                  {candidates.map((c) => (
                    <div key={c.id} className="candidate-card">
                      <div className="c-score">{c.score}</div>
                      <div>{t(c.markKey)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 사람 검토 */}
            <div className="review-panel">
              <div className="small muted" style={{ marginBottom: 8 }}>
                <strong>{t('lab.review.title')}.</strong> {t('lab.review.hint')}
              </div>
              <div className="review-buttons">
                <button type="button" className="btn btn-sm btn-confirm" onClick={() => setReviewFor({ ruleId, verdict: result.verdict, decision: 'CONFIRMED' })}>
                  {t('lab.review.confirm')}
                </button>
                <button type="button" className="btn btn-sm btn-defer" onClick={() => setReviewFor({ ruleId, verdict: result.verdict, decision: 'DEFERRED' })}>
                  {t('lab.review.defer')}
                </button>
                <button type="button" className="btn btn-sm btn-reject" onClick={() => setReviewFor({ ruleId, verdict: result.verdict, decision: 'REJECTED' })}>
                  {t('lab.review.reject')}
                </button>
              </div>

              {reviewFor?.ruleId === ruleId && (
                <div className="review-form">
                  <label className="field">
                    {t('lab.review.reasonLabel')}
                    <select value={reason} onChange={(e) => setReason(e.target.value)}>
                      <option value="agree">{t('lab.review.reasons.agree')}</option>
                      <option value="evidence">{t('lab.review.reasons.evidence')}</option>
                      <option value="incomplete">{t('lab.review.reasons.incomplete')}</option>
                      <option value="counter">{t('lab.review.reasons.counter')}</option>
                      <option value="other">{t('lab.review.reasons.other')}</option>
                    </select>
                  </label>
                  <label className="field">
                    {t('lab.review.noteLabel')}
                    <textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} />
                  </label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button type="button" className="btn btn-sm" onClick={submitReview}>
                      {t('lab.review.submit')}
                    </button>
                    <button type="button" className="btn btn-sm btn-quiet" onClick={() => setReviewFor(null)}>
                      {t('common.close')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* 피드백·평가 */}
      <section className="card-flat" aria-label={t('lab.feedback.title')}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
          <h3 style={{ margin: 0, fontSize: '0.95rem' }}>{t('lab.feedback.title')}</h3>
          {caseReviews.length > 0 && (
            <button type="button" className="btn btn-sm btn-quiet" onClick={onClearReviews}>
              {t('lab.feedback.clear')}
            </button>
          )}
        </div>
        {caseReviews.length === 0 ? (
          <p className="small muted" style={{ margin: 0 }}>{t('lab.feedback.empty')}</p>
        ) : (
          <>
            <div className="review-log">
              {caseReviews.map((r) => (
                <div key={r.id} className="review-entry">
                  <div className="re-head">
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{r.ruleId} v{r.ruleVersion}</span>
                    <VerdictBadge verdict={r.verdict} withIcon={false} />
                    <span className={`badge ${r.decision === 'CONFIRMED' ? 'badge-verdict v-false' : r.decision === 'DEFERRED' ? 'badge-verdict v-unknown' : 'badge-verdict v-na'}`}>
                      {t(`lab.feedback.decisions.${r.decision}`)}
                    </span>
                  </div>
                  <div>{t(`lab.review.reasons.${r.reasonKey}`)}{r.note ? ` — ${r.note}` : ''}</div>
                  <div className="faint" style={{ marginTop: 4 }}>
                    {new Intl.DateTimeFormat(document.documentElement.lang).format(new Date(r.at))}
                  </div>
                </div>
              ))}
            </div>
            <p className="small faint" style={{ margin: '10px 0 0' }}>{t('lab.feedback.howUsed')}</p>
          </>
        )}
      </section>

      <p className="small faint" style={{ margin: 0 }}>
        <IconRefresh width={12} height={12} style={{ display: 'inline', verticalAlign: '-2px' }} /> {t('common.fictionalNote')}
      </p>
    </div>
  )
}
