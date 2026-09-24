/** 미래의 하루 — 역할 선택 + 사건 접수→환류의 안내형 스토리 (3분/자세히 보기). */
import { useState } from 'react'
import { useI18n } from '@/i18n'
import { PageIntro } from '@/components/PageIntro'
import { DemoBadge } from '@/components/badges'
import { sitePath } from '@/lib/path'
import { IconArrowRight } from '@/components/icons'

type Role = 'examiner' | 'reviewer' | 'researcher'
const SCENES = ['intake', 'acquire', 'diagnose', 'review', 'feedback'] as const

/** 3분 모드용 — 첫 문장만 추출한다. */
function firstSentence(text: string): string {
  const m = /^.*?[.。](?:\s|$)/.exec(text)
  return m ? m[0].trim() : text
}

export function ExperiencePage() {
  const { t } = useI18n()
  const [role, setRole] = useState<Role>('examiner')
  const [detail, setDetail] = useState(false)

  return (
    <div className="container page">
      <PageIntro
        titleKey="experience.title"
        leadKey="experience.lead"
        badges={<DemoBadge />}
      />

      <p className="badge badge-demo" style={{ marginBottom: 18 }}>
        {t('experience.assumptionBadge')}
      </p>

      <div className="section-title-row">
        <h2 style={{ margin: 0 }}>{t('experience.roleLabel')}</h2>
      </div>
      <div className="role-picker" role="radiogroup" aria-label={t('experience.roleLabel')}>
        {(Object.keys({ examiner: 1, reviewer: 1, researcher: 1 }) as Role[]).map((r) => (
          <button
            key={r}
            type="button"
            role="radio"
            aria-checked={role === r}
            className={`role-card ${role === r ? 'active' : ''}`}
            onClick={() => setRole(r)}
          >
            <h3>{t(`experience.roles.${r}.title`)}</h3>
            <div className="role-sub">{t(`experience.roles.${r}.subtitle`)}</div>
            <p>{t(`experience.roles.${r}.blurb`)}</p>
          </button>
        ))}
      </div>

      <div className="tabs" role="tablist" aria-label="mode">
        <button
          type="button"
          role="tab"
          className="tab-btn"
          aria-selected={!detail}
          onClick={() => setDetail(false)}
        >
          {t('experience.modeQuick')}
        </button>
        <button
          type="button"
          role="tab"
          className="tab-btn"
          aria-selected={detail}
          onClick={() => setDetail(true)}
        >
          {t('experience.modeDetail')}
        </button>
      </div>

      <div className="scene-list">
        {SCENES.map((s, i) => (
          <section className="scene" key={s}>
            <div>
              <div className="scene-num">
                {String(i + 1).padStart(2, '0')} · {t(`experience.scenes.${s}.title`)}
              </div>
            </div>
            <div>
              <p>{detail ? t(`experience.scenes.${s}.${role}`) : firstSentence(t(`experience.scenes.${s}.${role}`))}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="card" style={{ marginTop: 26, borderColor: 'var(--accent-line)' }}>
        <h3 style={{ marginBottom: 6 }}>{t('experience.toLab')}</h3>
        <p className="small muted">{t('experience.sceneDataNote')}</p>
        <a className="btn btn-sm" href={sitePath('lab/')}>
          {t('experience.toLabCta')} <IconArrowRight width={14} height={14} />
        </a>
      </div>
    </div>
  )
}
