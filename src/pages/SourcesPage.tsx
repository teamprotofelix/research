/** 자료와 용어 — 보고서, 원문 출처 링크, 한·영·일 용어집, 연구·시연·운영의 구분, 버전 정보. */
import { useI18n } from '@/i18n'
import { PageIntro } from '@/components/PageIntro'
import { GlossaryTerm } from '@/components/GlossaryTerm'
import { IconExternal } from '@/components/icons'

const GLOSSARY_KEYS = [
  'evidenceTrace',
  'factDependencyGraph',
  'canonicalPackage',
  'goldSet',
  'shadowMode',
  'ruleEvolution',
  'unknown',
  'diagnosticCandidate',
  'neuroSymbolic',
  'verdictStatuses',
] as const

export function SourcesPage() {
  const { t } = useI18n()

  return (
    <div className="container page">
      <PageIntro titleKey="sources.title" leadKey="sources.lead" />

      <div className="section">
        <h2>{t('sources.reportTitle')}</h2>
        <div className="card">
          <h3 style={{ marginBottom: 4 }}>{t('sources.report.title')}</h3>
          <div className="small muted" style={{ marginBottom: 8 }}>{t('sources.report.meta')}</div>
          <span className="badge badge-neutral">{t('sources.report.status')}</span>
          <p className="small muted" style={{ margin: '10px 0 0' }}>{t('sources.report.statusText')}</p>
        </div>
      </div>

      <div className="section">
        <h2>{t('sources.linksTitle')}</h2>
        <ul className="arrow-list">
          <li>
            <a href="https://peqrule.moip.ai.kr/" target="_blank" rel="noopener noreferrer">
              {t('sources.links.peq.label')} <IconExternal width={12} height={12} style={{ display: 'inline' }} />
            </a>
            <span className="small muted"> — {t('sources.links.peq.note')}</span>
          </li>
          <li>
            <a href="https://caipex.site/" target="_blank" rel="noopener noreferrer">
              {t('sources.links.caipex.label')} <IconExternal width={12} height={12} style={{ display: 'inline' }} />
            </a>
            <span className="small muted"> — {t('sources.links.caipex.note')}</span>
          </li>
          <li>
            <span>{t('sources.links.reportLink.label')}</span>
            <span className="small muted"> — {t('sources.links.reportLink.note')}</span>
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>{t('sources.glossaryTitle')}</h2>
        <p className="lead">{t('sources.glossaryNote')}</p>
        <div className="table-wrap">
          <table className="data-table glossary-table">
            <thead>
              <tr>
                <th scope="col">{t('sources.colTerm')}</th>
                <th scope="col">{t('sources.colKo')}</th>
                <th scope="col">{t('sources.colEn')}</th>
                <th scope="col">{t('sources.colJa')}</th>
              </tr>
            </thead>
            <tbody>
              {GLOSSARY_KEYS.map((k) => (
                <tr key={k}>
                  <td>{t(`sources.glossary.${k}.term`)}</td>
                  <td className="small">{t(`sources.glossary.${k}.ko`)}</td>
                  <td className="small">{t(`sources.glossary.${k}.en`)}</td>
                  <td className="small">{t(`sources.glossary.${k}.ja`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small muted" style={{ marginTop: 10 }}>
          — <GlossaryTerm termKey="evidenceTrace" /> · <GlossaryTerm termKey="goldSet" /> · <GlossaryTerm termKey="unknown" />
        </p>
      </div>

      <div className="section">
        <h2>{t('sources.distinctionTitle')}</h2>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">{t('sources.distinction.colKind')}</th>
                <th scope="col">{t('sources.distinction.colMeaning')}</th>
              </tr>
            </thead>
            <tbody>
              {(['research', 'demo', 'operations'] as const).map((k) => (
                <tr key={k}>
                  <td>
                    <strong>{t(`sources.distinction.${k}.kind`)}</strong>
                  </td>
                  <td className="small">{t(`sources.distinction.${k}.meaning`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2>{t('sources.versionTitle')}</h2>
        <dl className="snapshot-list">
          <div style={{ display: 'contents' }}>
            <dt>{t('sources.version.site')}</dt>
            <dd>{t('sources.version.siteVal')}</dd>
          </div>
          <div style={{ display: 'contents' }}>
            <dt>{t('sources.version.data')}</dt>
            <dd>{t('sources.version.dataVal')}</dd>
          </div>
          <div style={{ display: 'contents' }}>
            <dt>{t('sources.version.stack')}</dt>
            <dd>{t('sources.version.stackVal')}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
