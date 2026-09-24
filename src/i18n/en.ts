/**
 * English dictionary — same key structure as ko.ts (verified by tests).
 */
export const en = {
  meta: {
    title: 'The future of evidence-led examination quality · AI IP examination quality research',
    siteName: 'AI IP Examination Quality Research',
  },

  common: {
    brand: 'Examination Quality Research Exhibit',
    brandSub: 'Evidence-led examination quality',
    demoBadge: 'Fictional research case',
    simulatedBadge: 'Simulated data',
    simulatedRun: 'Simulated run',
    researchDemoFinding: 'Research demo finding',
    finalByHuman: 'A person makes the final decision',
    learnMore: 'Learn more',
    startOver: 'Start over',
    reset: 'Reset',
    share: 'Share',
    copyLink: 'Copy link',
    copied: 'Copied',
    add: 'Add',
    exclude: 'Exclude',
    close: 'Close',
    open: 'Open',
    viewSource: 'View source',
    backToRule: 'Back to rule',
    allSteps: 'All steps',
    optional: 'Optional',
    fictionalNote: 'All cases, documents, and figures on this screen are fictional educational data.',
    notLegalConclusion: 'Not a legal conclusion or an official ground of rejection.',
    print: 'Print',
    skipToContent: 'Skip to content',
  },

  nav: {
    groups: {
      intro: {
        label: 'Research',
        items: {
          research: { label: 'Research overview', sub: 'Problem · hypothesis · architecture' },
        },
      },
      experience: {
        label: 'Experience',
        items: {
          experience: { label: 'A day in the future', sub: '3-minute guided story' },
          lab: { label: 'Case laboratory', sub: 'Core hands-on experience' },
        },
      },
      cases: {
        label: 'Cases',
        items: {
          cases: { label: 'Cases by IP right', sub: 'Patent · trademark · design' },
        },
      },
      evaluate: {
        label: 'Method & evaluation',
        items: {
          method: { label: 'Research method', sub: 'Gold · Challenge · leakage' },
          evaluation: { label: 'Evaluation simulator', sub: 'Recompute from assumptions' },
        },
      },
      trust: {
        label: 'Trust & build',
        items: {
          governance: { label: 'Trust and responsibility', sub: 'Data grades · reproducibility' },
          roadmap: { label: 'Build scenarios', sub: 'Phased roadmap' },
        },
      },
      sources: {
        label: 'Sources',
        items: {
          sources: { label: 'Sources & glossary', sub: 'References · terms · boundaries' },
        },
      },
    },
    menu: 'Menu',
    closeMenu: 'Close menu',
  },

  footer: {
    caipexSupportTitle: 'Research supported by the CAIPEX society',
    caipexSupportText:
      'This site is an interactive exhibit of research supported by CAIPEX (Collegium of AI-Driven IP Examination Excellence). It is not an official CAIPEX policy channel or an official site of a patent office.',
    visitCaipex: 'Visit the CAIPEX website',
    quickLinks: 'Quick links',
    related: 'Related sites',
    peqRuleSite: 'PEQ Rule Engine experience site',
    report: 'Baseline research report',
    disclaimerTitle: 'How to read this site',
    disclaimer:
      'All cases, documents, and figures are fictional or simulated research data. Do not read them as confirmed legal assessments or official policy.',
    copyright: 'The fictional case data and screens on this site were produced for research demonstration.',
  },

  themes: {
    label: 'Theme',
    system: 'System',
    light: 'Light',
    dark: 'Dark',
    current: 'Now {mode}',
    systemCurrent: 'System · now {mode}',
    systemFollowing: 'Follows system setting',
  },

  langs: {
    label: 'Language',
    ko: '한국어',
    en: 'English',
    ja: '日本語',
  },

  home: {
    kicker: 'CAIPEX-supported research · interactive research exhibit',
    title: 'The future of evidence-led examination quality',
    lead: 'Gather case materials, extract evidence-backed facts, evaluate conditions against explicit rules, leave missing information as UNKNOWN, have a person make the final review, and use that review to improve the rules and the evaluation system. Try the flow this research proposes in an 8–12 minute fictional case.',
    ctaExperience: 'Explore a sample case',
    ctaResearch: 'Read the research overview',
    heroImgAlt: 'A research scene where case materials connect to evidence',
    questionLabel: 'Research question',
    question: 'Why should examination quality be diagnosed with evidence and human review?',
    questionAnswer:
      'AI does not decide in your place. It organizes evidence and flags missing materials; rules produce reproducible diagnostic candidates; the final decision and the feedback loop belong to people.',
    overviewTitle: '90-second overview',
    overviewIntro: 'The whole story in one line. Click each step.',
    overview: {
      collect: {
        title: '1. Gather case materials',
        text: 'Confirm the list of documents needed — claims, citations, office actions — and identify what is missing.',
      },
      extract: {
        title: '2. Extract only evidence-backed facts',
        text: 'Every fact carries its location in the source text. Without a location it is not a fact.',
      },
      evaluate: {
        title: '3. Explicit rules evaluate conditions',
        text: 'Rules carry versions and effective dates. The same input reproduces the same result.',
      },
      unknown: {
        title: '4. Leave missing information as UNKNOWN',
        text: 'Never guess when material is absent. The screen tells you what is missing and why it matters.',
      },
      review: {
        title: '5. A person confirms, defers, or rejects',
        text: 'Even TRUE is not a conclusion — it is a research demo finding awaiting human review.',
      },
      improve: {
        title: '6. Reviews improve the rules',
        text: 'Human decisions become the input for the next rule version and the evaluation system.',
      },
    },
    flowTitle: 'The core flow',
    flow: {
      d1: 'Case materials',
      d2: 'Evidence-linked facts',
      d3: 'Explicit rules',
      d4: 'UNKNOWN / findings',
      d5: 'Human review & feedback',
    },
    flowCaption: 'The proposed diagnostic flow — UNKNOWN and human review are part of the flow, not exceptions.',
    casePreviewTitle: 'Preview of the featured case',
    casePreviewText:
      'Possible missing comparison of a dependent claim (fictional patent case): no office action means UNKNOWN; adding a sample office action produces a finding; switching to a counter-example document shows the condition unmet. Compare all three states yourself.',
    casePreviewCta: 'Open in the laboratory',
    supportTitle: 'Research support',
    supportText:
      'This research is supported by the CAIPEX society. This site is an exhibit explaining research hypotheses and designs, not an official CAIPEX policy channel.',
    existingSiteTitle: 'Relationship with the existing experience site',
    existingSiteText:
      'The PEQ Rule Engine experience site is a related site for exploring individual rule engines in detail. This site does not replicate rule-execution screens; it tells the story across research questions, evidence acquisition, missing materials, and human judgment.',
    goPeq: 'Explore the PEQ Rule Engine',
    forWhomTitle: 'Who is this exhibit for',
    forWhom: {
      examiner: {
        title: 'Examiners & quality reviewers',
        text: 'AI organizes evidence and flags missing materials. Follow the evidence, uncertainty, and review points of a case.',
      },
      researcher: {
        title: 'Researchers & society members',
        text: 'The research questions and evaluation design of a neuro-symbolic architecture. Separate hypothesis, data, metrics, and limits.',
      },
      policy: {
        title: 'Policy & program staff',
        text: 'Conditions and investment points of phased construction. Understand how quality, security, human review, and budget connect.',
      },
      visitor: {
        title: 'General visitors & international partners',
        text: 'Glimpse the future of examination quality work through brief Korean, English, and Japanese guidance.',
      },
    },
    startNote: 'The experience runs entirely on offline data — no server and no sign-in required.',
  },

  researchPage: {
    title: 'Research overview',
    lead: 'Problem, hypothesis, overall architecture, and extension across IP rights. Every other page of this exhibit runs on this structure.',
    problemTitle: 'Problem — why examination quality is hard to diagnose',
    problem: {
      p1: 'When required case materials are missing or document versions do not match, quality assessment itself becomes impossible.',
      p2: 'Manually locating and linking the passages behind each judgment is slow and hard to reproduce.',
      p3: 'When AI produces conclusion-like sentences, you cannot trust them without their evidence and limits.',
    },
    hypothesisTitle: 'Research hypothesis',
    hypothesisText:
      'If generative AI reads and structures case materials, explicit rules form the skeleton of judgment, missing material stays UNKNOWN, and human review improves the rules, then accuracy, reproducibility, and explainability of examination quality diagnosis can all rise together.',
    neuroSymbolicTitle: 'Neuro-symbolic design',
    neuroSymbolic: {
      generative: {
        title: 'Generative AI reads and structures',
        text: 'Extracts facts and evidence locations from documents. Every extraction carries its source location.',
      },
      rules: {
        title: 'Rules produce reproducible candidates',
        text: 'Extracted facts are evaluated by explicit rules. The same input and version reproduce the same diagnostic path.',
      },
      human: {
        title: 'People decide and feed back',
        text: 'A finding is not a conclusion. Confirm / defer / reject records become the input for the next rule version.',
      },
    },
    layersTitle: 'Overall structure — a five-layer data flow',
    layersIntro: 'Select a layer to see its required input, output, failure state, and responsible party.',
    inputLabel: "Required input",
    outputLabel: "Output",
    failureLabel: "Failure state",
    ownerLabel: "Responsible party",
    layers: {
      materials: {
        name: '1 · Case materials',
        input: 'Case document list, cited references, procedural records',
        output: 'Material status with missing or incomplete documents flagged',
        failure: 'Required document absent → later judgments stay UNKNOWN',
        owner: 'Intake and material registration staff',
      },
      plan: {
        name: '2 · Search & acquisition plan',
        input: 'IP right type, procedural stage, required document types',
        output: 'Per-right, per-stage collection plan and candidate documents',
        failure: 'Missing plan → risk of evidence-free inference',
        owner: 'System + examiner confirmation',
      },
      facts: {
        name: '3 · Evidence-linked facts',
        input: 'Source text and extraction results',
        output: 'Facts with source locations attached',
        failure: 'No evidence location → fact not confirmed',
        owner: 'Extractor + reviewer',
      },
      rules: {
        name: '4 · Explicit rules',
        input: 'Facts, rule version, case event date',
        output: 'TRUE / FALSE / UNKNOWN / NOT_APPLICABLE',
        failure: 'Facts insufficient → UNKNOWN (no guessing)',
        owner: 'Rule maintainer (versions, effective dates)',
      },
      human: {
        name: '5 · Human judgment & evaluation',
        input: 'Findings, evidence traces, counter-example review',
        output: 'Confirm / defer / reject with reasons, feedback records',
        failure: 'Skipped review → distorted evaluation metrics',
        owner: 'Examiners and quality reviewers',
      },
    },
    hierarchyTitle: 'Hierarchy — L0 through L4',
    hierarchyIntro: 'The layering from the research report. One sentence each on the possible role and the error that remains.',
    hierarchy: {
      l0: {
        name: 'L0 · Formal checks',
        role: 'Mechanical checks: document presence, format, missing pages, date fields.',
        residual: 'Remaining error: cannot judge whether content is right or wrong.',
      },
      l1: {
        name: 'L1 · Explicit rules',
        role: 'Evaluates extracted facts against explicit rules to produce reproducible candidates.',
        residual: 'Remaining error: misses exceptions the rules do not encode.',
      },
      l2: {
        name: 'L2 · Relational inference',
        role: 'Connects dependencies among facts and citation/comparison structures.',
        residual: 'Remaining error: wrong links produce false evidence.',
      },
      l3: {
        name: 'L3 · Limited LLM predicates',
        role: 'Only narrow conditions needing natural-language judgment are proposed by an LLM, with evidence.',
        residual: 'Remaining error: possible hallucination — must always be reviewed with evidence locations.',
      },
      l4: {
        name: 'L4 · Human final decision',
        role: 'Confirms, defers, or rejects findings and records reasons.',
        residual: 'Remaining error: human burden and bias — managed through evaluation and feedback.',
      },
    },
    separationTitle: 'Separating the two paths',
    separationText:
      'The research separates the path where generative AI reads and structures from the path where rules produce reproducible candidates. LLM output never feeds rules directly; it passes through evidence-linked facts.',
    rightsTitle: 'Extension across IP rights',
    rights: {
      patent: {
        title: 'Patent & utility model',
        text: 'Claim-by-claim comparison, pre/post-amendment timing, citation mapping. Event dates and document versions directly affect the diagnosis.',
      },
      trademark: {
        title: 'Trademark',
        text: 'String, phonetic, and image search axes each produce different evidence. Similarity scores are never presented as legal similarity judgments.',
      },
      design: {
        title: 'Design',
        text: 'Whole / partial / rotated views checked against the protected scope. Only candidate results are shown; the final call stays with a person.',
      },
    },
    reportLinkTitle: 'Baseline research report',
    reportLinkText: '「Generative-AI-based research and construction plan for upgrading IP examination quality diagnosis」(edited copy, September 2026).',
  },

  experience: {
    title: 'A day in the future',
    lead: 'A future walkthrough based on research assumptions. Follow the same fictional case from the viewpoints of an examiner, a quality reviewer, and a researcher.',
    assumptionBadge: 'Future walkthrough based on research assumptions',
    roleLabel: 'Choose a role',
    roles: {
      examiner: { title: 'Examiner', subtitle: 'Which materials are missing?', blurb: 'Sees the case at intake, checking whether the needed materials are complete.' },
      reviewer: { title: 'Quality reviewer', subtitle: 'What is the evidence — and the counter-example?', blurb: 'Sees findings through evidence traces and counter-example checks.' },
      researcher: { title: 'Researcher', subtitle: 'How do we evaluate error types?', blurb: 'Sees how review records improve rules and the evaluation system.' },
    },
    modeQuick: '3-minute tour',
    modeDetail: 'Full detail',
    scenes: {
      intake: {
        title: 'Intake',
        examiner: 'A filing arrives and the claims and citation list are registered. The screen shows required documents and current documents side by side. The examiner notices the office action body is missing.',
        reviewer: 'The case enters the diagnosis queue. The reviewer looks at document completeness first, before any case number.',
        researcher: 'Acquisition times and completeness are recorded per document. These records later become part of the Gold Set.',
      },
      acquire: {
        title: 'Acquire materials',
        examiner: 'The missing office action body is obtained and added. Whether all pages are present is flagged automatically.',
        reviewer: 'When a document is added, the facts that become newly extractable update immediately.',
        researcher: 'Version history from acquisition to extraction is kept. You can reproduce which document, at which time, produced a judgment.',
      },
      diagnose: {
        title: 'Diagnosis',
        examiner: 'A rule proposes a finding: the office action contains no comparison for dependent-claim feature C. It is a review item, not a conclusion.',
        reviewer: 'The reviewer expands the evidence passages and the applied rule version, and checks whether a counter-example document exists.',
        researcher: 'Whether the candidate landed on TRUE, FALSE, or UNKNOWN — and where it stopped — becomes evaluation data.',
      },
      review: {
        title: 'Review',
        examiner: 'Choose confirm, defer, or reject and leave a reason. The record stays in the case review history.',
        reviewer: 'Insufficient evidence? Defer and return to “check additional materials”. A rejection always carries counter-evidence.',
        researcher: 'Human judgments are added to the answer data. Error types are aggregated.',
      },
      feedback: {
        title: 'Feedback',
        examiner: 'As review outcomes accumulate, the next rule version changes — and tomorrow’s examination screen reflects it.',
        reviewer: 'Frequently rejected finding patterns become rule-improvement candidates. The reviewer sees the next case with improved rules.',
        researcher: 'Gold/Challenge metrics refresh and per-version rule performance is compared. This leads to the final research outputs.',
      },
    },
    toLab: 'Try this flow yourself in the laboratory',
    toLabCta: 'Open the case laboratory',
    sceneDataNote: 'Every scene shares the same offline sample data as the laboratory.',
  },

  lab: {
    title: 'Case laboratory',
    lead: 'Add and exclude documents in fictional cases, and see for yourself how UNKNOWN turns into a finding or a counter-example.',
    steps: {
      s1: { title: 'Confirm case', sub: 'Fictional case & documents' },
      s2: { title: 'Acquire materials', sub: 'Add / exclude documents' },
      s3: { title: 'Extract facts', sub: 'Facts & evidence locations' },
      s4: { title: 'Evaluate rules', sub: 'Verdict & trace' },
      s5: { title: 'Review & feedback', sub: 'Human decision records' },
    },
    colDocuments: 'Case documents & timeline',
    colFacts: 'Acquisition plan, facts & evidence',
    colRules: 'Rule results & human review',
    caseSelectLabel: 'Fictional case',
    docStatus: {
      included: 'Included',
      excluded: 'Excluded',
      complete: 'Complete document',
      incomplete: 'Incomplete document',
      availableAtStart: 'Present at start',
      notAvailableAtStart: 'Not present at start',
    },
    origin: {
      EXAMINER_CITED: 'Actually cited by the examiner',
      AI_DISCOVERED: 'Newly found by AI',
      CASE_DOCUMENT: 'Case document',
    },
    addSampleDoc: 'Add sample office action',
    counterButton: 'Switch to counter-example document',
    backToSample: 'Back to sample office action',
    neededDocButton: 'Show the required document',
    factStatus: {
      AVAILABLE: 'Extracted',
      MISSING: 'Not extractable — document absent',
      AMBIGUOUS: 'Ambiguous — needs check',
    },
    factValueTrue: 'Yes',
    factValueFalse: 'No',
    factValueUnknown: 'Unknown',
    evidenceLocation: 'Evidence location',
    noEvidence: 'No evidence location',
    explain: 'Why it is needed',
    advancedPanel: 'Researcher panel',
    advancedHint: 'Edit fact values to see how the diagnosis changes. A manual edit running only inside your browser.',
    advancedEdit: 'Edit value',
    advancedDone: 'Done',
    ruleVersionLabel: 'Rule version',
    ruleVersionAuto: 'Auto (by event date)',
    eventDateLabel: 'Case event date',
    eventDateUnknown: 'Unclear',
    verdictReasons: {
      'mapping-found': 'The office action contains a comparison for dependent-claim feature C, so the defect condition is not met.',
      'mapping-missing': 'Claim 2 adds feature C and the complete office action contains no comparison for C — proposed as a finding: possible missing comparison for dependent-claim feature C.',
      'document-incomplete': 'The office action is incomplete (last page missing), so the presence of a comparison for C cannot be confirmed.',
      'no-claim-change': 'The amendment does not substantively change the claims, so the re-comparison condition is not met.',
      'recheck-candidate': 'The amendment substantively changed the claims but the office action compares only the pre-amendment claims — proposed as a finding: re-comparison of post-amendment claims needed.',
      'condition-unknown': 'Values needed for the condition could not be determined.',
      'candidates-exist': 'This search axis has review candidates. Scores are simulated similarity, not legal similarity judgment.',
      'no-candidates': 'This search axis has no review candidates.',
      'axis-not-searched': 'This search axis is off, so its result is unknown.',
      'whole-scope': 'The protected scope is the whole design, so the partial-scope comparison condition is not met.',
      'rotation-missing-candidate': 'A partial-design scope is declared but rotated views are absent — proposed as a finding: rotated views may be missing.',
      'all-views-present': 'All rotated views are present, so the defect condition is not met.',
      'not-applicable-right': 'This rule does not apply to cases of this IP right type.',
      'right-type-mismatch': 'The IP right type is outside the rule’s applicability.',
      'version-not-found': 'The requested rule version could not be found.',
      'version-not-effective': 'The requested rule version was not yet effective on the case event date.',
      'version-before-first-effective': 'No rule version was effective before the event date.',
      'event-date-unclear': 'The case event date is unclear, so the applicable rule version cannot be determined.',
      'required-facts-missing': 'A required document is missing; the result remains unknown.',
      'required-facts-ambiguous': 'A required document is incomplete or its value is ambiguous; the result remains unknown.',
      'evidence-location-missing': 'A required evidence location is absent from the current documents; the result remains unknown.',
      ok: 'Passed',
    },
    unknownExplain: {
      title: 'What is missing, why it matters, where to get it',
      what: 'What is missing',
      why: 'Why it is needed',
      where: 'Where to get it',
    },
    verdict: {
      TRUE: 'Finding',
      FALSE: 'Condition unmet',
      UNKNOWN: 'Judgment deferred',
      NOT_APPLICABLE: 'Not applicable',
    },
    verdictShort: {
      TRUE: 'Finding',
      FALSE: 'Unmet',
      UNKNOWN: 'Deferred',
      NOT_APPLICABLE: 'N/A',
    },
    trace: {
      title: 'Evidence trace',
      applicability: 'Applicability',
      version: 'Date & version',
      facts: 'Required facts',
      evidence: 'Evidence locations',
      condition: 'Condition',
      pass: 'Pass',
      fail: 'Stop',
    },
    usedFacts: 'Facts used',
    missingFacts: 'Missing facts',
    ambiguousFacts: 'Ambiguous facts',
    review: {
      title: 'Human review',
      hint: 'A finding is not a conclusion. Leave your review and it appears in the feedback record.',
      confirm: 'Confirm',
      defer: 'Defer',
      reject: 'Reject',
      reasonLabel: 'Reason',
      reasons: {
        evidence: 'Evidence needs supplement',
        incomplete: 'Document incomplete',
        counter: 'Counter-example found',
        agree: 'Evidence is sound',
        other: 'Other',
      },
      noteLabel: 'Note (optional)',
      submit: 'Record review',
      recorded: 'Your review has been added to the feedback record.',
      recordedAria: 'Review recorded',
    },
    feedback: {
      title: 'Feedback & evaluation',
      empty: 'No reviews yet. Evaluate a rule, then leave a review.',
      logTitle: 'Reviews in this session',
      verdict: 'Verdict at the time',
      decision: 'Decision',
      decisions: { CONFIRMED: 'Confirmed', DEFERRED: 'Deferred', REJECTED: 'Rejected' },
      howUsed: 'These records are session-only demonstrations. In the research, records of the same shape feed rule improvement and evaluation metrics.',
      clear: 'Delete session records',
      cleared: 'Session records deleted.',
    },
    shareTitle: 'Share this state',
    shareHint: 'Only enumerations such as case ID, document selection, and rule version go into the URL. Your notes are never shared.',
    mobileColumnSwitch: 'Switch column',
    tabDocuments: 'Documents',
    tabFacts: 'Facts',
    tabRules: 'Rules',
    startCta: 'Start with this case',
  },

  cases: {
    title: 'Cases by IP right',
    lead: 'Compare fictional patent, trademark, and design cases, and open each laboratory scenario straight from its card.',
    compareTitle: 'Case comparison',
    compareNote: 'All cases are fictional, not real filings. Search scores are pre-authored simulated data.',
    colCase: 'Case',
    colRight: 'Right',
    colManipulation: 'What you can manipulate',
    colPoint: 'Research point',
    openInLab: 'Open in laboratory',
    openInLabAria: 'Open {case} in the laboratory',

    pat014: {
      title: 'Possible missing comparison of a dependent claim feature',
      blurb: 'A fictional patent case checking whether the office action omits the examiner’s comparison for dependent-claim feature C.',
      summary1: 'Claim 1 recites A+B and dependent claim 2 adds A+B+C. Reference D1 cited by the examiner discloses A+B.',
      summary2: 'At start there is no office action body, so the examiner’s claim comparison cannot be confirmed.',
      summary3: 'Adding a sample office action lets you decide on C; switching to a counter-example office action changes the result.',
      doc: {
        claims: 'Claims as filed (fictional)',
        citations: 'Examiner citation list (fictional)',
        oa: 'Office action body (fictional)',
      },
      docVariants: {
        claims: { v1: 'Claims v1' },
        citations: { v1: 'Citation list v1' },
        oa: {
          v1: 'Sample office action A — no C comparison (fictional)',
          v2: 'Sample office action B (counter) — includes C comparison (fictional)',
          v3: 'Partial office action — last page missing (fictional)',
        },
      },

      span: {
        c1: {
          text: 'Claim 1: An apparatus comprising feature [A] and feature [B].',
          loc: 'Claims — claim 1',
        },
        c2: {
          text: 'Claim 2: The apparatus of claim 1, further comprising feature [C].',
          loc: 'Claims — claim 2',
        },
        d1: {
          text: 'Reference D1 discloses the combination of feature [A] and feature [B].',
          loc: 'Citation list — D1 summary',
        },
        oa1: {
          text: 'Reference D1 discloses features [A] and [B], so claim 1 lacks inventive step.',
          loc: 'Office action — rejection 1',
        },
        oa1b: {
          text: 'Scope of review: claims 1–2 were examined. (No comparison is stated for feature [C] of claim 2.)',
          loc: 'Office action — scope of review',
        },
        oa2: {
          text: 'Reference D1 discloses features [A] and [B], so claim 1 lacks inventive step.',
          loc: 'Office action — rejection 1',
        },
        oa2b: {
          text: 'Regarding feature [C] of claim 2: reference D2 discloses feature [C], so claim 2 also lacks inventive step.',
          loc: 'Office action — rejection 2',
        },
        oa3: {
          text: 'Reference D1 discloses features [A] and [B], so claim 1 lacks inventive step. (Truncated — last page missing)',
          loc: 'Office action — page 1 (partial)',
        },
      },      f: {
        claim1: {
          label: 'Claim 1 recites A+B',
          explain: 'Rule v1.1.0 requires claim 1 to be confirmed.',
        },
        claim2: {
          label: 'Claim 2 adds feature C',
          explain: 'The dependent-claim feature that the missing-comparison check targets.',
        },
        d1_ab: {
          label: 'D1 discloses a counterpart to A+B',
          explain: 'Confirms the premise that the cited reference discloses A+B.',
        },
        map_c: {
          label: 'The office action states a comparison for C',
          explain: "If this value is missing (document absent), judgment is deferred; if 'no' is confirmed across the complete office action, a finding is raised.",
        },
        oa_complete: {
          label: 'All pages of the office action are present',
          explain: 'With only partial pages, the C comparison might exist later, so it cannot be decided.',
        },
      },
      rule: {
        condition: 'If dependent-claim feature C exists and the complete office action states no comparison for C → finding (TRUE). If a comparison for C is found → condition unmet (FALSE).',
      },
    },
    patAmd: {
      title: 'Pre/post-amendment timing and the comparison target',
      blurb: 'A fictional utility-model case checking whether a later office action compares only the pre-amendment claims after an amendment changed them.',
      summary1: 'An amendment substantively changing claim 2 has been filed.',
      summary2: 'If the later office action compares only the pre-amendment claims, a re-comparison is needed.',
      summary3: 'Changing the event date changes the applicable rule version; an unclear date defers judgment.',
      doc: {
        claimsOrig: 'Claims before amendment (fictional)',
        amendment: 'Amendment (fictional)',
        oa2: 'Office action after amendment (fictional)',
      },
      docVariants: {
        claimsOrig: { v1: 'Pre-amendment claims v1' },
        amendment: {
          v1: 'Amendment A — substantive change to claim 2 (fictional)',
          v2: 'Amendment B (counter) — typo correction only (fictional)',
        },
        oa2: {
          v1: 'Office action A — compares pre-amendment claims (fictional)',
          v2: 'Office action B (counter) — compares post-amendment claims (fictional)',
        },
      },

      span: {
        c1o: {
          text: 'Claim 1: A support device comprising member [X] and member [Y].',
          loc: 'Pre-amendment claims — claim 1',
        },
        c2o: {
          text: 'Claim 2: The support device of claim 1, further comprising member [Z].',
          loc: 'Pre-amendment claims — claim 2',
        },
        amd1: {
          text: 'Claim 2 is amended to read: "… deleting member [Z] and further comprising member [W]."',
          loc: 'Amendment — claim 2 amended part',
        },
        amd2: {
          text: 'The spelling of "[Z] member" in claim 2 is corrected to "[Z] member". (No substantive change)',
          loc: 'Amendment — correction part',
        },
        oa2a: {
          text: 'Reference E1 discloses members [X] and [Y], so claim 1 lacks inventive step. Member [Z] of claim 2 is disclosed in E1.',
          loc: 'Office action — rejection 1',
        },
        oa2b: {
          text: 'Regarding member [W] of amended claim 2: reference E2 does not disclose member [W]. (Comparison against the amended claim)',
          loc: 'Office action — rejection 2',
        },
      },      f: {
        amendChanged: {
          label: 'The amendment substantively changed the claims',
          explain: 'Without a substantive change, re-comparison is not required.',
        },
        amendedMapping: {
          label: 'The office action compares the post-amendment claims',
          explain: 'If it compares only the pre-amendment claims, review of the post-amendment claims may be missing.',
        },
      },
      rule: {
        condition: 'If the amendment substantively changed the claims and the office action compares only the pre-amendment claims → finding (TRUE).',
      },
    },
    tmSearch: {
      title: 'String · phonetic · image search axes',
      blurb: 'A fictional trademark case: toggle the string, phonetic, and image search axes and compare the review candidates each axis produces.',
      summary1: 'The fictional word mark "NOVATERRA" has been filed.',
      summary2: 'The string, phonetic, and image axes each produce different evidence and can be toggled independently.',
      summary3: 'Scores are pre-authored simulated similarity and are never presented as legal similarity judgments.',
      doc: {
        mark: 'Filed mark (fictional)',
        axisString: 'String search configuration (fictional)',
        axisPhonetic: 'Phonetic search configuration (fictional)',
        axisImage: 'Image search configuration (fictional)',
      },
      docVariants: {
        mark: { v1: 'Mark record v1' },
        axisString: { v1: 'String axis v1' },
        axisPhonetic: { v1: 'Phonetic axis v1' },
        axisImage: { v1: 'Image axis v1' },
      },

      span: {
        m1: {
          text: 'Mark: NOVATERRA (fictional word mark)',
          loc: 'Application — mark field',
        },
        m2: {
          text: 'Goods: data-processing software, etc. (fictional)',
          loc: 'Application — goods field',
        },
        s1: {
          text: 'String search: exact and partial matches of "NOVATERRA" (simulated)',
          loc: 'Search config — string axis',
        },
        p1: {
          text: 'Phonetic search: near-pronunciation candidates (simulated)',
          loc: 'Search config — phonetic axis',
        },
        i1: {
          text: 'Image search: figurative-similarity candidates (simulated)',
          loc: 'Search config — image axis',
        },
      },      f: {
        axisString: {
          label: 'String axis search executed',
          explain: 'If this axis is off, string-based candidates are unavailable and the rule stays UNKNOWN.',
        },
        axisPhonetic: {
          label: 'Phonetic axis search executed',
          explain: 'If this axis is off, phonetic candidates are unavailable and the rule stays UNKNOWN.',
        },
        axisImage: {
          label: 'Image axis search executed',
          explain: 'If this axis is off, image candidates are unavailable and the rule stays UNKNOWN.',
        },
      },
      rule: {
        condition: 'If an axis is on and candidates exist → finding (TRUE). Scores are simulated similarity.',
      },
      cand: {
        1: 'NOVATERRA (identical mark)',
        2: 'NOVATERA (one letter differs)',
        3: 'NOVA TERRA (space-separated)',
        4: 'NOVATERRACE (partial match)',
        5: '노바테라 (phonetically close)',
        6: 'NOVATARA (phonetically close)',
        7: 'NOBATERA (phonetically close)',
        8: 'Figurative candidate 1 (simulated shape)',
        9: 'Figurative candidate 2 (simulated shape)',
        10: 'Figurative candidate 3 (simulated shape)',
      },
    },
    dsgPartial: {
      title: 'Whole · partial · rotated views',
      blurb: 'A fictional design case with a partial-design scope: check whether rotated views exist, and leave only candidate results to a person.',
      summary1: 'A partial-design scope is indicated with broken lines.',
      summary2: 'Front and bottom views exist, but there are no rotated views.',
      summary3: 'Adding rotated views changes the condition; switching the scope to the whole design makes the rule not apply.',
      doc: {
        scope: 'Scope declaration (fictional)',
        drawings: 'Drawing set (fictional)',
        views: 'Rotated view set (fictional)',
      },
      docVariants: {
        scope: {
          v1: 'Partial-design scope (fictional)',
          v2: 'Whole-design scope (fictional)',
        },
        drawings: { v1: 'Front · bottom views v1' },
        views: { v1: 'Rotated views v1' },
      },

      span: {
        sc1: {
          text: 'Part sought to be protected: the upper appearance of the product (excluding the broken-line portions)',
          loc: 'Scope declaration — partial indication',
        },
        sc2: {
          text: 'Scope: the whole appearance of the design',
          loc: 'Scope declaration — whole indication',
        },
        d1: {
          text: 'Drawing 1: front view',
          loc: 'Drawing set — 1',
        },
        d2: {
          text: 'Drawing 2: bottom view',
          loc: 'Drawing set — 2',
        },
        r1: {
          text: 'Drawing 3: rotated 45° view',
          loc: 'Rotated view — 3',
        },
      },      f: {
        scopePartial: {
          label: 'A partial-design scope is declared',
          explain: 'With a whole scope, the partial-comparison rule does not apply.',
        },
        partialLines: {
          label: 'The partial scope is indicated with broken lines',
          explain: 'Broken-line indication is required to make the partial scope clear.',
        },
        rotatedViews: {
          label: 'Rotated views exist',
          explain: 'Rotated views are needed to confirm the three-dimensional form of the partial scope.',
        },
      },
      rule: {
        condition: 'If a partial scope is declared and rotated views are absent → finding (TRUE). If rotated views exist → condition unmet (FALSE).',
      },
    },
  },

  method: {
    title: 'Research method',
    lead: 'How the research intends to validate results — datasets, leakage prevention, comparative experiments, metrics, and the meaning of UNKNOWN.',
    goldTitle: 'Gold Set',
    goldText:
      'An evaluation case set where human experts recorded both gold decisions and evidence locations. Grading checks not only accuracy but whether the evidence links are correct.',
    challengeTitle: 'Challenge Set',
    challengeText:
      'A separate set of known-difficult types (missing documents, version mismatch, counter-examples exist). General performance and hard-case performance are reported separately.',
    leakageTitle: 'Preventing data leakage',
    leakage: {
      l1: 'Gold/Challenge sets are fully separated from model-training and prompt-writing data.',
      l2: 'Rule, prompt, and model versions are frozen during evaluation and not changed until it completes.',
      l3: 'Independent blind evaluation: judges do not know which system produced an output.',
      l4: 'Shadow Mode runs alongside live operations, comparing against human judgments before ever intervening.',
    },
    compareTitle: 'Comparative experiment design',
    compareText:
      'A rules-only baseline, LLM-only, and the proposed structure (LLM structuring + rule evaluation + human review) are compared on the same case set. Same set, same metrics, same frozen versions — that is the precondition of any comparison.',
    metricsTitle: 'Metrics',
    metrics: {
      findingPrecision: 'Finding precision — share of proposed findings a human confirmed',
      findingRecall: 'Finding recall — share of real defects proposed as findings',
      f1: 'Harmonic mean of precision and recall',
      criticalMiss: 'Missed critical defects — defects that must not be missed but were',
      unknownRate: 'UNKNOWN rate — how often judgment is deferred',
      evidenceHit: 'Evidence location accuracy — how often a fact’s source location is actually correct',
    },
    unknownTitle: 'The meaning of UNKNOWN',
    unknownText:
      'UNKNOWN is not failure; it is “not judging”. With material absent, treating the case as FALSE (no problem) risks missing a defect; treating it as TRUE (defect) makes an evidence-free accusation. The system shows what is missing, why it matters, and where to obtain it.',
    unknownTable: {
      colStatus: 'State',
      colMeaning: 'Meaning',
      colAction: 'Next action',
      true: 'A simulated defect condition is met together with its required evidence',
      trueAction: 'Propose to a person as a finding',
      false: 'Required facts are confirmed but the defect condition is not met',
      falseAction: 'Record the review or move to the next rule',
      unknown: 'Documents or facts required for judgment are missing or ambiguous',
      unknownAction: 'Request the missing material or re-check extraction',
      na: 'This rule does not apply to this case or procedure',
      naAction: 'Show only applicable rules',
    },
  },

  evaluation: {
    title: 'Evaluation simulator',
    lead: 'Change assumptions over a simulated case set and see how performance and human review volume respond.',
    simulatedNote:
      'Every number on this screen is an example from fabricated data, not a real research result. Sample sizes, formulas, and denominators are shown.',
    inputsTitle: 'Assumptions',
    inputs: {
      missingRate: 'Document missing rate',
      missingRateHint: 'Probability a required document is absent (0–40%)',
      extractionAcc: 'Fact extraction accuracy',
      extractionAccHint: 'Probability an extracted fact matches the gold value (70–100%)',
      reviewerRate: 'Reviewer confirmation rate',
      reviewerRateHint: 'Share of findings a reviewer actually confirms (0–100%)',
      threshold: 'Candidate search threshold',
      thresholdHint: 'Only candidates at or above this score are shown to a person (0.1–0.9)',
    },
    outputsTitle: 'Recomputed results',
    sampleTitle: 'Part of the simulated sample (first 10 rows)',
    sampleNote: 'Aggregated over all {n} cases. The table shows the first 10.',
    sampleCols: {
      caseNo: 'Case #',
      defect: 'Gold defect',
      missing: 'Docs missing',
      extract: 'Extraction ok',
      score: 'Candidate score',
      proposed: 'Proposed',
      confirmed: 'Human confirmed',
    },
    defectTypes: { none: 'None', minor: 'Minor', critical: 'Critical' },
    yes: 'Yes',
    no: 'No',
    outputs: {
      precision: 'Finding precision',
      recall: 'Finding recall',
      f1: 'F1',
      criticalMiss: 'Missed critical defects',
      unknownRate: 'UNKNOWN rate',
      evidenceHit: 'Evidence location accuracy',
      reviewVolume: 'Expected reviews',
    },
    formulasTitle: 'Formulas and denominators',
    formulasIntro: 'Denominators: {n} simulated cases, {defects} with a defect.',
    formulaPrecision: 'Precision = confirmed findings ÷ all proposed findings',
    formulaRecall: 'Recall = proposed defects ÷ all defects',
    formulaF1: 'F1 = 2 × (precision × recall) ÷ (precision + recall)',
    thresholdTitle: 'Raising the threshold',
    thresholdText:
      'A higher threshold proposes fewer candidates, so precision rises — but low-scoring defects may go undetected. Lowering it raises recall but increases review volume. Seeing that trade-off is the point of this screen.',
    goalsTitle: 'Recommended goals from the report',
    goalsNote:
      'The following are recommended goals stated in the report. No simulated graph on this site represents a value already achieved.',
    goals: {
      g1: 'Evidence linkage 100% — every fact carries a source location',
      g2: 'Zero fabricated citations — evidence that does not exist is forbidden',
      g3: 'Long-term goal: recall of critical quality defects ≥ 95%',
    },
    resetInputs: 'Reset assumptions',
  },

  governance: {
    title: 'Trust and responsibility',
    lead: 'Model-path policy by data grade, reproducibility of diagnostic paths, and approval boundaries. This screen never makes real network requests.',
    gradesTitle: 'Fictional data-grade policy matrix',
    gradesIntro: 'Select a grade to see which simulated model paths become available.',
    grades: {
      PUBLIC: { name: 'Public', desc: 'Published literature, statistics, statutes' },
      UNPUBLISHED: { name: 'Unpublished', desc: 'Unpublished filing and examination material' },
      RESTRICTED: { name: 'Restricted', desc: 'Confidential case material' },
    },
    modelPaths: {
      onPrem: 'On-premises model',
      domesticCloud: 'Domestic cloud (SLA)',
      publicCloud: 'Public-sector dedicated cloud',
      overseasApi: 'Overseas commercial API',
      openModel: 'Open model',
    },
    allowed: 'Allowed',
    conditional: 'Conditional',
    forbidden: 'Forbidden',
    matrixNote: 'This matrix is a fictional example policy, not a real institutional policy.',
    snapshotTitle: 'Example case snapshot',
    snapshotIntro: 'Recording acquisition time, source hash, versions, and human review history lets you check which diagnostic path is reproduced for the same input and versions.',
    snapshot: {
      acquiredAt: 'Acquired at',
      acquiredAtVal: '2026-08-10 09:41 (simulated)',
      docHash: 'Source hash',
      docHashVal: 'sha256:9f2c…e7a1 (example string — not the text of a real confidential case)',
      factVersion: 'Fact version',
      factVersionVal: 'facts-v2.4.1',
      ruleVersion: 'Rule version',
      ruleVersionVal: 'PEQ-IS-014 v1.0.0',
      promptVersion: 'Prompt & model version',
      promptVersionVal: 'prompt-v14 · model-2026-08 (simulated)',
      reviewHistory: 'Human review history',
      reviewHistoryVal: '2026-08-10 deferred (needs evidence) → 2026-08-12 confirmed (simulated)',
    },
    reproducibilityTitle: 'Reproduction steps',
    reproducibility: {
      r1: 'Load the same case snapshot (identical source hash).',
      r2: 'Re-extract facts with the same extractor version.',
      r3: 'Evaluate with the same rule, prompt, and model versions.',
      r4: 'Compare the generated evidence trace with the previous record.',
    },
    approvalTitle: 'Approval boundaries',
    approval: {
      a1: 'Model paths are constrained by data grade and procedural stage.',
      a2: 'Rule-produced findings never reach a case without human review.',
      a3: 'Rule changes carry versions and effective dates and never rewrite past decisions.',
      a4: 'Narrow LLM conditions (L3) are always presented with evidence locations; without evidence the result is UNKNOWN.',
    },
    limitationTitle: 'Limits of the research',
    limitationText:
      'The policy matrix and snapshot on this exhibit are design examples. Real security policy, audit criteria, and personal-data handling must be defined through separate official procedures, which this site does not replace.',
  },

  roadmap: {
    title: 'Build scenarios',
    lead: 'Low / Medium / High planning estimates from the report, with phased outputs and transition conditions.',
    estimateNote:
      'Low 9–12 months · 8–12 FTE · ₩0.8–1.2B; Medium 18–24 months · 20–30 FTE · ₩2.8–4.5B; High 30–36 months · 45–70 FTE · ₩8–13B (KRW). These are planning estimates for policy review, not confirmed budgets or quotations.',
    colScenario: 'Scenario',
    colDuration: 'Duration',
    colFte: 'Staffing (FTE)',
    colBudget: 'Estimated budget',
    colFocus: 'Focus',
    scenarios: {
      low: {
        name: 'Low',
        focus: 'Patent/utility MVP — focus on material linkage and rule-engine validation',
      },
      medium: {
        name: 'Medium',
        focus: 'Trademark/design extension, Gold·Shadow evaluation, governance framework',
      },
      high: {
        name: 'High',
        focus: 'Full-right operations and audit, up to an automated rule-improvement pipeline',
      },
    },
    phasesTitle: 'Phased outputs and transition conditions',
    phases: {
      p1: {
        title: 'Material linkage',
        output: 'Case document lists, acquisition plans, source hashes and version records',
        gate: 'Verification that 100% of required documents can be acquired',
      },
      p2: {
        title: 'Patent MVP',
        output: 'Fact extractor, rule engine, UNKNOWN handling, human review UI',
        gate: 'Gold Set metrics achieved + security review passed',
      },
      p3: {
        title: 'Gold·Shadow validation',
        output: 'Gold/Challenge evaluation report, Shadow Mode parallel operation',
        gate: 'Shadow Mode metrics reach targets against human judgments',
      },
      p4: {
        title: 'Trademark & design extension',
        output: 'String/phonetic/image axes, partial-design scope comparison',
        gate: 'Per-right Gold Set metrics + data-grade policy applied',
      },
      p5: {
        title: 'Operations & audit',
        output: 'Operations manual, audit trail, rule version management',
        gate: 'Periodic audits and the feedback loop documented and running',
      },
    },
    gateNote: 'Each gate is a quality/security condition for the next phase; failing it returns to the previous phase.',
    caipexContext: 'CAIPEX support context: academic support and expert collaboration during the research and validation phases are a premise of these scenarios.',
  },

  sources: {
    title: 'Sources & glossary',
    lead: 'Baseline report, original sources, a trilingual glossary, and the boundary between research, demonstration, and operations.',
    reportTitle: 'Baseline research report',
    report: {
      title: '「Generative-AI-based research and construction plan for upgrading IP examination quality diagnosis」',
      meta: 'User-provided edited copy · September 2026',
      status: 'Material being prepared',
      statusText: 'A public file link will be placed here when ready. No broken links are kept in the meantime.',
    },
    linksTitle: 'Original sources and related sites',
    links: {
      peq: { label: 'PEQ Rule Engine experience site', note: 'A related site for exploring individual rule engines' },
      caipex: { label: 'CAIPEX society website', note: 'The supporting society' },
      reportLink: { label: 'Full research report (in preparation)', note: 'To be linked when the edited copy is provided' },
    },
    glossaryTitle: 'Glossary',
    glossaryNote: 'Key concepts from the report in Korean, English, and Japanese. Rule IDs and verdict codes in scenario data are never translated.',
    colTerm: 'Term',
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
    distinctionTitle: 'Research · demonstration · operations',
    distinction: {
      colKind: 'Kind',
      colMeaning: 'What it means on this site',
      research: { kind: 'Research', meaning: 'Hypotheses, designs, metrics, recommended goals — per the report' },
      demo: { kind: 'Demonstration', meaning: 'Fictional cases, simulated data, deterministic in-browser computation' },
      operations: { kind: 'Operations', meaning: 'Real cases, measured performance, official quality verdicts — outside this site' },
    },
    versionTitle: 'Version information',
    version: {
      site: 'Site version',
      siteVal: '1.0.0 (static experience exhibit)',
      data: 'Fictional case data',
      dataVal: 'PAT-014-DEMO · PAT-AMD-DEMO · TM-SEARCH-DEMO · DSG-PARTIAL-DEMO (simulated)',
      stack: 'Implementation',
      stackVal: 'Vite + React + TypeScript static build, no external APIs, no sign-in',
    },
  },

  chip: {
    title: 'Experience in progress',
    caseLabel: 'Case',
    verdictLabel: 'Verdict',
    stepLabel: 'Step',
    resume: 'Resume',
    restart: 'Start over',
    dismiss: 'Hide',
  },

  notFound: {
    title: 'Page not found',
    text: 'The address may have changed. Return to the home page.',
    goHome: 'Go home',
  },

  a11y: {
    logoAlt: 'Examination quality research exhibit logo',
    caipexLogoAlt: 'CAIPEX logo',
    themeToggleAria: 'Switch theme',
    langSelectAria: 'Select language',
    flowchartAlt: 'Data flow from case materials to human judgment',
    imageSlotAlt: 'Research scene illustration',
  },

  /* ── Rule metadata ── */
  rules: {
    peqis014: {
      title: 'Missing-comparison check for dependent claim features',
      authority: 'Fictional rule — the report’s PEQ-IS-014 example re-created for education',
      changelog: {
        '1.0.0': 'v1.0.0 (effective 2025-03-01): checks claim 2, D1 mapping, C comparison, office action completeness',
        '1.1.0': 'v1.1.0 (effective 2026-09-01): additionally requires claim 1',
      },
    },
    peqis021: {
      title: 'Post-amendment claim re-comparison',
      authority: 'Fictional rule — an example reviewing amendment timing and comparison targets',
      changelog: { '1.0.0': 'v1.0.0 (effective 2026-06-01): introduced post-amendment re-comparison' },
    },
    tmstr: {
      title: 'String-axis review candidates',
      authority: 'Fictional rule — string search axis',
      changelog: { '1.0.0': 'v1.0.0: string-axis candidate generation' },
    },
    tmphn: {
      title: 'Phonetic-axis review candidates',
      authority: 'Fictional rule — phonetic search axis',
      changelog: { '1.0.0': 'v1.0.0: phonetic-axis candidate generation' },
    },
    tmimg: {
      title: 'Image-axis review candidates',
      authority: 'Fictional rule — image search axis',
      changelog: { '1.0.0': 'v1.0.0: image-axis candidate generation' },
    },
    dsgif: {
      title: 'Partial-design rotated-view comparison',
      authority: 'Fictional rule — partial-design scope and view comparison',
      changelog: { '1.0.0': 'v1.0.0: partial-scope · rotated-view comparison' },
    },
  },
}

export type EnDict = typeof en
