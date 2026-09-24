/** 용어집 툴팁이 있는 용어 — /sources/의 한·영·일 대응 설명을 현재 언어로 표시한다. */
import { useI18n } from '@/i18n'

export function GlossaryTerm({ termKey }: { termKey: string }) {
  const { t, lang } = useI18n()
  const term = t(`sources.glossary.${termKey}.term`)
  const desc = t(`sources.glossary.${termKey}.${lang}`)
  return (
    <span className="term" tabIndex={0}>
      {term}
      <span className="term-tip" role="tooltip">
        {desc}
      </span>
    </span>
  )
}
