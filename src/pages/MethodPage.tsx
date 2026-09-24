/** 연구 방법 — Gold/Challenge Set, 데이터 누수 방지, 비교 실험, 평가지표, UNKNOWN의 의미. */
import { useI18n } from '@/i18n'
import { PageIntro } from '@/components/PageIntro'
import { ImageSlot } from '@/components/ImageSlot'
import { sitePath } from '@/lib/path'
import { IconArrowRight } from '@/components/icons'

const METRICS = ['findingPrecision', 'findingRecall', 'f1', 'criticalMiss', 'unknownRate', 'evidenceHit'] as const
const LEAKS = ['l1', 'l2', 'l3', 'l4'] as const

export function MethodPage() {
  const { t } = useI18n()

  return (
    <div className="container page">
      <PageIntro titleKey="method.title" leadKey="method.lead" />

      <div className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3>{t('method.goldTitle')}</h3>
            <p className="small muted" style={{ margin: 0 }}>{t('method.goldText')}</p>
          </div>
          <div className="card">
            <h3>{t('method.challengeTitle')}</h3>
            <p className="small muted" style={{ margin: 0 }}>{t('method.challengeText')}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>{t('method.leakageTitle')}</h2>
        <ul className="arrow-list">
          {LEAKS.map((k) => (
            <li key={k}>{t(`method.leakage.${k}`)}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>{t('method.compareTitle')}</h2>
        <p className="lead">{t('method.compareText')}</p>
        <ImageSlot file="evidence-library.webp" alt={t('a11y.imageSlotAlt')} ratio="3 / 2" />
      </div>

      <div className="section">
        <h2>{t('method.metricsTitle')}</h2>
        <div className="grid grid-2">
          {METRICS.map((k) => (
            <div className="card-flat" key={k}>
              <strong>{t(`method.metrics.${k}`)}</strong>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 16 }}>
          <a className="small" href={sitePath('evaluation/')}>
            {t('nav.groups.evaluate.items.evaluation.label')} <IconArrowRight width={12} height={12} style={{ display: 'inline' }} />
          </a>
        </p>
      </div>

      <div className="section">
        <h2>{t('method.unknownTitle')}</h2>
        <p className="lead">{t('method.unknownText')}</p>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">{t('method.unknownTable.colStatus')}</th>
                <th scope="col">{t('method.unknownTable.colMeaning')}</th>
                <th scope="col">{t('method.unknownTable.colAction')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="badge badge-verdict v-true">TRUE</span>
                </td>
                <td className="small">{t('method.unknownTable.true')}</td>
                <td className="small">{t('method.unknownTable.trueAction')}</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-verdict v-false">FALSE</span>
                </td>
                <td className="small">{t('method.unknownTable.false')}</td>
                <td className="small">{t('method.unknownTable.falseAction')}</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-verdict v-unknown">UNKNOWN</span>
                </td>
                <td className="small">{t('method.unknownTable.unknown')}</td>
                <td className="small">{t('method.unknownTable.unknownAction')}</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-verdict v-na">NOT_APPLICABLE</span>
                </td>
                <td className="small">{t('method.unknownTable.na')}</td>
                <td className="small">{t('method.unknownTable.naAction')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
