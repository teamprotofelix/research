/**
 * 日本語辞書 — ko.ts と同じキー構造（テストで検証）。
 * 機械的な漢字置換ではなく、初級の訪問者にもわかる短く自然な文で書く。
 */
export const ja = {
  meta: {
    title: '根拠からたどる審査品質の未来 · AI審査品質高度化研究',
    siteName: 'AI審査品質高度化研究',
  },

  common: {
    brand: '審査品質リサーチ展',
    brandSub: 'Evidence-led examination quality',
    demoBadge: '研究用の架空事例',
    simulatedBadge: '模擬データ',
    simulatedRun: '模擬実行',
    researchDemoFinding: '研究用の診断候補',
    finalByHuman: '最終判断は人が行います',
    learnMore: '詳しく見る',
    startOver: '最初から',
    reset: 'リセット',
    share: '共有',
    copyLink: 'リンクをコピー',
    copied: 'コピーしました',
    add: '追加',
    exclude: '除外',
    close: '閉じる',
    open: '開く',
    viewSource: '原文を見る',
    backToRule: 'ルールに戻る',
    allSteps: 'すべての手順',
    optional: '任意',
    fictionalNote: 'この画面の事件・書類・数値はすべて架空の教育用データです。',
    notLegalConclusion: '法的結論や公式な拒絶理由ではありません。',
    print: '印刷',
    skipToContent: '本文へスキップ',
  },

  nav: {
    groups: {
      intro: {
        label: '研究紹介',
        items: {
          research: { label: '研究概要', sub: '問題・仮説・アーキテクチャ' },
        },
      },
      experience: {
        label: '体験する',
        items: {
          experience: { label: '未来の一日', sub: '3分の案内ストーリー' },
          lab: { label: '事件ラボ', sub: '中心となる体験' },
        },
      },
      cases: {
        label: '事例',
        items: {
          cases: { label: '権利別の事例', sub: '特許・商標・意匠の比較' },
        },
      },
      evaluate: {
        label: '評価と方法',
        items: {
          method: { label: '研究の方法', sub: 'Gold・Challenge・漏えい防止' },
          evaluation: { label: '評価シミュレーター', sub: '仮定値から再計算' },
        },
      },
      trust: {
        label: '信頼と構築',
        items: {
          governance: { label: '信頼と責任', sub: 'データ等級・再現性' },
          roadmap: { label: '構築シナリオ', sub: '段階別ロードマップ' },
        },
      },
      sources: {
        label: '資料',
        items: {
          sources: { label: '資料と用語', sub: '出典・用語集・区分' },
        },
      },
    },
    menu: 'メニュー',
    closeMenu: 'メニューを閉じる',
  },

  footer: {
    caipexSupportTitle: 'CAIPEX学会の支援を受ける研究',
    caipexSupportText:
      '本サイトはCAIPEX（Collegium of AI-Driven IP Examination Excellence）の支援を受ける研究のインタラクティブ展示です。CAIPEXの公式発表や特許庁の公式運用サイトではありません。',
    visitCaipex: 'CAIPEXサイトへ',
    quickLinks: 'クイックリンク',
    related: '関連サイト',
    peqRuleSite: 'PEQルールエンジン体験サイト',
    report: '基準となる研究報告書',
    disclaimerTitle: '読み方',
    disclaimer:
      'すべての事件・書類・数値は研究用の架空・模擬データです。法的に確定した評価や実際の機関の政策として解釈しないでください。',
    copyright: '本サイトの架空事例データと画面は研究デモ用に制作されました。',
  },

  themes: {
    label: 'テーマ',
    system: 'システム',
    light: 'ライト',
    dark: 'ダーク',
    current: '現在 {mode}',
    systemCurrent: 'システム · 現在 {mode}',
    systemFollowing: 'システム設定に従います',
  },

  langs: {
    label: '言語',
    ko: '한국어',
    en: 'English',
    ja: '日本語',
  },

  home: {
    kicker: 'CAIPEX支援研究 · インタラクティブ研究展示',
    title: '根拠からたどる審査品質の未来',
    lead: '事件資料を集め、根拠のある事実を抽出し、規則が必要な条件を評価し、足りない情報はUNKNOWNとして残し、人が最終的に確認し、その結果で規則と評価の仕組みを改善する。この研究が提案する流れを、8〜12分の架空事例で体験してください。',
    ctaExperience: '架空の案件を体験する',
    ctaResearch: '研究概要を見る',
    heroImgAlt: '事件資料と根拠がつながる研究の場面',
    questionLabel: '研究の問い',
    question: '審査品質はなぜ、根拠と人の確認で診断すべきなのか？',
    questionAnswer:
      'AIは結論を代わりに出しません。根拠を整理して足りない資料を知らせ、規則が再現可能な診断候補を作り、最終判断と改善の流れは人が担います。',
    overviewTitle: '90秒の概要',
    overviewIntro: 'この研究をひと続きの物語にしたものです。各ステップを押して確認してください。',
    overview: {
      collect: {
        title: '1. 事件資料を集める',
        text: '請求範囲・引用文献・通知書など、必要な書類の一覧を確認し、足りない資料を見つけます。',
      },
      extract: {
        title: '2. 根拠のある事実だけを抽出する',
        text: 'すべてのFactに原文の位置が記録されます。根拠がなければFactではありません。',
      },
      evaluate: {
        title: '3. 明示的な規則が条件を評価する',
        text: '規則は版と基準日を持ちます。同じ入力なら同じ結果が再現されます。',
      },
      unknown: {
        title: '4. 足りない情報はUNKNOWNとして残す',
        text: '資料がなければ推測しません。何が足りず、なぜ必要なのかを画面が示します。',
      },
      review: {
        title: '5. 人が確認・保留・棄却する',
        text: 'TRUEも結論ではなく、人の確認を待つ研究用の診断候補です。',
      },
      improve: {
        title: '6. 確認結果が規則を改善する',
        text: '人の判断の記録が、次の規則版と評価の仕組みの入力になります。',
      },
    },
    flowTitle: '中心となる流れ',
    flow: {
      d1: '事件資料',
      d2: '根拠つきFact',
      d3: '明示的なRule',
      d4: 'UNKNOWN / 診断候補',
      d5: '人の確認・改善',
    },
    flowCaption: '研究が提案する診断の流れ — UNKNOWNと人の確認は、例外ではなく流れの一部です。',
    casePreviewTitle: '代表事例のプレビュー',
    casePreviewText:
      '従属項の追加構成の対比漏れの可能性（架空の特許事件）: 通知書がなければUNKNOWN、サンプル通知書を追加すれば診断候補、反例の通知書に替えれば条件不充足。3つの状態を直接比べられます。',
    casePreviewCta: 'ラボで開く',
    supportTitle: '研究支援',
    supportText:
      'この研究はCAIPEX学会の支援を受けます。本サイトは研究の仮説と設計を説明する展示であり、CAIPEXの公式発表チャンネルではありません。',
    existingSiteTitle: '既存の体験サイトとの関係',
    existingSiteText:
      'PEQルールエンジン体験サイトは、個々のルールエンジンを詳しく探る関連サイトです。本サイトは規則実行画面を複製せず、研究の問い・証拠の取得・資料不足・人の判断をつなぐ物語を提供します。',
    goPeq: 'PEQルールエンジンを見る',
    forWhomTitle: '誰のための展示か',
    forWhom: {
      examiner: {
        title: '審査官・診断官',
        text: 'AIは根拠を整理し、足りない資料を知らせます。事件の根拠・不確かさ・確認ポイントをたどります。',
      },
      researcher: {
        title: '研究者・学会員',
        text: 'Neuro-symbolic設計の研究の問いと評価設計。仮説・資料・指標・限界を分けて見ます。',
      },
      policy: {
        title: '政策・事業担当者',
        text: '段階的構築の条件と投資のポイント。品質・セキュリティ・人の確認・予算のつながりを理解します。',
      },
      visitor: {
        title: '一般の訪問者・海外の協力者',
        text: '審査品質管理の未来の姿を、韓・英・日の案内で短く体験します。',
      },
    },
    startNote: '体験はオフラインデータだけで動き、サーバーやログインは不要です。',
  },

  researchPage: {
    title: '研究概要',
    lead: '問題、仮説、全体アーキテクチャ、権利別の拡張。この展示の他のページはすべて、この構造の上で動きます。',
    problemTitle: '問題 — 審査品質の診断が難しい理由',
    problem: {
      p1: '必要な事件資料が欠けていたり、書類の版が合わないと、判断そのものができません。',
      p2: '判断の根拠となる箇所を人がひとつずつ探して結びつける作業は時間がかかり、再現も困難です。',
      p3: 'AIが結論のような文を出すと、根拠と限界がわからず信頼できません。',
    },
    hypothesisTitle: '研究の仮説',
    hypothesisText:
      '生成AIが事件資料を読んで構造化し、判断の骨格は明示的な規則が作り、足りない資料はUNKNOWNとして残し、人の確認結果が規則を改善する流れなら、審査品質診断の正確さ・再現性・説明可能性を同時に高められる。',
    neuroSymbolicTitle: 'Neuro-symbolic設計',
    neuroSymbolic: {
      generative: {
        title: '生成AIが読み、構造化する',
        text: '書類から事実（Fact）と根拠の位置を抽出します。抽出結果には必ず原文の位置が付きます。',
      },
      rules: {
        title: '規則が再現可能な候補を作る',
        text: '抽出されたFactを明示的なRuleで評価します。同じ入力・版なら同じ診断経路が再現されます。',
      },
      human: {
        title: '人が最終判断し、改善につなげる',
        text: '診断候補は結論ではありません。確認・保留・棄却の記録が次の規則版の入力になります。',
      },
    },
    layersTitle: '全体構造 — 5層のデータフロー',
    layersIntro: '層を選ぶと、必要な入力・産出物・失敗時の状態・責任主体が切り替わります。',
    inputLabel: "必要な入力",
    outputLabel: "産出物",
    failureLabel: "失敗時の状態",
    ownerLabel: "責任主体",
    layers: {
      materials: {
        name: '1 · 事件資料',
        input: '事件書類一覧、引用文献、手続き記録',
        output: '欠落・不完全な書類が示された資料状況',
        failure: '必要な書類なし → 以降の判断はUNKNOWN',
        owner: '受付・資料登録担当',
      },
      plan: {
        name: '2 · 検索・取得計画',
        input: '権利種別、手続き段階、必要な書類種別',
        output: '権利別・手続き別の収集計画と候補書類一覧',
        failure: '計画の欠落 → 根拠のない推測の危険',
        owner: 'システム + 審査官の確認',
      },
      facts: {
        name: '3 · 根拠つきFact',
        input: '書類の原文と抽出結果',
        output: '原文位置が結びついたFact一覧',
        failure: '根拠位置なし → Fact未確定',
        owner: '抽出器 + レビュー担当',
      },
      rules: {
        name: '4 · 明示的なRule',
        input: 'Fact、Rule版、事件基準日',
        output: 'TRUE / FALSE / UNKNOWN / NOT_APPLICABLE',
        failure: '事実不足 → UNKNOWN（推測禁止）',
        owner: '規則管理者（版・施行日）',
      },
      human: {
        name: '5 · 人の判断・評価',
        input: '診断候補、根拠トレース、反例の確認',
        output: '確認・保留・棄却と理由、改善記録',
        failure: '確認の欠落 → 評価指標の歪み',
        owner: '審査官・診断官',
      },
    },
    hierarchyTitle: '階層構造 — L0からL4まで',
    hierarchyIntro: '研究報告書の階層構造です。各層の役割と残る誤りを一文で示します。',
    hierarchy: {
      l0: {
        name: 'L0 · 形式検査',
        role: '書類の存在、形式、欠落ページ、基準日の表記などの機械的な確認。',
        residual: '残る誤り: 内容の正誤は判断できません。',
      },
      l1: {
        name: 'L1 · 明示的Rule',
        role: '抽出されたFactを明示的な規則で評価し、再現可能な候補を作ります。',
        residual: '残る誤り: 規則にない例外を見落とします。',
      },
      l2: {
        name: 'L2 · 関係推論',
        role: 'Factどうしの依存関係と引用・対比の構造を結びつけます。',
        residual: '残る誤り: 関係を誤って結ぶと偽の根拠になります。',
      },
      l3: {
        name: 'L3 · 限定的なLLM Predicate',
        role: '自然言語の判断が必要な狭い条件だけを、LLMが根拠とともに提案します。',
        residual: '残る誤り: 幻覚の可能性 — 必ず根拠位置とともに確認します。',
      },
      l4: {
        name: 'L4 · 人の最終判断',
        role: '診断候補を確認・保留・棄却し、理由を記録します。',
        residual: '残る誤り: 人の負担と偏り — 評価と改善で管理します。',
      },
    },
    separationTitle: '2つの経路の分離',
    separationText:
      '「生成AIが読み、構造化する経路」と「規則が再現可能な候補を作る経路」を分離します。LLMの出力が規則の入力に直接入ることはなく、根拠つきFactを経由します。',
    rightsTitle: '権利別の拡張',
    rights: {
      patent: {
        title: '特許・実用新案',
        text: '請求項の構成対比、補正前後の時点、引用文献マッピング。基準日と書類の版が診断に直接影響します。',
      },
      trademark: {
        title: '商標',
        text: '文字・発音・画像の検索軸がそれぞれ別の証拠を作ります。類似度スコアは法的類似判断として示しません。',
      },
      design: {
        title: '意匠',
        text: '全体・部分・回転図面の保護範囲対比。候補結果だけを示し、最終判断は人に残します。',
      },
    },
    reportLinkTitle: '基準となる研究報告書',
    reportLinkText: '「生成AI基盤の知的財産審査品質診断高度化 研究・構築案」（編集版、2026年9月）。',
  },

  experience: {
    title: '未来の一日',
    lead: '研究の仮定に基づく未来のデモです。同じ架空の事件を、審査官・診断官・研究者の視点でたどります。',
    assumptionBadge: '研究の仮定に基づく未来デモ',
    roleLabel: '役割を選ぶ',
    roles: {
      examiner: { title: '審査官', subtitle: 'どの資料が足りないか', blurb: '事件を受け付け、必要な資料がそろっているか確認する時点から見ます。' },
      reviewer: { title: '診断官', subtitle: '診断候補の根拠と反例は何か', blurb: '診断候補を根拠トレースと反例の確認で見る時点から見ます。' },
      researcher: { title: '研究者', subtitle: '誤りの型をどう評価するか', blurb: '確認記録で規則と評価の仕組みを改善する時点から見ます。' },
    },
    modeQuick: '3分ツアー',
    modeDetail: '詳しく見る',
    scenes: {
      intake: {
        title: '事件の受付',
        examiner: '出願事件が届き、請求範囲と引用文献一覧が登録されます。画面は「この事件に必要な書類」と「現在そろっている書類」を並べて示します。審査官は通知書本文が欠けていることに気づきます。',
        reviewer: '事件が診断待ちに入ります。診断官は事件番号より先に、書類の完全性を見ます。',
        researcher: '書類ごとに取得時刻と完全性が記録されます。この記録が後でGold Setの一部になります。',
      },
      acquire: {
        title: '資料の取得',
        examiner: '欠けていた通知書本文を入手して追加します。全ページがそろっているかが自動で表示されます。',
        reviewer: '資料が追加されると、新たに抽出できるFactの状態が更新されます。',
        researcher: '取得から抽出までの版の履歴が残ります。いつ、どの書類で判断したか再現できます。',
      },
      diagnose: {
        title: '診断',
        examiner: '従属項の追加構成Cへの対比が通知書にないという診断候補が、規則によって提示されます。結論ではなく確認対象です。',
        reviewer: '診断候補と結びついた根拠の箇所、適用された規則の版を広げて見ます。反例の書類があるかも確認します。',
        researcher: '候補がTRUE/FALSE/UNKNOWNのどこに行き、どの段階で止まったかが評価データになります。',
      },
      review: {
        title: '確認',
        examiner: '確認・保留・棄却のいずれかを選び、理由を残します。この記録が事件の確認履歴に残ります。',
        reviewer: '根拠が足りなければ保留し、「追加資料の確認」に戻ります。棄却には反例の根拠を添えます。',
        researcher: '人の判断が正解データに加わります。どの誤りの型が多いか集計されます。',
      },
      feedback: {
        title: '改善',
        examiner: '確認結果が積み重なると次の規則版が変わり、明日の審査画面に反映されます。',
        reviewer: 'よく棄却される候補のパターンは規則改善の候補になります。診断官は改善された規則で次の事件を見ます。',
        researcher: 'Gold/Challenge Setの評価指標が更新され、規則版ごとの性能が比較されます。これが研究の最終成果につながります。',
      },
    },
    toLab: 'この流れをラボで直接試す',
    toLabCta: '事件ラボを開く',
    sceneDataNote: 'すべての場面は、ラボと同じオフラインのサンプルデータを共有します。',
  },

  lab: {
    title: '事件ラボ',
    lead: '架空の事件で書類を追加・除外し、UNKNOWNから診断候補と反例までを直接確認する中心となる体験です。',
    steps: {
      s1: { title: '事件の確認', sub: '架空事件と書類一覧' },
      s2: { title: '資料の取得', sub: '書類の追加・除外' },
      s3: { title: '事実の抽出', sub: 'Factと根拠位置' },
      s4: { title: '規則の評価', sub: '判定とトレース' },
      s5: { title: '確認・改善', sub: '人の選択の記録' },
    },
    colDocuments: '事件書類・タイムライン',
    colFacts: '取得計画とFact・根拠',
    colRules: 'Rule結果と人の確認',
    caseSelectLabel: '架空の事例',
    docStatus: {
      included: '含まれている',
      excluded: '除外中',
      complete: '書類は完全',
      incomplete: '書類は不完全',
      availableAtStart: '開始時点にあった書類',
      notAvailableAtStart: '開始時点になかった書類',
    },
    origin: {
      EXAMINER_CITED: '審査官が実際に引用した資料',
      AI_DISCOVERED: 'AIが新しく見つけた候補',
      CASE_DOCUMENT: '事件書類',
    },
    addSampleDoc: 'サンプル通知書を追加',
    counterButton: '反例の書類に切り替える',
    backToSample: 'サンプル通知書に戻す',
    neededDocButton: '必要な書類を確認',
    factStatus: {
      AVAILABLE: '抽出済み',
      MISSING: '抽出不可 — 書類なし',
      AMBIGUOUS: '曖昧 — 確認が必要',
    },
    factValueTrue: 'はい',
    factValueFalse: 'いいえ',
    factValueUnknown: '不明',
    evidenceLocation: '根拠の位置',
    noEvidence: '根拠の位置なし',
    explain: 'なぜ必要か',
    advancedPanel: '研究者用パネル',
    advancedHint: 'Factの値を編集すると診断がどう変わるか確認できます。ブラウザ内だけで動く手動編集です。',
    advancedEdit: '値を編集',
    advancedDone: '編集完了',
    ruleVersionLabel: 'Rule版',
    ruleVersionAuto: '自動（基準日による）',
    eventDateLabel: '事件基準日',
    eventDateUnknown: '不明',
    verdictReasons: {
      'mapping-found': '通知書に従属項の追加構成Cへの対比が確認できたため、欠陥条件は満たされません。',
      'mapping-missing': '請求項2に追加構成Cがあり、完全な通知書にCへの対比がないため、「従属項の追加構成Cへの対比漏れの確認候補」として提示します。',
      'document-incomplete': '通知書が不完全（最終ページ欠落）のため、Cへの対比の有無を確定できません。',
      'no-claim-change': '補正書が請求項の実質を変えていないため、再対比の条件は満たされません。',
      'recheck-candidate': '補正で請求項が実質的に変わり、通知書の対比が補正前の請求項基準のため、「補正後請求項の再対比の確認候補」として提示します。',
      'condition-unknown': '条件評価に必要な値が確定しませんでした。',
      'candidates-exist': 'この検索軸に確認候補があります。スコアは模擬の類似度で、法的類似判断ではありません。',
      'no-candidates': 'この検索軸に確認候補はありません。',
      'axis-not-searched': 'この検索軸がオフのため、結果はわかりません。',
      'whole-scope': '保護範囲が全体意匠のため、部分範囲の対比条件は満たされません。',
      'rotation-missing-candidate': '部分意匠の範囲が指定されているのに回転図面がないため、「回転図面欠落の確認候補」として提示します。',
      'all-views-present': '回転図面がすべてそろっているため、欠陥条件は満たされません。',
      'not-applicable-right': 'この規則はこの権利種別の事件には適用されません。',
      'right-type-mismatch': '権利種別が規則の適用対象外です。',
      'version-not-found': '指定された規則版が見つかりません。',
      'version-not-effective': '指定された規則版は、事件基準日時点ではまだ施行されていません。',
      'version-before-first-effective': '基準日以前に施行された規則版がありません。',
      'event-date-unclear': '事件基準日が不明のため、適用する規則版を決められません。',
      'required-facts-missing': '必要な書類がないため、判断を保留します。',
      'required-facts-ambiguous': '必要な書類が不完全、または値が曖昧なため、判断を保留します。',
      'evidence-location-missing': '必要な根拠位置が現在の書類選択にないため、判断を保留します。',
      ok: '通過',
    },
    unknownExplain: {
      title: '何が足りないか、なぜ必要か、どこで入手するか',
      what: '何が足りないか',
      why: 'なぜ必要か',
      where: 'どこで入手するか',
    },
    verdict: {
      TRUE: '診断候補',
      FALSE: '条件不充足',
      UNKNOWN: '判断保留',
      NOT_APPLICABLE: '適用対象外',
    },
    verdictShort: {
      TRUE: '候補',
      FALSE: '不充足',
      UNKNOWN: '保留',
      NOT_APPLICABLE: '対象外',
    },
    trace: {
      title: '診断経路 (Evidence Trace)',
      applicability: '適用可能性',
      version: '基準日・版',
      facts: '必要Factの検査',
      evidence: '根拠位置の確認',
      condition: '条件評価',
      pass: '通過',
      fail: '停止',
    },
    usedFacts: '使われたFact',
    missingFacts: '足りないFact',
    ambiguousFacts: '曖昧なFact',
    review: {
      title: '人の確認',
      hint: '診断候補は結論ではありません。確認意見を残すとフィードバック記録に反映されます。',
      confirm: '確認',
      defer: '保留',
      reject: '棄却',
      reasonLabel: '理由',
      reasons: {
        evidence: '根拠の補強が必要',
        incomplete: '書類が不完全',
        counter: '反例を確認',
        agree: '根拠は妥当',
        other: 'その他',
      },
      noteLabel: 'メモ（任意）',
      submit: '確認記録を残す',
      recorded: '確認記録をフィードバックに反映しました。',
      recordedAria: '確認記録を反映',
    },
    feedback: {
      title: 'フィードバック・評価',
      empty: 'まだ確認記録がありません。規則を評価した後、確認意見を残してみてください。',
      logTitle: 'このセッションの確認記録',
      verdict: '当時の判定',
      decision: '確認',
      decisions: { CONFIRMED: '確認', DEFERRED: '保留', REJECTED: '棄却' },
      howUsed: 'この記録はブラウザのセッション内だけのデモ用です。研究では同じ構造の記録が規則改善と評価指標の入力になります。',
      clear: '体験記録を削除',
      cleared: '体験記録を削除しました。',
    },
    shareTitle: 'この状態を共有',
    shareHint: '事例ID・書類選択・規則版のような列挙値だけがURLに入ります。入力したメモは共有されません。',
    mobileColumnSwitch: '列の切り替え',
    tabDocuments: '書類',
    tabFacts: 'Fact',
    tabRules: 'Rule',
    startCta: 'この事例で体験を始める',
  },

  cases: {
    title: '権利別の事例',
    lead: '特許・実用新案、商標、意匠の架空事例を比べ、各カードからラボのシナリオをすぐ開けます。',
    compareTitle: '事例の比較',
    compareNote: 'すべての事例は架空で、実際の出願ではありません。検索スコアはあらかじめ作った模擬データです。',
    colCase: '事例',
    colRight: '権利',
    colManipulation: '操作できるもの',
    colPoint: '研究のポイント',
    openInLab: 'ラボで開く',
    openInLabAria: '{case}をラボで開く',

    pat014: {
      title: '従属項の追加構成の対比漏れの可能性',
      blurb: '請求項2の追加構成Cへの審査官の対比が通知書にないか確認する架空の特許事件です。',
      summary1: '請求項1にはA+B、従属項2にはA+B+Cが記載されています。審査官が引用したD1にはA+Bの資料があります。',
      summary2: '開始時点では意見提出通知書の本文がなく、審査官の構成対比を確認できません。',
      summary3: 'サンプル通知書を追加するとCの対比の有無を判定でき、反例の通知書に替えると結果が変わります。',
      doc: {
        claims: '出願の請求範囲 (架空)',
        citations: '審査官の引用文献一覧 (架空)',
        oa: '意見提出通知書の本文 (架空)',
      },
      docVariants: {
        claims: { v1: '請求範囲 原本 v1' },
        citations: { v1: '引用文献一覧 v1' },
        oa: {
          v1: 'サンプル通知書A — Cへの対比なし (架空)',
          v2: 'サンプル通知書B(反例) — Cへの対比あり (架空)',
          v3: '一部の通知書 — 最終ページ欠落 (架空)',
        },
      },

      span: {
        c1: {
          text: '請求項1: [A]の記載と[B]の記載を含む装置。',
          loc: '請求範囲 1項',
        },
        c2: {
          text: '請求項2: 請求項1において、さらに[C]の記載を含む装置。',
          loc: '請求範囲 2項',
        },
        d1: {
          text: '引用文献D1は[A]の記載と[B]の記載の組合せを開示する。',
          loc: '引用文献一覧 — D1要旨',
        },
        oa1: {
          text: '引用文献D1には[A]の記載と[B]の記載が開示されているため、請求項1は進歩性が否定されます。',
          loc: '通知書 — 拒絶理由1',
        },
        oa1b: {
          text: '検討範囲: 請求項1〜2の記載について検討した。（請求項2の[C]の記載への対比は記載されていない）',
          loc: '通知書 — 検討範囲',
        },
        oa2: {
          text: '引用文献D1には[A]の記載と[B]の記載が開示されているため、請求項1は進歩性が否定されます。',
          loc: '通知書 — 拒絶理由1',
        },
        oa2b: {
          text: '請求項2の[C]の記載について: 引用文献D2には[C]の記載が開示されているため、請求項2も進歩性が否定されます。',
          loc: '通知書 — 拒絶理由2',
        },
        oa3: {
          text: '引用文献D1には[A]の記載と[B]の記載が開示されているため、請求項1は進歩性が否定されます。（以下省略 — 最終ページ欠落）',
          loc: '通知書 — 1ページ目(部分)',
        },
      },      f: {
        claim1: {
          label: '請求項1はA+Bを記載',
          explain: '規則v1.1.0は請求項1の確認を要求します。',
        },
        claim2: {
          label: '請求項2は追加構成Cを記載',
          explain: '対比漏れ確認の対象となる従属項の追加構成です。',
        },
        d1_ab: {
          label: 'D1にA+Bの対応記載あり',
          explain: '引用文献がA+Bを開示するという前提を確認します。',
        },
        map_c: {
          label: '通知書にCへの対比記載があるか',
          explain: 'この値がない(書類なし)場合は判断を保留し、「ない」ことが完全な通知書で確認されれば診断候補になります。',
        },
        oa_complete: {
          label: '通知書の全ページを確保',
          explain: '一部のページだけだとCへの対比が後ろにある可能性があり、判断できません。',
        },
      },
      rule: {
        condition: '従属項の追加構成Cがあり、完全な通知書にCへの対比がなければ → 診断候補(TRUE)。Cへの対比があれば → 条件不充足(FALSE)。',
      },
    },
    patAmd: {
      title: '補正前後の時点と対比対象の変更',
      blurb: '補正書で請求項が変わったとき、その後の通知書が補正前の請求項基準でしか対比していないか確認する架空の実用新案事件です。',
      summary1: '請求項2を実質的に変更する補正書が提出されました。',
      summary2: 'その後の通知書が補正前の請求項基準でしか対比していなければ、再対比の確認が必要です。',
      summary3: '基準日を変えると適用される規則版が変わり、基準日が不明なら判断を保留します。',
      doc: {
        claimsOrig: '補正前の請求範囲 (架空)',
        amendment: '補正書 (架空)',
        oa2: '補正後の意見提出通知書 (架空)',
      },
      docVariants: {
        claimsOrig: { v1: '補正前請求範囲 v1' },
        amendment: {
          v1: '補正書A — 請求項2の実質的変更 (架空)',
          v2: '補正書B(反例) — 誤記訂正のみ (架空)',
        },
        oa2: {
          v1: '通知書A — 補正前請求項基準の対比 (架空)',
          v2: '通知書B(反例) — 補正後請求項を含む対比 (架空)',
        },
      },

      span: {
        c1o: {
          text: '請求項1: [X]部材と[Y]部材を含む支持装置。',
          loc: '補正前請求範囲 1項',
        },
        c2o: {
          text: '請求項2: 請求項1において、[Z]部材をさらに含む支持装置。',
          loc: '補正前請求範囲 2項',
        },
        amd1: {
          text: '請求項2を「請求項1において、[Z]部材を削除し、[W]部材をさらに含む支持装置」に補正します。',
          loc: '補正書 — 請求項2の補正部',
        },
        amd2: {
          text: '請求項2の「[Z]部材」の表記を「[Z]部材」に訂正します。（実質的変更なし）',
          loc: '補正書 — 訂正部',
        },
        oa2a: {
          text: '引用文献E1には[X]部材と[Y]部材が開示されているため、請求項1は進歩性が否定されます。請求項2の[Z]部材はE1に開示されています。',
          loc: '通知書 — 拒絶理由1',
        },
        oa2b: {
          text: '補正後請求項2の[W]部材について: 引用文献E2には[W]部材が開示されていません。（補正後の請求項基準の対比）',
          loc: '通知書 — 拒絶理由2',
        },
      },      f: {
        amendChanged: {
          label: '補正による請求項の実質的変更',
          explain: '実質的変更がなければ再対比の対象ではありません。',
        },
        amendedMapping: {
          label: '通知書が補正後の請求項を基準に対比',
          explain: '補正前基準でしか対比していなければ、補正後請求項の確認が漏れている可能性があります。',
        },
      },
      rule: {
        condition: '補正で請求項が実質的に変わり、通知書の対比が補正前基準なら → 診断候補(TRUE)。',
      },
    },
    tmSearch: {
      title: '文字・発音・画像の検索軸',
      blurb: '架空の標章について文字列・発音・画像の検索軸をオン・オフし、各軸が作る確認候補を比べる架空の商標事件です。',
      summary1: '架空の文字標章「NOVATERRA」が出願されました。',
      summary2: '文字列・発音・画像の検索軸はそれぞれ別の証拠を作り、独立にオン・オフできます。',
      summary3: 'スコアはあらかじめ作った模擬の類似度で、法的類似判断として提示されません。',
      doc: {
        mark: '出願標章 (架空)',
        axisString: '文字列検索の設定 (架空)',
        axisPhonetic: '発音検索の設定 (架空)',
        axisImage: '画像検索の設定 (架空)',
      },
      docVariants: {
        mark: { v1: '標章記載 v1' },
        axisString: { v1: '文字列軸 v1' },
        axisPhonetic: { v1: '発音軸 v1' },
        axisImage: { v1: '画像軸 v1' },
      },

      span: {
        m1: {
          text: '標章: NOVATERRA (架空の文字標章)',
          loc: '出願書 — 標章欄',
        },
        m2: {
          text: '指定商品: データ処理用ソフトウェアなど (架空)',
          loc: '出願書 — 指定商品欄',
        },
        s1: {
          text: '文字列検索: 「NOVATERRA」の完全一致・部分一致候補 (模擬)',
          loc: '検索設定 — 文字列軸',
        },
        p1: {
          text: '発音類似検索: ノバテラ発音の近接候補 (模擬)',
          loc: '検索設定 — 発音軸',
        },
        i1: {
          text: '画像検索: 図形類似候補 (模擬)',
          loc: '検索設定 — 画像軸',
        },
      },      f: {
        axisString: {
          label: '文字列軸の検索実行',
          explain: 'この軸がオフだと文字基準の候補が見られず、その規則はUNKNOWNです。',
        },
        axisPhonetic: {
          label: '発音軸の検索実行',
          explain: 'この軸がオフだと発音基準の候補が見られず、その規則はUNKNOWNです。',
        },
        axisImage: {
          label: '画像軸の検索実行',
          explain: 'この軸がオフだと画像基準の候補が見られず、その規則はUNKNOWNです。',
        },
      },
      rule: {
        condition: '検索軸がオンで候補があれば → 診断候補(TRUE)。スコアは模擬の類似度です。',
      },
      cand: {
        1: 'NOVATERRA (同一標章)',
        2: 'NOVATERA (1文字違い)',
        3: 'NOVA TERRA (空白区切り)',
        4: 'NOVATERRACE (部分一致)',
        5: 'ノバテラ (発音が近い)',
        6: 'NOVATARA (発音が近い)',
        7: 'NOBATERA (発音が近い)',
        8: '図形類似候補1 (模擬図形)',
        9: '図形類似候補2 (模擬図形)',
        10: '図形類似候補3 (模擬図形)',
      },
    },
    dsgPartial: {
      title: '全体・部分・回転図面',
      blurb: '部分意匠の範囲が指定された架空の意匠事件で、回転図面の有無を確認し、候補結果だけを人に残す事例です。',
      summary1: '部分意匠の保護範囲が破線で示されています。',
      summary2: '正面図と底面図はありますが、回転図面がありません。',
      summary3: '回転図面を追加すると条件が変わり、範囲を全体に替えると規則が適用されません。',
      doc: {
        scope: '保護範囲の指定書 (架空)',
        drawings: '図面セット (架空)',
        views: '回転図面セット (架空)',
      },
      docVariants: {
        scope: {
          v1: '部分意匠の範囲 (架空)',
          v2: '全体意匠の範囲 (架空)',
        },
        drawings: { v1: '正面図・底面図 v1' },
        views: { v1: '回転図面 v1' },
      },

      span: {
        sc1: {
          text: '保護を受けようとする部分: 製品の上部外観 (破線で示した部分を除く)',
          loc: '保護範囲指定書 — 部分表示',
        },
        sc2: {
          text: '保護範囲: 意匠の全体外観',
          loc: '保護範囲指定書 — 全体表示',
        },
        d1: {
          text: '図面1: 正面図',
          loc: '図面セット — 1',
        },
        d2: {
          text: '図面2: 底面図',
          loc: '図面セット — 2',
        },
        r1: {
          text: '図面3: 45°回転状態図',
          loc: '回転図面 — 3',
        },
      },      f: {
        scopePartial: {
          label: '部分意匠の範囲指定',
          explain: '全体範囲なら部分対比の規則は適用されません。',
        },
        partialLines: {
          label: '破線による部分範囲の表示',
          explain: '部分範囲を明確にするには破線表示が必要です。',
        },
        rotatedViews: {
          label: '回転図面の存在',
          explain: '部分範囲の立体的な形状を確認するには回転図面が必要です。',
        },
      },
      rule: {
        condition: '部分範囲が指定され、回転図面がなければ → 診断候補(TRUE)。回転図面があれば → 条件不充足(FALSE)。',
      },
    },
  },

  method: {
    title: '研究の方法',
    lead: '結果をどう検証するか — データセット、漏えい防止、比較実験、評価指標、UNKNOWNの意味。',
    goldTitle: 'Gold Set',
    goldText:
      '専門家が正解の判断と根拠の位置を記録した評価用の事件集合です。診断の正しさだけでなく、根拠のつながりが合っているかも採点します。',
    challengeTitle: 'Challenge Set',
    challengeText:
      'Gold Setとは別に、難しいとわかっている型（書類欠落、版の不一致、反例の存在）を集めた集合です。一般の性能と難しい事件の性能を分けて見ます。',
    leakageTitle: 'データ漏えいの防止',
    leakage: {
      l1: 'Gold/Challenge Setは、モデルの学習・プロンプト作成データから完全に分離します。',
      l2: '評価中はRule・Prompt・Modelの版を固定し、評価完了まで変更しません。',
      l3: '独立のブラインド評価: 評価者はどのシステムの出力か知らずに判定します。',
      l4: 'Shadow Modeで実際の運用と並行して人の判定と比べ、運用に介入する前に指標を確認します。',
    },
    compareTitle: '比較実験の設計',
    compareText:
      '規則だけの基準線、LLM単独、提案構造（LLM構造化 + 規則評価 + 人の確認）を同じ事件集合で比較します。同じ集合・同じ指標・同じ版の固定が比較の前提です。',
    metricsTitle: '評価指標',
    metrics: {
      findingPrecision: '診断候補の適合率 — 提示された候補のうち人が確認した割合',
      findingRecall: '診断候補の再現率 — 実際の欠陥のうち候補として提示された割合',
      f1: '適合率と再現率の調和平均',
      criticalMiss: '重大欠陥の見逃し — 見逃してはいけない欠陥を見逃した件数',
      unknownRate: 'UNKNOWN率 — 判断の保留がどのくらい起きるか',
      evidenceHit: '根拠位置の一致率 — Factの原文位置が実際に合っている割合',
    },
    unknownTitle: 'UNKNOWNの意味',
    unknownText:
      'UNKNOWNは失敗ではなく「判断しない」ことです。資料がないのにFALSE（問題なし）にすると欠陥を見逃し、TRUE（欠陥）にすると根拠のない指摘になります。システムは何が足りないか、なぜ必要か、どこで入手できるかを画面で示します。',
    unknownTable: {
      colStatus: '状態',
      colMeaning: '意味',
      colAction: '次の行動',
      true: '模擬の欠陥条件が、必要な根拠とともに満たされている',
      trueAction: '人に診断候補として提示',
      false: '必要な事実は確認できたが、欠陥条件は満たされない',
      falseAction: '確認記録または次のRuleへ',
      unknown: '判断に必要な書類・Factがない、または曖昧',
      unknownAction: '足りない資料の要求・抽出の確認',
      na: 'この事件または手続きにこのRuleを適用しない',
      naAction: '適用可能な規則だけを見る',
    },
  },

  evaluation: {
    title: '評価シミュレーター',
    lead: '模擬の事例集合で仮定値を変えると、性能と人の確認量がどう変わるか確認します。',
    simulatedNote:
      'この画面の数値は架空データによる例であり、実際の研究成果ではありません。標本数・数式・分母を開いて見られます。',
    inputsTitle: '仮定値',
    inputs: {
      missingRate: '書類の欠落率',
      missingRateHint: '必要な書類が欠けている確率 (0〜40%)',
      extractionAcc: '事実抽出の正確度',
      extractionAccHint: 'Fact抽出が正解と一致する確率 (70〜100%)',
      reviewerRate: '確認者の確認率',
      reviewerRateHint: '診断候補を確認者が実際に確認する割合 (0〜100%)',
      threshold: '候補検索のしきい値',
      thresholdHint: 'このスコア以上の候補だけを人に提示 (0.1〜0.9)',
    },
    outputsTitle: '再計算の結果',
    sampleTitle: '模擬標本の一部（先頭10件）',
    sampleNote: '全{n}件から集計します。表は先頭10件です。',
    sampleCols: {
      caseNo: '事例 #',
      defect: '正解の欠陥',
      missing: '書類欠落',
      extract: '抽出正確',
      score: '候補スコア',
      proposed: '提示',
      confirmed: '人が確認',
    },
    defectTypes: { none: 'なし', minor: '軽微', critical: '重大' },
    yes: 'はい',
    no: 'いいえ',
    outputs: {
      precision: '候補の適合率',
      recall: '候補の再現率',
      f1: 'F1',
      criticalMiss: '重大欠陥の見逃し',
      unknownRate: 'UNKNOWN率',
      evidenceHit: '根拠位置の一致率',
      reviewVolume: '確認予定件数',
    },
    formulasTitle: '数式と分母',
    formulasIntro: '分母は模擬標本 {n}件、欠陥あり {defects}件です。',
    formulaPrecision: '適合率 = 人が確認した候補 ÷ 提示された候補全体',
    formulaRecall: '再現率 = 候補として提示された欠陥 ÷ 欠陥全体',
    formulaF1: 'F1 = 2 × (適合率 × 再現率) ÷ (適合率 + 再現率)',
    thresholdTitle: 'しきい値を上げると',
    thresholdText:
      'しきい値が高いと提示される候補が減り、適合率は上がりますが、低スコアの欠陥が見逃される可能性があります。逆に下げると再現率は上がりますが確認件数が増えます。このトレードオフを見ることがこの画面の目的です。',
    goalsTitle: '報告書の推奨目標',
    goalsNote:
      '以下は報告書に示された推奨目標です。本サイトの模擬グラフは、達成済みの実測値ではありません。',
    goals: {
      g1: '根拠の連結 100% — すべてのFactに原文位置',
      g2: '虚偽引用 0件 — 存在しない根拠の禁止',
      g3: '重要品質欠陥の再現率 長期目標 ≥ 95%',
    },
    resetInputs: '仮定値をリセット',
  },

  governance: {
    title: '信頼と責任',
    lead: '資料等級ごとのモデル経路のポリシー、診断経路の再現性、承認の境界。この画面は実際のネットワーク通信を行いません。',
    gradesTitle: '架空の資料等級ポリシーマトリックス',
    gradesIntro: '等級を選ぶと、使える模擬モデル経路が変わります。',
    grades: {
      PUBLIC: { name: '公開', desc: '公開された文献・統計・法令' },
      UNPUBLISHED: { name: '非公開', desc: '非公開の出願・審査資料' },
      RESTRICTED: { name: '制限', desc: '機密・非公開の事件資料' },
    },
    modelPaths: {
      onPrem: '社内オンプレミスモデル',
      domesticCloud: '国内クラウド (SLA)',
      publicCloud: '公共専用クラウド',
      overseasApi: '海外の商用API',
      openModel: '公開モデル',
    },
    allowed: '許可',
    conditional: '条件付き',
    forbidden: '禁止',
    matrixNote: 'このマトリックスは架空の例示ポリシーであり、実際の機関のポリシーではありません。',
    snapshotTitle: '事件スナップショットの例',
    snapshotIntro: '取得時刻・原文ハッシュ・版・人の確認履歴を残すと、同じ入力・版でどの診断経路が再現されるか確認できます。',
    snapshot: {
      acquiredAt: '取得時刻',
      acquiredAtVal: '2026-08-10 09:41 (模擬)',
      docHash: '原文ハッシュ',
      docHashVal: 'sha256:9f2c…e7a1 (例示文字列 — 実際の機密事件の原文ではありません)',
      factVersion: 'Fact版',
      factVersionVal: 'facts-v2.4.1',
      ruleVersion: 'Rule版',
      ruleVersionVal: 'PEQ-IS-014 v1.0.0',
      promptVersion: 'Prompt・Model版',
      promptVersionVal: 'prompt-v14 · model-2026-08 (模擬)',
      reviewHistory: '人の確認履歴',
      reviewHistoryVal: '2026-08-10 保留(根拠の補強) → 2026-08-12 確認 (模擬)',
    },
    reproducibilityTitle: '再現の手順',
    reproducibility: {
      r1: '同じ事件スナップショット（原文ハッシュ一致）を読み込む。',
      r2: '同じ版の抽出器でFactを再抽出する。',
      r3: '同じRule・Prompt・Model版で評価する。',
      r4: '生成された診断経路（Trace）を以前の記録と照合する。',
    },
    approvalTitle: '承認の境界',
    approval: {
      a1: '資料等級と手続き段階によってモデル経路が制限されます。',
      a2: '規則が作る診断候補は、人の確認なしに事件へ反映されません。',
      a3: '規則の変更は版と施行日を持ち、過去の判断記録を書き換えません。',
      a4: 'LLMが関わる狭い条件（L3）は根拠位置とともに提示され、根拠がなければUNKNOWNです。',
    },
    limitationTitle: '研究の限界',
    limitationText:
      'この展示のポリシーマトリックスとスナップショットは設計の例です。実際の運用システムのセキュリティ方針、監査基準、個人情報の取扱いは別の公式手続きで定めるべきであり、本サイトがその手続きの代わりにはなりません。',
  },

  roadmap: {
    title: '構築シナリオ',
    lead: '報告書のLow/Medium/Highの計画推計と、段階別の産出物・移行条件です。',
    estimateNote:
      'Low 9〜12か月・8〜12 FTE・8〜12億ウォン、Medium 18〜24か月・20〜30 FTE・28〜45億ウォン、High 30〜36か月・45〜70 FTE・80〜130億ウォンは、政策検討用の計画推計であり、確定した事業費や見積りではありません。',
    colScenario: 'シナリオ',
    colDuration: '期間',
    colFte: '投入 (FTE)',
    colBudget: '予算推計',
    colFocus: '焦点',
    scenarios: {
      low: {
        name: 'Low',
        focus: '特許・実用新案のMVP — 資料連結と規則エンジンの検証に集中',
      },
      medium: {
        name: 'Medium',
        focus: '商標・意匠への拡張、Gold・Shadow評価、ガバナンス体制',
      },
      high: {
        name: 'High',
        focus: '全権利の運用・監査、規則の自動改善パイプラインまで',
      },
    },
    phasesTitle: '段階別の産出物と移行条件',
    phases: {
      p1: {
        title: '資料の連結',
        output: '事件書類一覧、取得計画、原文ハッシュ・版の記録',
        gate: '必要書類の100%取得確認手続きの完了',
      },
      p2: {
        title: '特許MVP',
        output: 'Fact抽出器、規則エンジン、UNKNOWN処理、人の確認UI',
        gate: 'Gold Setで目標指標の達成 + セキュリティ確認の通過',
      },
      p3: {
        title: 'Gold・Shadow検証',
        output: 'Gold/Challenge評価報告書、Shadow Modeの並行運用',
        gate: 'Shadow Modeの指標が人の判定比で目標に到達',
      },
      p4: {
        title: '商標・意匠への拡張',
        output: '文字・発音・画像軸、部分意匠範囲の対比',
        gate: '権利別Gold Set指標の達成 + 資料等級ポリシーの適用',
      },
      p5: {
        title: '運用・監査',
        output: '運用マニュアル、監査トレイル、規則版管理の体制',
        gate: '定期監査と改善ループが文書化され運用されること',
      },
    },
    gateNote: '各ゲートは次の段階に進むための品質・セキュリティ条件で、未達の場合は前の段階に戻ります。',
    caipexContext: 'CAIPEX支援の文脈: 研究・検証段階の学術支援と専門家の協働が、構築シナリオの前提です。',
  },

  sources: {
    title: '資料と用語',
    lead: '基準となる報告書、原文の出典、韓・英・日用語集、そして研究・デモ・運用の区分。',
    reportTitle: '基準となる研究報告書',
    report: {
      title: '「生成AI基盤の知的財産審査品質診断高度化 研究・構築案」',
      meta: '利用者提供の編集版 · 2026年9月',
      status: '資料準備中',
      statusText: '公開用ファイルのリンクが準備できたらここに接続します。それまで壊れたリンクは置きません。',
    },
    linksTitle: '原文の出典と関連サイト',
    links: {
      peq: { label: 'PEQルールエンジン体験サイト', note: '個々のルールエンジンを探る関連サイト' },
      caipex: { label: 'CAIPEX学会サイト', note: '支援する学会' },
      reportLink: { label: '研究報告書の原文（準備中）', note: '編集版の提供時に接続' },
    },
    glossaryTitle: '用語集',
    glossaryNote: '報告書の主要概念を韓・英・日で対応させます。シナリオデータのRule IDと判定状態コードは翻訳しません。',
    colTerm: '用語',
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
    distinctionTitle: '研究・デモ・運用の区分',
    distinction: {
      colKind: '区分',
      colMeaning: 'このサイトでの意味',
      research: { kind: '研究', meaning: '仮説、設計、評価指標、推奨目標 — 報告書基準' },
      demo: { kind: 'デモ', meaning: '架空の事件、模擬データ、ブラウザ内の決定的計算' },
      operations: { kind: '運用', meaning: '実際の事件、実測の性能、公式の品質判定 — このサイトの範囲外' },
    },
    versionTitle: 'バージョン情報',
    version: {
      site: 'サイト版',
      siteVal: '1.0.0 (静的体験展示)',
      data: '架空事例データ',
      dataVal: 'PAT-014-DEMO · PAT-AMD-DEMO · TM-SEARCH-DEMO · DSG-PARTIAL-DEMO (模擬)',
      stack: '実装',
      stackVal: 'Vite + React + TypeScriptの静的ビルド、外部API・ログインなし',
    },
  },

  chip: {
    title: '進行中の体験',
    caseLabel: '事例',
    verdictLabel: '判定',
    stepLabel: '手順',
    resume: '続ける',
    restart: '最初から',
    dismiss: '表示を消す',
  },

  notFound: {
    title: 'ページが見つかりません',
    text: 'アドレスが変わったか、間違った経路です。ホームへお戻りください。',
    goHome: 'ホームへ',
  },

  a11y: {
    logoAlt: '審査品質リサーチ展ロゴ',
    caipexLogoAlt: 'CAIPEXロゴ',
    themeToggleAria: 'テーマ切り替え',
    langSelectAria: '言語の選択',
    flowchartAlt: '事件資料から人の判断まで続くデータフロー',
    imageSlotAlt: '研究場面のイラスト',
  },

  /* ── 規則のメタ情報 ── */
  rules: {
    peqis014: {
      title: '従属項の追加構成の対比漏れ確認',
      authority: '架空の規則 — 報告書のPEQ-IS-014の例を教育用に再構成',
      changelog: {
        '1.0.0': 'v1.0.0 (2025-03-01施行): 請求項2・D1対応・C対比・通知書の完全性を確認',
        '1.1.0': 'v1.1.0 (2026-09-01施行): 請求項1の確認を追加',
      },
    },
    peqis021: {
      title: '補正後請求項の再対比確認',
      authority: '架空の規則 — 補正時点と対比対象を確認する例',
      changelog: { '1.0.0': 'v1.0.0 (2026-06-01施行): 補正後の再対比確認を導入' },
    },
    tmstr: {
      title: '文字列軸の確認候補',
      authority: '架空の規則 — 文字列検索軸',
      changelog: { '1.0.0': 'v1.0.0: 文字列軸の候補生成' },
    },
    tmphn: {
      title: '発音軸の確認候補',
      authority: '架空の規則 — 発音検索軸',
      changelog: { '1.0.0': 'v1.0.0: 発音軸の候補生成' },
    },
    tmimg: {
      title: '画像軸の確認候補',
      authority: '架空の規則 — 画像検索軸',
      changelog: { '1.0.0': 'v1.0.0: 画像軸の候補生成' },
    },
    dsgif: {
      title: '部分意匠の回転図面対比',
      authority: '架空の規則 — 部分意匠の範囲と図面の対比',
      changelog: { '1.0.0': 'v1.0.0: 部分範囲・回転図面の対比' },
    },
  },
}

export type JaDict = typeof ja
