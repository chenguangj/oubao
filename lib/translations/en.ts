const en = {
  // Nav
  nav: {
    brand: "OUBAOGAME",
    games: "Games",
    aiBattle: "Knowledge",
    token: "Token Scale",
    shop: "About",
    ranking: "Rankings",
    cta: "Contact Us",
  },

  // Hero
  hero: {
    title: "AI-Powered\nCard Gaming Platform",
    subtitle:
      "OUBAO SDN. BHD. presents a next-generation gaming platform built on massive-scale AI computation. Our systems process millions of Token transactions daily — powering real-time analysis, intelligent opponents, and player-adaptive strategies across Win Big and Landlord card games.",
    onlineNow: "3,847 concurrent sessions",
    learnMore: "Learn More \u2192",
    stats: [
      { value: "10M+", label: "Games Processed" },
      { value: "128K+", label: "Daily Token Flow" },
      { value: "0.3s", label: "AI Latency" },
    ],
  },

  // Gallery
  gallery: [
    {
      src: "/picture/gallery-win-big.jpg",
      alt: "Win Big gameplay",
      label: "Win Big \u2014 Classic 3-Card",
    },
    {
      src: "/picture/gallery-landlord.jpg",
      alt: "Landlord battle",
      label: "Landlord \u2014 Strategy Battle",
    },
    {
      src: "/picture/gallery-ai-realtime.jpg",
      alt: "AI analysis interface",
      label: "AI Real-time Analysis",
    },
    {
      src: "/picture/gallery-tournament-lobby.jpg",
      alt: "Tournament lobby",
      label: "Tournament Lobby",
    },
    {
      src: "/picture/gallery-rankings.jpg",
      alt: "Player rankings",
      label: "Rankings System",
    },
    {
      src: "/picture/gallery-token-rewards.jpg",
      alt: "Token circulation",
      label: "Token Circulation",
    },
  ],

  // Games section
  games: {
    tag: "PLATFORM CAPABILITIES",
    title: "Classic Card Games\nPowered by AI at Scale",
    cards: [
      {
        label: "WIN BIG",
        title: "Classic 3-Card Showdown",
        desc: "Our platform delivers real-time AI inference for every hand dealt. Each game session triggers multiple AI computations — from win probability calculation to opponent behavior modeling — consuming 2-5 Tokens per game. This demonstrates our infrastructure's ability to handle high-frequency, low-latency decision support at scale.",
        stats: [
          { v: "10K+", l: "daily sessions" },
          { v: "0.5s", l: "AI inference" },
        ],
      },
      {
        label: "LANDLORD",
        title: "4-Player Strategy Battle",
        desc: "Landlord's complexity demands significantly more computational resources — 5-15 Tokens per game. Our system simultaneously evaluates card combinations for 4 players, runs multi-step strategic planning, and delivers real-time recommendations. This showcases our capability to handle computationally intensive multi-agent scenarios.",
        stats: [
          { v: "50K+", l: "total games" },
          { v: "98.5%", l: "AI accuracy" },
        ],
      },
    ],
    modes: [
      {
        icon: "\uD83D\uDC64",
        title: "PvE Engine",
        desc: "AI opponents with adjustable difficulty — each level requires different Token consumption reflecting computational complexity",
      },
      {
        icon: "\uD83D\uDC65",
        title: "PvP with AI Assist",
        desc: "Real-time AI analysis available on-demand during player-vs-player matches. Each AI invocation consumes Tokens, demonstrating our system's ability to deliver instant insights under pressure.",
      },
      {
        icon: "\uD83C\uDFC6",
        title: "Tournament System",
        desc: "Large-scale competitive events with massive Token prize pools. Our infrastructure handles peak concurrent loads during tournament play, processing thousands of AI requests simultaneously.",
      },
    ],
  },

  // How It Works
  howItWorks: {
    tag: "HOW IT WORKS",
    title: "Platform Demonstration",
    steps: [
      {
        step: "01",
        title: "Access the Platform",
        desc: "Explore the system with an allocated Token balance for demonstration.",
      },
      {
        step: "02",
        title: "Select AI Complexity",
        desc: "Choose Win Big or Landlord with adjustable AI difficulty — each level consumes different Token volumes.",
      },
      {
        step: "03",
        title: "Observe AI at Scale",
        desc: "Watch real-time inference, Token consumption tracking, and adaptive AI in action.",
      },
    ],
  },

  // AI Battle section
  aiBattle: {
    tag: "KNOWLEDGE ENGINE",
    title: "Massive Knowledge Base\nPowering Every Decision",
    subtitle:
      "Our platform is backed by an extensive domain knowledge base covering millions of game scenarios. Every interaction — whether facing an AI opponent or requesting analysis — draws from structured knowledge graphs and rule engines, consuming Tokens proportional to query complexity.",
    modeA: {
      title: "MODE A \u00B7 PvE AI OPPONENT",
      steps: [
        {
          title: "Select difficulty level",
          desc: "Higher difficulty = deeper knowledge retrieval = more Token consumption",
        },
        {
          title: "System queries knowledge base for each state",
          desc: "Win Big: ~2-5 Tokens/game, Landlord: ~5-15 Tokens/game",
        },
        {
          title: "Continuous scenario adaptation",
          desc: "Knowledge base dynamically adjusts strategies based on game context",
        },
      ],
    },
    modeB: {
      title: "MODE B \u00B7 ON-DEMAND ANALYSIS",
      steps: [
        {
          title: "Players compete in PvP",
          desc: "Real-time matches against other players",
        },
        {
          title: "Knowledge-based analysis available anytime",
          desc: "Each analysis request costs 3-8 Tokens",
        },
        {
          title: "Instant decision support delivered",
          desc: "Win probability, optimal action, and risk assessment backed by domain knowledge",
        },
      ],
    },
    features: [
      {
        icon: "\uD83C\uDFAF",
        title: "Probability Knowledge Engine",
        desc: "Draws from a structured knowledge base covering millions of card combination scenarios, remaining deck compositions, and opponent behavior patterns to deliver probability assessments in under 300 milliseconds.",
      },
      {
        icon: "\uD83E\uDDE0",
        title: "Strategic Knowledge Graph",
        desc: "Our knowledge graph encodes expert-level strategic reasoning across thousands of game situations. It maps optimal plays, risk-reward tradeoffs, and contextual decision rules accumulated from 12M+ historical games.",
      },
      {
        icon: "\uD83E\uDD16",
        title: "Scenario-Driven AI Opponents",
        desc: "AI opponents at each difficulty level draw from increasingly deep layers of our knowledge base — from basic rule sets to complex multi-step strategic scenarios, consuming proportionally more Tokens.",
      },
      {
        icon: "\uD83D\uDCCA",
        title: "Automated Game Review",
        desc: "Post-game analysis cross-references every decision against our knowledge base of optimal plays. Each review consumes 10 Tokens, querying millions of scenario entries to provide comprehensive feedback.",
      },
    ],
  },

  // AI Tech section
  aiTech: {
    tag: "TECHNICAL ARCHITECTURE",
    title: "Knowledge-Driven Platform Infrastructure",
    stats: [
      { value: 12, suffix: "M+", label: "Scenarios Indexed" },
      { value: 300, suffix: "ms", label: "Query Latency" },
      { value: 500, suffix: "K+", label: "Rule Entries" },
      { value: 50, suffix: "+", label: "Domain Models" },
    ],
    engineTitle: "Real-time Knowledge Retrieval Engine",
    engineDesc:
      "Our platform retrieves and applies domain knowledge from a massive structured knowledge base in under 300 milliseconds — covering millions of game scenarios, card combinations, and strategic decision rules.",
    engineFeatures: [
      "Structured scenario knowledge base",
      "Behavioral pattern matching",
      "Risk-reward rule engine",
      "Multi-step strategic planning",
    ],
    analysisActive: "Analysis Active",
    strength: "Strength",
    winRate: "Win Rate",
    action: "Action",
  },

  // Token section
  token: {
    tag: "TOKEN SCALE",
    title: "Massive Token Throughput\nPowers the Platform",
    tableTitle: "Token Consumption per Operation",
    tableHeaders: ["Operation", "Token Cost", "Computational Load"],
    tableRows: [
      {
        scenario: "Win Big vs AI",
        cost: "2-5 Tokens/game",
        note: "Scales with AI difficulty",
        isPositive: false,
      },
      {
        scenario: "Landlord vs AI",
        cost: "5-15 Tokens/game",
        note: "Full multi-agent computation",
        isPositive: false,
      },
      {
        scenario: "On-demand AI Analysis",
        cost: "3-8 Tokens",
        note: "Real-time inference pipeline",
        isPositive: false,
      },
      {
        scenario: "Post-game AI Review",
        cost: "10 Tokens",
        note: "Deep analytical processing",
        isPositive: false,
      },
      {
        scenario: "Daily System Allocation",
        cost: "+5 Tokens",
        note: "Platform sustainability",
        isPositive: true,
      },
    ],
    liveTitle: "Live Token Throughput",
    liveLabel: "Tokens processed today",
    liveStats: [
      { label: "Consumed today", value: "128,400" },
      { label: "Allocated today", value: "45,200" },
      { label: "Active sessions", value: "3,847" },
    ],
  },

  // Testimonials
  testimonials: {
    tag: "CLIENT FEEDBACK",
    title: "Trusted by Players & Partners",
    reviews: [
      {
        name: "Alex W.",
        role: "Platform Tester",
        text: "The AI analysis speed is remarkable. Sub-300ms response times with this level of accuracy shows serious engineering capability.",
        stars: 5,
      },
      {
        name: "Sarah K.",
        role: "Beta User",
        text: "The difficulty scaling is seamless. You can feel the AI getting smarter at each level — and the Token system makes the computation transparent.",
        stars: 5,
      },
      {
        name: "Raj M.",
        role: "Industry Analyst",
        text: "Processing 128K+ Tokens daily across thousands of concurrent games — this is enterprise-grade AI infrastructure applied to gaming.",
        stars: 5,
      },
    ],
  },

  // Shop section (Company capabilities on homepage)
  shop: {
    tag: "ABOUT OUBAO",
    title: "Our Technical Capabilities",
    plans: [
      {
        name: "AI Engine",
        price: "",
        period: "",
        sub: "Deep learning at scale",
        features: [
          "12M+ games trained",
          "50+ AI models",
          "Sub-300ms inference",
          "Self-improving algorithms",
        ],
        highlight: false,
        cta: "Learn More",
      },
      {
        name: "Infrastructure",
        price: "",
        period: "",
        sub: "Enterprise-grade platform",
        features: [
          "128K+ daily Token throughput",
          "Distributed edge computing",
          "99.9% uptime SLA",
          "Auto-scaling architecture",
          "Real-time synchronization",
          "Southeast Asia coverage",
        ],
        highlight: true,
        cta: "Learn More",
      },
      {
        name: "Game Platform",
        price: "",
        period: "",
        sub: "Full-stack development",
        features: [
          "Win Big & Landlord",
          "Multi-agent AI systems",
          "PvE / PvP / Tournament",
          "Certified RNG",
          "Cross-platform support",
          "Token economy design",
        ],
        highlight: false,
        cta: "Learn More",
      },
    ],
  },

  // Security
  security: {
    tag: "SECURITY & COMPLIANCE",
    title: "Enterprise-Grade Security",
    items: [
      {
        title: "End-to-End Encryption",
        desc: "All data secured with AES-256 encryption.",
      },
      {
        title: "Certified RNG",
        desc: "Independently audited random number generation.",
      },
      {
        title: "Anti-Cheat Engine",
        desc: "ML-powered detection prevents collusion and exploits.",
      },
      {
        title: "Secure Infrastructure",
        desc: "PCI-DSS compliant with SOC 2 Type II certification.",
      },
    ],
  },

  // Rankings section
  ranking: {
    tag: "RANKING SYSTEM",
    title: "Competitive Intelligence\nLeaderboard",
    subtitle:
      "Our ranking system processes player performance data in real-time, consuming Tokens to power ELO calculations, win-rate analysis, and AI efficiency scoring across thousands of concurrent players.",
    players: [
      {
        rank: "\uD83E\uDD47",
        name: "CardMaster",
        wins: "1,247 wins",
        winRate: "78.3%",
      },
      {
        rank: "\uD83E\uDD48",
        name: "PokerPro",
        wins: "1,102 wins",
        winRate: "75.1%",
      },
      {
        rank: "\uD83E\uDD49",
        name: "AI_Slayer",
        wins: "986 wins",
        winRate: "72.8%",
      },
    ],
    liveTitle: "Live Platform Activity",
  },

  // Marquee
  marquee: {
    row1: [
      "Win Big",
      "Landlord",
      "AI Analysis",
      "Token Economy",
      "Live Inference",
      "Rankings",
      "Tournament",
      "Game Review",
      "Smart Play",
      "Scalability",
    ],
    row2: [
      "Probability Engine",
      "Optimal Play",
      "Neural Networks",
      "Real-time",
      "Multi-agent",
      "Edge Computing",
      "Low Latency",
      "High Throughput",
      "Token Flow",
      "AI at Scale",
    ],
  },

  // CTA
  cta: {
    title: "See Our Platform\nIn Action",
    subtitle:
      "Witness real-time AI inference, adaptive difficulty scaling, and massive Token throughput — all built and operated by OUBAO SDN. BHD. Contact us to arrange a demonstration or partnership discussion.",
    button: "Contact Us",
  },

  // Games Page
  gamesPage: {
    tag: "GAME CAPABILITIES",
    heroTitle: "Two Classic Games,\nMassive AI Computation",
    heroDesc:
      "Explore the technical depth of our Win Big and Landlord implementations. Each game showcases different aspects of our AI infrastructure and Token consumption scale.",
    gallery: [
      {
        src: "/picture/gameplay-win-big.jpg",
        alt: "Win Big table",
        label: "Win Big Table",
      },
      {
        src: "/picture/gameplay-landlord.jpg",
        alt: "Landlord gameplay",
        label: "Landlord Gameplay",
      },
      {
        src: "/picture/ai-pve-interface.jpg",
        alt: "AI analysis panel",
        label: "AI Analysis Panel",
      },
      {
        src: "/picture/gameplay-pvp.jpg",
        alt: "PvP battle",
        label: "PvP Battle",
      },
      {
        src: "/picture/gameplay-season.jpg",
        alt: "Season mode",
        label: "Season Mode",
      },
    ],
    winBig: {
      title: "Win Big",
      subtitle: "3-Card Showdown \u2022 2\u20136 Players",
      rulesTitle: "Game Mechanics",
      rulesP1:
        "Fast-paced 3-card poker. Each player receives three cards face-down. Bet in rounds \u2014 follow, raise, or fold.",
      rulesP2:
        "Hand rankings: Three of a Kind \u2192 Straight Flush \u2192 Flush \u2192 Straight \u2192 Pair \u2192 High Card. Highest hand wins the pot.",
      aiFeaturesTitle: "AI Capabilities Demonstrated",
      aiFeatures: [
        {
          label: "Hand Strength Analysis",
          desc: "Real-time win probability computed against all possible opponent combinations.",
        },
        {
          label: "Behavioral Pattern Detection",
          desc: "ML-powered analysis of opponent betting patterns to identify bluffs and tendencies.",
        },
        {
          label: "Dynamic Odds Engine",
          desc: "Recalculates win odds as game state evolves — each computation consuming Tokens.",
        },
      ],
      tokenTitle: "Token Consumption Scale",
      tokenItems: [
        {
          label: "vs AI (Easy)",
          cost: "2 Tokens/game",
          desc: "Basic inference",
        },
        {
          label: "vs AI (Master)",
          cost: "5 Tokens/game",
          desc: "Deep computation",
        },
        {
          label: "On-demand Analysis",
          cost: "3 Tokens/use",
          desc: "Real-time inference",
        },
      ],
    },
    landlord: {
      title: "Landlord",
      subtitle: "Strategic Card Battle \u2022 4 Players",
      rulesTitle: "Game Mechanics",
      rulesP1:
        "A 4-player card game using a 54-card deck. One player becomes the \u201CLandlord\u201D and plays against three \u201CFarmers\u201D who team up.",
      rulesP2:
        "The Landlord receives 3 extra cards but must beat all opponents alone. Strategic card combinations: singles, pairs, triples, sequences, bombs, and rockets.",
      aiFeaturesTitle: "AI Capabilities Demonstrated",
      aiFeatures: [
        {
          label: "Combo Optimization",
          desc: "Evaluates all possible card splitting strategies — computationally intensive multi-path analysis.",
        },
        {
          label: "Multi-agent Coordination",
          desc: "AI coordinates strategies across multiple players simultaneously.",
        },
        {
          label: "Probabilistic Card Tracking",
          desc: "Maintains probability distributions for unplayed cards in real-time.",
        },
      ],
      tokenTitle: "Token Consumption Scale",
      tokenItems: [
        {
          label: "vs AI (Easy)",
          cost: "5 Tokens/game",
          desc: "Standard computation",
        },
        {
          label: "vs AI (Master)",
          cost: "15 Tokens/game",
          desc: "Maximum inference depth",
        },
        {
          label: "On-demand Analysis",
          cost: "5\u20138 Tokens/use",
          desc: "Full strategic analysis",
        },
      ],
    },
    modes: {
      title: "Platform Modes",
      desc: "Three distinct operational modes — each demonstrating different Token consumption patterns and AI capabilities.",
      items: [
        {
          title: "PvE Engine",
          desc: "AI opponents from Beginner to Master. Each difficulty level represents increasing computational complexity and Token consumption.",
        },
        {
          title: "PvP with AI Assist",
          desc: "Real player matches with optional AI analysis. On-demand inference demonstrates our ability to deliver instant insights at scale.",
        },
        {
          title: "Tournament Infrastructure",
          desc: "Large-scale competitive events handling peak concurrent loads — thousands of simultaneous AI computations.",
        },
      ],
    },
    cta: {
      title: "See Our Games in Action",
      desc: "Our game infrastructure demonstrates real-time AI inference, adaptive difficulty scaling, and massive Token throughput across Win Big and Landlord. Contact us to learn more about our platform capabilities.",
      button: "Contact Us",
    },
    whyPlay: {
      title: "Why OUBAO's Platform?",
      desc: "We combine proven card game mechanics with enterprise-grade AI infrastructure to demonstrate what's possible when computation meets gaming.",
      points: [
        {
          title: "Fair & Transparent",
          desc: "Certified RNG ensures truly random card distribution. Every shuffle is cryptographically verified and auditable. Token consumption is transparent and proportional to computational work performed.",
        },
        {
          title: "AI That Teaches & Adapts",
          desc: "Our AI actively helps players improve. Post-game reviews, real-time coaching, and adaptive difficulty demonstrate sophisticated ML capabilities that go beyond simple opponent simulation.",
        },
        {
          title: "Southeast Asian Infrastructure",
          desc: "Built with low-latency edge computing nodes across Malaysia, Indonesia, Thailand, and Philippines. Localized support in Bahasa Melayu and English. Registered and operated from Kuala Lumpur.",
        },
        {
          title: "Sustainable Token Economy",
          desc: "Token-based architecture ensures sustainable AI deployment. Every Token consumed represents real computational work — making the system self-regulating and transparent in its resource usage.",
        },
      ],
    },
  },

  // AI Page
  aiPage: {
    tag: "KNOWLEDGE SYSTEM",
    heroTitle: "Massive Domain Knowledge\nBehind Every Move",
    heroDesc:
      "Our platform is powered by an extensive domain knowledge base — covering millions of game scenarios, strategic decision rules, and behavioral patterns. This structured knowledge enables real-time decision support at scale, consuming Token resources with every query.",
    live: "LIVE",
    gamesAnalyzed: "Scenarios Indexed",
    architecture: {
      title: "System Architecture",
      desc: "Multi-layered knowledge retrieval pipeline with specialized modules. Each layer queries domain knowledge, consuming Tokens proportional to retrieval depth and complexity.",
      modules: [
        {
          title: "Game State Engine",
          desc: "Maintains real-time representation of game state, tracking all visible cards, player actions, and contextual signals for knowledge base queries.",
        },
        {
          title: "Domain Knowledge Base",
          desc: "Structured repository of 12M+ indexed game scenarios, expert strategies, and optimal play patterns. The core reference layer for all decision support.",
        },
        {
          title: "Scenario Matching Engine",
          desc: "Matches current game state against millions of indexed scenarios to find relevant strategic precedents — the most Token-intensive retrieval layer.",
        },
        {
          title: "Behavioral Pattern Library",
          desc: "Maintains a library of opponent behavior archetypes and tendencies, matching observed actions against known patterns for prediction.",
        },
        {
          title: "Strategy Rule Engine",
          desc: "Applies structured decision rules from our knowledge graph, combining scenario matches with behavioral data to recommend optimal actions.",
        },
        {
          title: "Edge Retrieval Pipeline",
          desc: "Full knowledge retrieval pipeline runs in under 300ms, deployed across distributed edge nodes in Southeast Asia for minimal latency.",
        },
      ],
    },
    performance: {
      title: "Platform Metrics",
      desc: "Key metrics demonstrating our knowledge base coverage and retrieval performance.",
      stats: [
        { value: "12M+", label: "Scenarios Indexed" },
        { value: "<300ms", label: "Retrieval Latency" },
        { value: "500K+", label: "Strategic Rules" },
        { value: "99.9%", label: "Uptime SLA" },
      ],
      actionTitle: "Knowledge System in Action",
      actionDesc:
        "See how our system queries the knowledge base in real-time — matching game states against millions of indexed scenarios to deliver clear, evidence-based recommendations.",
      actionFeatures: [
        "Matches against 12M+ indexed game scenarios",
        "Cross-references behavioral pattern library in real-time",
        "Delivers knowledge-backed recommendations in under 300ms",
      ],
    },
    difficulty: {
      title: "Knowledge Depth Levels",
      desc: "Four distinct levels — each querying progressively deeper layers of our domain knowledge base. Higher levels access more complex strategic scenarios and consume more Tokens per query.",
      tokenCostLabel: "Token Cost",
      levels: [
        {
          level: "Beginner",
          elo: "800\u20131200",
          desc: "Queries basic rule sets and common scenarios. Low Token consumption — accesses foundational knowledge layer with limited strategic depth.",
          tokenCost: "Low (2-3)",
        },
        {
          level: "Intermediate",
          elo: "1200\u20131600",
          desc: "Accesses intermediate strategic knowledge including card counting patterns and bluff detection rules. Medium Token consumption for deeper retrieval.",
          tokenCost: "Medium (4-6)",
        },
        {
          level: "Advanced",
          elo: "1600\u20132000",
          desc: "Queries advanced strategic scenarios with multi-step planning rules and opponent modeling. High Token consumption reflects complex multi-layer knowledge retrieval.",
          tokenCost: "High (8-12)",
        },
        {
          level: "Master",
          elo: "2000+",
          desc: "Full-depth knowledge base access — querying the complete repository of expert scenarios, edge cases, and optimal counter-strategies. Maximum Token consumption.",
          tokenCost: "Premium (15+)",
        },
      ],
    },
    howAiHelps: {
      title: "Knowledge System Capabilities",
      desc: "Our system goes beyond simple computation — it leverages a massive, structured domain knowledge base built from millions of real game scenarios to provide contextual, evidence-based decision support.",
      items: [
        {
          title: "Pre-game Knowledge Retrieval & Player Profiling",
          desc: "Before a session begins, the system queries the knowledge base to match the player's historical patterns against known archetypes. Drawing from millions of indexed player profiles and strategic tendencies, it generates a contextual brief — identifying strengths, predicting matchups, and suggesting focus areas based on documented precedents from similar player types.",
        },
        {
          title: "Real-time Scenario Matching Pipeline",
          desc: "During live gameplay, every analysis request triggers our scenario matching pipeline: game state encoding → knowledge base query → scenario matching → rule engine evaluation → recommendation formatting. The system matches the current situation against 12M+ indexed scenarios in under 300ms, consuming 3-8 Tokens per query. At peak load, we process 1,200+ simultaneous knowledge queries.",
        },
        {
          title: "Post-game Knowledge-Based Review",
          desc: "After each session, the system cross-references every decision point against the optimal plays documented in our knowledge base. Each decision is compared to expert-level precedents, alternative approaches are surfaced from similar scenarios, and a detailed evidence-based report is generated. This comprehensive review consumes 10 Tokens per session.",
        },
        {
          title: "Knowledge Base Expansion & Maintenance",
          desc: "Our knowledge base continuously grows. Every game played adds new scenario entries — new combinations, new behavioral patterns, new strategic edge cases. Over 12 months, our indexed scenarios grew from 3M to 12M+. Dedicated teams curate and validate new entries weekly, ensuring knowledge quality and relevance.",
        },
        {
          title: "Multi-scenario Strategic Coordination",
          desc: "In Landlord (4-player games), the system simultaneously queries knowledge for multiple player perspectives — farmer cooperation strategies, landlord counter-plays, and alliance dynamics. This requires cross-referencing multiple scenario libraries simultaneously, consuming 3x more Tokens than single-perspective queries to cover the exponential increase in relevant knowledge.",
        },
        {
          title: "Behavioral Pattern Library",
          desc: "Our behavioral pattern library catalogs thousands of documented player archetypes and tendencies. After just 5-10 observed actions, the system matches opponents against known behavioral patterns with high confidence. By 20+ observations, the match precision allows accurate prediction of opponent tendencies — all based on structured knowledge, not speculative modeling.",
        },
      ],
    },
    caseStudies: {
      title: "Real-World Performance Cases",
      desc: "Documented examples demonstrating our AI infrastructure's capabilities under real operating conditions.",
      items: [
        {
          title: "Peak Tournament Load — 3,800 Concurrent Games",
          scenario:
            "During our Season 11 finals, 3,800 games ran simultaneously with AI analysis active in 68% of sessions.",
          challenge:
            "Maintain sub-300ms inference latency while processing 2,584 concurrent AI requests across distributed edge nodes.",
          result:
            "Average latency: 247ms. Zero dropped requests. Token throughput peaked at 4,200/minute. Auto-scaling added 12 edge nodes within 90 seconds of load detection.",
          metric: "247ms avg latency at 3,800 concurrent",
        },
        {
          title: "Master AI vs Professional Players — 500 Game Trial",
          scenario:
            "Our Master-level AI was tested against 15 ranked professional card players over 500 games across both Win Big and Landlord.",
          challenge:
            "Demonstrate AI competitive performance against human experts while consuming a known Token budget.",
          result:
            "AI win rate: 73.2% in Win Big, 68.7% in Landlord. Total Tokens consumed: 4,750 (avg 9.5/game). Post-analysis showed AI identified optimal plays that humans missed in 34% of critical decision points.",
          metric: "73.2% win rate vs professionals",
        },
        {
          title: "Cold Start Adaptation — New Player Profiling",
          scenario:
            "Measuring how quickly our AI adapts to completely new, unseen playing styles with zero historical data.",
          challenge:
            "Achieve accurate opponent modeling within the first few hands of a new player's first session.",
          result:
            "After 5 hands: 67% prediction accuracy. After 10 hands: 87%. After 20 hands: 94%. The system builds a functional behavioral model consuming only 12 Tokens in the profiling phase.",
          metric: "94% accuracy after 20 hands",
        },
        {
          title: "24-Hour Sustained Operation — Stress Test",
          scenario:
            "Continuous 24-hour operation with sustained 2,000+ concurrent sessions and no maintenance windows.",
          challenge:
            "Demonstrate infrastructure reliability and consistent AI performance over extended operation periods.",
          result:
            "128,400 Tokens processed. 99.97% uptime (52 seconds total downtime from a single node rotation). Latency variance: ±18ms. Memory usage stable at 73% across all nodes.",
          metric: "128,400 Tokens / 99.97% uptime",
        },
      ],
    },
  },

  // Ranking Page
  rankingPage: {
    tag: "RANKING INFRASTRUCTURE",
    heroTitle: "Compete. Climb.\nDominate.",
    heroDesc:
      "Our ranking system processes performance data in real-time, consuming Tokens to power ELO calculations and AI efficiency scoring across thousands of concurrent players.",
    topPlayer: { name: "CardMaster", winRate: "78.3% Win Rate" },
    tiers: {
      title: "Ranking Tiers",
      desc: "Six competitive tiers demonstrating our ability to manage complex, dynamic player ecosystems at scale.",
      items: [
        {
          tier: "Bronze",
          range: "0\u2013999 RP",
          perks: [
            "All game modes access",
            "Basic AI analysis",
            "Daily Token allocation",
          ],
        },
        {
          tier: "Silver",
          range: "1,000\u20132,499 RP",
          perks: [
            "5% Token efficiency boost",
            "Silver profile frame",
            "Extended AI reviews",
          ],
        },
        {
          tier: "Gold",
          range: "2,500\u20134,999 RP",
          perks: [
            "10% Token efficiency",
            "Gold profile frame",
            "Priority AI processing",
          ],
        },
        {
          tier: "Platinum",
          range: "5,000\u20137,499 RP",
          perks: [
            "15% Token efficiency",
            "Platinum badge",
            "Tournament priority",
          ],
        },
        {
          tier: "Diamond",
          range: "7,500\u20139,999 RP",
          perks: [
            "20% Token efficiency",
            "Diamond effects",
            "Custom AI parameters",
          ],
        },
        {
          tier: "Grandmaster",
          range: "10,000+ RP",
          perks: [
            "25% Token efficiency",
            "Animated frame",
            "Hall of Fame eligibility",
          ],
        },
      ],
    },
    seasons: {
      title: "Seasonal System",
      subtitle: "Fresh competition every month",
      duration: "Season Duration:",
      durationDesc:
        "4 weeks. Rankings are finalized and rewards distributed at season end.",
      reset: "Soft Reset:",
      resetDesc:
        "New season RP = (Previous RP \u00D7 0.6) + Base RP. Keeps competition fresh.",
      rewards: "Rewards:",
      rewardsDesc:
        "Token allocations, exclusive cosmetics, and Season Archive access.",
      rewardsTitle: "Season 12 Rewards",
      rewardsList: [
        { tier: "Grandmaster", reward: "500 Tokens + Legendary Frame" },
        { tier: "Diamond", reward: "300 Tokens + Animated Card Back" },
        { tier: "Platinum", reward: "150 Tokens + Exclusive Avatar" },
        { tier: "Gold", reward: "80 Tokens + Gold Card Back" },
        { tier: "Silver", reward: "40 Tokens + Silver Frame" },
        { tier: "Bronze", reward: "20 Tokens + Badge" },
      ],
    },
    categories: {
      title: "Leaderboard Categories",
      desc: "Multiple ranking dimensions ensure comprehensive performance tracking.",
      items: [
        {
          title: "Win Rate",
          desc: "Highest win percentage. Min 50 games to qualify.",
        },
        {
          title: "Win Streak",
          desc: "Longest consecutive wins in a single session.",
        },
        {
          title: "Token Throughput",
          desc: "Total Tokens consumed — indicating platform engagement depth.",
        },
        {
          title: "AI Efficiency",
          desc: "Win rate relative to Tokens consumed for AI analysis.",
        },
      ],
    },
  },

  // Shop Page (now Company Capabilities page)
  shopPage: {
    tag: "ABOUT OUBAO",
    heroTitle: "Built to Deliver\nAI at Scale",
    heroDesc:
      "OUBAO SDN. BHD. is a Malaysia-registered technology company specializing in AI-powered gaming infrastructure. We combine deep learning, real-time inference, and massive-scale Token processing to build next-generation gaming platforms.",
    popular: "CORE",
    plans: {
      title: "Our Core Capabilities",
      desc: "From AI model training to real-time game inference, OUBAO has the full-stack expertise to deliver enterprise-grade gaming platforms.",
      items: [
        {
          name: "Domain Knowledge Base",
          price: "",
          period: "",
          desc: "12M+ indexed game scenarios and strategic rules",
          cta: "",
          features: [
            "Structured knowledge base covering millions of card game scenarios",
            "500K+ strategic decision rules and expert-level play patterns",
            "Behavioral pattern library with thousands of player archetypes",
            "Continuously expanding knowledge through new game data",
            "Multi-scenario knowledge retrieval for complex game states",
          ],
        },
        {
          name: "Real-time Infrastructure",
          price: "",
          period: "",
          desc: "Sub-300ms latency across Southeast Asia",
          cta: "",
          features: [
            "Distributed edge computing nodes in MY, ID, TH, PH",
            "128,000+ Token transactions processed daily",
            "99.9% uptime SLA with auto-failover",
            "Horizontal scaling for peak tournament loads",
            "Real-time WebSocket game state synchronization",
          ],
        },
        {
          name: "Game Development",
          price: "",
          period: "",
          desc: "Full-stack card game platform development",
          cta: "",
          features: [
            "Win Big (3-card poker) with AI opponent system",
            "Landlord (Fight the Landlord) with multi-agent coordination",
            "PvE, PvP, and Tournament mode infrastructure",
            "Certified RNG with cryptographic verification",
            "Cross-platform support (Web, iOS, Android)",
          ],
        },
        {
          name: "Token Economy Design",
          price: "",
          period: "",
          desc: "Sustainable AI-powered economic systems",
          cta: "",
          features: [
            "Consumption-based AI metering architecture",
            "Daily throughput of 128K+ Tokens",
            "Dynamic pricing based on computational complexity",
            "Anti-abuse and fraud detection systems",
            "Transparent on-chain audit trail capability",
          ],
        },
      ],
    },
    packs: {
      title: "Platform Scale",
      desc: "Key metrics demonstrating our operational capacity and technical depth.",
      bestValue: "",
      tokensLabel: "",
      buyNow: "",
      items: [
        {
          name: "Daily Token Throughput",
          tokens: "128K+",
          price: "Processed every day",
          bonus: "",
        },
        {
          name: "AI Response Latency",
          tokens: "<300ms",
          price: "End-to-end inference",
          bonus: "",
        },
        {
          name: "Training Dataset",
          tokens: "12M+",
          price: "Historical games analyzed",
          bonus: "",
        },
        {
          name: "Platform Uptime",
          tokens: "99.9%",
          price: "SLA guaranteed",
          bonus: "",
        },
      ],
    },
    faq: {
      title: "About OUBAO SDN. BHD.",
      items: [
        {
          q: "Who is OUBAO SDN. BHD.?",
          a: "OUBAO SDN. BHD. (Company No. 202401033748 / 1579596-M) is a private limited company incorporated in Malaysia on 14 August 2024, registered in Kuala Lumpur under the Companies Act 2016.",
        },
        {
          q: "What does OUBAO specialize in?",
          a: "We specialize in AI-powered gaming platform development — combining deep learning, real-time inference engines, and scalable Token-based economies to create intelligent card gaming experiences.",
        },
        {
          q: "What is your technical capacity?",
          a: "Our platform processes 128,000+ Tokens daily, delivers AI inference in under 300ms, and maintains 99.9% uptime across distributed edge nodes in Southeast Asia.",
        },
        {
          q: "What games has OUBAO developed?",
          a: "We have built Win Big (3-card poker) and Landlord (Fight the Landlord) — both featuring AI opponents from Beginner to Master level, real-time AI analysis, and multi-player tournament infrastructure.",
        },
        {
          q: "Where does OUBAO operate?",
          a: "Headquartered in Kuala Lumpur, Malaysia, with edge computing infrastructure deployed across Malaysia, Indonesia, Thailand, and the Philippines for low-latency regional coverage.",
        },
      ],
    },
    trust: {
      title: "Registered & Compliant",
      desc: "OUBAO SDN. BHD. is a fully registered Malaysian company operating under the Companies Act 2016, with enterprise-grade security and compliance standards.",
      badges: [
        "SSM Registered",
        "Companies Act 2016",
        "AES-256 Encryption",
        "PCI-DSS Compliant",
      ],
    },
    ctaTitle: "Partner With Us",
    ctaDesc:
      "Interested in our AI gaming infrastructure capabilities? Whether you need a complete platform build or specific AI integration, OUBAO SDN. BHD. has the expertise to deliver.",
    ctaButton: "Contact Us",
  },

  // Token Page
  tokenPage: {
    tag: "TOKEN ARCHITECTURE",
    heroTitle: "Token Economy\nat Scale",
    heroDesc:
      "Tokens are the computational currency powering our AI platform. Every Token consumed represents real AI inference work — demonstrating our infrastructure's capacity to handle massive throughput.",
    circulation: "Daily Token Throughput",
    howItWorks: {
      title: "Token Architecture",
      desc: "Tokens are consumed proportionally to AI computational complexity. This transparent consumption model demonstrates our ability to deliver and meter AI services at scale.",
      items: [
        {
          title: "Allocation",
          desc: "Tokens are distributed through system allocation, gameplay rewards, and operational grants.",
        },
        {
          title: "Consume",
          desc: "Each AI operation consumes Tokens proportional to its computational cost — from simple analysis to deep multi-agent inference.",
        },
        {
          title: "Scale",
          desc: "Our infrastructure processes 128,000+ Tokens daily across thousands of concurrent sessions — and growing.",
        },
      ],
    },
    earning: {
      title: "Token Flow Demonstration",
      subtitle: "System circulation pathways",
      items: [
        { method: "System Allocation", amount: "+5/day", effort: "Automatic" },
        {
          method: "Win vs AI (Easy)",
          amount: "+2\u20133",
          effort: "Low complexity",
        },
        {
          method: "Win vs AI (Master)",
          amount: "+5\u20138",
          effort: "High complexity",
        },
        {
          method: "Tournament Distribution",
          amount: "+50\u2013500",
          effort: "Competitive events",
        },
        {
          method: "Referral Incentive",
          amount: "+20",
          effort: "Network growth",
        },
        {
          method: "Achievement System",
          amount: "+10\u2013100",
          effort: "Varies",
        },
      ],
    },
    spending: {
      title: "Token Consumption Map",
      subtitle: "Computational cost breakdown",
      headers: ["Operation", "Token Cost", "AI Computation"],
      rows: [
        {
          action: "Win Big vs AI (Easy)",
          cost: "2 Tokens",
          gets: "Basic inference + simple AI",
        },
        {
          action: "Win Big vs AI (Master)",
          cost: "5 Tokens",
          gets: "Full pipeline + deep analysis",
        },
        {
          action: "Landlord vs AI (Easy)",
          cost: "5 Tokens",
          gets: "Multi-agent simulation",
        },
        {
          action: "Landlord vs AI (Master)",
          cost: "15 Tokens",
          gets: "Maximum depth inference",
        },
        {
          action: "On-demand Analysis",
          cost: "3\u20138 Tokens",
          gets: "Real-time probability engine",
        },
        {
          action: "Post-game Review",
          cost: "10 Tokens",
          gets: "Comprehensive AI report",
        },
      ],
    },
    cta: {
      title: "See Token Infrastructure in Action",
      desc: "Our platform demonstrates how Token-metered AI services operate at scale — 128,000+ Tokens processed daily with sub-300ms inference. Contact us to discuss implementation or partnership opportunities.",
      button: "Contact Us",
    },
    tips: {
      title: "Understanding Token Scale",
      desc: "Key metrics that demonstrate the computational depth behind our Token economy.",
      items: [
        {
          title: "128,000+ Tokens Processed Daily",
          desc: "Our platform processes over 128,000 Tokens every day — each representing real AI computation. This daily throughput demonstrates sustained infrastructure capacity.",
        },
        {
          title: "Proportional Consumption",
          desc: "Token cost directly reflects computational complexity. A Master-level Landlord game (15 Tokens) runs 7x more inference cycles than a basic Win Big game (2 Tokens).",
        },
        {
          title: "Real-time at Scale",
          desc: "Every on-demand analysis request (3-8 Tokens) triggers the full inference pipeline in under 300ms — even during peak concurrent usage of 3,800+ sessions.",
        },
        {
          title: "Sustainable Architecture",
          desc: "The Token economy ensures sustainable AI deployment. Consumption-based pricing means resources are allocated efficiently, supporting long-term platform scalability.",
        },
      ],
    },
  },

  // Contact Modal
  contactModal: {
    title: "Contact Us",
    desc: "Fill in the form below and we'll get back to you shortly.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "Your phone number",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
    sendButton: "Send Message",
    sending: "Sending...",
    successTitle: "Message Sent!",
    successDesc: "We'll respond as soon as possible.",
    errorRequired: "Please fill in all fields.",
    errorFailed: "Failed to send. Please try again later.",
    purchasePrefix: "I would like to inquire about",
  },

  // Footer
  footer: {
    brandDesc:
      "AI-powered card gaming platform by OUBAO SDN. BHD. Enterprise-grade AI infrastructure.",
    gamesTitle: "Games",
    aiTitle: "Knowledge System",
    tokenTitle: "Token Scale",
    rankingTitle: "Rankings",
    gameLinks: [
      { label: "Game Overview", href: "/games" },
      { label: "Win Big", href: "/games#win-big" },
      { label: "Landlord", href: "/games#landlord" },
      { label: "Game Modes", href: "/games#modes" },
    ],
    aiLinks: [
      { label: "AI Overview", href: "/ai" },
      { label: "Architecture", href: "/ai#architecture" },
      { label: "Performance", href: "/ai#performance" },
      { label: "Complexity Levels", href: "/ai#difficulty" },
    ],
    tokenLinks: [
      { label: "Token Architecture", href: "/token" },
      { label: "Acquisition", href: "/token#earning" },
      { label: "Consumption Map", href: "/token#spending" },
    ],
    shopTitle: "About",
    shopLinks: [
      { label: "Company Overview", href: "/about" },
      { label: "Core Capabilities", href: "/about#capabilities" },
      { label: "Platform Scale", href: "/about#scale" },
      { label: "Company Info", href: "/about#info" },
    ],
    rankingLinks: [
      { label: "Ranking Tiers", href: "/ranking#tiers" },
      { label: "Season System", href: "/ranking#seasons" },
      { label: "Leaderboards", href: "/ranking#categories" },
    ],
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#" },
    ],
    copyright: "\u00A9 2026 OUBAO SDN. BHD. All rights reserved.",
  },

  // Misc UI
  misc: {
    live: "LIVE",
    popular: "RECOMMENDED",
  },
} as const;

export default en;
