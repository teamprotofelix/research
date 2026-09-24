/** 평가 시뮬레이터 — 모의 표본에서 가정값을 바꾸고 성능·인적 검토량 변화를 재계산한다.
 *  모든 수치는 가상 데이터의 예시이며 실제 연구 성과가 아니다. */
import { useMemo, useState } from 'react'
import { useI18n } from '@/i18n'
import { PageIntro } from '@/components/PageIntro'
import { DemoNote, SimulatedBadge } from '@/components/badges'
import { IconReset } from '@/components/icons'

/* ── 결정적 모의 표본 (고정 시드) ── */

const N = 240
const SEED = 20260924

function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Defect = 'none' | 'minor' | 'critical'

interface MockRow {
  defect: Defect
  defectScore: number
  uMissing: number
  uExtract: number
  uConfirm: number
}

const MOCK: MockRow[] = (() => {
  const rand = mulberry32(SEED)
  const rows: MockRow[] = []
  for (let i = 0; i < N; i++) {
    const r1 = rand()
    const defect: Defect = r1 < 0.28 ? 'critical' : r1 < 0.53 ? 'minor' : 'none'
    const base =
      defect === 'none' ? 0.15 + 0.15 * rand() : defect === 'minor' ? 0.55 + 0.15 * rand() : 0.75 + 0.2 * rand()
    rows.push({
      defect,
      defectScore: Math.min(1, base),
      uMissing: rand(),
      uExtract: rand(),
      uConfirm: rand(),
    })
  }
  return rows
})()

const DEFECT_COUNT = MOCK.filter((r) => r.defect !== 'none').length
const CRITICAL_COUNT = MOCK.filter((r) => r.defect === 'critical').length

interface Inputs {
  missingRate: number // 0~0.4
  extractionAcc: number // 0.7~1
  reviewerRate: number // 0~1
  threshold: number // 0.1~0.9
}

const DEFAULT_INPUTS: Inputs = { missingRate: 0.15, extractionAcc: 0.92, reviewerRate: 0.75, threshold: 0.6 }

interface RowResult {
  missing: boolean
  extractionOk: boolean
  score: number
  proposed: boolean
  confirmed: boolean
}

function simulate(inputs: Inputs): { rows: RowResult[]; agg: Agg } {
  const rows: RowResult[] = MOCK.map((r) => {
    const missing = r.uMissing < inputs.missingRate
    const extractionOk = r.uExtract < inputs.extractionAcc
    const score = extractionOk ? r.defectScore : Math.max(0, r.defectScore - 0.35)
    const proposed = !missing && score >= inputs.threshold
    const confirmed = proposed && r.uConfirm < inputs.reviewerRate
    return { missing, extractionOk, score, proposed, confirmed }
  })
  return { rows, agg: aggregate(rows, inputs) }
}

interface Agg {
  proposed: number
  confirmed: number
  confirmedDefect: number
  proposedDefect: number
  criticalMiss: number
  unknown: number
  precision: number | null
  recall: number | null
  f1: number | null
}

function aggregate(rows: RowResult[], inputs: Inputs): Agg {
  let proposed = 0
  let confirmed = 0
  let confirmedDefect = 0
  let proposedDefect = 0
  let criticalMiss = 0
  let unknown = 0

  rows.forEach((r, i) => {
    const truth = MOCK[i]
    if (r.missing) unknown++
    if (r.proposed) {
      proposed++
      if (truth.defect !== 'none') proposedDefect++
      if (r.confirmed) {
        confirmed++
        if (truth.defect !== 'none') confirmedDefect++
      }
    }
    if (truth.defect === 'critical') {
      const detected = r.proposed && r.confirmed
      if (!detected) criticalMiss++
    }
  })

  const precision = confirmed > 0 ? confirmedDefect / confirmed : null
  const recall = DEFECT_COUNT > 0 ? proposedDefect / DEFECT_COUNT : null
  const f1 = precision !== null && recall !== null && precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : null
  void inputs
  return { proposed, confirmed, confirmedDefect, proposedDefect, criticalMiss, unknown, precision, recall, f1 }
}

function pct(x: number | null): string {
  return x === null ? '—' : `${Math.round(x * 100)}%`
}

/* ── UI ── */

interface SliderProps {
  label: string
  hint: string
  min: number
  max: number
  step: number
  value: number
  display: string
  onChange: (v: number) => void
}

function Slider({ label, hint, min, max, step, value, display, onChange }: SliderProps) {
  return (
    <div className="slider-row">
      <div className="slider-head">
        <label htmlFor={`sl-${label}`}>{label}</label>
        <output htmlFor={`sl-${label}`}>{display}</output>
      </div>
      <input id={`sl-${label}`} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <div className="slider-hint">{hint}</div>
    </div>
  )
}

export function EvaluationPage() {
  const { t, lang } = useI18n()
  const [inputs, setInputs] = useState<Inputs>(DEFAULT_INPUTS)

  const { rows, agg } = useMemo(() => simulate(inputs), [inputs])
  const fmtPct = (x: number) => new Intl.NumberFormat(lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : 'en', { maximumFractionDigits: 0 }).format(x * 100)

  const set = (k: keyof Inputs) => (v: number) => setInputs((p) => ({ ...p, [k]: v }))

  const stats: Array<{ key: string; value: string; cls?: 'good' | 'bad'; note?: string }> = [
    { key: 'outputs.precision', value: pct(agg.precision) },
    { key: 'outputs.recall', value: pct(agg.recall) },
    { key: 'outputs.f1', value: pct(agg.f1) },
    {
      key: 'outputs.criticalMiss',
      value: String(agg.criticalMiss),
      cls: agg.criticalMiss > 0 ? 'bad' : 'good',
      note: `/${CRITICAL_COUNT}`,
    },
    { key: 'outputs.unknownRate', value: pct(agg.unknown / N) },
    { key: 'outputs.evidenceHit', value: pct(inputs.extractionAcc) },
    { key: 'outputs.reviewVolume', value: String(agg.proposed), note: `/${N}` },
  ]

  return (
    <div className="container page">
      <PageIntro titleKey="evaluation.title" leadKey="evaluation.lead" badges={<SimulatedBadge />} />
      <DemoNote>{t('evaluation.simulatedNote')}</DemoNote>

      <div className="sim-grid">
        <div className="card">
          <h3 style={{ marginBottom: 16 }}>{t('evaluation.inputsTitle')}</h3>
          <Slider
            label={t('evaluation.inputs.missingRate')}
            hint={t('evaluation.inputs.missingRateHint')}
            min={0}
            max={0.4}
            step={0.01}
            value={inputs.missingRate}
            display={`${fmtPct(inputs.missingRate)}%`}
            onChange={set('missingRate')}
          />
          <Slider
            label={t('evaluation.inputs.extractionAcc')}
            hint={t('evaluation.inputs.extractionAccHint')}
            min={0.7}
            max={1}
            step={0.01}
            value={inputs.extractionAcc}
            display={`${fmtPct(inputs.extractionAcc)}%`}
            onChange={set('extractionAcc')}
          />
          <Slider
            label={t('evaluation.inputs.reviewerRate')}
            hint={t('evaluation.inputs.reviewerRateHint')}
            min={0}
            max={1}
            step={0.01}
            value={inputs.reviewerRate}
            display={`${fmtPct(inputs.reviewerRate)}%`}
            onChange={set('reviewerRate')}
          />
          <Slider
            label={t('evaluation.inputs.threshold')}
            hint={t('evaluation.inputs.thresholdHint')}
            min={0.1}
            max={0.9}
            step={0.01}
            value={inputs.threshold}
            display={inputs.threshold.toFixed(2)}
            onChange={set('threshold')}
          />
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => setInputs(DEFAULT_INPUTS)}>
            <IconReset width={13} height={13} /> {t('evaluation.resetInputs')}
          </button>
        </div>

        <div>
          <h3 style={{ marginBottom: 14 }}>{t('evaluation.outputsTitle')}</h3>
          <div className="stat-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.key}>
                <div className="s-label">{t(`evaluation.${s.key}`)}</div>
                <div className={`s-value ${s.cls ?? ''}`}>
                  {s.value}
                  {s.note && <span className="s-note" style={{ fontSize: '0.9rem' }}>{s.note}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: 18 }}>
            <h4 style={{ marginBottom: 8 }}>{t('evaluation.formulasTitle')}</h4>
            <p className="small muted">{t('evaluation.formulasIntro', { n: N, defects: DEFECT_COUNT })}</p>
            <ul className="arrow-list small" style={{ fontSize: '0.86rem' }}>
              <li>{t('evaluation.formulaPrecision')}</li>
              <li>{t('evaluation.formulaRecall')}</li>
              <li>{t('evaluation.formulaF1')}</li>
            </ul>
            <h4 style={{ margin: '14px 0 8px' }}>{t('evaluation.thresholdTitle')}</h4>
            <p className="small muted" style={{ margin: 0 }}>{t('evaluation.thresholdText')}</p>
          </div>

          <div className="card" style={{ marginTop: 18 }}>
            <h4 style={{ marginBottom: 8 }}>{t('evaluation.sampleTitle')}</h4>
            <p className="small muted">{t('evaluation.sampleNote', { n: N })}</p>
            <div className="table-wrap" style={{ border: 'none', background: 'transparent' }}>
              <table className="data-table" style={{ minWidth: 560 }}>
                <thead>
                  <tr>
                    <th scope="col">{t('evaluation.sampleCols.caseNo')}</th>
                    <th scope="col">{t('evaluation.sampleCols.defect')}</th>
                    <th scope="col">{t('evaluation.sampleCols.missing')}</th>
                    <th scope="col">{t('evaluation.sampleCols.extract')}</th>
                    <th scope="col">{t('evaluation.sampleCols.score')}</th>
                    <th scope="col">{t('evaluation.sampleCols.proposed')}</th>
                    <th scope="col">{t('evaluation.sampleCols.confirmed')}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.slice(0, 10).map((r, i) => (
                    <tr key={i}>
                      <td style={{ fontFamily: 'var(--font-mono)' }}>{String(i + 1).padStart(3, '0')}</td>
                      <td>
                        <span className={`badge ${MOCK[i].defect === 'critical' ? 'badge-verdict v-true' : MOCK[i].defect === 'minor' ? 'badge-origin o-examiner' : 'badge-neutral'}`}>
                          {t(`evaluation.defectTypes.${MOCK[i].defect}`)}
                        </span>
                      </td>
                      <td>{r.missing ? t('evaluation.yes') : t('evaluation.no')}</td>
                      <td>{r.extractionOk ? t('evaluation.yes') : t('evaluation.no')}</td>
                      <td style={{ fontFamily: 'var(--font-mono)' }}>{r.score.toFixed(2)}</td>
                      <td>{r.proposed ? t('evaluation.yes') : t('evaluation.no')}</td>
                      <td>{r.confirmed ? t('evaluation.yes') : t('evaluation.no')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>{t('evaluation.goalsTitle')}</h2>
        <div className="demo-note">{t('evaluation.goalsNote')}</div>
        <ul className="arrow-list">
          {(['g1', 'g2', 'g3'] as const).map((k) => (
            <li key={k}>{t(`evaluation.goals.${k}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
