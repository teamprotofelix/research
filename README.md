# research.caipex.site — AI 기반 지식재산 심사품질 고도화 연구 체험 사이트

> 「생성형 AI 기반 지식재산 심사품질 진단 고도화 연구·구축안」(편집본, 2026년 9월)을
> 바탕으로 한 **인터랙티브 연구 전시** 정적 사이트.
> 한국어·영어·일본어 / 시스템·라이트·다크 테마 / 오프라인 데이터로만 동작.

- 배포 주소: <https://research.caipex.site/> (GitHub Pages + 커스텀 도메인)
- 지원: [CAIPEX](https://caipex.site/) 학회 지원 연구
- 관련 사이트: [PEQ Rule Engine 체험](https://peqrule.moip.ai.kr/)

**이 사이트의 모든 사건·문서·수치는 연구용 가상·모의 데이터입니다.**
법률상 확정 평가나 실제 기관의 정책으로 해석하지 마십시오.

## 한 줄 요약

> 사건 자료를 모으고 → 근거가 있는 사실을 추출하고 → 규칙이 필요한 조건을 평가하고 →
> 부족한 정보는 `UNKNOWN`으로 남기고 → 사람이 최종 검토하며 →
> 검토 결과로 규칙과 평가 체계를 개선한다.

## 페이지 구성

| 경로 | 화면 |
| --- | --- |
| `/` | 연구의 문 — 연구 질문, 90초 개요, 핵심 흐름 |
| `/research/` | 연구 개요 — 문제·가설·5층 데이터 흐름·L0~L4 계층 |
| `/experience/` | 미래의 하루 — 심사관·진단관·연구자 시점 스토리 |
| `/lab/` | 사건 실험실 — UNKNOWN → 진단 후보 → 사람 검토 → 반례 (핵심 체험) |
| `/cases/` | 권리별 사례 — 특허·실용, 상표, 디자인 비교 |
| `/method/` | 연구 방법 — Gold/Challenge Set, 누수 방지, 지표, UNKNOWN의 의미 |
| `/evaluation/` | 평가 시뮬레이터 — 가정값으로 성능·검토량 재계산 |
| `/governance/` | 신뢰와 책임 — 자료 등급 정책 매트릭스, 스냅샷 재현성 |
| `/roadmap/` | 구축 시나리오 — Low/Medium/High 추정과 단계별 게이트 |
| `/sources/` | 자료와 용어 — 보고서, 출처, 한·영·일 용어집 |

## 로컬 실행

```bash
npm install
npm run dev        # 개발 서버 (http://localhost:5173)
npm test           # 테스트 (엔진 4상태·i18n 무결성·테마·스모크)
npm run build      # 유형 검사 + 정적 빌드 → dist/
npm run preview    # 빌드 결과 미리보기
```

## 이미지 파일 배치

이미지가 없어도 사이트는 그라데이션·SVG 폴백 디자인으로 완성되어 있습니다.
`이미지 생성 프롬프트.txt`의 프롬프트로 생성한 이미지를
`public/assets/images/`에 아래 이름으로 넣으면 자동 적용됩니다.

| 파일명 | 비율 | 사용 위치 |
| --- | --- | --- |
| `research-hero.webp` | 16:9 | 홈·연구 개요 |
| `evidence-library.webp` | 3:2 | 연구 개요·연구 방법 |
| `multimodal-rights.webp` | 3:2 | 권리별 사례 |
| `human-review.webp` | 4:3 | 미래의 하루 |
| `research-horizon.webp` | 21:9 | 구축 시나리오 |
| `caipex-logo.png` | — | 푸터 (참고폴더의 공식 로고 사본) |

이미지 안에는 **문자·로고·숫자를 절대 생성하지 않습니다** (3개 언어 지원 때문).
모든 텍스트는 HTML로 겹쳐 표시합니다.

## 새 가상 사례 추가

1. `src/data/cases/<id>.json` 작성 — 형식은 `src/lab/types.ts`의
   `DemoCase`(개발계획 5.1의 데이터 계약)를 따른다. `fictional: true` 필수.
2. `src/data/cases/index.ts`의 `raw` 배열에 추가.
3. 본문 문구는 `src/i18n/ko.ts`에 키를 추가하고 `en.ts`/`ja.ts`에 같은 키로 번역.
   (`npm test`의 i18n 무결성 테스트가 키 누락·구조 불일치를 잡는다.)
4. 규칙의 판정 조건은 `src/lab/engine.ts`의 `CONDITIONS` 레지스트리에 추가.
   (데이터 파일에는 조건 식별자 문자열만 둔다.)

## GitHub Pages 배포

### 커스텀 도메인 (research.caipex.site) — 현재 설정

- `public/CNAME`에 `research.caipex.site`가 들어 있어 `dist/CNAME`으로 복사된다.
- `base`는 `/` (기본값). 그대로 빌드하면 된다.
- DNS: `research` 서브도메인의 CNAME을 `USER.github.io`로 설정.

### 저장소 하위 경로 (https://USER.github.io/REPO/)로 배포할 경우

```bash
VITE_BASE=/REPO/ npm run build
```

내부 링크·자산은 `sitePath()`/`assetPath()` 헬퍼(`src/lib/path.ts`)가
`base`를 반영하므로 코드 변경 없이 동작한다. 배포 시 `public/CNAME`을 지운다.

### 워크플로

`.github/workflows/pages.yml`이 `npm ci → typecheck → test → build → Pages 배포`를
수행한다. GitHub 저장소 설정에서 **Settings → Pages → Source: GitHub Actions**를
선택한다. 첫 배포 전에 Pages 공개 범위와 저장소 주소를 확인한다.

## 구현 메모

- **결정적 엔진** (`src/lab/engine.ts`): 외부 호출 없이 같은 입력에 같은 결과.
  순서는 적용 가능성 → 기준일·버전 → 필요 Fact 검사 → 증거 위치 확인 → 조건 평가.
  필요한 문서·근거가 없으면 `UNKNOWN`, 권리유형이 다르면 `NOT_APPLICABLE`.
- **상태 저장**: 테마·언어만 `localStorage`. 사건 선택·검토 기록은 `sessionStorage`.
  공유 URL은 사례 ID·문서 선택·규칙 버전 등 열거값만 담고 복원 전에 검증한다.
- **표현 원칙**: 진단 `TRUE`는 법적 결론이 아니라 "연구용 진단 후보".
  `UNKNOWN`을 `FALSE`와 같은 녹색으로 그리지 않는다. 색·단어·아이콘·문장을 함께 쓴다.
- **접근성**: 스킵 링크, 키보드 완주, 상태 `aria-live`, 표 캡션·헤더,
  `prefers-reduced-motion` 대응, SVG 다이어그램 대체 텍스트.

## 기술 스택

Vite + React + TypeScript 정적 빌드. 외부 CDN·폰트·API·로그인 없음.
테스트: Vitest + jsdom. 배포: GitHub Actions (Pages).
