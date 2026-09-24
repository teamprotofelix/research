/**
 * 한국어 사전 — 모든 키의 기준본.
 * en.ts / ja.ts는 반드시 같은 키 구조를 가져야 하며 테스트로 검증한다.
 */
export const ko = {
  meta: {
    title: '근거를 따라가는 심사품질의 미래 · AI 심사품질 고도화 연구',
    siteName: 'AI 심사품질 고도화 연구',
  },

  common: {
    brand: '심사품질 연구 전시',
    brandSub: 'Evidence-led examination quality',
    demoBadge: '연구용 가상 사례',
    simulatedBadge: '모의 데이터',
    simulatedRun: '모의 실행',
    researchDemoFinding: '연구용 진단 후보',
    finalByHuman: '최종 판단은 사람이 합니다',
    learnMore: '자세히 보기',
    startOver: '처음부터',
    reset: '초기화',
    share: '공유',
    copyLink: '링크 복사',
    copied: '복사됨',
    add: '추가',
    exclude: '제외',
    close: '닫기',
    open: '열기',
    viewSource: '원문 보기',
    backToRule: '규칙으로 돌아가기',
    allSteps: '전체 단계',
    optional: '선택',
    fictionalNote: '이 화면의 사건·문서·수치는 모두 가상의 교육용 데이터입니다.',
    notLegalConclusion: '법적 결론이나 공식 거절이유가 아닙니다.',
    print: '인쇄',
    skipToContent: '본문으로 건너뛰기',
  },

  nav: {
    groups: {
      intro: {
        label: '연구 소개',
        items: {
          research: { label: '연구 개요', sub: '문제·가설·아키텍처' },
        },
      },
      experience: {
        label: '체험하기',
        items: {
          experience: { label: '미래의 하루', sub: '3분 안내형 스토리' },
          lab: { label: '사건 실험실', sub: '핵심 체험' },
        },
      },
      cases: {
        label: '사례',
        items: {
          cases: { label: '권리별 사례', sub: '특허·상표·디자인 비교' },
        },
      },
      evaluate: {
        label: '평가와 방법',
        items: {
          method: { label: '연구 방법', sub: 'Gold·Challenge·누수 방지' },
          evaluation: { label: '평가 시뮬레이터', sub: '가정값으로 다시 계산' },
        },
      },
      trust: {
        label: '신뢰와 구축',
        items: {
          governance: { label: '신뢰와 책임', sub: '자료 등급·재현성' },
          roadmap: { label: '구축 시나리오', sub: '단계별 로드맵' },
        },
      },
      sources: {
        label: '자료',
        items: {
          sources: { label: '자료와 용어', sub: '출처·용어집·구분' },
        },
      },
    },
    menu: '메뉴',
    closeMenu: '메뉴 닫기',
  },

  footer: {
    caipexSupportTitle: 'CAIPEX 학회의 지원을 받는 연구',
    caipexSupportText: '본 사이트는 CAIPEX(Collegium of AI-Driven IP Examination Excellence)의 지원을 받는 연구의 인터랙티브 전시입니다. CAIPEX의 공식 정책 발표나 지식재산처의 공식 운영 사이트가 아닙니다.',
    visitCaipex: 'CAIPEX 사이트 방문',
    quickLinks: '바로가기',
    related: '관련 사이트',
    peqRuleSite: 'PEQ Rule Engine 체험 사이트',
    report: '기준 연구보고서',
    disclaimerTitle: '표현 원칙',
    disclaimer: '모든 사건·문서·수치는 연구용 가상·모의 데이터입니다. 법률상 확정 평가나 실제 기관의 정책으로 해석하지 마십시오.',
    copyright: '본 사이트의 가상 사례 데이터와 화면은 연구 시연 목적으로 제작되었습니다.',
  },

  themes: {
    label: '테마',
    system: '시스템',
    light: '라이트',
    dark: '다크',
    current: '현재 {mode}',
    systemCurrent: '시스템 · 현재 {mode}',
    systemFollowing: '시스템 설정을 따름',
  },

  langs: {
    label: '언어',
    ko: '한국어',
    en: 'English',
    ja: '日本語',
  },

  home: {
    kicker: 'CAIPEX 지원 연구 · 인터랙티브 연구 전시',
    title: '근거를 따라가는 심사품질의 미래',
    lead: '사건 자료를 모으고, 근거가 있는 사실을 추출하고, 규칙이 필요한 조건을 평가하고, 부족한 정보는 UNKNOWN으로 남기고, 사람이 최종 검토하며, 검토 결과로 규칙과 평가 체계를 개선한다. 이 연구가 제안하는 흐름을 8~12분짜리 가상 사건 체험으로 미리 다뤄보세요.',
    ctaExperience: '가상 사건 체험하기',
    ctaResearch: '연구 개요 보기',
    heroImgAlt: '사건 자료와 근거가 연결된 연구 장면',
    questionLabel: '연구 질문',
    question: '심사품질을 왜 근거와 사람의 검토로 진단해야 하는가?',
    questionAnswer:
      'AI가 결론을 대신 내리는 것이 아니라, AI는 근거를 정리하고 빠진 자료를 알려주며, 규칙은 재현 가능한 진단 후보를 만들고, 최종 판단과 환류는 사람이 합니다.',
    overviewTitle: '90초 개요',
    overviewIntro: '이 연구의 한 줄짜리 이야기입니다. 각 단계를 눌러 확인하세요.',
    overview: {
      collect: {
        title: '1. 사건 자료를 모은다',
        text: '청구범위, 인용문헌, 통지서 등 필요한 문서 목록을 확인하고 빠진 자료를 식별합니다.',
      },
      extract: {
        title: '2. 근거가 있는 사실만 추출한다',
        text: '모든 Fact는 원문의 위치와 함께 기록됩니다. 근거가 없으면 Fact가 아닙니다.',
      },
      evaluate: {
        title: '3. 명시적 규칙이 조건을 평가한다',
        text: '규칙은 버전과 기준일을 가집니다. 같은 입력이면 같은 결과가 재현됩니다.',
      },
      unknown: {
        title: '4. 부족한 정보는 UNKNOWN으로 남긴다',
        text: '자료가 없으면 추측하지 않습니다. 무엇이 부족하고 왜 필요한지 화면이 알려줍니다.',
      },
      review: {
        title: '5. 사람이 확인·보류·기각한다',
        text: 'TRUE도 결론이 아니라 검토 대상인 연구용 진단 후보입니다.',
      },
      improve: {
        title: '6. 검토 결과가 규칙을 개선한다',
        text: '사람의 판단 기록이 다음 규칙 버전과 평가 체계의 입력이 됩니다.',
      },
    },
    flowTitle: '핵심 흐름',
    flow: {
      d1: '사건 자료',
      d2: '근거가 연결된 Fact',
      d3: '명시적 Rule',
      d4: 'UNKNOWN / 진단 후보',
      d5: '사람의 검토·환류',
    },
    flowCaption: '연구가 제안하는 진단 흐름 — UNKNOWN과 사람의 검토가 흐름의 일부입니다.',
    casePreviewTitle: '대표 체험 미리보기',
    casePreviewText:
      '종속항 추가구성의 대비 누락 가능성(가상 특허 사건): 통지서가 없으면 UNKNOWN, 샘플 통지서를 추가하면 진단 후보, 반례 통지서로 바꾸면 조건 미충족. 세 상태를 직접 비교해 보세요.',
    casePreviewCta: '실험실에서 열기',
    supportTitle: '연구 지원',
    supportText:
      '이 연구는 CAIPEX 학회의 지원을 받습니다. 본 사이트는 연구 가설과 설계를 설명하는 전시이며, CAIPEX의 공식 정책 발표 채널이 아닙니다.',
    existingSiteTitle: '기존 체험 사이트와의 관계',
    existingSiteText:
      'PEQ Rule Engine 체험 사이트는 개별 규칙 엔진을 자세히 탐색하는 관련 사이트입니다. 이 사이트는 규칙 실행 화면을 복제하지 않고, 연구 질문·증거 취득·자료 부족·사람의 판단을 관통하는 이야기를 제공합니다.',
    goPeq: 'PEQ Rule Engine 살펴보기',
    forWhomTitle: '누구를 위한 전시인가',
    forWhom: {
      examiner: {
        title: '심사관·진단관',
        text: 'AI는 근거를 정리하고 빠진 자료를 알려줍니다. 사건의 근거·불확실성·검토 위치를 따라가 봅니다.',
      },
      researcher: {
        title: '연구자·학회 회원',
        text: 'Neuro-symbolic 설계의 연구 질문과 평가 설계. 가설, 자료, 평가 지표, 한계를 분리해 봅니다.',
      },
      policy: {
        title: '정책·사업 담당자',
        text: '단계적 구축의 조건과 투자 지점. 품질, 보안, 인적 검토, 예산의 연결을 이해합니다.',
      },
      visitor: {
        title: '일반 방문자·해외 협력자',
        text: '심사품질 관리 업무의 미래 모습을 한·영·일 안내로 간단히 체험합니다.',
      },
    },
    startNote: '체험은 오프라인 데이터로만 동작하며, 서버나 로그인이 필요 없습니다.',
  },

  researchPage: {
    title: '연구 개요',
    lead: '문제, 가설, 전체 아키텍처, 권리별 확장. 이 전시의 나머지 페이지는 모두 이 구조 위에서 동작합니다.',
    problemTitle: '문제 — 심사품질 진단의 어려움',
    problem: {
      p1: '심사품질을 점검할 때, 필요한 사건 자료가 빠져 있거나 문서 버전이 맞지 않으면 판단 자체가 불가능합니다.',
      p2: '사람이 판단의 근거가 된 구절을 일일이 찾아 연결하는 일은 많은 시간이 들고, 재현하기 어렵습니다.',
      p3: 'AI가 결론처럼 보이는 문장을 내놓으면, 근거와 한계를 알 수 없어 신뢰하기 어렵습니다.',
    },
    hypothesisTitle: '연구 가설',
    hypothesisText:
      '생성형 AI가 사건 자료를 읽고 구조화하되, 판단의 골격은 명시적 규칙이 만들고, 부족한 자료는 UNKNOWN으로 남기며, 사람의 검토 결과가 규칙을 개선하는 흐름이면 심사품질 진단의 정확도와 재현성, 설명 가능성을 함께 높일 수 있다.',
    neuroSymbolicTitle: 'Neuro-symbolic 설계',
    neuroSymbolic: {
      generative: {
        title: '생성형 AI가 읽고 구조화한다',
        text: '문서에서 사실(Fact)과 근거 위치를 추출합니다. 추출 결과에는 항상 원문 위치가 붙습니다.',
      },
      rules: {
        title: '규칙이 재현 가능한 후보를 만든다',
        text: '추출된 Fact를 명시적 Rule로 평가합니다. 같은 입력·버전이면 같은 진단 경로가 재현됩니다.',
      },
      human: {
        title: '사람이 최종 판단하고 환류한다',
        text: '진단 후보는 결론이 아닙니다. 확인·보류·기각의 기록이 다음 규칙 버전의 입력이 됩니다.',
      },
    },
    layersTitle: '전체 구조 — 다섯 층의 데이터 흐름',
    layersIntro: '층을 선택하면 필요한 입력, 산출물, 실패 시 상태, 책임 주체가 바뀝니다.',
    inputLabel: "필요한 입력",
    outputLabel: "산출물",
    failureLabel: "실패 시 상태",
    ownerLabel: "책임 주체",
    layers: {
      materials: {
        name: '1 · 사건 자료',
        input: '사건 문서 목록, 인용문헌, 절차 기록',
        output: '누락·불완전 문서가 표시된 자료 현황',
        failure: '필요 문서 없음 → 이후 판단 UNKNOWN',
        owner: '사건 접수·자료 등록 담당',
      },
      plan: {
        name: '2 · 검색·취득 계획',
        input: '권리유형, 절차 단계, 필요한 문서 유형',
        output: '권리별·절차별 수집 계획과 후보 문서 목록',
        failure: '계획 누락 → 근거 없는 추정 위험',
        owner: '시스템 + 심사관 확인',
      },
      facts: {
        name: '3 · 근거가 연결된 Fact',
        input: '문서 원문과 추출 결과',
        output: '원문 위치가 연결된 Fact 목록',
        failure: '근거 위치 없음 → Fact 미확정',
        owner: '추출기 + 검토자',
      },
      rules: {
        name: '4 · 명시적 Rule',
        input: 'Fact, Rule 버전, 사건 기준일',
        output: 'TRUE / FALSE / UNKNOWN / NOT_APPLICABLE',
        failure: '사실 부족 → UNKNOWN (추측 금지)',
        owner: '규칙 관리자(버전·시행일)',
      },
      human: {
        name: '5 · 사람의 판단·평가',
        input: '진단 후보, 근거 추적, 반례 검토',
        output: '확인·보류·기각과 사유, 환류 기록',
        failure: '검토 누락 → 평가 지표 왜곡',
        owner: '심사관·진단관',
      },
    },
    hierarchyTitle: '계층 구조 — L0부터 L4까지',
    hierarchyIntro: '연구보고서의 계층 구조입니다. 각 계층의 가능한 역할과 남는 오류를 한 문장으로 보여줍니다.',
    hierarchy: {
      l0: {
        name: 'L0 · 형식 검사',
        role: '문서 존재, 형식, 누락 페이지, 기준일 표기 등 기계적 확인.',
        residual: '남는 오류: 내용의 옳고 그름은 판단하지 못합니다.',
      },
      l1: {
        name: 'L1 · 명시 Rule',
        role: '추출된 Fact를 명시적 규칙으로 평가해 재현 가능한 후보를 만듭니다.',
        residual: '남는 오류: 규칙에 없는 예외 상황을 놓칩니다.',
      },
      l2: {
        name: 'L2 · 관계 추론',
        role: 'Fact 사이의 의존 관계와 인용·대비 구조를 연결합니다.',
        residual: '남는 오류: 관계를 잘못 연결하면 거짓 근거가 됩니다.',
      },
      l3: {
        name: 'L3 · 제한적 LLM Predicate',
        role: '자연어 판단이 필요한 좁은 조건만 LLM이 근거와 함께 제안합니다.',
        residual: '남는 오류: 환각 가능성 — 반드시 근거 위치와 함께 검토해야 합니다.',
      },
      l4: {
        name: 'L4 · 사람의 최종 판단',
        role: '진단 후보를 확인·보류·기각하고 사유를 기록합니다.',
        residual: '남는 오류: 사람의 부담과 편향 — 평가와 환류로 관리합니다.',
      },
    },
    separationTitle: '두 경로의 분리',
    separationText:
      '이 연구는 ‘생성형 AI가 읽고 구조화하는 경로’와 ‘규칙이 재현 가능한 후보를 만드는 경로’를 분리합니다. LLM의 출력이 규칙 입력으로 바로 들어가지 않고, 근거가 연결된 Fact를 거칩니다.',
    rightsTitle: '권리별 확장',
    rights: {
      patent: {
        title: '특허·실용',
        text: '청구항 구성 대비, 보정 전후 시점, 인용문헌 매핑. 기준일과 문서 버전이 진단에 직접 영향을 줍니다.',
      },
      trademark: {
        title: '상표',
        text: '문자·발음·이미지 검색 축이 각각 다른 증거를 만듭니다. 유사도 점수는 법적 유사판단으로 제시하지 않습니다.',
      },
      design: {
        title: '디자인',
        text: '전체·부분·회전 도면의 보호범위 대조. 후보 결과만 보여주고 최종 판단은 사람에게 남깁니다.',
      },
    },
    reportLinkTitle: '기준 연구보고서',
    reportLinkText: '「생성형 AI 기반 지식재산 심사품질 진단 고도화 연구·구축안」(편집본, 2026년 9월).',
  },

  experience: {
    title: '미래의 하루',
    lead: '연구 가정에 따른 미래 시연입니다. 같은 가상 사건을 심사관·진단관·연구자 시점에서 따라가 보세요.',
    assumptionBadge: '연구 가정에 따른 미래 시연',
    roleLabel: '역할 선택',
    roles: {
      examiner: { title: '심사관', subtitle: '어떤 자료가 빠졌나', blurb: '사건을 접수하고 필요한 자료가 모였는지 확인하는 시점에서 봅니다.' },
      reviewer: { title: '진단관', subtitle: '진단 후보의 근거와 반례는 무엇인가', blurb: '진단 후보를 근거 추적과 반례 검토로 확인하는 시점에서 봅니다.' },
      researcher: { title: '연구자', subtitle: '오류 유형을 어떻게 평가할까', blurb: '검토 기록으로 규칙과 평가 체계를 개선하는 시점에서 봅니다.' },
    },
    modeQuick: '3분 안내',
    modeDetail: '자세히 보기',
    scenes: {
      intake: {
        title: '사건 접수',
        examiner: '출원사건이 접수되고, 청구범위와 인용문헌 목록이 등록됩니다. 화면은 ‘이 사건에 필요한 문서’와 ‘현재 확보된 문서’를 나란히 보여줍니다. 심사관은 빠진 통지서 본문을 확인합니다.',
        reviewer: '접수된 사건이 진단 대기열에 올라옵니다. 진단관은 사건 번호 대신 문서 완결 상태부터 봅니다.',
        researcher: '사건 단위로 문서 취득 시각과 완전성 정보가 기록됩니다. 이 기록이 나중에 Gold Set의 일부가 됩니다.',
      },
      acquire: {
        title: '자료 취득',
        examiner: '누락된 통지서 본문을 확보해 추가합니다. 전체 페이지가 갖춰졌는지가 자동으로 표시됩니다.',
        reviewer: '자료가 추가되면 어떤 Fact가 새로 추출 가능해지는지 상태가 갱신됩니다.',
        researcher: '문서 취득부터 추출까지의 버전 이력이 남습니다. 어느 시점의 어떤 문서로 판단했는지 재현할 수 있습니다.',
      },
      diagnose: {
        title: '진단',
        examiner: '종속항 추가구성 C에 대한 대비가 통지서에 없다는 진단 후보가 규칙에 의해 제시됩니다. 결론이 아니라 검토 대상입니다.',
        reviewer: '진단 후보와 연결된 근거 구절, 적용된 규칙 버전을 펼쳐 봅니다. 반례 문서가 있는지도 확인합니다.',
        researcher: '후보가 TRUE/FALSE/UNKNOWN 중 어디로 갔는지, 어느 단계에서 멈췄는지가 평가 데이터가 됩니다.',
      },
      review: {
        title: '검토',
        examiner: '확인·보류·기각 중 하나를 고르고 사유를 남깁니다. 이 기록이 사건의 검토 이력에 남습니다.',
        reviewer: '근거가 부족하면 보류하고 ‘추가 자료 확인’으로 돌아갑니다. 기각에는 반례 근거가 함께 기록됩니다.',
        researcher: '사람의 판단이 정답 데이터에 더해집니다. 어떤 오류 유형이 자주 나오는지 집계됩니다.',
      },
      feedback: {
        title: '환류',
        examiner: '검토 결과가 쌓이면 다음 규칙 버전이 바뀌고, 내일의 심사 화면에 반영됩니다.',
        reviewer: '자주 기각되는 후보 패턴은 규칙 개선 후보로 올라갑니다. 진단관은 개선된 규칙으로 다음 사건을 봅니다.',
        researcher: 'Gold/Challenge Set의 평가 지표가 갱신되고, 규칙 버전별 성능이 비교됩니다. 이것이 연구의 최종 산출물로 이어집니다.',
      },
    },
    toLab: '이 흐름을 실험실에서 직접 다뤄보기',
    toLabCta: '사건 실험실 열기',
    sceneDataNote: '모든 장면은 실험실과 같은 오프라인 샘플 데이터를 공유합니다.',
  },

  lab: {
    title: '사건 실험실',
    lead: '가상 사건에서 문서를 추가하고 제외하며, UNKNOWN에서 진단 후보와 반례까지 직접 확인하는 핵심 체험입니다.',
    steps: {
      s1: { title: '사건 확인', sub: '가상 사건과 문서 목록' },
      s2: { title: '자료 취득', sub: '문서 추가·제외' },
      s3: { title: '사실 추출', sub: 'Fact와 근거 위치' },
      s4: { title: '규칙 평가', sub: '판정과 추적' },
      s5: { title: '검토·환류', sub: '사람의 선택 기록' },
    },
    colDocuments: '사건 문서·타임라인',
    colFacts: '수집 계획과 Fact·근거',
    colRules: 'Rule 결과와 사람 검토',
    caseSelectLabel: '가상 사례',
    docStatus: {
      included: '포함됨',
      excluded: '제외됨',
      complete: '문서 완전',
      incomplete: '문서 불완전',
      availableAtStart: '시작 시점에 있던 문서',
      notAvailableAtStart: '시작 시점에 없던 문서',
    },
    origin: {
      EXAMINER_CITED: '심사관이 실제 인용한 자료',
      AI_DISCOVERED: 'AI가 새로 찾은 후보',
      CASE_DOCUMENT: '사건 문서',
    },
    addSampleDoc: '샘플 통지서 추가',
    counterButton: '반례 문서로 바꾸기',
    backToSample: '샘플 통지서로 되돌리기',
    neededDocButton: '필요한 문서 확인',
    factStatus: {
      AVAILABLE: '추출됨',
      MISSING: '추출 불가 — 문서 없음',
      AMBIGUOUS: '모호 — 확인 필요',
    },
    factValueTrue: '예',
    factValueFalse: '아니오',
    factValueUnknown: '알 수 없음',
    evidenceLocation: '근거 위치',
    noEvidence: '근거 위치 없음',
    explain: '왜 필요한가',
    advancedPanel: '연구자용 고급 패널',
    advancedHint: 'Fact 값을 수정하면 진단이 어떻게 달라지는지 확인할 수 있습니다. 브라우저 안에서만 동작하는 수동 편집입니다.',
    advancedEdit: '값 수정',
    advancedDone: '수정 완료',
    ruleVersionLabel: 'Rule 버전',
    ruleVersionAuto: '자동 (기준일 기준)',
    eventDateLabel: '사건 기준일',
    eventDateUnknown: '불명확',
    verdictReasons: {
      'mapping-found': '통지서에 종속항 추가구성 C에 대한 대비 기재가 확인되어 결함 조건이 충족되지 않습니다.',
      'mapping-missing': '청구항 2에 추가구성 C가 기재되어 있고, 전체 통지서에서 C에 대한 대비가 확인되지 않아 「종속항 추가구성 C에 대한 대비 누락 검토 후보」로 제시합니다.',
      'document-incomplete': '통지서가 불완전(마지막 장 누락)하여 C의 대비 여부를 확정할 수 없습니다.',
      'no-claim-change': '보정서가 청구항의 실질을 바꾸지 않아 재대비 검토 조건이 충족되지 않습니다.',
      'recheck-candidate': '보정으로 청구항이 실질 변경되었으나 통지서의 대비가 보정 전 청구항 기준이어서 「보정 후 청구항 재대비 검토 후보」로 제시합니다.',
      'condition-unknown': '조건 평가에 필요한 값이 결정되지 않았습니다.',
      'candidates-exist': '이 검색 축에서 검토 후보가 존재합니다. 점수는 모의 유사도이며 법적 유사판단이 아닙니다.',
      'no-candidates': '이 검색 축에서 검토 후보가 없습니다.',
      'axis-not-searched': '이 검색 축이 꺼져 있어 결과를 알 수 없습니다.',
      'whole-scope': '보호범위가 전체 디자인으로 지정되어 부분 범위 대조 조건이 충족되지 않습니다.',
      'rotation-missing-candidate': '부분디자인 범위가 지정되었으나 회전 도면이 없어 「회전 도면 누락 검토 후보」로 제시합니다.',
      'all-views-present': '회전 도면이 모두 갖춰져 결함 조건이 충족되지 않습니다.',
      'not-applicable-right': '이 규칙은 이 권리유형의 사건에 적용되지 않습니다.',
      'right-type-mismatch': '권리유형이 규칙의 적용 대상이 아닙니다.',
      'version-not-found': '요청한 규칙 버전을 찾을 수 없습니다.',
      'version-not-effective': '요청한 규칙 버전이 사건 기준일에는 아직 시행되지 않았습니다.',
      'version-before-first-effective': '기준일 이전에 시행된 규칙 버전이 없습니다.',
      'event-date-unclear': '사건 기준일이 불명확하여 적용할 규칙 버전을 결정할 수 없습니다.',
      'required-facts-missing': '필요한 문서가 없어 판단을 보류합니다.',
      'required-facts-ambiguous': '필요한 문서가 불완전하거나 값이 모호하여 판단을 보류합니다.',
      'evidence-location-missing': '필요한 근거 위치가 현재 문서 선택에 없어 판단을 보류합니다.',
      ok: '통과',
    },
    unknownExplain: {
      title: '무엇이 부족한가, 왜 필요한가, 어디에서 구하는가',
      what: '무엇이 부족한가',
      why: '왜 필요한가',
      where: '어디에서 구하는가',
    },
    verdict: {
      TRUE: '진단 후보',
      FALSE: '조건 미충족',
      UNKNOWN: '판단 보류',
      NOT_APPLICABLE: '적용 대상 아님',
    },
    verdictShort: {
      TRUE: '후보',
      FALSE: '미충족',
      UNKNOWN: '보류',
      NOT_APPLICABLE: '해당 없음',
    },
    trace: {
      title: '진단 경로 (Evidence Trace)',
      applicability: '적용 가능성',
      version: '기준일·버전',
      facts: '필요 Fact 검사',
      evidence: '증거 위치 확인',
      condition: '조건 평가',
      pass: '통과',
      fail: '중단',
    },
    usedFacts: '사용된 Fact',
    missingFacts: '부족한 Fact',
    ambiguousFacts: '모호한 Fact',
    review: {
      title: '사람의 검토',
      hint: '진단 후보는 결론이 아닙니다. 검토 의견을 남기면 피드백 기록에 반영됩니다.',
      confirm: '확인',
      defer: '보류',
      reject: '기각',
      reasonLabel: '사유',
      reasons: {
        evidence: '근거 보완 필요',
        incomplete: '문서 불완전',
        counter: '반례 확인',
        agree: '근거 타당',
        other: '기타',
      },
      noteLabel: '메모 (선택)',
      submit: '검토 기록 남기기',
      recorded: '검토 기록이 피드백에 반영되었습니다.',
      recordedAria: '검토 기록 반영됨',
    },
    feedback: {
      title: '피드백·평가',
      empty: '아직 검토 기록이 없습니다. 규칙 평가 후 검토 의견을 남겨 보세요.',
      logTitle: '이 세션의 검토 기록',
      verdict: '당시 판정',
      decision: '검토',
      decisions: { CONFIRMED: '확인', DEFERRED: '보류', REJECTED: '기각' },
      howUsed: '이 기록은 브라우저 세션 안의 시연용 기록이며, 연구에서는 같은 구조의 기록이 규칙 개선과 평가 지표의 입력이 됩니다.',
      clear: '체험 기록 삭제',
      cleared: '체험 기록을 삭제했습니다.',
    },
    shareTitle: '이 상태 공유',
    shareHint: '사례 ID, 문서 선택, 규칙 버전 같은 열거값만 URL에 담깁니다. 입력한 메모는 공유되지 않습니다.',
    mobileColumnSwitch: '열 전환',
    tabDocuments: '문서',
    tabFacts: 'Fact',
    tabRules: 'Rule',
    startCta: '이 사례로 체험 시작',
  },

  cases: {
    title: '권리별 사례',
    lead: '특허·실용, 상표, 디자인의 가상 사례를 비교하고, 각 카드에서 실험실 시나리오를 바로 엽니다.',
    compareTitle: '사례 비교',
    compareNote: '모든 사례는 가상이며 실제 출원 사건이 아닙니다. 검색 점수는 미리 작성한 모의 데이터입니다.',
    colCase: '사례',
    colRight: '권리',
    colManipulation: '조작할 수 있는 것',
    colPoint: '연구 포인트',
    openInLab: '실험실에서 열기',
    openInLabAria: '{case} 실험실에서 열기',

    pat014: {
      title: '종속항 추가구성의 대비 누락 가능성',
      blurb: '청구항 2의 추가구성 C에 대한 심사관의 대비가 통지서에 없는지 확인하는 가상 특허 사건입니다.',
      summary1: '청구항 1에는 A+B, 종속항 2에는 A+B+C가 기재되어 있습니다. 심사관이 인용한 D1에는 A+B 관련 자료가 있습니다.',
      summary2: '시작 상태에서는 의견제출통지서 본문이 없어, 심사관의 구성대비 내용을 확인할 수 없습니다.',
      summary3: '샘플 통지서를 추가하면 C의 대비 여부를 판정할 수 있고, 반례 통지서로 바꾸면 결과가 달라집니다.',
      doc: {
        claims: '출원 청구범위 (가상)',
        citations: '심사관 인용문헌 목록 (가상)',
        oa: '의견제출통지서 본문 (가상)',
      },
      docVariants: {
        claims: { v1: '청구범위 원본 v1' },
        citations: { v1: '인용문헌 목록 v1' },
        oa: {
          v1: '샘플 통지서 A — C 대비 없음 (가상 문서)',
          v2: '샘플 통지서 B(반례) — C 대비 포함 (가상 문서)',
          v3: '부분 통지서 — 마지막 장 누락 (가상 문서)',
        },
      },

      span: {
        c1: {
          text: '청구항 1: [A] 기재와 [B] 기재를 포함하는 장치.',
          loc: '청구범위 1항',
        },
        c2: {
          text: '청구항 2: 제1항에 있어서, 추가로 [C] 기재를 포함하는 장치.',
          loc: '청구범위 2항',
        },
        d1: {
          text: '인용문헌 D1은 [A] 기재와 [B] 기재의 조합을 개시한다.',
          loc: '인용문헌 목록 — D1 요지',
        },
        oa1: {
          text: '인용문헌 D1에는 [A] 기재와 [B] 기재가 개시되어 있어 청구항 1의 진보성이 부정됩니다.',
          loc: '통지서 — 거절이유 1',
        },
        oa1b: {
          text: '검토 범위: 청구항 1 내지 2의 기재에 대하여 검토함. (청구항 2의 [C] 기재에 대한 대비는 기재되어 있지 않음)',
          loc: '통지서 — 검토 범위',
        },
        oa2: {
          text: '인용문헌 D1에는 [A] 기재와 [B] 기재가 개시되어 있어 청구항 1의 진보성이 부정됩니다.',
          loc: '통지서 — 거절이유 1',
        },
        oa2b: {
          text: '청구항 2의 [C] 기재에 대하여: 인용문헌 D2에는 [C] 기재가 개시되어 있어 청구항 2의 진보성도 부정됩니다.',
          loc: '통지서 — 거절이유 2',
        },
        oa3: {
          text: '인용문헌 D1에는 [A] 기재와 [B] 기재가 개시되어 있어 청구항 1의 진보성이 부정됩니다. (이하 생략 — 마지막 장 누락)',
          loc: '통지서 — 1쪽(부분본)',
        },
      },      f: {
        claim1: {
          label: '청구항 1은 A+B를 기재',
          explain: '규칙 v1.1.0은 청구항 1 확인을 요구합니다.',
        },
        claim2: {
          label: '청구항 2는 추가구성 C를 기재',
          explain: '대비 누락 검토의 대상이 되는 종속항 추가구성입니다.',
        },
        d1_ab: {
          label: 'D1에 A+B 대응 기재 존재',
          explain: '인용문헌이 A+B를 개시한다는 전제를 확인합니다.',
        },
        map_c: {
          label: '통지서에 C에 대한 대비 기재가 있는가',
          explain: "이 값이 없으면(문서 없음) 판단을 보류하고, '없음'이 전체 통지서에서 확인되면 진단 후보가 됩니다.",
        },
        oa_complete: {
          label: '통지서 전체 페이지 확보',
          explain: '일부 페이지만 있으면 C 대비가 뒤쪽에 있을 수 있어 판단할 수 없습니다.',
        },
      },
      rule: {
        condition: '종속항 추가구성 C가 있고, 전체 통지서에서 C 대비가 확인되지 않으면 → 진단 후보(TRUE). C 대비가 확인되면 → 조건 미충족(FALSE).',
      },
    },
    patAmd: {
      title: '보정 전후 시점과 대비 대상 변경',
      blurb: '보정서로 청구항이 바뀌었을 때, 이후 통지서가 보정 전 청구항 기준으로만 대비했는지 확인하는 가상 실용신안 사건입니다.',
      summary1: '청구항 2를 실질적으로 변경하는 보정서가 제출되었습니다.',
      summary2: '이후 통지서가 보정 전 청구항 기준으로만 대비했다면 재대비 검토가 필요합니다.',
      summary3: '기준일을 바꾸면 적용되는 규칙 버전이 달라지고, 기준일이 불명확하면 판단을 보류합니다.',
      doc: {
        claimsOrig: '보정 전 청구범위 (가상)',
        amendment: '보정서 (가상)',
        oa2: '보정 후 의견제출통지서 (가상)',
      },
      docVariants: {
        claimsOrig: { v1: '보정 전 청구범위 v1' },
        amendment: {
          v1: '보정서 A — 청구항 2 실질 변경 (가상 문서)',
          v2: '보정서 B(반례) — 오기 정정만 (가상 문서)',
        },
        oa2: {
          v1: '통지서 A — 보정 전 청구항 기준 대비 (가상 문서)',
          v2: '통지서 B(반례) — 보정 후 청구항 포함 대비 (가상 문서)',
        },
      },

      span: {
        c1o: {
          text: '청구항 1: [X] 부재와 [Y] 부재를 포함하는 지지 장치.',
          loc: '보정 전 청구범위 1항',
        },
        c2o: {
          text: '청구항 2: 제1항에 있어서, [Z] 부재를 더 포함하는 지지 장치.',
          loc: '보정 전 청구범위 2항',
        },
        amd1: {
          text: '청구항 2를 "제1항에 있어서, [Z] 부재를 삭제하고 [W] 부재를 더 포함하는 지지 장치"로 보정합니다.',
          loc: '보정서 — 청구항 2 보정부',
        },
        amd2: {
          text: '청구항 2의 "[Z] 부재" 표기를 "[Z] 부재"로 정정합니다. (실질 변경 없음)',
          loc: '보정서 — 정정부',
        },
        oa2a: {
          text: '인용문헌 E1에는 [X] 부재와 [Y] 부재가 개시되어 있어 청구항 1의 진보성이 부정됩니다. 청구항 2의 [Z] 부재는 E1에 개시되어 있습니다.',
          loc: '통지서 — 거절이유 1',
        },
        oa2b: {
          text: '보정 후 청구항 2의 [W] 부재에 대하여: 인용문헌 E2에는 [W] 부재가 개시되어 있지 않습니다. (보정 후 청구항 기준 대비)',
          loc: '통지서 — 거절이유 2',
        },
      },      f: {
        amendChanged: {
          label: '보정으로 청구항 실질 변경',
          explain: '실질 변경이 없으면 재대비 검토 대상이 아닙니다.',
        },
        amendedMapping: {
          label: '통지서가 보정 후 청구항을 기준으로 대비',
          explain: '보정 전 기준으로만 대비했다면 보정 후 청구항에 대한 검토가 빠졌을 수 있습니다.',
        },
      },
      rule: {
        condition: '보정으로 청구항이 실질 변경되고, 통지서의 대비가 보정 전 기준이면 → 진단 후보(TRUE).',
      },
    },
    tmSearch: {
      title: '문자·발음·이미지 검색 축',
      blurb: '가상 표장에 대해 문자열·발음·이미지 검색 축을 켜고 끄며, 각 축이 만드는 검토 후보를 비교하는 가상 상표 사건입니다.',
      summary1: '가상 문자표장 "NOVATERRA"가 출원되었습니다.',
      summary2: '문자열·발음·이미지 검색 축은 각각 다른 증거를 만들며, 독립적으로 켜고 끌 수 있습니다.',
      summary3: '점수는 미리 작성한 모의 유사도이며 법적 유사판단으로 제시되지 않습니다.',
      doc: {
        mark: '출원 표장 (가상)',
        axisString: '문자열 검색 설정 (가상)',
        axisPhonetic: '발음 검색 설정 (가상)',
        axisImage: '이미지 검색 설정 (가상)',
      },
      docVariants: {
        mark: { v1: '표장 기재 v1' },
        axisString: { v1: '문자열 축 v1' },
        axisPhonetic: { v1: '발음 축 v1' },
        axisImage: { v1: '이미지 축 v1' },
      },

      span: {
        m1: {
          text: '표장: NOVATERRA (가상 문자표장)',
          loc: '출원서 — 표장란',
        },
        m2: {
          text: '지정상품: 데이터 처리용 소프트웨어 등 (가상)',
          loc: '출원서 — 지정상품란',
        },
        s1: {
          text: '문자열 검색: "NOVATERRA" 완전일치 및 부분일치 후보 (모의)',
          loc: '검색 설정 — 문자열 축',
        },
        p1: {
          text: '발음 유사 검색: 노바테라 발음 근접 후보 (모의)',
          loc: '검색 설정 — 발음 축',
        },
        i1: {
          text: '이미지 검색: 도형 유사 후보 (모의)',
          loc: '검색 설정 — 이미지 축',
        },
      },      f: {
        axisString: {
          label: '문자열 축 검색 실행',
          explain: '이 축이 꺼지면 문자 기준 후보를 볼 수 없어 해당 규칙은 UNKNOWN입니다.',
        },
        axisPhonetic: {
          label: '발음 축 검색 실행',
          explain: '이 축이 꺼지면 발음 기준 후보를 볼 수 없어 해당 규칙은 UNKNOWN입니다.',
        },
        axisImage: {
          label: '이미지 축 검색 실행',
          explain: '이 축이 꺼지면 이미지 기준 후보를 볼 수 없어 해당 규칙은 UNKNOWN입니다.',
        },
      },
      rule: {
        condition: '검색 축이 켜져 있고 후보가 있으면 → 진단 후보(TRUE). 점수는 모의 유사도입니다.',
      },
      cand: {
        1: 'NOVATERRA (동일 표장)',
        2: 'NOVATERA (1자 차이)',
        3: 'NOVA TERRA (공백 분리)',
        4: 'NOVATERRACE (부분일치)',
        5: '노바테라 (발음 근접)',
        6: 'NOVATARA (발음 근접)',
        7: 'NOBATERA (발음 근접)',
        8: '도형 유사 후보 1 (모의 도형)',
        9: '도형 유사 후보 2 (모의 도형)',
        10: '도형 유사 후보 3 (모의 도형)',
      },
    },
    dsgPartial: {
      title: '전체·부분·회전 도면',
      blurb: '부분디자인 범위가 지정된 가상 디자인 사건에서 회전 도면의 유무를 확인하고, 후보 결과만 사람에게 남기는 사례입니다.',
      summary1: '부분디자인 보호범위가 점선으로 표시되어 있습니다.',
      summary2: '정면도와 저면도는 있지만 회전 도면이 없습니다.',
      summary3: '회전 도면을 추가하면 조건이 달라지고, 보호범위를 전체로 바꾸면 규칙이 적용되지 않습니다.',
      doc: {
        scope: '보호범위 지정서 (가상)',
        drawings: '도면 세트 (가상)',
        views: '회전 도면 세트 (가상)',
      },
      docVariants: {
        scope: {
          v1: '부분디자인 범위 (가상 문서)',
          v2: '전체 디자인 범위 (가상 문서)',
        },
        drawings: { v1: '정면도·저면도 v1' },
        views: { v1: '회전 도면 v1' },
      },

      span: {
        sc1: {
          text: '보호받고자 하는 부분: 제품의 상부 외관 (점선으로 표시한 부분 제외)',
          loc: '보호범위 지정서 — 부분 표시',
        },
        sc2: {
          text: '보호범위: 디자인의 전체 외관',
          loc: '보호범위 지정서 — 전체 표시',
        },
        d1: {
          text: '도면 1: 정면도',
          loc: '도면 세트 — 1',
        },
        d2: {
          text: '도면 2: 저면도',
          loc: '도면 세트 — 2',
        },
        r1: {
          text: '도면 3: 회전 45° 상태도',
          loc: '회전 도면 — 3',
        },
      },      f: {
        scopePartial: {
          label: '부분디자인 범위 지정',
          explain: '전체 범위면 부분 대조 규칙이 적용되지 않습니다.',
        },
        partialLines: {
          label: '점선으로 부분 범위 표시',
          explain: '부분 범위를 명확히 하려면 점선 표시가 필요합니다.',
        },
        rotatedViews: {
          label: '회전 도면 존재',
          explain: '부분 범위의 입체적 형상을 확인하려면 회전 도면이 필요합니다.',
        },
      },
      rule: {
        condition: '부분 범위가 지정되고 회전 도면이 없으면 → 진단 후보(TRUE). 회전 도면이 있으면 → 조건 미충족(FALSE).',
      },
    },
  },

  method: {
    title: '연구 방법',
    lead: '이 연구가 결과를 어떻게 검증하려 하는지 — 데이터 집합, 누수 방지, 비교 실험, 평가지표, UNKNOWN의 의미.',
    goldTitle: 'Gold Set',
    goldText:
      '사람 전문가가 정답 판정과 근거 위치를 함께 기록한 평가용 사건 집합입니다. 진단 정확도뿐 아니라 근거 연결이 맞는지도 채점합니다.',
    challengeTitle: 'Challenge Set',
    challengeText:
      'Gold Set과 분리된, 잘 알려진 어려운 유형(문서 누락, 버전 불일치, 반례 존재)을 모은 집합입니다. 일반 성능과 어려운 사건 성능을 따로 봅니다.',
    leakageTitle: '데이터 누수 방지',
    leakage: {
      l1: 'Gold/Challenge Set은 모델 학습·프롬프트 작성 데이터와 완전히 분리합니다.',
      l2: '평가 중에는 Rule·Prompt·Model 버전을 고정하고, 평가 완료 전에 변경하지 않습니다.',
      l3: '독립 블라인드 평가: 평가자는 어떤 시스템의 출력인지 모르고 판정합니다.',
      l4: 'Shadow Mode로 실제 운영 흐름에 병행해 결과를 사람 판정과 비교하고, 운영에 개입하기 전에 지표를 확인합니다.',
    },
    compareTitle: '비교 실험 설계',
    compareText:
      '규칙만 사용한 기준선, LLM 단독, 제안 구조(LLM 구조화 + 규칙 평가 + 사람 검토)를 같은 사건 집합에서 비교합니다. 같은 집합, 같은 지표, 같은 버전 고정이 비교의 전제입니다.',
    metricsTitle: '평가지표',
    metrics: {
      findingPrecision: '진단 후보 정밀도 — 제시된 후보 중 사람이 확인한 비율',
      findingRecall: '진단 후보 재현율 — 실제 결함 중 후보로 제시된 비율',
      f1: '정밀도·재현율의 조화평균',
      criticalMiss: '중대결함 미탐 — 놓치면 안 되는 결함을 놓친 건수',
      unknownRate: 'UNKNOWN 비율 — 판단 보류가 얼마나 자주 일어나는가',
      evidenceHit: '근거 위치 확인률 — Fact의 원문 위치가 실제로 맞는 비율',
    },
    unknownTitle: 'UNKNOWN의 의미',
    unknownText:
      'UNKNOWN은 실패가 아니라 ‘판단하지 않음’입니다. 자료가 없는데 FALSE(문제 없음)로 처리하면 결함을 놓치고, TRUE(결함)로 처리하면 근거 없는 지적이 됩니다. 시스템은 무엇이 부족한지, 왜 필요한지, 어디에서 구할 수 있는지를 화면으로 알려줍니다.',
    unknownTable: {
      colStatus: '상태',
      colMeaning: '의미',
      colAction: '다음 행동',
      true: '모의 결함 조건이 필요한 근거와 함께 충족됨',
      trueAction: '사람에게 진단 후보로 제시',
      false: '필요한 사실을 확인했으나 결함 조건 미충족',
      falseAction: '검토 기록 또는 다음 Rule',
      unknown: '판단에 필요한 문서·Fact가 없거나 모호함',
      unknownAction: '부족한 자료 요청·추출 검토',
      na: '해당 사건 또는 절차에 이 Rule을 적용하지 않음',
      naAction: '적용 가능 규칙만 보기',
    },
  },

  evaluation: {
    title: '평가 시뮬레이터',
    lead: '모의 사례 집합에서 가정값을 바꾸면 성능과 인적 검토량이 어떻게 달라지는지 확인합니다.',
    simulatedNote:
      '이 화면의 숫자는 가상 데이터에 의한 예시이며 실제 연구 성과가 아닙니다. 표본 수와 수식, 분모를 열어 볼 수 있습니다.',
    inputsTitle: '가정값',
    inputs: {
      missingRate: '문서 누락률',
      missingRateHint: '사건에 필요한 문서가 빠져 있을 확률 (0~40%)',
      extractionAcc: '사실 추출 정확도',
      extractionAccHint: 'Fact 추출이 정답과 일치할 확률 (70~100%)',
      reviewerRate: '검토자 확인 비율',
      reviewerRateHint: '진단 후보를 검토자가 실제로 확인하는 비율 (0~100%)',
      threshold: '후보 검색 임계값',
      thresholdHint: '이 점수 이상의 후보만 사람에게 제시 (0.1~0.9)',
    },
    outputsTitle: '재계산 결과',
    sampleTitle: '모의 표본 일부 (상위 10건)',
    sampleNote: '전체 {n}건에서 집계합니다. 표는 첫 10건입니다.',
    sampleCols: {
      caseNo: '사례 #',
      defect: '정답 결함',
      missing: '문서 누락',
      extract: '추출 정확',
      score: '후보 점수',
      proposed: '제시',
      confirmed: '사람 확인',
    },
    defectTypes: { none: '없음', minor: '경미', critical: '중대' },
    yes: '예',
    no: '아니오',
    outputs: {
      precision: '후보 정밀도',
      recall: '후보 재현율',
      f1: 'F1',
      criticalMiss: '중대결함 미탐',
      unknownRate: 'UNKNOWN 비율',
      evidenceHit: '근거 위치 확인률',
      reviewVolume: '검토 예상 건수',
    },
    formulasTitle: '수식과 분모',
    formulasIntro: '모의 표본 {n}건, 결함 존재 {defects}건이 분모입니다.',
    formulaPrecision: '정밀도 = 사람이 확인한 후보 ÷ 제시된 후보 전체',
    formulaRecall: '재현율 = 후보로 제시된 결함 ÷ 결함 전체',
    formulaF1: 'F1 = 2 × (정밀도 × 재현율) ÷ (정밀도 + 재현율)',
    thresholdTitle: '임계값을 올리면',
    thresholdText:
      '임계값이 높아지면 제시되는 후보가 줄어 정밀도는 오르지만, 낮은 점수의 결함이 미탐으로 남을 수 있습니다. 반대로 낮추면 재현율은 오르지만 검토 건수가 늘어납니다. 이 상충을 보는 것이 이 화면의 목적입니다.',
    goalsTitle: '보고서의 권고 목표',
    goalsNote:
      '다음은 보고서에 제시된 권고 목표입니다. 이 사이트의 모의 그래프는 이미 달성한 실측값이 아닙니다.',
    goals: {
      g1: '근거 연결 100% — 모든 Fact에 원문 위치',
      g2: '허위인용 0건 — 존재하지 않는 근거 금지',
      g3: '중요 품질결함 Recall 장기목표 ≥ 95%',
    },
    resetInputs: '가정값 초기화',
  },

  governance: {
    title: '신뢰와 책임',
    lead: '자료 등급에 따른 모델 경로 정책, 진단 경로의 재현성, 승인 경계. 이 화면은 실제 네트워크 요청을 보내지 않습니다.',
    gradesTitle: '가상 자료 등급 정책 매트릭스',
    gradesIntro: '등급을 선택하면 허용되는 모의 모델 경로가 달라집니다.',
    grades: {
      PUBLIC: { name: '공개', desc: '공개된 문헌·통계·법령' },
      UNPUBLISHED: { name: '비공개', desc: '비공개 출원·심사 자료' },
      RESTRICTED: { name: '제한', desc: '기밀·미공개 사건 자료' },
    },
    modelPaths: {
      onPrem: '내부 온프레미스 모델',
      domesticCloud: '국내 클라우드 (SLA)',
      publicCloud: '공공 전용 클라우드',
      overseasApi: '해외 상용 API',
      openModel: '공개 모델',
    },
    allowed: '허용',
    conditional: '조건부',
    forbidden: '금지',
    matrixNote: '위 매트릭스는 가상의 예시 정책이며 실제 기관의 정책이 아닙니다.',
    snapshotTitle: '사건 스냅샷 예시',
    snapshotIntro: '취득시각, 원문 해시, 버전, 사람의 검토 이력을 함께 남기면 같은 입력·버전에서 어떤 진단 경로가 재현되는지 확인할 수 있습니다.',
    snapshot: {
      acquiredAt: '취득시각',
      acquiredAtVal: '2026-08-10 09:41 (모의)',
      docHash: '원문 해시',
      docHashVal: 'sha256:9f2c…e7a1 (예시 문자열 — 실제 기밀 사건의 원문이 아닙니다)',
      factVersion: 'Fact 버전',
      factVersionVal: 'facts-v2.4.1',
      ruleVersion: 'Rule 버전',
      ruleVersionVal: 'PEQ-IS-014 v1.0.0',
      promptVersion: 'Prompt·Model 버전',
      promptVersionVal: 'prompt-v14 · model-2026-08 (모의)',
      reviewHistory: '사람 검토 이력',
      reviewHistoryVal: '2026-08-10 보류(근거 보완) → 2026-08-12 확인 (모의)',
    },
    reproducibilityTitle: '재현 단계',
    reproducibility: {
      r1: '같은 사건 스냅샷(원문 해시 동일)을 불러온다.',
      r2: '같은 버전의 추출기로 Fact를 다시 추출한다.',
      r3: '같은 Rule·Prompt·Model 버전으로 평가한다.',
      r4: '생성된 진단 경로(Trace)를 이전 기록과 대조한다.',
    },
    approvalTitle: '승인 경계',
    approval: {
      a1: '자료 등급과 절차 단계에 따라 모델 경로가 제한됩니다.',
      a2: '규칙이 만드는 진단 후보는 사람의 검토 없이 사건에 반영되지 않습니다.',
      a3: '규칙 변경은 버전과 시행일을 갖고, 이전 버전의 판단 기록을 바꾸지 않습니다.',
      a4: 'LLM이 관여하는 좁은 조건(L3)은 근거 위치와 함께 제시되고, 근거가 없으면 UNKNOWN입니다.',
    },
    limitationTitle: '연구의 한계',
    limitationText:
      '이 전시의 정책 매트릭스와 스냅샷은 설계 예시입니다. 실제 운영 시스템의 보안 정책, 감사 기준, 개인정보 처리는 별도의 공식 절차로 정해져야 하며, 이 사이트가 그 절차를 대신하지 않습니다.',
  },

  roadmap: {
    title: '구축 시나리오',
    lead: '보고서의 Low/Medium/High 기획 추정과 단계별 산출물, 전환 조건입니다.',
    estimateNote:
      'Low 9~12개월·8~12 FTE·8~12억 원, Medium 18~24개월·20~30 FTE·28~45억 원, High 30~36개월·45~70 FTE·80~130억 원은 정책 검토용 기획 추정이며, 확정 사업비나 견적이 아닙니다.',
    colScenario: '시나리오',
    colDuration: '기간',
    colFte: '투입 (FTE)',
    colBudget: '예산 추정',
    colFocus: '초점',
    scenarios: {
      low: {
        name: 'Low',
        focus: '특허·실용 MVP — 자료 연결과 규칙 엔진 검증에 집중',
      },
      medium: {
        name: 'Medium',
        focus: '상표·디자인 확장, Gold·Shadow 평가, 거버넌스 체계',
      },
      high: {
        name: 'High',
        focus: '전 권리 운영·감사, 규칙 자동 개선 파이프라인까지',
      },
    },
    phasesTitle: '단계별 산출물과 전환 조건',
    phases: {
      p1: {
        title: '자료 연결',
        output: '사건 문서 목록, 취득 계획, 원문 해시·버전 기록',
        gate: '필요 문서의 100% 취득 확인 절차 완료',
      },
      p2: {
        title: '특허 MVP',
        output: 'Fact 추출기, 규칙 엔진, UNKNOWN 처리, 사람 검토 UI',
        gate: 'Gold Set에서 목표 지표 달성 + 보안 검토 통과',
      },
      p3: {
        title: 'Gold·Shadow 검증',
        output: 'Gold/Challenge Set 평가 보고서, Shadow Mode 병행 운영',
        gate: 'Shadow Mode 지표가 사람 판정 대비 목표에 도달',
      },
      p4: {
        title: '상표·디자인 확장',
        output: '문자·발음·이미지 축, 부분디자인 범위 대조',
        gate: '권리별 Gold Set 지표 달성 + 자료 등급 정책 적용',
      },
      p5: {
        title: '운영·감사',
        output: '운영 매뉴얼, 감사 추적, 규칙 버전 관리 체계',
        gate: '정기 감사와 환류 루프가 문서화되어 운영됨',
      },
    },
    gateNote: '각 게이트는 다음 단계로 가기 위한 품질·보안 조건이며, 미달 시 이전 단계로 돌아갑니다.',
    caipexContext: 'CAIPEX 지원 맥락: 연구·검증 단계의 학술 지원과 전문가 협업이 구축 시나리오의 전제입니다.',
  },

  sources: {
    title: '자료와 용어',
    lead: '기준 보고서, 원문 출처, 한·영·일 용어집, 그리고 연구·시연·운영의 구분.',
    reportTitle: '기준 연구보고서',
    report: {
      title: '「생성형 AI 기반 지식재산 심사품질 진단 고도화 연구·구축안」',
      meta: '사용자 제공 편집본 · 2026년 9월',
      status: '자료 준비 중',
      statusText: '공개용 파일 링크가 준비되면 이곳에 연결됩니다. 현재는 깨진 링크를 두지 않습니다.',
    },
    linksTitle: '원문 출처와 관련 사이트',
    links: {
      peq: { label: 'PEQ Rule Engine 체험 사이트', note: '개별 규칙 엔진을 탐색하는 관련 사이트' },
      caipex: { label: 'CAIPEX 학회 사이트', note: '연구 지원 학회' },
      reportLink: { label: '연구보고서 원문 (준비 중)', note: '편집본 제공 시 연결' },
    },
    glossaryTitle: '용어집',
    glossaryNote: '보고서의 주요 개념을 한·영·일로 대응시킵니다. 시나리오 데이터의 Rule ID와 판정 상태 코드는 번역하지 않습니다.',
    colTerm: '용어',
    colKo: '한국어',
    colEn: 'English',
    colJa: '日本語',
    glossary: {
      evidenceTrace: {
        term: 'Evidence Trace',
        ko: '진단 경로 — 판정에 사용된 근거·규칙·사람 판단의 연결 기록',
        en: 'The linked record of evidence, rules, and human decisions behind a finding',
        ja: '判断に使われた根拠・ルール・人の判断の連鎖記録',
      },
      factDependencyGraph: {
        term: 'Fact Dependency Graph',
        ko: '사실 의존 그래프 — Fact 간 의존 관계 구조',
        en: 'A graph of dependencies among extracted facts',
        ja: '抽出された事実どうしの依存関係グラフ',
      },
      canonicalPackage: {
        term: 'Canonical IP Case Package',
        ko: '표준 사건 패키지 — 심사에 필요한 문서를 정리한 표준 묶음',
        en: 'A standardized bundle of documents needed for examination',
        ja: '審査に必要な書類を整理した標準パッケージ',
      },
      goldSet: {
        term: 'Gold Set',
        ko: '정답 판정·근거 위치가 기록된 평가용 사건 집합',
        en: 'A labeled evaluation set with gold decisions and evidence locations',
        ja: '正解判断と根拠位置が記録された評価用事例集合',
      },
      shadowMode: {
        term: 'Shadow Mode',
        ko: '실제 흐름에 병행해 결과를 비교만 하는 운영 방식',
        en: 'Running in parallel with live operations, comparing without intervening',
        ja: '本番と並行して結果を比較のみ行う運用方式',
      },
      ruleEvolution: {
        term: 'Rule Evolution',
        ko: '규칙 진화 — 검토 결과가 다음 규칙 버전으로 이어지는 과정',
        en: 'The process by which review outcomes lead to new rule versions',
        ja: 'レビュー結果が次のルール版につながる過程',
      },
      unknown: {
        term: 'UNKNOWN',
        ko: '판단 보류 — 필요한 자료·Fact가 없거나 모호함',
        en: 'Deferred judgment — required material or facts are missing or ambiguous',
        ja: '判断保留 — 必要な資料・事実がない、または曖昧',
      },
      diagnosticCandidate: {
        term: '진단 후보',
        ko: '규칙이 제시한 검토 대상. 결론이 아님',
        en: 'A finding proposed by rules for human review — not a conclusion',
        ja: 'ルールが提示するレビュー対象。結論ではない',
      },
      neuroSymbolic: {
        term: 'Neuro-symbolic',
        ko: '신경망(생성형 AI)과 명시적 규칙·기호 추론의 결합 설계',
        en: 'Combining neural (generative AI) with explicit symbolic rules',
        ja: '生成AIと明示的ルール・記号推論を組み合わせる設計',
      },
      verdictStatuses: {
        term: '판정 상태',
        ko: 'TRUE / FALSE / UNKNOWN / NOT_APPLICABLE',
        en: 'TRUE / FALSE / UNKNOWN / NOT_APPLICABLE',
        ja: 'TRUE / FALSE / UNKNOWN / NOT_APPLICABLE',
      },
    },
    distinctionTitle: '연구·시연·운영의 구분',
    distinction: {
      colKind: '구분',
      colMeaning: '이 사이트에서의 의미',
      research: { kind: '연구', meaning: '가설, 설계, 평가 지표, 권고 목표 — 보고서 기준' },
      demo: { kind: '시연', meaning: '가상 사건, 모의 데이터, 브라우저 안의 결정적 계산' },
      operations: { kind: '운영', meaning: '실제 사건, 실측 성능, 공식 품질판정 — 이 사이트의 범위 밖' },
    },
    versionTitle: '버전 정보',
    version: {
      site: '사이트 버전',
      siteVal: '1.0.0 (정적 체험 전시)',
      data: '가상 사례 데이터',
      dataVal: 'PAT-014-DEMO · PAT-AMD-DEMO · TM-SEARCH-DEMO · DSG-PARTIAL-DEMO (모의)',
      stack: '구현',
      stackVal: 'Vite + React + TypeScript 정적 빌드, 외부 API·로그인 없음',
    },
  },

  chip: {
    title: '진행 중인 체험',
    caseLabel: '사례',
    verdictLabel: '판정',
    stepLabel: '단계',
    resume: '이어하기',
    restart: '처음부터',
    dismiss: '표시 숨기기',
  },

  notFound: {
    title: '페이지를 찾을 수 없습니다',
    text: '주소가 바뀌었거나 잘못된 경로입니다. 홈으로 돌아가세요.',
    goHome: '홈으로',
  },

  a11y: {
    logoAlt: '심사품질 연구 전시 로고',
    caipexLogoAlt: 'CAIPEX 로고',
    themeToggleAria: '테마 전환',
    langSelectAria: '언어 선택',
    flowchartAlt: '사건 자료에서 사람의 판단까지 이어지는 데이터 흐름',
    imageSlotAlt: '연구 장면 일러스트레이션',
  },

  /* ── 규칙 메타 ── */
  rules: {
    peqis014: {
      title: '종속항 추가구성 대비 누락 검토',
      authority: '가상 규칙 — 보고서의 PEQ-IS-014 예시를 교육용으로 재구성',
      changelog: {
        '1.0.0': 'v1.0.0 (2025-03-01 시행): 청구항 2, D1 대응, C 대비, 통지서 완전성 확인',
        '1.1.0': 'v1.1.0 (2026-09-01 시행): 청구항 1 확인 요구 추가',
      },
    },
    peqis021: {
      title: '보정 후 청구항 재대비 검토',
      authority: '가상 규칙 — 보정 시점과 대비 대상을 검토하는 예시',
      changelog: { '1.0.0': 'v1.0.0 (2026-06-01 시행): 보정 후 재대비 검토 규칙 도입' },
    },
    tmstr: {
      title: '문자열 축 검토 후보',
      authority: '가상 규칙 — 문자열 검색 축',
      changelog: { '1.0.0': 'v1.0.0: 문자열 축 후보 생성' },
    },
    tmphn: {
      title: '발음 축 검토 후보',
      authority: '가상 규칙 — 발음 검색 축',
      changelog: { '1.0.0': 'v1.0.0: 발음 축 후보 생성' },
    },
    tmimg: {
      title: '이미지 축 검토 후보',
      authority: '가상 규칙 — 이미지 검색 축',
      changelog: { '1.0.0': 'v1.0.0: 이미지 축 후보 생성' },
    },
    dsgif: {
      title: '부분디자인 회전 도면 대조',
      authority: '가상 규칙 — 부분디자인 범위와 도면 대조',
      changelog: { '1.0.0': 'v1.0.0: 부분 범위·회전 도면 대조' },
    },
  },
}

export type KoDict = typeof ko
