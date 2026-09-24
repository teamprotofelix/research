/** 구축 시나리오 — Low/Medium/High 기획 추정 + 단계별 산출물·전환 조건. */
import { useI18n } from '@/i18n'
import { PageIntro } from '@/components/PageIntro'
import { DemoNote } from '@/components/badges'
import { ImageSlot } from '@/components/ImageSlot'

const PHASES = ['p1', 'p2', 'p3', 'p4', 'p5'] as const

const SCENARIOS = [
  { key: 'low', duration: '9–12 mo', fte: '8–12', budget: '₩0.8–1.2B' },
  { key: 'medium', duration: '18–24 mo', fte: '20–30', budget: '₩2.8–4.5B' },
  { key: 'high', duration: '30–36 mo', fte: '45–70', budget: '₩8–13B' },
]

/** 예산 추정을 시각화하는 접근 가능한 SVG 바 — 가로 길이는 예산 범위의 하한 비례(모의). */
function BudgetBars() {
  const { lang } = useI18n()
  const data = [
    { label: 'Low', lo: 0.8, hi: 1.2 },
    { label: 'Medium', lo: 2.8, hi: 4.5 },
    { label: 'High', lo: 8, hi: 13 },
  ]
  // 단위 표기 — 기획 예산 단위(억 원)의 의미는 번역문에서 명시한다
  const unit = lang === 'ko' ? '억 원' : 'B KRW'
  const max = 14
  const w = 640
  const h = 130
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label="budget comparison" style={{ width: '100%', height: 'auto' }}>
      {data.map((d, i) => {
        const y = 22 + i * 38
        const x1 = 90 + (d.lo / max) * (w - 130)
        const x2 = 90 + (d.hi / max) * (w - 130)
        return (
          <g key={d.label}>
            <text x={8} y={y + 8} fontSize="12" fill="var(--muted)">
              {d.label}
            </text>
            <rect x={x1} y={y} width={Math.max(4, x2 - x1)} height="16" rx="3" fill="var(--accent)" opacity="0.85" />
            <text x={x2 + 8} y={y + 13} fontSize="11" fill="var(--muted)">
              {d.lo}–{d.hi} {unit}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function RoadmapPage() {
  const { t } = useI18n()

  return (
    <div className="container page">
      <PageIntro titleKey="roadmap.title" leadKey="roadmap.lead" />
      <DemoNote>{t('roadmap.estimateNote')}</DemoNote>

      <div className="section">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">{t('roadmap.colScenario')}</th>
                <th scope="col">{t('roadmap.colDuration')}</th>
                <th scope="col">{t('roadmap.colFte')}</th>
                <th scope="col">{t('roadmap.colBudget')}</th>
                <th scope="col">{t('roadmap.colFocus')}</th>
              </tr>
            </thead>
            <tbody>
              {SCENARIOS.map((s) => (
                <tr key={s.key}>
                  <td>
                    <strong>{t(`roadmap.scenarios.${s.key}.name`)}</strong>
                  </td>
                  <td className="num">{s.duration}</td>
                  <td className="num">{s.fte}</td>
                  <td className="num">{s.budget}</td>
                  <td className="small">{t(`roadmap.scenarios.${s.key}.focus`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card" style={{ marginTop: 16 }}>
          <BudgetBars />
          <p className="chart-note">{t('roadmap.estimateNote')}</p>
        </div>
      </div>

      <div className="section">
        <h2>{t('roadmap.phasesTitle')}</h2>
        <div className="roadmap-phases">
          {PHASES.map((p) => (
            <div className="phase-item" key={p}>
              <div className="p-title">{t(`roadmap.phases.${p}.title`)}</div>
              <div className="p-output">{t(`roadmap.phases.${p}.output`)}</div>
              <div className="p-gate">
                <strong>Gate:</strong> {t(`roadmap.phases.${p}.gate`)}
              </div>
            </div>
          ))}
        </div>
        <p className="small muted" style={{ marginTop: 12 }}>{t('roadmap.gateNote')}</p>
      </div>

      <div className="section">
        <ImageSlot file="research-horizon.webp" alt={t('a11y.imageSlotAlt')} ratio="21 / 9" />
      </div>

      <div className="section">
        <div className="callout">
          <p style={{ margin: 0 }} className="small">{t('roadmap.caipexContext')}</p>
        </div>
      </div>
    </div>
  )
}
