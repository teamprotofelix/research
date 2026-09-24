/** 인라인 SVG 아이콘 — 외부 아이콘 폰트 없이 사용한다. */
import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export const IconSearch = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.8-3.8" />
  </svg>
)

export const IconDoc = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4" />
    <path d="M9.5 12h6M9.5 15.5h6" />
  </svg>
)

export const IconLink = (p: P) => (
  <svg {...base} {...p}>
    <path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1.5 1.5" />
    <path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1.5-1.5" />
  </svg>
)

export const IconCheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
)

export const IconX = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const IconQuestion = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.6 9.2a2.4 2.4 0 1 1 3.4 2.3c-.8.4-1 1.1-1 1.9" />
    <path d="M12 16.6h.01" />
  </svg>
)

export const IconMinus = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h8" />
  </svg>
)

export const IconArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h16" />
    <path d="m13 5 7 7-7 7" />
  </svg>
)

export const IconExternal = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 5h5v5" />
    <path d="M19 5l-8 8" />
    <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
  </svg>
)

export const IconSun = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4" />
  </svg>
)

export const IconMoon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 13.5A8 8 0 0 1 10.5 4a8 8 0 1 0 9.5 9.5z" />
  </svg>
)

export const IconGlobe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
  </svg>
)

export const IconMenu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const IconShare = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="12" r="2.6" />
    <circle cx="17.5" cy="5.5" r="2.6" />
    <circle cx="17.5" cy="18.5" r="2.6" />
    <path d="m8.4 10.8 6.7-4M8.4 13.2l6.7 4" />
  </svg>
)

export const IconHuman = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M5 20c.8-3.4 3.6-5.4 7-5.4s6.2 2 7 5.4" />
  </svg>
)

export const IconReset = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 10a8 8 0 1 1 2 6" />
    <path d="M4 5v5h5" />
  </svg>
)

export const IconFlag = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 21V4" />
    <path d="M6 5h11l-2.5 4L17 13H6" />
  </svg>
)

export const IconBeaker = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 3h6M10 3v5.2L5.6 17a2 2 0 0 0 1.8 3h9.2a2 2 0 0 0 1.8-3L14 8.2V3" />
    <path d="M7.5 14h9" />
  </svg>
)

export const IconLayers = (p: P) => (
  <svg {...base} {...p}>
    <path d="m12 3 9 5-9 5-9-5z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
)

export const IconRefresh = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 11a8 8 0 1 0-2.3 6.3" />
    <path d="M20 4v7h-7" />
  </svg>
)

export const IconLock = (p: P) => (
  <svg {...base} {...p}>
    <rect x="5.5" y="10.5" width="13" height="9" rx="2" />
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
  </svg>
)

export const IconEye = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="2.8" />
  </svg>
)

export const IconChevron = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const IconPlus = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const IconCopy = (p: P) => (
  <svg {...base} {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </svg>
)

/** 브랜드 마크 — 근거가 연결된 노드. 텍스트 없이 형태만으로 표현한다. */
export const BrandMark = (p: P) => (
  <svg viewBox="0 0 64 64" fill="none" aria-hidden {...p}>
    <rect width="64" height="64" rx="14" fill="#142232" />
    <circle cx="21" cy="21" r="6.5" fill="#6BC5D8" />
    <circle cx="43" cy="20" r="5" fill="#F7F9FB" />
    <circle cx="32" cy="45" r="6.5" fill="#6BC5D8" />
    <path d="M26.5 24 38 21.5M24.5 26.5 29 39.5M39.5 25 34.5 39.5" stroke="#6BC5D8" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M24.5 26.5 39.5 25" stroke="#F7F9FB" strokeWidth="1.4" strokeDasharray="2 3" />
  </svg>
)
