/** 연구의 문 — 연구 질문, 90초 개요, 대표 체험 시작, 핵심 흐름, CAIPEX 지원 표기. */
import { useState } from 'react'
import { useI18n, usePageMeta } from '@/i18n'
import { sitePath } from '@/lib/path'
import { ImageSlot } from '@/components/ImageSlot'
import { DemoBadge } from '@/components/badges'
import { IconArrowRight, IconExternal } from '@/components/icons'

const OVERVIEW_KEYS = ['collect', 'extract', 'evaluate', 'unknown', 'review', 'improve']
const FLOW_KEYS = ['d1', 'd2', 'd3', 'd4', 'd5']
const WHOM_KEYS = ['examiner', 'researcher', 'policy', 'visitor']

export function HomePage() {
  const { t } = useI18n()
  usePageMeta('home.title')
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="badge badge-demo" style={{ marginBottom: 18 }}>
              {t('home.kicker')}
            </p>
            <h1>{t('home.title')}</h1>
            <p className="lead">{t('home.lead')}</p>
            <div className="hero-actions">
              <a className="btn" href={sitePath('lab/')}>
                {t('home.ctaExperience')} <IconArrowRight width={16} height={16} />
              </a>
              <a className="btn btn-secondary" href={sitePath('research/')}>
                {t('home.ctaResearch')}
              </a>
            </div>
            <div className="hero-meta">
              <DemoBadge />
              <span className="small muted">{t('home.startNote')}</span>
            </div>
          </div>
          <div className="hero-visual">
            <ImageSlot file="research-hero.webp" alt={t('home.heroImgAlt')} ratio="16 / 10" />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="question-card">
            <div className="q-label">{t('home.questionLabel')}</div>
            <p className="q-text">{t('home.question')}</p>
            <p className="small muted" style={{ margin: 0 }}>
              {t('home.questionAnswer')}
            </p>
          </div>
        </div>

        <div className="section">
          <div className="section-title-row">
            <h2 style={{ margin: 0 }}>{t('home.overviewTitle')}</h2>
          </div>
          <p className="lead">{t('home.overviewIntro')}</p>
          <div className="overview-steps">
            {OVERVIEW_KEYS.map((k, i) => (
              <button
                key={k}
                type="button"
                className={`overview-step ${activeStep === i ? 'active' : ''}`}
                aria-pressed={activeStep === i}
                onClick={() => setActiveStep(i)}
              >
                <h3>{t(`home.overview.${k}.title`)}</h3>
                <p>{t(`home.overview.${k}.text`)}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-title-row">
            <h2 style={{ margin: 0 }}>{t('home.flowTitle')}</h2>
          </div>
          <div className="flow-strip" role="list" aria-label={t('home.flowTitle')}>
            {FLOW_KEYS.map((k, i) => (
              <div className="flow-step" role="listitem" key={k}>
                <div className="fs-title">
                  {i + 1}. {t(`home.flow.${k}`)}
                </div>
              </div>
            ))}
          </div>
          <p className="chart-note">{t('home.flowCaption')}</p>
        </div>

        <div className="section">
          <div className="card" style={{ borderColor: 'var(--accent-line)' }}>
            <div className="section-title-row" style={{ marginBottom: 8 }}>
              <h3 style={{ margin: 0 }}>{t('home.casePreviewTitle')}</h3>
            </div>
            <p className="lead" style={{ marginBottom: 16 }}>
              {t('home.casePreviewText')}
            </p>
            <a className="btn btn-secondary btn-sm" href={sitePath('lab/')}>
              {t('home.casePreviewCta')} <IconArrowRight width={14} height={14} />
            </a>
          </div>
        </div>

        <div className="section">
          <div className="section-title-row">
            <h2 style={{ margin: 0 }}>{t('home.forWhomTitle')}</h2>
          </div>
          <div className="grid grid-4">
            {WHOM_KEYS.map((k) => (
              <div className="card" key={k}>
                <h3>{t(`home.forWhom.${k}.title`)}</h3>
                <p className="small muted" style={{ margin: 0 }}>
                  {t(`home.forWhom.${k}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="grid grid-2">
            <div className="card">
              <h3>{t('home.supportTitle')}</h3>
              <p className="small muted">{t('home.supportText')}</p>
              <a href="https://caipex.site/" target="_blank" rel="noopener noreferrer" className="small">
                {t('footer.visitCaipex')} <IconExternal width={12} height={12} style={{ display: 'inline' }} />
              </a>
            </div>
            <div className="card">
              <h3>{t('home.existingSiteTitle')}</h3>
              <p className="small muted">{t('home.existingSiteText')}</p>
              <a href="https://peqrule.moip.ai.kr/" target="_blank" rel="noopener noreferrer" className="small">
                {t('home.goPeq')} <IconExternal width={12} height={12} style={{ display: 'inline' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
