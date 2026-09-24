/** 연구 개요 — 문제·가설·5층 데이터 흐름(SVG)·L0~L4 계층·권리별 확장. */
import { useState } from 'react'
import { useI18n } from '@/i18n'
import { PageIntro } from '@/components/PageIntro'
import { ImageSlot } from '@/components/ImageSlot'
import { sitePath } from '@/lib/path'
import { IconArrowRight, IconExternal } from '@/components/icons'

const LAYER_KEYS = ['materials', 'plan', 'facts', 'rules', 'human'] as const
const HIER_KEYS = ['l0', 'l1', 'l2', 'l3', 'l4'] as const
const RIGHTS_KEYS = ['patent', 'trademark', 'design'] as const

export function ResearchPage() {
  const { t } = useI18n()
  const [activeLayer, setActiveLayer] = useState<(typeof LAYER_KEYS)[number]>('facts')

  return (
    <div className="container page">
      <PageIntro titleKey="researchPage.title" leadKey="researchPage.lead" />

      <div className="section">
        <h2>{t('researchPage.problemTitle')}</h2>
        <ul className="arrow-list">
          {[1, 2, 3].map((n) => (
            <li key={n}>{t(`researchPage.problem.p${n}`)}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>{t('researchPage.hypothesisTitle')}</h2>
        <p className="serif-quote">{t('researchPage.hypothesisText')}</p>
      </div>

      <div className="section">
        <h2>{t('researchPage.neuroSymbolicTitle')}</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>{t('researchPage.neuroSymbolic.generative.title')}</h3>
            <p className="small muted" style={{ margin: 0 }}>
              {t('researchPage.neuroSymbolic.generative.text')}
            </p>
          </div>
          <div className="card">
            <h3>{t('researchPage.neuroSymbolic.rules.title')}</h3>
            <p className="small muted" style={{ margin: 0 }}>
              {t('researchPage.neuroSymbolic.rules.text')}
            </p>
          </div>
          <div className="card">
            <h3>{t('researchPage.neuroSymbolic.human.title')}</h3>
            <p className="small muted" style={{ margin: 0 }}>
              {t('researchPage.neuroSymbolic.human.text')}
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title-row">
          <h2 style={{ margin: 0 }}>{t('researchPage.layersTitle')}</h2>
        </div>
        <p className="lead">{t('researchPage.layersIntro')}</p>
        <div className="layer-diagram">
          <div className="layer-flow" role="tablist" aria-label={t('researchPage.layersTitle')}>
            {LAYER_KEYS.map((k) => (
              <div className="layer-node" key={k}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeLayer === k}
                  className={activeLayer === k ? 'active' : ''}
                  onClick={() => setActiveLayer(k)}
                >
                  {t(`researchPage.layers.${k}.name`)}
                </button>
              </div>
            ))}
          </div>
          <dl className="layer-detail">
            <div>
              <dt>{t('researchPage.layers.inputLabel')}</dt>
              <dd>{t(`researchPage.layers.${activeLayer}.input`)}</dd>
            </div>
            <div>
              <dt>{t('researchPage.layers.outputLabel')}</dt>
              <dd>{t(`researchPage.layers.${activeLayer}.output`)}</dd>
            </div>
            <div>
              <dt>{t('researchPage.layers.failureLabel')}</dt>
              <dd className="fail">{t(`researchPage.layers.${activeLayer}.failure`)}</dd>
            </div>
            <div>
              <dt>{t('researchPage.layers.ownerLabel')}</dt>
              <dd>{t(`researchPage.layers.${activeLayer}.owner`)}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="section">
        <h2>{t('researchPage.hierarchyTitle')}</h2>
        <p className="lead">{t('researchPage.hierarchyIntro')}</p>
        <div className="hierarchy-list">
          {HIER_KEYS.map((k) => (
            <div className="hierarchy-item" key={k}>
              <div className="h-name">{t(`researchPage.hierarchy.${k}.name`)}</div>
              <div className="h-role">{t(`researchPage.hierarchy.${k}.role`)}</div>
              <div className="h-residual">{t(`researchPage.hierarchy.${k}.residual`)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>{t('researchPage.separationTitle')}</h2>
        <p className="lead">{t('researchPage.separationText')}</p>
        <ImageSlot file="evidence-library.webp" alt={t('a11y.imageSlotAlt')} ratio="3 / 2" />
      </div>

      <div className="section">
        <h2>{t('researchPage.rightsTitle')}</h2>
        <div className="grid grid-3">
          {RIGHTS_KEYS.map((k) => (
            <div className="card" key={k}>
              <h3>{t(`researchPage.rights.${k}.title`)}</h3>
              <p className="small muted" style={{ margin: 0 }}>
                {t(`researchPage.rights.${k}.text`)}
              </p>
              <p style={{ marginTop: 12, marginBottom: 0 }}>
                <a className="small" href={sitePath('cases/')}>
                  {t('nav.groups.cases.items.cases.label')} <IconArrowRight width={12} height={12} style={{ display: 'inline' }} />
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="card">
          <h3>{t('researchPage.reportLinkTitle')}</h3>
          <p className="small muted" style={{ margin: 0 }}>
            {t('researchPage.reportLinkText')} ·{' '}
            <a href={sitePath('sources/')}>{t('footer.report')}</a> ·{' '}
            <a href="https://peqrule.moip.ai.kr/" target="_blank" rel="noopener noreferrer">
              {t('footer.peqRuleSite')} <IconExternal width={12} height={12} style={{ display: 'inline' }} />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
