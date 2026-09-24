/** 사건 실험실 — 가상 사건에서 UNKNOWN → 진단 후보 → 사람 검토 → 반례를 직접 다루는 핵심 체험. */
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useI18n } from '@/i18n'
import { PageIntro } from '@/components/PageIntro'
import { DemoBadge, HumanFinalBadge } from '@/components/badges'
import { DocumentsColumn } from '@/lab/DocumentsColumn'
import { FactsColumn } from '@/lab/FactsColumn'
import { RulesColumn } from '@/lab/RulesColumn'
import { evaluateCase } from '@/lab/engine'
import { CASE_DEFAULTS, useLabActions, useSessionState } from '@/lab/labState'
import { CASE_REGISTRY, CASES, getCase } from '@/data/cases'
import { buildShareHash, parseSharePayload, initialDocsFor } from '@/state/session'
import { updateSessionState } from '@/state/sessionStore'
import { IconCheck, IconCopy, IconReset, IconShare } from '@/components/icons'

const STEP_KEYS = ['lab.steps.s1', 'lab.steps.s2', 'lab.steps.s3', 'lab.steps.s4', 'lab.steps.s5']

export function LabPage() {
  const { t } = useI18n()
  const session = useSessionState()
  const actions = useLabActions()
  const [highlightedSpan, setHighlightedSpan] = useState<string | null>(null)
  const [mobileCol, setMobileCol] = useState<'documents' | 'facts' | 'rules'>('facts')
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState('')

  const caseData = getCase(session.caseId)

  // 공유 URL(#/lab?case=...)이 있으면 검증 후 복원
  useEffect(() => {
    const payload = parseSharePayload(window.location.hash, CASE_REGISTRY)
    if (payload) {
      const data = getCase(payload.caseId)
      if (data) {
        updateSessionState((s) => ({
          ...s,
          caseId: payload.caseId,
          selectedDocs: { ...initialDocsFor(data), ...payload.selectedDocs },
          eventDate: payload.eventDate ?? (CASE_DEFAULTS[payload.caseId]?.eventDate ?? null),
          ruleVersionChoice: payload.ruleVersionChoice,
        }))
      }
    } else if (!session.caseId && CASES.length > 0) {
      actions.selectCase(CASES[0].id)
    }
    // 초기화는 최초 마운트에만
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const results = useMemo(() => {
    if (!caseData) return []
    return evaluateCase(caseData, {
      selectedDocs: session.selectedDocs,
      eventDate: session.eventDate,
      requestedVersion: session.ruleVersionChoice,
      overrides: session.overrides,
    })
  }, [caseData, session])

  // UNKNOWN 원인이 되는 문서 id들 (왼쪽 열 강조용)
  const neededDocIds = useMemo(() => {
    if (!caseData) return new Set<string>()
    const factIds = new Set(
      results.flatMap((r) => [...r.missingFactIds, ...r.ambiguousFactIds]),
    )
    return new Set(
      caseData.facts.filter((f) => f.requiresDocId && factIds.has(f.id)).map((f) => f.requiresDocId as string),
    )
  }, [caseData, results])

  // 단계 완료 표시 계산
  const stepDone = useMemo(() => {
    if (!caseData) return [true, false, false, false, false]
    const anyAiDoc = caseData.documents.some((d) => d.origin === 'AI_DISCOVERED')
    const aiAdded = anyAiDoc
      ? caseData.documents.some((d) => d.origin === 'AI_DISCOVERED' && session.selectedDocs[d.id])
      : true
    const allAvailable = caseData.facts.every((f) => {
      const v = f.requiresDocId ? session.selectedDocs[f.requiresDocId] : true
      return Boolean(v)
    })
    const decided = results.some((r) => r.verdict === 'TRUE' || r.verdict === 'FALSE')
    const reviewed = session.reviewLog.some((r) => r.caseId === caseData.id)
    return [true, aiAdded, allAvailable, decided, reviewed]
  }, [caseData, session, results])

  const onEvidenceClick = useCallback((spanId: string) => {
    setHighlightedSpan(spanId)
    setMobileCol('documents')
  }, [])

  const onRequestDoc = useCallback(
    (docId: string) => {
      if (!caseData) return
      const doc = caseData.documents.find((d) => d.id === docId)
      if (doc) {
        actions.setDoc(docId, doc.defaultVariant)
        setMobileCol('documents')
      }
    },
    [caseData, actions],
  )

  const share = useCallback(() => {
    if (!caseData) return
    const docs: Record<string, string> = {}
    for (const [k, v] of Object.entries(session.selectedDocs)) if (v) docs[k] = v
    const hash = buildShareHash({
      caseId: caseData.id,
      selectedDocs: docs,
      ruleVersionChoice: session.ruleVersionChoice,
      eventDate: session.eventDate,
    })
    const url = `${window.location.origin}${window.location.pathname}${hash}`
    setShareUrl(url)
    return url
  }, [caseData, session])

  const copyShare = useCallback(async () => {
    const url = share()
    if (!url) return
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [share])

  if (!caseData) return <div className="container page">{t('notFound.text')}</div>

  return (
    <div className="container page">
      <PageIntro
        titleKey="lab.title"
        leadKey="lab.lead"
        badges={
          <>
            <DemoBadge />
            <HumanFinalBadge />
          </>
        }
      />

      {/* 상단 도구 모음 */}
      <div className="lab-topbar no-print">
        <label className="field case-select">
          {t('lab.caseSelectLabel')}
          <select value={caseData.id} onChange={(e) => actions.selectCase(e.target.value)}>
            {CASES.map((c) => (
              <option key={c.id} value={c.id}>
                {t(c.titleKey)} ({c.id})
              </option>
            ))}
          </select>
        </label>
        <div className="lab-actions">
          <button type="button" className="btn btn-secondary btn-sm" onClick={copyShare}>
            <IconShare width={14} height={14} />
            {t('common.share')}
            {copied ? ` · ${t('common.copied')}` : ''}
          </button>
          <button type="button" className="btn btn-quiet btn-sm" onClick={actions.reset}>
            <IconReset width={14} height={14} />
            {t('common.startOver')}
          </button>
        </div>
      </div>
      {shareUrl && (
        <div className="share-row no-print" style={{ marginBottom: 14 }}>
          <input readOnly value={shareUrl} onFocus={(e) => e.currentTarget.select()} aria-label={t('lab.shareTitle')} />
          <button type="button" className="btn btn-sm btn-quiet" onClick={copyShare}>
            <IconCopy width={12} height={12} /> {t('common.copyLink')}
          </button>
          <span className="small faint">{t('lab.shareHint')}</span>
        </div>
      )}

      {/* 진행 단계 */}
      <ol className="stepper no-print" aria-label={t('common.allSteps')}>
        {STEP_KEYS.map((key, i) => (
          <li key={key}>
            <button
              type="button"
              className={`step-btn ${session.step === i ? '' : ''} ${stepDone[i] ? 'is-done' : ''}`}
              aria-current={session.step === i ? 'step' : undefined}
              onClick={() => actions.setStep(i)}
            >
              <span className="step-num">{stepDone[i] && session.step !== i ? <IconCheck width={13} height={13} /> : i + 1}</span>
              <span className="step-label">
                {t(`${key}.title`)}
                <span className="step-sub">{t(`${key}.sub`)}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>

      {/* 모바일 열 전환 */}
      <div className="tabs lab-mobile-tabs no-print" role="tablist">
        {(['documents', 'facts', 'rules'] as const).map((col) => (
          <button
            key={col}
            type="button"
            role="tab"
            className="tab-btn"
            aria-selected={mobileCol === col}
            onClick={() => setMobileCol(col)}
          >
            {t(`lab.tab${col[0].toUpperCase()}${col.slice(1)}`)}
          </button>
        ))}
      </div>

      <div className="lab-shell">
        <div className={`lab-col-wrap ${mobileCol === 'documents' ? 'mobile-active' : ''}`}>
          <DocumentsColumn
            caseData={caseData}
            selectedDocs={session.selectedDocs}
            onSetDoc={actions.setDoc}
            highlightedSpanId={highlightedSpan}
            neededDocIds={neededDocIds}
            showAllVariants
          />
        </div>
        <div className={`lab-col-wrap ${mobileCol === 'facts' ? 'mobile-active' : ''}`}>
          <FactsColumn
            caseData={caseData}
            session={session}
            onEvidenceClick={onEvidenceClick}
            onOverride={actions.setOverride}
            onRemoveOverride={(fid) => actions.setOverride(fid, null)}
          />
        </div>
        <div className={`lab-col-wrap ${mobileCol === 'rules' ? 'mobile-active' : ''}`}>
          <RulesColumn
            caseData={caseData}
            session={session}
            onSetRuleVersion={actions.setRuleVersion}
            onSetEventDate={actions.setEventDate}
            onAddReview={actions.addReview}
            onClearReviews={actions.clearReviews}
            onRequestDoc={onRequestDoc}
          />
        </div>
      </div>
    </div>
  )
}
