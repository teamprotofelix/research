/**
 * 배포 base를 반영한 내부 경로 헬퍼.
 * 커스텀 도메인(research.caipex.site)이면 base='/',
 * 저장소 하위 경로(USER.github.io/REPO/)면 base='/REPO/'가 된다.
 * 내부 링크는 문자열을 직접 붙이지 말고 반드시 sitePath()를 사용한다.
 */
export const BASE: string = import.meta.env.BASE_URL

export function sitePath(p: string): string {
  const clean = p.startsWith('/') ? p.slice(1) : p
  return `${BASE}${clean}`
}

/** public 자산 경로 (이미지 등) */
export function assetPath(p: string): string {
  const clean = p.startsWith('/') ? p.slice(1) : p
  return `${BASE}${clean}`
}
