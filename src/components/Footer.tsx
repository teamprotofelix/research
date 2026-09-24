/** 푸터 — CAIPEX 지원 표기, 바로가기, 표현 원칙. */
import { useI18n } from '@/i18n'
import { assetPath, sitePath } from '@/lib/path'
import { IconExternal } from './icons'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-grid">
          <div style={{ maxWidth: 380 }}>
            <div className="caipex-support">
              <img src={assetPath('assets/images/caipex-logo.png')} alt={t('a11y.caipexLogoAlt')} width="120" height="36" loading="lazy" />
              <div>
                <strong style={{ display: 'block', marginBottom: 4 }}>{t('footer.caipexSupportTitle')}</strong>
                <span className="small">{t('footer.caipexSupportText')}</span>
              </div>
            </div>
            <p className="small" style={{ marginTop: 14 }}>
              <a href="https://caipex.site/" target="_blank" rel="noopener noreferrer">
                {t('footer.visitCaipex')} <IconExternal width={12} height={12} style={{ display: 'inline' }} />
              </a>
            </p>
          </div>

          <div>
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li><a href={sitePath('research/')}>{t('nav.groups.intro.items.research.label')}</a></li>
              <li><a href={sitePath('experience/')}>{t('nav.groups.experience.items.experience.label')}</a></li>
              <li><a href={sitePath('lab/')}>{t('nav.groups.experience.items.lab.label')}</a></li>
              <li><a href={sitePath('cases/')}>{t('nav.groups.cases.items.cases.label')}</a></li>
              <li><a href={sitePath('evaluation/')}>{t('nav.groups.evaluate.items.evaluation.label')}</a></li>
            </ul>
          </div>

          <div>
            <h3>{t('footer.related')}</h3>
            <ul>
              <li>
                <a href="https://peqrule.moip.ai.kr/" target="_blank" rel="noopener noreferrer">
                  {t('footer.peqRuleSite')} <IconExternal width={12} height={12} style={{ display: 'inline' }} />
                </a>
              </li>
              <li><a href={sitePath('sources/')}>{t('footer.report')}</a></li>
              <li><a href={sitePath('sources/')}>{t('nav.groups.sources.items.sources.label')}</a></li>
            </ul>
          </div>

          <div>
            <h3>{t('footer.disclaimerTitle')}</h3>
            <p className="small">{t('footer.disclaimer')}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 · {t('footer.copyright')}</span>
          <span>{t('common.finalByHuman')}</span>
        </div>
      </div>
    </footer>
  )
}
