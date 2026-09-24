# AI 기반 지식재산 심사품질 고도화 연구 사이트 개발계획

> **개발용 AI 전달 문서** · 정적 GitHub Pages 사이트 · 한국어/영어/일본어 · 시스템/라이트/다크 테마  
> 기준 연구: 「생성형 AI 기반 지식재산 심사품질 진단 고도화 연구·구축안」 편집본, 2026년 9월  
> 상태: **사이트 설계 및 구현 지시서**. 본 문서 자체는 구현된 사이트가 아니다.

## 0. 개발용 AI에게 주는 실행 지시

이 문서와 기준 연구보고서 DOCX 또는 PDF를 함께 읽고, 실제 동작하는 **여러 페이지의 정적 연구 체험 사이트 전체 소스**를 구현하라. 시각 목업이나 텍스트 설명에서 멈추지 말고 사용자가 시나리오를 실행하고, 자료를 보완하고, 진단 경로를 확인하고, 사람의 검토 결과에 따라 미래의 업무 흐름이 어떻게 바뀌는지 체험할 수 있도록 하라. 빌드 가능한 코드, 샘플 데이터, 다국어 사전, README, GitHub Pages 배포 설정까지 완성하라.

**완료 기준의 핵심:** 네트워크가 끊긴 상태에서도 미리 포함된 사례의 모든 주요 체험이 동작해야 한다. 실제 LLM, KIPRIS, 내부 사건 시스템, 서버, API 키, 로그인, 데이터베이스를 요구하지 않는다. 화면에서는 실제 운영과 시연을 명확히 구별한다.

## 1. 목적과 사이트의 성격

### 1.1 전달할 단 하나의 이야기

> 사건 자료를 모으고 → 근거가 있는 사실을 추출하고 → 규칙이 필요한 조건을 평가하고 → 부족한 정보는 `UNKNOWN`으로 남기고 → 사람이 최종 검토하며 → 검토 결과로 규칙과 평가 체계를 개선한다.

이 흐름을 **논문을 읽는 경험에서 미래의 심사·심사품질 관리 업무를 미리 해보는 경험**으로 바꾼다. 방문자는 장문의 연구보고서를 읽지 않아도 3분짜리 안내를 통해 연구 질문을 이해하고, 8~12분짜리 사례 체험에서 이 연구가 제안하는 시스템을 직접 다뤄볼 수 있어야 한다.

이 사이트는 연구 가설과 설계를 설명하는 **인터랙티브 연구 전시실**이다. 관공서 운영시스템처럼 꾸미거나 실제 출원 사건의 공식 품질판정처럼 보이게 만들지 않는다. `연구용 가상 사례`, `모의 데이터`, `진단 후보`, `사람의 최종 판단`을 화면에서 계속 구분한다.

### 1.2 기존 사이트와의 관계

- 기존 [PEQ Rule Engine 체험 사이트](https://peqrule.moip.ai.kr/)는 **개별 규칙 엔진을 자세히 탐색할 수 있는 관련 사이트**로 연결한다.
- 새 사이트는 규칙 실행 화면을 복제하지 않고 **연구 질문·증거 취득·자료 부족·권리별 검색·사람의 판단·평가방법·운영 거버넌스**를 관통하는 이야기를 제공한다.
- `규칙 엔진 더 살펴보기` 링크를 관련 연구 페이지와 사례 실행 결과에 배치한다. iframe 삽입이나 기존 사이트 UI의 무단 복제는 하지 않는다.
- 기존 사이트의 실제 UI와 CAIPEX의 디자인 자산은 이 계획 작성 시 직접 검증되지 않았다. 구현 전 원본을 확인하여 중복 화면·상표 표현·링크 상태를 점검하되, 아래 체험의 핵심 구조는 유지한다.

### 1.3 CAIPEX 지원 표기

사용자 제공 사실에 따라 상단 연구 정보와 푸터, 연구 소개 페이지에 **“CAIPEX 학회의 지원을 받는 연구”**라고 표기하고 [CAIPEX 사이트](https://caipex.site/)로 연결한다. `CAIPEX`를 연구 지원 주체로 명확히 보여주되, 지식재산처의 공식 운영 사이트나 CAIPEX의 공식 정책 발표인 것처럼 표현하지 않는다. 공식 로고 파일을 제공받기 전에는 `CAIPEX` 텍스트 워드마크를 사용하고 임의의 학회 엠블럼을 만들지 않는다.

### 1.4 대상 독자와 성공 경험

| 대상 | 첫 방문에서 이해할 내용 | 체험 후 얻어야 할 것 |
| --- | --- | --- |
| 심사관·진단관 | AI는 근거를 정리하고 빠진 자료를 알려준다 | 사건의 근거·불확실성·검토 위치를 따라가 본다 |
| 연구자·학회 회원 | Neuro-symbolic 설계의 연구 질문과 평가 설계 | 가설, 자료, 평가 지표, 한계를 분리해 본다 |
| 정책·사업 담당자 | 단계적 구축의 조건과 투자 지점 | 품질, 보안, 인적 검토, 예산의 연결을 이해한다 |
| 일반 방문자·해외 협력자 | 심사품질 관리 업무의 미래 모습 | 한·영·일 안내로 전체 흐름을 간단히 체험한다 |

## 2. 사이트 구조와 사용자 동선

Vite 기반 **실제 다중 HTML 페이지**를 우선한다. 각 경로에 `index.html` 진입점을 만들고 공통 컴포넌트와 스타일을 재사용한다. GitHub Pages의 저장소 하위 경로에서도 새로고침과 직접 접속이 되도록 모든 링크·이미지·빌드 자산 경로에 배포 `base`를 적용한다. 향후 라우터를 쓰더라도 새로고침 시 404가 없는 방식을 유지한다.

| 경로 | 화면 이름 | 반드시 제공할 내용·행동 |
| --- | --- | --- |
| `/` | 연구의 문 | 연구 질문, 90초 개요, 대표 체험 시작, 핵심 흐름, CAIPEX 지원 표기 |
| `/research/` | 연구 개요 | 문제·가설·전체 아키텍처·권리별 확장·연구보고서 링크·기존 PEQ 사이트와의 관계 |
| `/experience/` | 미래의 하루 | `사건 접수 → 자료 취득 → 진단 → 검토 → 환류`의 안내형 스토리; 3분 또는 자세히 보기 |
| `/lab/` | 사건 실험실 | 자료·Fact·Rule·Evidence Trace·사람의 판단을 조작하는 핵심 체험 |
| `/cases/` | 권리별 사례 | 특허·실용, 상표, 디자인 사례 비교·선택; 각 카드에서 실험실 시나리오 바로 열기 |
| `/method/` | 연구 방법 | Gold/Challenge Set, 데이터 누수, 비교실험, 평가지표, `UNKNOWN`의 의미 |
| `/evaluation/` | 평가 시뮬레이터 | 모의 표본에서 가정값을 바꾸고 성능·인적 검토량의 변화를 확인 |
| `/governance/` | 신뢰와 책임 | 자료 등급, 모델 경로, 근거 추적, 버전 재현, 승인 경계, 연구의 한계 |
| `/roadmap/` | 구축 시나리오 | 단계별 산출물, Low/Medium/High 기획 추정, 전환 조건, CAIPEX 지원 맥락 |
| `/sources/` | 자료와 용어 | 보고서, 원문 출처 링크, 용어집, 연구·시연·운영의 구분, 버전 정보 |

전역 내비게이션은 `연구 소개 / 체험하기 / 사례 / 평가와 방법 / 신뢰와 구축 / 자료`의 6개 묶음으로 구성한다. 모바일에서는 같은 항목을 메뉴와 현재 위치 표시로 제공한다. 모든 페이지에는 **“사례 체험하기”** 진입점을 제공하되, 스크롤을 막는 팝업이나 대형 고정 버튼을 남발하지 않는다.

### 2.1 첫 3분 사용자 동선

1. 홈의 연구 질문: “심사품질을 왜 근거와 사람의 검토로 진단해야 하는가?”
2. 누락된 자료가 있는 가상 사건을 열어 `UNKNOWN`을 확인.
3. 제공된 샘플 의견제출통지서를 추가하여 Rule의 진단 후보가 어떻게 달라지는지 확인.
4. 근거 위치와 Rule 버전을 펼쳐 보고 `확인 / 보류 / 기각` 중 하나를 선택.
5. 마지막 화면에서 연구가 해결하려는 문제와 아직 검증해야 할 지점을 함께 보여준다.

### 2.2 10분 사용자 동선

위 과정 이후 `권리별 사례 → 평가 시뮬레이터 → 거버넌스 → 구축 로드맵`으로 이어진다. 방문자는 각 페이지에서 앞선 사건의 선택을 요약 카드로 확인할 수 있다. 새로 시작 버튼은 언제든 기본 샘플 상태로 되돌린다.

## 3. 핵심 화면: 사건 실험실의 실제 동작

### 3.1 화면 구성

데스크톱에서는 세 영역을 사용한다. **좌측: 사건 문서·타임라인**, **중앙: 수집 계획과 Fact·근거 위치**, **우측: Rule 결과와 사람 검토**. 상단에는 `1 사건 확인 / 2 자료 취득 / 3 사실 추출 / 4 규칙 평가 / 5 검토·환류` 진행 단계가 있다. 폭이 좁으면 각 영역을 탭 또는 세로 단계로 배치하고, 현재 단계와 결과 요약을 잃지 않도록 한다. 모바일에서 입력창·드롭다운이 화면 밖으로 밀려나지 않게 한다.

**정적 환경에서 실제 동작해야 할 컨트롤:**

- 사례 변경, 사건 문서 열기·닫기, 문서 내 근거 구절 강조, 근거에서 원문으로 역이동.
- 샘플 문서 `추가`·`제외`, 해당 문서가 있어야 추출 가능한 Fact 목록과 상태 갱신.
- `심사관이 실제 인용한 자료`와 `AI가 새로 찾은 후보`를 다른 열·색·필드로 표시.
- `Rule 버전` 또는 `사건 기준일` 변경 후 적용 가능한 버전과 결과 다시 계산.
- 관련 Fact를 수정하는 **연구자용 고급 패널**과 `초기화` 버튼. 기본 흐름에서는 복잡한 편집 UI를 숨긴다.
- 어떤 근거가 없어 결과가 `UNKNOWN`인지 보여주고 `필요한 문서 확인` 버튼 제공.
- `검토자가 확인 / 보류 / 기각`을 선택하면 그 이유를 입력 또는 선택하고, 결과가 피드백·평가 탭에 반영된다. 이는 브라우저 내 시연 기록이다.
- 현재 시나리오·선택·규칙 버전을 URL 쿼리 또는 해시로 공유하되 사건 전문이나 자유 입력 텍스트는 URL에 넣지 않는다.

### 3.2 진단 상태의 의미

| 상태 | 표시 문구의 뜻 | 다음 행동 |
| --- | --- | --- |
| `TRUE` | 모의 결함 조건이 필요한 근거와 함께 충족됨 | 사람에게 진단 후보로 제시 |
| `FALSE` | 필요한 사실을 확인했으나 해당 결함 조건은 충족되지 않음 | 검토 기록 또는 다음 Rule |
| `UNKNOWN` | 판단에 필요한 문서·Fact가 없거나 모호함 | 부족한 자료 요청·추출 검토 |
| `NOT_APPLICABLE` | 해당 사건 또는 절차에 이 Rule을 적용하지 않음 | 적용 가능 규칙만 보기 |

`UNKNOWN`을 `FALSE`와 같은 초록색 `문제 없음`으로 그리지 않는다. 색만으로 상태를 구분하지 말고 상태 단어·아이콘·짧은 문장을 함께 쓴다. `TRUE`도 **법적 결론이나 공식 거절이유가 아니라 검토 대상인 연구용 진단 후보**라고 표기한다.

### 3.3 첫 시나리오: 종속항 추가구성의 대비 누락 가능성

연구보고서의 `PEQ-IS-014` 예시를 교육용 가상 사건으로 재구성한다.

1. 청구항 1에는 `A+B`, 종속항 2에는 `A+B+C`가 있다. 심사관이 인용한 D1에 `A+B` 관련 자료가 있다.
2. 시작 상태에서는 의견제출통지서 본문이 없다. `examiner.mapping`을 확인할 수 없으므로 Rule 결과는 **`UNKNOWN`**. 화면은 “인용문헌 목록은 확인했으나 심사관의 구성대비 본문이 없어 `C`의 대비 여부를 확인할 수 없습니다”라고 설명한다.
3. `샘플 통지서 추가`를 누르면 모의 통지서 전체가 나타나고, 해당 통지서에는 `A+B`의 대응만 기재되고 `C` 대비가 없는 **가상 문서**라고 명시한다.
4. 사실 추출은 `claim.additional_limitation=C`, `examiner.mapping.for_C=not_found_in_complete_notice`, 근거 위치와 문서 완전성 정보를 기록한다.
5. Rule은 `TRUE`, 문구는 **“종속항 추가구성 C에 대한 대비 누락 검토 후보”**로 갱신한다. 근거에는 청구항 2 구절과 통지서 검토 범위, 적용 Rule 버전을 함께 연결한다.
6. `검토자 보류`를 누르면 사람의 근거 보완 의견이 피드백 기록에 남고, 사용자는 `추가 자료 확인`으로 돌아갈 수 있다.
7. 반례 버튼은 C 대비가 통지서에 존재하는 별도 가상 버전으로 전환하여 **`FALSE`**를 보여준다. 이를 통해 “문서 누락 / 실제 누락 / 대비 존재” 세 상태를 비교한다.

**중요한 판정 조건:** 통지서가 없는 상태에서 `C` 대응이 보이지 않는다는 이유만으로 `TRUE`를 내지 않는다. `TRUE`는 시연용 문서 전체와 추출 결과가 갖춰졌을 때만 나온다. 실제 법률상 거절결정이나 심사관 과실을 자동 확정하지 않는다.

### 3.4 추가 사례 최소 3개

| 사례 | 조작 | 연구 포인트 | 결과 처리 |
| --- | --- | --- | --- |
| 특허·실용: 보정 전후 시점 | 보정서·절차일 선택, 적용 기준일 변경 | 사건시점·문서 버전·Rule 버전이 진단에 미치는 영향 | 기준일 불명확 시 `UNKNOWN` |
| 상표: 문자·발음·이미지 검색 | 가상 표장 변형, 검색 축 토글, 후보 정렬 | 문자열 일치, 발음, 이미지 결과는 각각 다른 증거 | 유사도 점수를 법적 유사판단으로 제시하지 않음 |
| 디자인: 전체·부분·회전 이미지 | 제공된 샘플 이미지와 부분 범위 선택 | 이미지 후보 검색과 보호범위·사람의 검토 구별 | 후보 결과만 보여주고 최종 판단은 사람에게 남김 |

상표·디자인 사례의 검색 순위와 점수는 **미리 작성한 모의 데이터**로 계산 또는 로드한다. AI가 실시간 분석한 것처럼 표현하지 않는다. 공개된 샘플 이미지만 포함하고 실제 출원 사건 자료나 개인 정보를 넣지 않는다.

## 4. 학술 연구를 체감하게 만드는 다른 페이지

### 4.1 연구 개요와 전체 구조

스크롤에 맞춰 5개 층을 드러내는 **정확한 SVG 데이터 흐름**을 구현한다. `사건 자료 → 검색·취득 계획 → 근거가 연결된 Fact → 명시적 Rule → 사람의 판단·평가`. 각 층을 선택하면 “필요한 입력 / 산출물 / 실패 시 상태 / 책임 주체”가 바뀐다. 장식적인 AI 뇌 이미지 위에 글자를 얹어 아키텍처를 설명하지 않는다.

`L0 형식 검사 / L1 명시 Rule / L2 관계 추론 / L3 제한적 LLM Predicate / L4 사람의 최종 판단`을 연구보고서의 계층 구조로 소개한다. 각 계층의 가능한 역할과 남는 오류를 한 문장으로 보여준다. `생성형 AI가 읽고 구조화한다`와 `규칙이 재현 가능한 후보를 만든다`를 시각적으로 분리한다.

### 4.2 미래의 하루

**연구 가정에 따른 미래 시연**임을 첫 화면에 표기한다. 방문자가 역할을 `심사관 / 진단관 / 연구자` 중 선택하면 같은 사건을 다른 시점에서 본다. 심사관은 “어떤 자료가 빠졌나”, 진단관은 “진단 후보의 근거와 반례가 무엇인가”, 연구자는 “오류 유형을 어떻게 평가할까”를 본다. 장면은 오프라인 샘플 데이터를 공유하며 실험실로 이어진다.

### 4.3 평가 시뮬레이터

모의 사례 집합을 제공하고 `문서 누락률`, `사실 추출 정확도`, `검토자 확인 비율`, `후보 검색 임계값`을 조절한다. 결과는 **입력값과 모의 정답 데이터로 재계산**하며 표본 수와 공식, 분모를 열어 볼 수 있다. `finding precision / recall / F1`, `중대결함 미탐`, `UNKNOWN 비율`, `근거 위치 확인률`, `검토 예상 건수`를 같이 보여준다. 임계값을 높였을 때 미탐·추가 검토의 관계가 어떻게 달라지는지 해설을 덧붙인다.

이 화면의 숫자는 **가상 데이터에 의한 예시**이고 실제 연구 성과가 아니다. 보고서에 제시된 `근거 연결 100%`, `허위인용 0건`, `중요 품질결함 Recall 장기목표 ≥95%` 등은 **권고 목표**로 별도 탭에 표기한다. 어떤 모의 그래프도 이미 달성한 실측값처럼 그리지 않는다. 원 보고서의 Gold Set, Challenge Set, 독립 블라인드 평가, Shadow Mode, 데이터 누수 방지를 방법 페이지와 연결한다.

### 4.4 거버넌스·재현성

방문자가 가상 자료 등급 `PUBLIC / UNPUBLISHED / RESTRICTED`를 바꾸면 허용되는 모의 모델 경로가 달라지는 **정책 매트릭스**를 보여준다. 이 화면은 실제 네트워크 요청을 보내지 않는다. `사건 스냅샷` 예시에 취득시각, 원문 해시, Fact 버전, Rule·Prompt·Model 버전, 사람의 검토 이력을 표시하고 “동일한 입력·버전이면 어떤 진단 경로가 재현되는가”를 단계별로 설명한다. 원문 해시는 예시 문자열이며 진짜 기밀 사건의 원문이 아니다.

### 4.5 구축 로드맵

보고서의 `Low / Medium / High` 기획 추정을 **정책 검토용 추정**으로 표시한다. Low 9~12개월·8~12 FTE·8~12억 원, Medium 18~24개월·20~30 FTE·28~45억 원, High 30~36개월·45~70 FTE·80~130억 원. 이는 확정 사업비나 견적이 아님을 표와 그래프 바로 옆에 밝힌다. `자료 연결 → 특허 MVP → Gold·Shadow 검증 → 상표·디자인 확장 → 운영·감사`의 단계마다 다음 단계에 필요한 품질·보안 조건을 연결한다.

## 5. 체험의 진실성, 상태와 데이터 설계

### 5.1 데이터 계약

가상 사례를 텍스트 UI에 하드코딩하지 말고 `cases/*.json`과 타입에 둔다. 최소 구조는 다음과 같다. 필드 이름은 구현에 맞춰 보완할 수 있으나 의미를 바꾸지 않는다.

```ts
type Verdict = 'TRUE' | 'FALSE' | 'UNKNOWN' | 'NOT_APPLICABLE';
type RightType = 'PATENT' | 'UTILITY_MODEL' | 'TRADEMARK' | 'DESIGN';
type EvidenceOrigin = 'EXAMINER_CITED' | 'AI_DISCOVERED' | 'CASE_DOCUMENT';

interface DemoDocument {
  id: string;
  kind: string;
  titleKey: string;
  version: string;
  availableAtStart: boolean;
  completeForRule: boolean;
  spans: Array<{ id: string; textKey: string; locationKey: string }>;
}
interface DemoFact {
  id: string;
  value: string | boolean | null;
  sourceSpanIds: string[];
  status: 'AVAILABLE' | 'MISSING' | 'AMBIGUOUS';
  extractor: 'PREPARED_DEMO' | 'USER_EDIT';
}
interface DemoRule {
  id: string;
  version: string;
  effectiveFrom: string;
  requiredFactIds: string[];
  applicableRightTypes: RightType[];
  authorityLabelKey: string;
}
interface DemoCase {
  id: string;
  rightType: RightType;
  fictional: true;
  documents: DemoDocument[];
  examinerCitedReferenceIds: string[];
  aiDiscoveredCandidateIds: string[];
  facts: DemoFact[];
  ruleIds: string[];
}
interface DemoTrace {
  caseId: string;
  ruleId: string;
  ruleVersion: string;
  verdict: Verdict;
  usedFactIds: string[];
  usedSpanIds: string[];
  missingFactIds: string[];
  reviewerDecision?: 'CONFIRMED' | 'DEFERRED' | 'REJECTED';
}
```

### 5.2 결정적 시뮬레이터 규칙

`evaluate(case, selectedDocuments, eventDate, ruleVersion, overrides)`는 외부 호출 없이 항상 같은 입력에 같은 결과를 반환해야 한다. 순서는 **적용 가능성 검사 → 기준일·버전 확인 → required Facts 존재·모호성 검사 → 증거 위치 존재 확인 → Rule 조건 평가 → Trace 생성**. 필요한 Fact 또는 증거가 없으면 `UNKNOWN`, 권리유형·절차가 맞지 않으면 `NOT_APPLICABLE`. 오직 필요한 문서와 근거가 갖춰진 경우에만 `TRUE` 또는 `FALSE`. `AI_DISCOVERED` 후보를 과거 심사관의 실제 인용으로 바꾸지 않는다.

시연용 `추출 애니메이션`은 고정된 Fact를 순서대로 보여주는 시각 효과다. LLM 호출 중인 것처럼 무한 로딩을 만들지 말고 `모의 실행` 라벨을 붙인다. 타이핑·OCR 업로드 등 실제 기능이 없는 버튼은 만들지 않는다. 사용자가 텍스트를 붙여 넣는 고급 패널을 구현하면 브라우저 안의 제한적 파서/수동 Fact 편집으로만 동작하게 하고, 실제 법적 판단이라고 설명하지 않는다.

### 5.3 상태 저장·공유

언어·테마만 `localStorage`에 저장한다. 가상 사례의 선택과 검토 기록은 기본적으로 `sessionStorage`에 두고 `처음부터` 또는 `체험 기록 삭제`로 비울 수 있게 한다. 개인의 문서 전문이나 자유 입력 메모를 서버로 전송하지 않는다. 공유 URL은 사례 ID, 모드, 문서 선택 ID, Rule 버전 같은 **비민감한 열거값**만 담고, 값을 검증한 뒤 복원한다. 실제 출원번호를 입력받거나 분석하는 것처럼 보이는 입력 UI는 두지 않는다.

## 6. 시각 설계와 연구 사이트의 분위기

### 6.1 시각 언어

학술 전시, 연구실의 기록, 증거 자료의 연결을 느끼게 한다. **밝은 종이색 배경, 짙은 남색 본문, 절제된 청록·파랑 강조, 충분한 여백, 선명한 표와 근거 위치 표시**가 중심이다. 다크 모드는 별도의 어두운 연구 화면으로 설계하고 단순 색 반전으로 끝내지 않는다. 과도한 네온, 군복·정부 청사 이미지, 가짜 공인기관 문장, 사람 얼굴 중심의 스톡 사진, AI 로봇 머리 이미지는 사용하지 않는다.

정보 계층은 `연구 질문 → 상호작용 → 관찰 결과 → 출처/한계` 순서. 실제 데이터 흐름과 성능 차트는 CSS/SVG/캔버스로 정확히 만들고 이미지 생성에 맡기지 않는다. 링크와 버튼은 텍스트로 구별되도록 한다.

권장 토큰 예시: 라이트 `background #F7F9FB`, `surface #FFFFFF`, `ink #142232`, `muted #536476`, `accent #166A83`, `line #D8E0E6`; 다크 `background #0E1822`, `surface #172530`, `ink #EFF5F8`, `muted #AEBDC7`, `accent #6BC5D8`, `line #344653`. 색 대비가 기준에 못 미치면 실제 검증값에 맞춰 수정한다.

### 6.2 상호작용 디테일

- 단계가 완료되면 데이터 흐름의 해당 연결선과 근거 위치가 같이 강조된다. 상태 전환은 200~350ms 정도로 짧고 의미 있는 변화만 준다.
- `UNKNOWN` 화면은 빈 상태가 아니라 **무엇이 부족한지 + 왜 필요한지 + 어디에서 구할지** 세 정보를 준다.
- 근거 카드를 클릭하면 문서의 해당 문단으로 이동하고, 다시 Rule 조건으로 돌아올 수 있다.
- 모바일에서는 가로로 긴 데이터 표를 억지로 축소하지 않고 행별 카드·접기·가로 스크롤 안내 중 적절한 방법을 쓴다.
- 실험실의 주요 행동은 마우스뿐 아니라 키보드로 완주할 수 있어야 한다.
- `prefers-reduced-motion`에서는 장식 애니메이션을 생략한다.

## 7. 테마와 언어의 구체적인 동작

### 7.1 테마: 시스템이 기본값

선택값은 정확히 `system | light | dark` 세 가지. **새 방문자에게 저장된 값이 없으면 `system`**으로 시작한다. 시스템 모드는 `matchMedia('(prefers-color-scheme: dark)')`에 따라 실제 적용 테마를 정하고 OS 설정이 바뀌면 즉시 반영한다. 라이트나 다크를 직접 선택한 경우에는 시스템 변경에 따라 바뀌지 않는다. 토글은 현재 **선택값과 적용된 실제 테마**를 모두 알려준다(예: `시스템 · 현재 다크`). `localStorage`가 막힌 환경에서도 기본값으로 정상 작동한다. 첫 렌더 전 `<html data-theme>`을 맞춰 깜빡임을 줄인다.

### 7.2 한국어·영어·일본어

선택값은 `ko | en | ja`, 기본값 `ko`. 사용자가 선택하면 즉시 전체 화면 문구, 버튼, 사례 설명, 차트 축·툴팁, 이미지 대체텍스트, 상태 설명, 메타 제목이 바뀐다. 시나리오 데이터의 `id`, Rule ID, 수식, 판정 상태 코드는 번역하지 않고 설명문을 번역한다. `lang` 속성을 `ko-KR / en / ja-JP`로 갱신한다. 숫자·날짜는 `Intl`로 표시하되 기획 예산 단위와 `억 원`의 의미는 번역문에서 명시한다. 번역이 비어 있을 경우 숨기거나 키 문자열을 노출하지 말고 빌드 검사에서 실패하게 한다.

언어 전환 시 같은 페이지·같은 체험 단계·선택한 사례가 유지되어야 한다. `?lang=ja`와 같은 명시적 URL 언어가 있으면 우선 적용하고, 그 외에는 저장된 선택, 마지막으로 한국어를 사용한다. 일본어는 기계적으로 한자만 치환하지 않고 초급 방문자도 이해할 수 있는 짧고 자연스러운 문장으로 작성한다. 법률·심사 용어는 `/sources/`의 한·영·일 용어집에서 대응시킨다.

**문구 품질 예시**(의미 기준, 실제 번역은 전 페이지에서 검수):

| UI 위치 | 한국어 | English | 日本語 |
| --- | --- | --- | --- |
| 홈 제목 | 근거를 따라가는 심사품질의 미래 | The future of evidence-led examination quality | 根拠からたどる審査品質の未来 |
| CTA | 가상 사건 체험하기 | Explore a sample case | 架空の案件を体験する |
| 진단 배지 | 연구용 진단 후보 | Research demo finding | 研究用の診断候補 |
| 부족한 자료 | 필요한 문서가 없어 판단을 보류합니다 | A required document is missing; the result remains unknown | 必要な書類がないため、判断を保留します |
| 사람의 역할 | 최종 판단은 사람이 합니다 | A person makes the final decision | 最終判断は人が行います |

## 8. 이미지 제작 지시: 사용자가 생성해 넣을 파일

이미지 파일이 없어도 사이트는 그라데이션·SVG 선·텍스트 대체 디자인으로 완성되어야 한다. `public/assets/images/`에 다음 이름으로 저장하면 자동 적용한다. 이미지에 본문 정보를 박아 넣지 않는다. 언어가 세 가지이므로 **이미지 안에 문자·로고·숫자·UI 레이블을 절대 생성하지 않는다**. WebP 또는 PNG를 허용하고 리포지토리에는 최적화본을 넣는다. 생성 이미지의 모든 텍스트는 HTML로 겹쳐서 처리한다.

| 파일명 | 비율·권장 크기 | 사용 페이지 | 대체텍스트의 의미 |
| --- | --- | --- | --- |
| `research-hero.webp` | 16:9, 1600×900 이상 | 홈·연구 소개 | 사건 자료와 근거가 연결된 연구 장면 |
| `evidence-library.webp` | 3:2, 1200×800 이상 | 연구 방법 | 문헌·근거 조각을 대조하는 추상 연구 공간 |
| `multimodal-rights.webp` | 3:2, 1200×800 이상 | 권리별 사례 | 문자·이미지·디자인 형태를 비교하는 시각 |
| `human-review.webp` | 4:3, 1200×900 이상 | 미래의 하루 | 사람이 근거를 확인하는 차분한 작업 장면 |
| `research-horizon.webp` | 21:9, 1680×720 이상 | 로드맵 | 단계적으로 연결되는 연구 인프라 |

**공통 네거티브 프롬프트:** no text, no letters, no numbers, no logo, no government seal, no patent office emblem, no fake charts, no fake document text, no crowded dashboard, no humanoid robot, no stock-photo handshake, no copyrighted interface.

**A. `research-hero.webp` 생성 프롬프트**

> Create a premium editorial visual for a serious research website on AI-assisted intellectual-property examination quality. A bright, calm research workspace where abstract case documents, evidence fragments, search paths, structured facts, symbolic rules, and human review form one coherent flow. Use refined paper-white, deep navy, muted teal and very subtle cobalt accents. Architectural depth and generous negative space on the left for HTML headline overlay. Sophisticated academic exhibition aesthetic, not a product dashboard. No text, numbers, logos, seals, legible documents, or people portraits. Wide 16:9 composition, high resolution.

**B. `evidence-library.webp` 생성 프롬프트**

> An elegant abstract evidence library for an AI research institute: translucent document layers, highlighted passages connected by fine lines to structured fact cards and source locations, careful provenance and uncertainty represented through light and depth. Bright neutral background, navy, soft teal, restrained scientific editorial style. The structure should feel credible and precise but contain no readable text or fake charts. 3:2 composition. No logos, seals, faces, or UI screenshots.

**C. `multimodal-rights.webp` 생성 프롬프트**

> A calm visual study of three intellectual-property evidence types: textual technical claims, abstract trademark shapes and sound-wave-like form, and industrial-design silhouettes, arranged as related yet distinct research materials. Clean white studio background, navy and teal details, soft shadows, credible academic design. Avoid real brands and specific patented products. No words, letters, logos, seals, numbers, or fake application documents. 3:2 composition.

**D. `human-review.webp` 생성 프롬프트**

> A close, respectful editorial scene of a human expert reviewing linked evidence and a transparent decision trail at a desk, shown through hands and abstract paper and screen surfaces rather than an identifiable face. Calm professional research environment, soft natural light, slate navy and subtle teal, honest human oversight. No readable on-screen content, no logo, no government symbolism, no posed stock-photo feel. 4:3 composition.

**E. `research-horizon.webp` 생성 프롬프트**

> A wide cinematic but restrained academic research landscape composed of connected modular layers suggesting data acquisition, validation, evaluation, and governance progressing into the distance. Pale cool gray to white background, deep navy, teal, minimal luminous detail, large clean spaces for HTML overlay. Institutional research aesthetic, no science-fiction city, no text, no labels, no fake graphs, no logos. Panoramic 21:9 composition.

## 9. 기술 구현과 파일 구조

권장 스택은 **Vite + React + TypeScript + 로컬 CSS**다. 외부 CDN·외부 폰트·클라이언트 API 키 없이 빌드된 정적 파일만 GitHub Pages에 올린다. 필요한 패키지는 npm으로 설치해 빌드 시 번들에 포함한다. 거대한 UI 패키지를 설치해 기능을 스스로 복잡하게 만들지 않는다. 차트와 연구 도식은 가능하면 접근 가능한 SVG와 표를 함께 제공한다.

```text
project/
├─ index.html
├─ research/index.html
├─ experience/index.html
├─ lab/index.html
├─ cases/index.html
├─ method/index.html
├─ evaluation/index.html
├─ governance/index.html
├─ roadmap/index.html
├─ sources/index.html
├─ src/
│  ├─ entries/           # 각 페이지 진입점
│  ├─ components/        # Header, Footer, ThemeSelect, LanguageSelect, DemoBadge
│  ├─ lab/               # 시나리오 엔진, 문서 뷰어, Trace, 사람 검토 UI
│  ├─ evaluation/        # 모의 집계·수식·차트와 표
│  ├─ data/cases/        # 가상 사건, 문서, Fact, Rule, Gold/Challenge 예시
│  ├─ i18n/ko.ts
│  ├─ i18n/en.ts
│  ├─ i18n/ja.ts
│  ├─ state/              # 언어·테마·세션 시연 상태
│  └─ styles/             # 토큰, 레이아웃, 컴포넌트
├─ public/assets/images/ # 사용자 제작 이미지, 누락 시 CSS 대체
├─ tests/                # 규칙 4상태, 주제·언어, 기본 접근성 검증
├─ .github/workflows/pages.yml
├─ README.md
└─ vite.config.ts
```

`vite.config.ts`에는 다중 HTML 진입점을 선언한다. 저장소 주소 `https://USER.github.io/REPO/`라면 `base='/REPO/'`, 사용자/조직 루트 사이트 또는 커스텀 도메인이면 `base='/'`로 빌드한다. 내부 링크는 문자열 `'/lab/'`을 직접 붙이는 대신 공통 `sitePath('lab/')` 헬퍼로 만든다. GitHub Actions에서 `npm ci`, 유형 검사, 테스트, `npm run build`, `dist/` 업로드, Pages 배포 순으로 설정한다. `dist/index.html` 및 각 하위 페이지 진입 파일을 확인한다. 실제 배포 전에는 저장소 주소와 Pages 공개 범위를 사용자가 정한다.

README에는 로컬 실행, 이미지 파일 배치, 다국어 문자열 수정, 새로운 사례 추가, GitHub Pages `base` 설정, 시연 데이터의 한계와 배포 절차를 넣는다. 이미지 파일이 추가되기 전에도 UI와 테스트가 통과해야 한다.

## 10. 자료 출처와 표현 원칙

1. **원 보고서가 기준**이다. 연구 가설·아키텍처·권리유형·검증 계획·예산을 요약하되 원문을 무작정 복사해 긴 웹페이지로 만들지 않는다. `/sources/`에 보고서 제목과 제공 가능한 DOCX/PDF 링크를 둔다. 파일을 실제 배포 패키지에 포함하지 않았다면 깨진 링크 대신 `자료 준비 중` 표기와 정확한 설명을 제공한다.
2. 외부 기관과 법령의 정확한 정책·현행 명칭·시행일은 원 보고서의 참고문헌 번호와 연결한다. 링크가 동작하는지 배포 직전에 확인한다. 법률상 확정 평가나 실제 기관 정책으로 확대 해석하지 않는다.
3. 수치를 **관찰된 연구 결과 / 보고서의 제안 목표 / 이 사이트의 모의 수치**로 시각적으로 구분한다. 본 사이트에서 생성된 사례 수, 정확도, 예산은 실제 생산 성과가 아니다.
4. 보고서에 나타난 `PEQ-IS-014`, `Canonical IP Case Package`, `Fact Dependency Graph`, `Evidence Trace`, `Rule Evolution`, `Shadow Mode`, `Gold Set`의 뜻은 원문과 일치시킨다.
5. 비공개 출원자료·실제 개인정보·실제 API 키는 저장소, 번들, 브라우저 저장소, 시연 사례에 넣지 않는다. 정적 사이트는 공개 파일이 누구에게나 내려간다는 점을 전제로 한다.

## 11. 구현 순서와 최종 검수

### 단계 1: 작동하는 골격

실제 HTML 진입 페이지 10개, 공통 내비게이션, 반응형 레이아웃, 빈 이미지 대체화면, 세 가지 테마, 세 가지 언어, GitHub Pages `base` 처리를 끝낸다. 각 페이지가 직접 URL로 열리고 새로고침되어야 한다.

### 단계 2: 연구 이야기와 사례

보고서의 주장-근거-한계 맵을 콘텐츠에 반영하고, 특허 첫 사례의 `UNKNOWN → TRUE → 검토자 보류`와 반례 `FALSE`를 완료한다. 검사 대상 문서·Fact·Rule·근거 위치가 데이터 파일을 통해 연결되어야 한다. 그다음 상표·디자인과 보정 시점 사례를 추가한다.

### 단계 3: 평가·거버넌스·이미지

모의 데이터에서 집계가 다시 계산되는 평가 시뮬레이터, 자료 등급별 경로 표시, Rule 버전·스냅샷 시각화를 마친다. 사용자 생성 이미지가 들어오면 지정한 파일명으로 교체하고 적절한 크기·지연 로딩·대체텍스트를 적용한다.

### 단계 4: 완성도 점검

| 검사 | 통과 조건 |
| --- | --- |
| 체험 | 첫 사례에서 문서 누락은 `UNKNOWN`, 자료 보완은 진단 후보, 반례는 `FALSE`; 각 단계의 근거를 클릭 가능 |
| 사실성 | 모든 사례·차트에 가상/모의 표시; 목표와 실측 혼동 없음; 사람의 최종 판단 명확 |
| 구조 | 10개 페이지의 직접 접속·새로고침·내부 링크가 GitHub Pages 저장소 하위 경로에서 동작 |
| 다국어 | 한·영·일에서 메뉴·버튼·사례·차트·오류 상태·대체텍스트에 번역 누락 없음; 전환 시 단계 유지 |
| 테마 | 첫 방문 시스템 기본, OS 변경 즉시 반영, 수동 선택 저장, 명암 대비 확인 |
| 모바일 | 360px 이상에서 가로 넘침과 입력 불가 없음; 주요 체험을 터치로 완주 가능 |
| 접근성 | 키보드 완주, 포커스 가시성, 의미 있는 레이블, 상태 텍스트, reduced motion, 표의 제목·헤더 |
| 보안 | 저장소·브라우저에 비공개 사건, 개인 정보, API 키 없음; 사용자 입력을 HTML로 그대로 삽입하지 않음 |
| 성능 | 첫 화면 이미지 최적화, 페이지별 코드 분리, 이미지 없는 상태도 정상 렌더 |
| 자료 | 보고서·CAIPEX·PEQ 관련 링크 점검, 출처와 시연 한계 설명 |

**인수 산출물:** 빌드되는 저장소 전체, `README.md`, 가상 사례·다국어 데이터, 테스트와 실행 결과, GitHub Pages workflow, 이미지 폴더와 자리표시자, PC·모바일 3개 언어 및 3개 테마의 화면 캡처. 임의의 인터넷 연동·서버 구축·실제 사건 데이터 수집은 이번 정적 연구 체험 사이트의 완료 조건에 포함하지 않는다.

---

### 참고 링크와 확인 사항

- 기준 문서: 「생성형 AI 기반 지식재산 심사품질 진단 고도화 연구·구축안」(사용자 제공 편집본).
- 관련 체험: <https://peqrule.moip.ai.kr/> — 기존 PEQ Rule Engine 사이트. 세부 UI는 구현 전에 직접 확인.
- 연구 지원: <https://caipex.site/> — CAIPEX 학회 사이트. 공식 로고·표기 규정은 실제 자료로 확인.
- GitHub Pages 사용자 정의 빌드와 게시: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>
- Vite의 정적 사이트 배포와 `base`: <https://vite.dev/guide/static-deploy>
- 시스템 테마 감지: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-color-scheme>

**개발용 AI에게 다시 강조:** 이 문서는 미래 시스템의 시연용 정적 사이트를 구현하기 위한 것이다. 장식적인 메인 페이지만 만든 뒤 완료로 보고하지 말라. 첫 특허 사례에서 문서를 추가할 때 `UNKNOWN`의 원인과 근거가 실제로 변하고, 검토자의 선택이 환류 화면에 이어지는지 직접 실행해 확인하라.
