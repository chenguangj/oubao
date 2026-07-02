const en = {
  // Nav
  nav: {
    brand: "OUBAOGAME",
    games: "Games",
    aiBattle: "AI Battle",
    token: "Token",
    shop: "Shop",
    ranking: "Rankings",
    cta: "Start Playing",
  },

  // Hero
  hero: {
    title: "AI-Powered\nSmart Card Games",
    subtitle:
      "Win Big \u00B7 Poker \u00B7 Landlord \u2014 Battle AI with Tokens, or summon AI analysis for optimal plays in PvP matches. Every decision is backed by real-time intelligence. Whether you\u2019re a seasoned pro or just starting out, our AI adapts to your skill level and helps you grow.",
    onlineNow: "3,847 players online now",
    learnMore: "Learn More \u2192",
    stats: [
      { value: "10M+", label: "Games Played" },
      { value: "50K+", label: "Daily Active" },
      { value: "0.3s", label: "AI Response" },
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
      label: "Rankings",
    },
    {
      src: "/picture/gallery-token-rewards.jpg",
      alt: "Token rewards",
      label: "Token Rewards",
    },
  ],

  // Games section
  games: {
    tag: "GAME LOBBY",
    title: "Classic Card Games\nIntelligently Upgraded",
    cards: [
      {
        label: "WIN BIG",
        title: "Classic 3-Card Showdown",
        desc: "Intense psychological warfare where bluffing meets mathematics. Each round costs only a few Tokens. Supports both PvP and PvE modes \u2014 AI provides real-time win-rate analysis, opponent tendency profiling, and optimal decision suggestions to help you make the right call at every critical moment.",
        stats: [
          { v: "10K+", l: "daily players" },
          { v: "0.5s", l: "AI response" },
        ],
      },
      {
        label: "LANDLORD",
        title: "3-Player Strategy Battle",
        desc: "The beloved classic Landlord card game, reimagined with AI intelligence. AI can join as your teammate or stand as a formidable opponent. Enable AI-assist mode to receive real-time card combination analysis, sequence optimization, and counter-strategy suggestions \u2014 spend Tokens strategically to gain the decisive edge when it matters most.",
        stats: [
          { v: "50K+", l: "total games" },
          { v: "98.5%", l: "AI win rate" },
        ],
      },
    ],
    modes: [
      {
        icon: "\uD83D\uDC64",
        title: "PvE Battle",
        desc: "Spar with AI, spend Tokens for real combat experience",
      },
      {
        icon: "\uD83D\uDC65",
        title: "PvP Battle",
        desc: "Match with real players from around the world. Optionally summon AI assist at critical moments to gain strategic advantage \u2014 every assist costs Tokens, so use them wisely.",
      },
      {
        icon: "\uD83C\uDFC6",
        title: "Tournament",
        desc: "Weekly competitive events with massive Token prize pools. Climb through brackets, prove your skill against top players, and earn exclusive rewards and ranking badges.",
      },
    ],
  },

  // How It Works
  howItWorks: {
    tag: "HOW IT WORKS",
    title: "Start Playing in 3 Steps",
    steps: [
      {
        step: "01",
        title: "Create Account",
        desc: "Sign up in seconds. Get 100 free Tokens instantly.",
      },
      {
        step: "02",
        title: "Choose Your Game",
        desc: "Pick Win Big or Landlord. Set AI difficulty or match real players.",
      },
      {
        step: "03",
        title: "Play & Earn",
        desc: "Win games, earn Tokens. Climb the leaderboard.",
      },
    ],
  },

  // AI Battle section
  aiBattle: {
    tag: "AI BATTLE",
    title: "AI Powers Every Hand\nSmart Token Consumption",
    subtitle:
      "Whether battling AI directly or summoning AI analysis in PvP, every AI intervention consumes corresponding Tokens. The AI adapts its strategy based on game context, giving you personalized insights that improve over time.",
    modeA: {
      title: "MODE A \u00B7 PvE BATTLE",
      steps: [
        {
          title: "Choose game & AI difficulty",
          desc: "Beginner AI costs less, Master AI costs more",
        },
        {
          title: "Game starts, Tokens consumed per round",
          desc: "Win Big: ~2-5 Tokens/game, Landlord: ~5-15 Tokens/game",
        },
        {
          title: "Win to earn Token rewards",
          desc: "Defeat higher difficulty AI for greater rewards",
        },
      ],
    },
    modeB: {
      title: "MODE B \u00B7 AI-ASSISTED ANALYSIS",
      steps: [
        {
          title: "Play PvP normally",
          desc: "Match and play against real players",
        },
        {
          title: "Tap 'AI Analysis' button anytime",
          desc: "Each analysis costs 3-8 Tokens",
        },
        {
          title: "AI provides optimal decision advice",
          desc: "Includes win rate, suggested action, risk assessment",
        },
      ],
    },
    features: [
      {
        icon: "\uD83C\uDFAF",
        title: "Real-time Win Rate",
        desc: "AI calculates your win probability in real-time based on known cards, remaining deck composition, and opponent betting patterns.",
      },
      {
        icon: "\uD83E\uDDE0",
        title: "Optimal Play Advice",
        desc: "AI analyzes all possible card combinations, considers opponent tendencies, and recommends the mathematically optimal strategy.",
      },
      {
        icon: "\uD83E\uDD16",
        title: "AI Sparring Partner",
        desc: "Practice against AI opponents ranging from Beginner to Master difficulty. Each level uses different strategies.",
      },
      {
        icon: "\uD83D\uDCCA",
        title: "Post-game Review",
        desc: "After every game, AI generates a detailed review highlighting key decision points and suggestions for improvement.",
      },
    ],
  },

  // AI Tech section
  aiTech: {
    tag: "AI TECHNOLOGY",
    title: "Powered by Advanced AI",
    stats: [
      { value: 98, suffix: "%", label: "Accuracy" },
      { value: 300, suffix: "ms", label: "Response" },
      { value: 12, suffix: "M+", label: "Games Analyzed" },
      { value: 50, suffix: "+", label: "AI Models" },
    ],
    engineTitle: "Real-time Decision Engine",
    engineDesc:
      "Our AI evaluates every possible outcome and delivers clear, actionable recommendations in under 300 milliseconds.",
    engineFeatures: [
      "Monte Carlo win probability",
      "Opponent pattern recognition",
      "Risk-reward optimization",
      "Multi-round strategic planning",
    ],
    analysisActive: "AI Analysis Active",
    strength: "Strength",
    winRate: "Win Rate",
    action: "Action",
  },

  // Token section
  token: {
    tag: "TOKEN SYSTEM",
    title: "Tokens Are Your\nSmart Chips",
    tableTitle: "Token Consumption Rules",
    tableHeaders: ["Scenario", "Cost", "Note"],
    tableRows: [
      {
        scenario: "Win Big vs AI",
        cost: "2-5 Tokens/game",
        note: "Varies by AI difficulty",
        isPositive: false,
      },
      {
        scenario: "Landlord vs AI",
        cost: "5-15 Tokens/game",
        note: "Includes full strategy analysis",
        isPositive: false,
      },
      {
        scenario: "AI Analysis (single)",
        cost: "3-8 Tokens",
        note: "On-demand in PvP matches",
        isPositive: false,
      },
      {
        scenario: "Post-game Review",
        cost: "10 Tokens",
        note: "Full AI review report",
        isPositive: false,
      },
      {
        scenario: "Daily Check-in",
        cost: "+5 Tokens",
        note: "Free to earn",
        isPositive: true,
      },
    ],
    liveTitle: "Live Token Flow",
    liveLabel: "Tokens in circulation",
    liveStats: [
      { label: "Today consumed", value: "128,400" },
      { label: "Today generated", value: "45,200" },
      { label: "Active games", value: "3,847" },
    ],
  },

  // Testimonials
  testimonials: {
    tag: "TESTIMONIALS",
    title: "Loved by Players",
    reviews: [
      {
        name: "Alex W.",
        role: "Pro Player",
        text: "The AI analysis is incredibly accurate. It's like having a coach watching every hand.",
        stars: 5,
      },
      {
        name: "Sarah K.",
        role: "Casual Gamer",
        text: "I love playing casually against AI when I'm short on time. The difficulty scaling is perfect.",
        stars: 5,
      },
      {
        name: "Raj M.",
        role: "Tournament Player",
        text: "Post-game review changed my game completely. My win rate improved 20% in two weeks.",
        stars: 5,
      },
    ],
  },

  // Shop section
  shop: {
    tag: "SHOP",
    title: "Choose Your Token Plan",
    plans: [
      {
        name: "Starter",
        price: "Free",
        period: "",
        sub: "New player intro",
        features: [
          "100 Tokens",
          "Daily check-in bonus",
          "Basic AI analysis",
          "Win Big / Landlord",
        ],
        highlight: false,
        cta: "Claim Now",
      },
      {
        name: "Player",
        price: "$9.99",
        period: "/mo",
        sub: "For serious players",
        features: [
          "8,000 Tokens/mo",
          "Advanced AI analysis",
          "Real-time optimal plays",
          "Post-game review",
          "Ranking boost",
          "Exclusive tables",
        ],
        highlight: true,
        cta: "Subscribe",
      },
      {
        name: "Master",
        price: "$29.99",
        period: "/mo",
        sub: "Competitive players",
        features: [
          "Unlimited Tokens",
          "Master-level AI",
          "Private rooms",
          "Advanced stats",
          "Priority matching",
          "VIP support",
        ],
        highlight: false,
        cta: "Subscribe",
      },
    ],
  },

  // Security
  security: {
    tag: "SECURITY",
    title: "Fair Play Guaranteed",
    items: [
      {
        title: "End-to-End Encryption",
        desc: "All data encrypted with AES-256.",
      },
      {
        title: "Certified RNG",
        desc: "Independently audited random number generation.",
      },
      {
        title: "Anti-Cheat System",
        desc: "Prevents collusion, bots, and unfair play.",
      },
      {
        title: "Secure Payments",
        desc: "PCI-DSS compliant payment processing.",
      },
    ],
  },

  // Rankings section
  ranking: {
    tag: "RANKINGS",
    title: "Real-time Competitive\nLeaderboard",
    subtitle:
      "Weekly updated ranking system showcasing top players. Win rate, streaks, Token earnings, and AI usage efficiency all contribute to your rank.",
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
    liveTitle: "Live Game Activity",
  },

  // Marquee
  marquee: {
    row1: [
      "Win Big",
      "Landlord",
      "AI Analysis",
      "Token Rewards",
      "Live Battle",
      "Rankings",
      "Tournament",
      "Game Review",
      "Smart Play",
      "Multi-table",
    ],
    row2: [
      "Win Rate Calc",
      "Optimal Play",
      "Streak Bonus",
      "Friend Match",
      "Private Room",
      "Daily Quest",
      "Achievements",
      "Season Rank",
      "VIP Perks",
      "Token Shop",
    ],
  },

  // CTA
  cta: {
    title: "Ready to Play?\nStart Your Smart Game.",
    subtitle:
      "Sign up today and receive 100 free Tokens instantly. Experience the future of card gaming \u2014 where every hand is enhanced by AI, every decision backed by data, and every game helps you become a better player.",
    button: "Sign Up Free",
  },

  // Games Page
  gamesPage: {
    tag: "GAME DETAILS",
    heroTitle: "Two Classic Games,\nInfinite Strategy",
    heroDesc:
      "Dive deep into the mechanics of Win Big and Landlord. Learn the rules, discover AI-powered features, and master every game mode.",
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
        alt: "Card animations",
        label: "PvP Battle",
      },
      {
        src: "/picture/gameplay-season.jpg",
        alt: "Tournament bracket",
        label: "Season Mode",
      },
    ],
    winBig: {
      title: "Win Big",
      subtitle: "3-Card Showdown \u2022 2\u20136 Players",
      rulesTitle: "Game Rules",
      rulesP1:
        "Fast-paced 3-card poker. Each player receives three cards face-down. Bet in rounds \u2014 follow, raise, or fold.",
      rulesP2:
        "Hand rankings: Three of a Kind \u2192 Straight Flush \u2192 Flush \u2192 Straight \u2192 Pair \u2192 High Card. Highest hand wins the pot.",
      aiFeaturesTitle: "AI Features",
      aiFeatures: [
        {
          label: "Hand Strength Analysis",
          desc: "Real-time win probability against all possible opponent combinations.",
        },
        {
          label: "Bluff Detection",
          desc: "Analyzes opponent betting patterns to identify potential bluffs.",
        },
        {
          label: "Real-time Odds",
          desc: "Recalculates win odds as opponents fold and pot grows.",
        },
      ],
      tokenTitle: "Token Consumption",
      tokenItems: [
        {
          label: "vs AI (Easy)",
          cost: "2 Tokens/game",
          desc: "Learn the basics",
        },
        {
          label: "vs AI (Hard)",
          cost: "5 Tokens/game",
          desc: "Master-level AI",
        },
        {
          label: "AI Analysis (PvP)",
          cost: "3 Tokens/use",
          desc: "On-demand insights",
        },
      ],
    },
    landlord: {
      title: "Landlord",
      subtitle: "Strategic Card Battle \u2022 3 Players",
      rulesTitle: "Game Rules",
      rulesP1:
        "A 3-player card game using a 54-card deck. One player becomes the \u201CLandlord\u201D and plays against two \u201CFarmers\u201D who team up.",
      rulesP2:
        "The Landlord receives 3 extra cards but must beat both opponents alone. Strategic card combinations: singles, pairs, triples, sequences, bombs, and rockets.",
      aiFeaturesTitle: "AI Features",
      aiFeatures: [
        {
          label: "Combo Optimization",
          desc: "Suggests optimal way to split cards into combinations.",
        },
        {
          label: "Partner Coordination",
          desc: "Helps coordinate plays with your Farmer partner.",
        },
        {
          label: "Card Counting",
          desc: "Tracks played cards and calculates remaining probabilities.",
        },
      ],
      tokenTitle: "Token Consumption",
      tokenItems: [
        { label: "vs AI (Easy)", cost: "5 Tokens/game", desc: "Relaxed pace" },
        {
          label: "vs AI (Master)",
          cost: "15 Tokens/game",
          desc: "Expert-level play",
        },
        {
          label: "AI Analysis (PvP)",
          cost: "5\u20138 Tokens/use",
          desc: "Full combo suggestion",
        },
      ],
    },
    modes: {
      title: "Game Modes",
      desc: "Three distinct ways to play \u2014 each with unique Token dynamics and AI integration.",
      items: [
        {
          title: "PvE Battle",
          desc: "Challenge AI opponents from Beginner to Master difficulty. Perfect for practice and Token farming.",
        },
        {
          title: "PvP Battle",
          desc: "Match against real players globally. Optionally summon AI analysis at critical moments.",
        },
        {
          title: "Tournament",
          desc: "Weekly competitive events with massive Token prize pools and exclusive rewards.",
        },
      ],
    },
    cta: {
      title: "Ready to Play?",
      desc: "Jump in with 100 free Tokens and experience AI-powered card gaming. Whether you're a casual player looking for fun or a competitive strategist seeking your next challenge, OUBAOGAME has a table waiting for you.",
      button: "Start Playing",
    },
    whyPlay: {
      title: "Why Play at OUBAOGAME?",
      desc: "We combine decades of card game tradition with cutting-edge AI technology to deliver an experience unlike any other platform.",
      points: [
        {
          title: "Fair & Transparent",
          desc: "Certified RNG (Random Number Generator) ensures truly random card distribution. Every shuffle is cryptographically verified and auditable. No rigged outcomes, ever.",
        },
        {
          title: "AI That Teaches, Not Just Plays",
          desc: "Unlike other platforms where AI is just an opponent, our AI actively helps you improve. Post-game reviews highlight your mistakes and suggest better plays — turning every session into a learning opportunity.",
        },
        {
          title: "Southeast Asian Community",
          desc: "Built for players in Malaysia, Indonesia, Thailand, Philippines and beyond. Low-latency servers across the region ensure smooth gameplay. Localized support in Bahasa Melayu and English.",
        },
        {
          title: "Responsible Gaming",
          desc: "Token-based economy with daily limits ensures healthy play habits. Set your own spending caps, take breaks with our cool-down feature, and play at your own pace without pressure.",
        },
      ],
    },
  },

  // AI Page
  aiPage: {
    tag: "AI TECHNOLOGY",
    heroTitle: "The Intelligence\nBehind Every Move",
    heroDesc:
      "Our AI engine combines cutting-edge machine learning with game theory to provide real-time decision support.",
    live: "LIVE",
    gamesAnalyzed: "Games Analyzed",
    architecture: {
      title: "System Architecture",
      desc: "Multi-layered AI system with specialized modules for each aspect of game analysis.",
      modules: [
        {
          title: "Game State Engine",
          desc: "Maintains real-time representation of game state, tracking all visible cards, player actions, and historical patterns.",
        },
        {
          title: "Neural Network Core",
          desc: "Deep neural network trained on 12M+ historical games. Evaluates hand strength and generates recommendations in under 100ms.",
        },
        {
          title: "Monte Carlo Simulator",
          desc: "Runs thousands of randomized game simulations per second for precise win probability calculations.",
        },
        {
          title: "Pattern Recognition",
          desc: "Analyzes opponent betting patterns, timing tells, and tendencies to build behavioral profiles.",
        },
        {
          title: "Strategy Optimizer",
          desc: "Combines all module outputs for optimal action recommendation, considering risk and expected value.",
        },
        {
          title: "Real-time Pipeline",
          desc: "Full analysis pipeline runs in under 300ms, optimized with edge computing nodes across Southeast Asia.",
        },
      ],
    },
    performance: {
      title: "Performance Metrics",
      desc: "Continuously benchmarked against professional players and other AI systems.",
      stats: [
        { value: "98.2%", label: "Prediction Accuracy" },
        { value: "<300ms", label: "Response Latency" },
        { value: "12M+", label: "Training Games" },
        { value: "99.9%", label: "Uptime SLA" },
      ],
      actionTitle: "AI in Action",
      actionDesc:
        "Watch the AI analyze a live game situation \u2014 calculating probabilities, evaluating opponent patterns, and delivering clear recommendations.",
      actionFeatures: [
        "Evaluates 10,000+ possible outcomes per second",
        "Adapts to opponent playing style in real-time",
        "Delivers actionable advice in under 300ms",
      ],
    },
    difficulty: {
      title: "AI Difficulty Levels",
      desc: "Four distinct difficulty levels, each with unique play characteristics. Our AI adapts its strategy based on the difficulty you select, providing a tailored challenge regardless of your skill level.",
      tokenCostLabel: "Token Cost",
      levels: [
        {
          level: "Beginner",
          elo: "800\u20131200",
          desc: "Makes occasional mistakes and plays predictably. Perfect for learning fundamental card combinations, understanding game flow, and building confidence before facing tougher opponents.",
          tokenCost: "Low",
        },
        {
          level: "Intermediate",
          elo: "1200\u20131600",
          desc: "Solid strategic play with some advanced techniques like card counting and bluff detection. Challenges casual players and helps develop intermediate decision-making skills.",
          tokenCost: "Medium",
        },
        {
          level: "Advanced",
          elo: "1600\u20132000",
          desc: "Expert-level play that adapts to your strategy in real-time. Employs complex multi-step planning, opponent modeling, and risk-adjusted decision making. Only the most skilled players consistently beat this level.",
          tokenCost: "High",
        },
        {
          level: "Master",
          elo: "2000+",
          desc: "Near-optimal play using the full depth of our neural network. Extremely difficult to beat — equivalent to top 0.1% human players. Recommended only for serious competitive practice.",
          tokenCost: "Premium",
        },
      ],
    },
    howAiHelps: {
      title: "How AI Improves Your Game",
      desc: "Our AI doesn't just play against you — it plays alongside you to make you a better card player.",
      items: [
        {
          title: "Pre-game Preparation",
          desc: "Before you even sit down, AI analyzes your historical weaknesses and suggests focus areas. Whether it's improving your bluffing frequency or optimizing card combination choices, get a personalized warm-up plan.",
        },
        {
          title: "In-game Real-time Coaching",
          desc: "During PvP matches, activate AI analysis to receive instant probability calculations, opponent tendency profiles, and optimal play suggestions. See exactly what a professional player would do in your situation.",
        },
        {
          title: "Post-game Deep Review",
          desc: "After each session, receive a comprehensive AI-generated report. Every decision is graded, key turning points are highlighted, and alternative plays are explored — like having a poker coach review your hand history.",
        },
        {
          title: "Long-term Progress Tracking",
          desc: "AI tracks your improvement over weeks and months. Visualize your ELO progression, identify persistent leaks in your strategy, and celebrate milestones as you climb from beginner to advanced.",
        },
      ],
    },
  },

  // Ranking Page
  rankingPage: {
    tag: "RANKINGS & SEASONS",
    heroTitle: "Compete. Climb.\nDominate.",
    heroDesc:
      "Track your performance across seasons, earn rewards, and compete for the top spot. Every game counts toward your rank.",
    topPlayer: { name: "CardMaster", winRate: "78.3% Win Rate" },
    tiers: {
      title: "Ranking Tiers",
      desc: "Progress through 6 competitive tiers. Each unlocks new perks and higher Token earning.",
      items: [
        {
          tier: "Bronze",
          range: "0\u2013999 RP",
          perks: [
            "Access to all game modes",
            "Basic AI analysis",
            "Daily check-in bonus",
          ],
        },
        {
          tier: "Silver",
          range: "1,000\u20132,499 RP",
          perks: [
            "5% Token earning boost",
            "Silver profile frame",
            "Extended reviews",
          ],
        },
        {
          tier: "Gold",
          range: "2,500\u20134,999 RP",
          perks: [
            "10% Token boost",
            "Gold profile frame",
            "Priority matchmaking",
          ],
        },
        {
          tier: "Platinum",
          range: "5,000\u20137,499 RP",
          perks: ["15% Token boost", "Platinum badge", "Tournament priority"],
        },
        {
          tier: "Diamond",
          range: "7,500\u20139,999 RP",
          perks: ["20% Token boost", "Diamond effects", "Custom AI tuning"],
        },
        {
          tier: "Grandmaster",
          range: "10,000+ RP",
          perks: [
            "25% Token boost",
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
        "Token bonuses, exclusive cosmetics, and Season Archive access.",
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
      desc: "Multiple leaderboards ensure every play style has recognition.",
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
          title: "Token Earned",
          desc: "Total Tokens earned through gameplay.",
        },
        { title: "AI Efficiency", desc: "Win rate when using AI analysis." },
      ],
    },
  },

  // Shop Page
  shopPage: {
    tag: "TOKEN SHOP",
    heroTitle: "Get Tokens,\nPlay More",
    heroDesc:
      "Choose a plan that fits your play style. From free daily Tokens to unlimited AI-powered gaming.",
    popular: "POPULAR",
    plans: {
      title: "Subscription Plans",
      desc: "Monthly plans with recurring Token allowances. Cancel anytime.",
      items: [
        {
          name: "Starter",
          price: "Free",
          period: "",
          desc: "Perfect for new players",
          cta: "Get Started",
          features: [
            "100 Tokens on signup",
            "5 Tokens daily check-in",
            "Basic AI analysis",
            "Win Big & Landlord access",
            "Community tournaments",
          ],
        },
        {
          name: "Player",
          price: "$9.99",
          period: "/mo",
          desc: "For regular players",
          cta: "Subscribe Now",
          features: [
            "8,000 Tokens/month",
            "Advanced AI analysis",
            "Real-time optimal plays",
            "Post-game AI review",
            "Priority matchmaking",
            "Exclusive tables",
          ],
        },
        {
          name: "Master",
          price: "$29.99",
          period: "/mo",
          desc: "For competitive players",
          cta: "Go Master",
          features: [
            "Unlimited Tokens",
            "Master-level AI opponent",
            "Private game rooms",
            "Advanced statistics",
            "VIP support",
            "Early access features",
          ],
        },
      ],
    },
    packs: {
      title: "One-Time Token Packs",
      desc: "Buy as you go. No recurring commitment. Tokens never expire.",
      bestValue: "BEST VALUE",
      tokensLabel: "Tokens",
      buyNow: "Buy Now",
      items: [
        { name: "Starter", tokens: "500", price: "$4.99", bonus: "" },
        {
          name: "Value",
          tokens: "2,500",
          price: "$16.99",
          bonus: "+500 bonus",
        },
        {
          name: "Pro",
          tokens: "6,000",
          price: "$36.99",
          bonus: "+1,500 bonus",
        },
        {
          name: "Mega",
          tokens: "15,000",
          price: "$79.99",
          bonus: "+5,000 bonus",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Do Tokens expire?",
          a: "No. Purchased or earned Tokens never expire.",
        },
        {
          q: "Can I cancel my subscription?",
          a: "Yes, cancel anytime. Benefits continue until billing period ends.",
        },
        {
          q: "What payment methods are accepted?",
          a: "Visa, Mastercard, AmEx, GrabPay, Touch 'n Go eWallet, and bank transfers.",
        },
        {
          q: "Is there a refund policy?",
          a: "Unused packs within 7 days can be fully refunded.",
        },
        {
          q: "Can I gift Tokens?",
          a: "Yes! Send Tokens to any player. 5% transaction fee applies. Minimum: 50 Tokens.",
        },
      ],
    },
    trust: {
      title: "Secure & Trusted Payments",
      desc: "PCI-DSS Level 1 compliant. End-to-end encrypted. Trusted by 500,000+ players.",
      badges: [
        "PCI-DSS Compliant",
        "AES-256 Encryption",
        "Instant Delivery",
        "24/7 Support",
      ],
    },
  },

  // Token Page
  tokenPage: {
    tag: "TOKEN ECONOMY",
    heroTitle: "The Token Economy\nExplained",
    heroDesc:
      "Tokens are the fuel that powers AI analysis. Understand how to earn, spend, and maximize your Token efficiency.",
    circulation: "Tokens in Circulation Today",
    howItWorks: {
      title: "How Tokens Work",
      desc: "Tokens are consumed whenever you request AI assistance. The cost varies based on analysis complexity and game type.",
      items: [
        {
          title: "Acquire",
          desc: "Purchase Token packs, earn through check-ins, win games, or receive seasonal rewards.",
        },
        {
          title: "Spend",
          desc: "Consume Tokens for AI battles, PvP analysis, and post-game reviews.",
        },
        {
          title: "Circulate",
          desc: "Sustainable economy \u2014 skilled players maintain balance through winning alone.",
        },
      ],
    },
    earning: {
      title: "Earning Tokens",
      subtitle: "Multiple ways to earn",
      items: [
        { method: "Daily Check-in", amount: "+5/day", effort: "None" },
        { method: "Win vs AI (Easy)", amount: "+2\u20133", effort: "Low" },
        { method: "Win vs AI (Hard)", amount: "+5\u20138", effort: "Medium" },
        { method: "Tournament Prizes", amount: "+50\u2013500", effort: "High" },
        { method: "Refer a Friend", amount: "+20", effort: "None" },
        {
          method: "Achievement Unlocks",
          amount: "+10\u2013100",
          effort: "Varies",
        },
      ],
    },
    spending: {
      title: "Spending Guide",
      subtitle: "Maximize your Token efficiency",
      headers: ["Action", "Cost", "What You Get"],
      rows: [
        {
          action: "Win Big vs AI (Easy)",
          cost: "2 Tokens",
          gets: "Practice game + basic AI",
        },
        {
          action: "Win Big vs AI (Master)",
          cost: "5 Tokens",
          gets: "Expert AI + detailed analysis",
        },
        {
          action: "Landlord vs AI (Easy)",
          cost: "5 Tokens",
          gets: "Full 3-player simulation",
        },
        {
          action: "Landlord vs AI (Master)",
          cost: "15 Tokens",
          gets: "Expert AI + combo optimization",
        },
        {
          action: "AI Analysis (per use)",
          cost: "3\u20138 Tokens",
          gets: "Win probability + recommendation",
        },
        {
          action: "Post-game Review",
          cost: "10 Tokens",
          gets: "Full AI commentary report",
        },
      ],
    },
    cta: {
      title: "Start With 100 Free Tokens",
      desc: "Create your account and receive 100 Tokens instantly — enough for 20+ games. No credit card required. Start playing immediately and discover how AI-powered analysis can transform your card game strategy.",
      button: "Claim Free Tokens",
    },
    tips: {
      title: "Token Efficiency Tips",
      desc: "Maximize your Token balance with these strategies from our top players.",
      items: [
        {
          title: "Daily Check-ins Add Up",
          desc: "Never miss a day! 5 Tokens daily = 150 Tokens/month for free. That's 30+ AI-assisted games without spending a cent.",
        },
        {
          title: "Practice on Easy Before Going Hard",
          desc: "Easy AI costs 2 Tokens vs 15 for Master. Warm up on Easy mode to get your flow, then switch to Hard when you're mentally sharp.",
        },
        {
          title: "Use AI Analysis Selectively in PvP",
          desc: "Don't activate AI every hand. Save it for critical moments — when the pot is large or you're genuinely unsure. Strategic usage costs 60% less than constant activation.",
        },
        {
          title: "Win Tournaments for Big Payouts",
          desc: "Weekly tournaments offer 50-500 Token prizes. Even placing in top 10 returns more than the entry cost. High-risk, high-reward for skilled players.",
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
    purchasePrefix: "I would like to purchase",
  },

  // Footer
  footer: {
    brandDesc: "AI-powered card gaming platform. Play smarter, win bigger.",
    gamesTitle: "Games",
    aiTitle: "AI Battle",
    tokenTitle: "Token",
    shopTitle: "Shop",
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
      { label: "Difficulty Levels", href: "/ai#difficulty" },
    ],
    tokenLinks: [
      { label: "Token Overview", href: "/token" },
      { label: "Earning Tokens", href: "/token#earning" },
      { label: "Spending Guide", href: "/token#spending" },
    ],
    shopLinks: [
      { label: "Shop Overview", href: "/shop" },
      { label: "Subscription Plans", href: "/shop#plans" },
      { label: "Token Packs", href: "/shop#packs" },
      { label: "FAQ", href: "/shop#faq" },
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
    popular: "POPULAR",
  },
} as const;

export default en;
