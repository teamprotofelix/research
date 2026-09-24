/** 좌측 열 — 사건 문서·타임라인. 문서 열기·닫기, 추가·제외, 변형 전환, 근거 구절 강조. */
import { useEffect, useState } from 'react'
import { useI18n } from '@/i18n'
import type { DemoCase } from './types'
import { OriginBadge } from '@/components/badges'
import { IconChevron, IconDoc, IconPlus, IconX } from '@/components/icons'

interface Props {
  caseData: DemoCase
  selectedDocs: Record<string, string | null>
  onSetDoc: (docId: string, variantId: string | null) => void
  highlightedSpanId: string | null
  /** 이 문서들이 진단에 필요하다는 강조(UNKNOWN 안내용) */
  neededDocIds: Set<string>
  showAllVariants: boolean
}

export function DocumentsColumn({
  caseData,
  selectedDocs,
  onSetDoc,
  highlightedSpanId,
  neededDocIds,
  showAllVariants,
}: Props) {
  const { t } = useI18n()
  const [openDocs, setOpenDocs] = useState<Set<string>>(() => new Set(caseData.documents.filter((d) => d.availableAtStart).map((d) => d.id)))
  const [variantPicks, setVariantPicks] = useState<Record<string, string>>(() =>
    Object.fromEntries(caseData.documents.map((d) => [d.id, d.defaultVariant])),
  )

  // 사례가 바뀌면 초기 상태로
  useEffect(() => {
    setOpenDocs(new Set(caseData.documents.filter((d) => d.availableAtStart).map((d) => d.id)))
    setVariantPicks(Object.fromEntries(caseData.documents.map((d) => [d.id, d.defaultVariant])))
  }, [caseData])

  // 근거 클릭 시 해당 문서 열기 + 구절 스크롤
  useEffect(() => {
    if (!highlightedSpanId) return
    const holder = caseData.documents.find((doc) => {
      const v = selectedDocs[doc.id]
      return v && (doc.variants[v]?.spans ?? []).some((s) => s.id === highlightedSpanId)
    })
    if (!holder) return
    setOpenDocs((prev) => new Set(prev).add(holder.id))
    requestAnimationFrame(() => {
      document.getElementById(`span-${highlightedSpanId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }, [highlightedSpanId, caseData, selectedDocs])

  const toggleOpen = (id: string) => {
    setOpenDocs((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="lab-col" data-col="documents">
      <h2>{t('lab.colDocuments')}</h2>
      {caseData.documents.map((doc, i) => {
        const prev = caseData.documents[i - 1]
        const aiGroupStart = doc.origin === 'AI_DISCOVERED' && prev?.origin !== 'AI_DISCOVERED'
        const chosen = selectedDocs[doc.id] ?? null
        const included = chosen !== null && chosen in doc.variants
        const variant = included ? doc.variants[chosen as string] : null
        const open = openDocs.has(doc.id)
        const pick = variantPicks[doc.id] ?? doc.defaultVariant
        const needed = neededDocIds.has(doc.id)
        return (
          <div key={doc.id} style={{ display: 'contents' }}>
          {aiGroupStart && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '6px 0 2px' }}>
              <span style={{ flex: 1, borderTop: '1px dashed var(--accent-line)' }} />
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.04em' }}>
                {t('lab.origin.AI_DISCOVERED')}
              </span>
            </div>
          )}
          <article
            className={`doc-card ${included ? 'selected' : 'excluded'}`}
            style={needed && !included ? { outline: '2px dashed var(--v-unknown-ink)', outlineOffset: '2px' } : undefined}
          >
            <div className="doc-head">
              <button
                type="button"
                className="doc-title"
                style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', font: 'inherit', color: 'inherit' }}
                aria-expanded={open}
                onClick={() => toggleOpen(doc.id)}
              >
                <IconDoc width={14} height={14} style={{ display: 'inline', marginRight: 6, verticalAlign: '-2px' }} />
                {t(doc.titleKey)}
              </button>
              <IconChevron width={14} height={14} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s', flexShrink: 0, color: 'var(--faint)' }} />
            </div>
            <div className="doc-meta">
              <OriginBadge origin={doc.origin} />
              <span className={`badge ${included ? 'badge-demo' : 'badge-neutral'}`}>
                {included ? t('lab.docStatus.included') : t('lab.docStatus.excluded')}
              </span>
              {included && (
                <span className={`badge ${variant?.complete ? 'badge-demo' : 'badge-origin o-examiner'}`}>
                  {variant?.complete ? t('lab.docStatus.complete') : t('lab.docStatus.incomplete')}
                </span>
              )}
              <span className="badge badge-neutral">{doc.availableAtStart ? t('lab.docStatus.availableAtStart') : t('lab.docStatus.notAvailableAtStart')}</span>
            </div>

            <div className="doc-actions">
              {included ? (
                <>
                  {showAllVariants && Object.keys(doc.variants).length > 1 && (
                    <select
                      aria-label={t(doc.titleKey)}
                      value={chosen as string}
                      onChange={(e) => onSetDoc(doc.id, e.target.value)}
                      style={{ flex: '1 1 140px', minWidth: 0, fontSize: '0.8rem' }}
                    >
                      {Object.entries(doc.variants).map(([vid, v]) => (
                        <option key={vid} value={vid}>
                          {t(v.versionLabelKey)}
                        </option>
                      ))}
                    </select>
                  )}
                  <button type="button" className="btn btn-sm btn-quiet" onClick={() => onSetDoc(doc.id, null)}>
                    <IconX width={12} height={12} /> {t('common.exclude')}
                  </button>
                </>
              ) : (
                <>
                  <select
                    aria-label={t(doc.titleKey)}
                    value={pick}
                    onChange={(e) => setVariantPicks((p) => ({ ...p, [doc.id]: e.target.value }))}
                    style={{ flex: '1 1 140px', minWidth: 0, fontSize: '0.8rem' }}
                  >
                    {Object.entries(doc.variants).map(([vid, v]) => (
                      <option key={vid} value={vid}>
                        {t(v.versionLabelKey)}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => {
                      onSetDoc(doc.id, variantPicks[doc.id] ?? doc.defaultVariant)
                      setOpenDocs((prev) => new Set(prev).add(doc.id))
                    }}
                  >
                    <IconPlus width={12} height={12} /> {t('common.add')}
                  </button>
                </>
              )}
            </div>

            {open && variant && (
              <div className="doc-body">
                {variant.spans.map((span) => (
                  <div
                    key={span.id}
                    id={`span-${span.id}`}
                    className={`span-block ${highlightedSpanId === span.id ? 'highlighted' : ''}`}
                  >
                    {t(span.textKey)}
                    <span className="span-loc">{t(span.locationKey)}</span>
                  </div>
                ))}
              </div>
            )}
          </article>
          </div>
        )
      })}
    </div>
  )
}
