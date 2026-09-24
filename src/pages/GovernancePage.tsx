/** 신뢰와 책임 — 자료 등급 정책 매트릭스(인터랙티브), 사건 스냅샷, 재현 단계, 승인 경계.
 *  이 화면은 실제 네트워크 요청을 보내지 않는다. */
import { useState } from 'react'
import { useI18n } from '@/i18n'
import { PageIntro } from '@/components/PageIntro'
import { DemoNote } from '@/components/badges'
import { IconLock } from '@/components/icons'

type Grade = 'PUBLIC' | 'UNPUBLISHED' | 'RESTRICTED'
type Cell = 'allowed' | 'conditional' | 'forbidden'

/** 가상 정책 매트릭스 — 등급별 모델 경로 허용 여부 (예시, 실제 정책 아님) */
const MATRIX: Record<Grade, Record<string, Cell>> = {
  PUBLIC: { onPrem: 'allowed', domesticCloud: 'allowed', publicCloud: 'allowed', overseasApi: 'allowed', openModel: 'allowed' },
  UNPUBLISHED: { onPrem: 'allowed', domesticCloud: 'allowed', publicCloud: 'conditional', overseasApi: 'forbidden', openModel: 'conditional' },
  RESTRICTED: { onPrem: 'allowed', domesticCloud: 'conditional', publicCloud: 'forbidden', overseasApi: 'forbidden', openModel: 'forbidden' },
}

const PATH_KEYS = ['onPrem', 'domesticCloud', 'publicCloud', 'overseasApi', 'openModel'] as const
const GRADES: Grade[] = ['PUBLIC', 'UNPUBLISHED', 'RESTRICTED']
const SNAP_KEYS = ['acquiredAt', 'docHash', 'factVersion', 'ruleVersion', 'promptVersion', 'reviewHistory'] as const
const REPRO_KEYS = ['r1', 'r2', 'r3', 'r4'] as const
const APPROVAL_KEYS = ['a1', 'a2', 'a3', 'a4'] as const

export function GovernancePage() {
  const { t } = useI18n()
  const [grade, setGrade] = useState<Grade>('PUBLIC')

  return (
    <div className="container page">
      <PageIntro titleKey="governance.title" leadKey="governance.lead" />

      <div className="section">
        <h2>{t('governance.gradesTitle')}</h2>
        <p className="lead">{t('governance.gradesIntro')}</p>
        <div className="grade-picker" role="radiogroup" aria-label={t('governance.gradesTitle')}>
          {GRADES.map((g) => (
            <button
              key={g}
              type="button"
              role="radio"
              aria-checked={grade === g}
              className={`grade-btn ${grade === g ? 'active' : ''} g-${g.toLowerCase()}`}
              onClick={() => setGrade(g)}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{g}</span> · {t(`governance.grades.${g}.name`)} — {t(`governance.grades.${g}.desc`)}
            </button>
          ))}
        </div>
        <div className="table-wrap">
          <table className="matrix-table">
            <thead>
              <tr>
                <th scope="col">{t('governance.gradesTitle')}</th>
                {PATH_KEYS.map((p) => (
                  <th scope="col" key={p}>
                    {t(`governance.modelPaths.${p}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GRADES.map((g) => (
                <tr key={g} style={g === grade ? { background: 'var(--accent-soft)' } : undefined}>
                  <th scope="row" style={{ textAlign: 'left', fontWeight: 650 }}>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>{g}</span> · {t(`governance.grades.${g}.name`)}
                  </th>
                  {PATH_KEYS.map((p) => {
                    const cell = MATRIX[g][p]
                    return (
                      <td key={p} className={`matrix-cell ${cell}`}>
                        {t(`governance.${cell}`)}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="chart-note">{t('governance.matrixNote')}</p>
      </div>

      <div className="section">
        <h2>{t('governance.snapshotTitle')}</h2>
        <p className="lead">{t('governance.snapshotIntro')}</p>
        <DemoNote>{t('governance.snapshot.docHashVal')}</DemoNote>
        <dl className="snapshot-list">
          {SNAP_KEYS.map((k) => (
            <div key={k} style={{ display: 'contents' }}>
              <dt>{t(`governance.snapshot.${k}`)}</dt>
              <dd>{t(`governance.snapshot.${k}Val`)}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section">
        <h2>{t('governance.reproducibilityTitle')}</h2>
        <ul className="arrow-list">
          {REPRO_KEYS.map((k) => (
            <li key={k}>{t(`governance.reproducibility.${k}`)}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>{t('governance.approvalTitle')}</h2>
        <ul className="arrow-list">
          {APPROVAL_KEYS.map((k) => (
            <li key={k}>{t(`governance.approval.${k}`)}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <div className="callout warn">
          <h4>
            <IconLock width={15} height={15} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} />
            {t('governance.limitationTitle')}
          </h4>
          <p style={{ margin: 0 }} className="small">{t('governance.limitationText')}</p>
        </div>
      </div>
    </div>
  )
}
