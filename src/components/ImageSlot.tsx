/**
 * 사용자 생성 이미지 슬롯.
 * public/assets/images/에 지정된 파일명으로 이미지를 넣으면 자동 적용되고,
 * 없으면 SVG/CSS 폴백 디자인으로 완성된 화면을 유지한다.
 * 로딩 실패(onError) 시에도 폴백으로 전환한다.
 */
import { useState, type ReactNode } from 'react'
import { assetPath } from '@/lib/path'
import { useI18n } from '@/i18n'
import { IconLayers } from './icons'

interface Props {
  /** public/assets/images/ 아래의 파일명 (예: 'research-hero.webp') */
  file: string
  alt: string
  ratio?: string
  fallbackLabel?: string
  className?: string
  children?: ReactNode
}

export function ImageSlot({ file, alt, ratio = '16 / 10', fallbackLabel, className, children }: Props) {
  const [failed, setFailed] = useState(false)
  const { t } = useI18n()
  const src = assetPath(`assets/images/${file}`)

  return (
    <div className={`image-slot ${className ?? ''}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{ aspectRatio: ratio }}
          onError={() => setFailed(true)}
        />
      ) : (
        <Fallback ratio={ratio} label={fallbackLabel ?? t('a11y.imageSlotAlt')} />
      )}
      {children}
    </div>
  )
}

function Fallback({ ratio, label }: { ratio: string; label: string }) {
  return (
    <div className="slot-fallback" style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <IconLayers width={56} height={56} strokeWidth={1.2} opacity={0.35} />
    </div>
  )
}
