const ms = {
  // Nav
  nav: {
    brand: "OUBAOGAME",
    games: "Permainan",
    aiBattle: "Lawan AI",
    token: "Token",
    shop: "Kedai",
    ranking: "Kedudukan",
    cta: "Mula Bermain",
  },

  // Hero
  hero: {
    title: "Permainan Kad\nDikuasakan AI",
    subtitle:
      "Win Big \u00B7 Poker \u00B7 Landlord \u2014 Lawan AI dengan Token, atau panggil analisis AI untuk permainan optimum dalam perlawanan PvP. Setiap keputusan dikuasakan kecerdasan masa nyata. Sama ada anda pemain profesional atau baru bermula, AI kami menyesuaikan diri dengan tahap kemahiran anda.",
    onlineNow: "3,847 pemain dalam talian sekarang",
    learnMore: "Ketahui Lebih \u2192",
    stats: [
      { value: "10M+", label: "Permainan" },
      { value: "50K+", label: "Aktif Harian" },
      { value: "0.3s", label: "Respons AI" },
    ],
  },

  // Gallery
  gallery: [
    {
      src: "/picture/gallery-win-big.jpg",
      alt: "Permainan Win Big",
      label: "Win Big \u2014 Kad 3 Klasik",
    },
    {
      src: "/picture/gallery-landlord.jpg",
      alt: "Pertempuran Landlord",
      label: "Landlord \u2014 Pertempuran Strategi",
    },
    {
      src: "/picture/gallery-ai-realtime.jpg",
      alt: "Antara muka analisis AI",
      label: "Analisis AI Masa Nyata",
    },
    {
      src: "/picture/gallery-tournament-lobby.jpg",
      alt: "Lobi kejohanan",
      label: "Lobi Kejohanan",
    },
    {
      src: "/picture/gallery-rankings.jpg",
      alt: "Kedudukan pemain",
      label: "Kedudukan",
    },
    {
      src: "/picture/gallery-token-rewards.jpg",
      alt: "Ganjaran Token",
      label: "Ganjaran Token",
    },
  ],

  // Games section
  games: {
    tag: "LOBI PERMAINAN",
    title: "Permainan Kad Klasik\nDinaik Taraf Pintar",
    cards: [
      {
        label: "WIN BIG",
        title: "Pertarungan 3 Kad Klasik",
        desc: "Perang psikologi yang sengit di mana tipu muslihat bertemu matematik. Setiap pusingan hanya memerlukan sedikit Token. Menyokong mod PvP dan PvE \u2014 AI menyediakan analisis kadar kemenangan masa nyata, profil kecenderungan lawan, dan cadangan keputusan optimum.",
        stats: [
          { v: "10K+", l: "pemain harian" },
          { v: "0.5s", l: "respons AI" },
        ],
      },
      {
        label: "LANDLORD",
        title: "Pertempuran Strategi 3 Pemain",
        desc: "Permainan Landlord klasik yang disayangi, diolah semula dengan kecerdasan AI. AI boleh menyertai sebagai rakan sepasukan atau berdiri sebagai lawan yang hebat. Aktifkan mod bantuan AI untuk menerima analisis kombinasi kad masa nyata dan cadangan strategi balas.",
        stats: [
          { v: "50K+", l: "jumlah permainan" },
          { v: "98.5%", l: "kadar menang AI" },
        ],
      },
    ],
    modes: [
      {
        icon: "\uD83D\uDC64",
        title: "Lawan AI",
        desc: "Berlatih dengan AI, belanja Token untuk pengalaman pertempuran sebenar",
      },
      {
        icon: "\uD83D\uDC65",
        title: "Lawan Pemain",
        desc: "Padankan dengan pemain sebenar dari seluruh dunia. Panggil bantuan AI pada saat kritikal \u2014 setiap bantuan menggunakan Token.",
      },
      {
        icon: "\uD83C\uDFC6",
        title: "Kejohanan",
        desc: "Acara kompetitif mingguan dengan kumpulan hadiah Token yang besar. Buktikan kemahiran anda dan raih ganjaran eksklusif.",
      },
    ],
  },

  // How It Works
  howItWorks: {
    tag: "CARA BERMAIN",
    title: "Mula Bermain dalam 3 Langkah",
    steps: [
      {
        step: "01",
        title: "Cipta Akaun",
        desc: "Daftar dalam beberapa saat. Dapat 100 Token percuma serta-merta.",
      },
      {
        step: "02",
        title: "Pilih Permainan",
        desc: "Pilih Win Big atau Landlord. Tetapkan kesukaran AI atau lawan pemain sebenar.",
      },
      {
        step: "03",
        title: "Bermain & Raih",
        desc: "Menang permainan, raih Token. Naik papan pendahulu.",
      },
    ],
  },

  // AI Battle section
  aiBattle: {
    tag: "LAWAN AI",
    title: "AI Kuasakan Setiap Tangan\nPenggunaan Token Pintar",
    subtitle:
      "Sama ada melawan AI secara langsung atau memanggil analisis AI dalam PvP, setiap campur tangan AI menggunakan Token yang berkaitan. AI menyesuaikan strateginya berdasarkan konteks permainan.",
    modeA: {
      title: "MOD A \u00B7 LAWAN AI",
      steps: [
        {
          title: "Pilih permainan & kesukaran AI",
          desc: "AI pemula kos rendah, AI mahir kos tinggi",
        },
        {
          title: "Permainan bermula, Token digunakan setiap pusingan",
          desc: "Win Big: ~2-5 Token/permainan, Landlord: ~5-15 Token/permainan",
        },
        {
          title: "Menang untuk mendapat ganjaran Token",
          desc: "Kalahkan AI kesukaran tinggi untuk ganjaran lebih besar",
        },
      ],
    },
    modeB: {
      title: "MOD B \u00B7 ANALISIS BANTUAN AI",
      steps: [
        {
          title: "Bermain PvP seperti biasa",
          desc: "Padankan dan bermain dengan pemain sebenar",
        },
        {
          title: "Ketik butang 'Analisis AI' bila-bila masa",
          desc: "Setiap analisis menggunakan 3-8 Token",
        },
        {
          title: "AI memberi nasihat keputusan optimum",
          desc: "Termasuk kadar menang, tindakan dicadangkan, penilaian risiko",
        },
      ],
    },
    features: [
      {
        icon: "\uD83C\uDFAF",
        title: "Kadar Menang Masa Nyata",
        desc: "AI mengira kebarangkalian menang berdasarkan kad yang diketahui dan corak pertaruhan lawan.",
      },
      {
        icon: "\uD83E\uDDE0",
        title: "Nasihat Permainan Optimum",
        desc: "AI menganalisis semua kombinasi kad dan mengesyorkan strategi optimum secara matematik.",
      },
      {
        icon: "\uD83E\uDD16",
        title: "Rakan Latihan AI",
        desc: "Lawan AI dari kesukaran Pemula hingga Mahir. Setiap tahap menggunakan strategi berbeza.",
      },
      {
        icon: "\uD83D\uDCCA",
        title: "Ulasan Pasca-permainan",
        desc: "Selepas setiap permainan, AI menghasilkan ulasan terperinci yang menyerlahkan titik keputusan utama.",
      },
    ],
  },

  // AI Tech section
  aiTech: {
    tag: "TEKNOLOGI AI",
    title: "Dikuasakan AI Canggih",
    stats: [
      { value: 98, suffix: "%", label: "Ketepatan" },
      { value: 300, suffix: "ms", label: "Respons" },
      { value: 12, suffix: "M+", label: "Permainan Dianalisis" },
      { value: 50, suffix: "+", label: "Model AI" },
    ],
    engineTitle: "Enjin Keputusan Masa Nyata",
    engineDesc:
      "AI kami menilai setiap hasil yang mungkin dan memberikan cadangan yang jelas dan boleh dilaksanakan dalam masa di bawah 300 milisaat.",
    engineFeatures: [
      "Kebarangkalian menang Monte Carlo",
      "Pengecaman corak lawan",
      "Pengoptimuman risiko-ganjaran",
      "Perancangan strategik pelbagai pusingan",
    ],
    analysisActive: "Analisis AI Aktif",
    strength: "Kekuatan",
    winRate: "Kadar Menang",
    action: "Tindakan",
  },

  // Token section
  token: {
    tag: "SISTEM TOKEN",
    title: "Token Adalah\nCip Pintar Anda",
    tableTitle: "Peraturan Penggunaan Token",
    tableHeaders: ["Senario", "Kos", "Nota"],
    tableRows: [
      {
        scenario: "Win Big lawan AI",
        cost: "2-5 Token/permainan",
        note: "Bergantung pada kesukaran AI",
        isPositive: false,
      },
      {
        scenario: "Landlord lawan AI",
        cost: "5-15 Token/permainan",
        note: "Termasuk analisis strategi penuh",
        isPositive: false,
      },
      {
        scenario: "Analisis AI (sekali)",
        cost: "3-8 Token",
        note: "Atas permintaan dalam perlawanan PvP",
        isPositive: false,
      },
      {
        scenario: "Ulasan Pasca-permainan",
        cost: "10 Token",
        note: "Laporan ulasan AI penuh",
        isPositive: false,
      },
      {
        scenario: "Daftar Masuk Harian",
        cost: "+5 Token",
        note: "Percuma",
        isPositive: true,
      },
    ],
    liveTitle: "Aliran Token Langsung",
    liveLabel: "Token dalam edaran",
    liveStats: [
      { label: "Digunakan hari ini", value: "128,400" },
      { label: "Dijana hari ini", value: "45,200" },
      { label: "Permainan aktif", value: "3,847" },
    ],
  },

  // Testimonials
  testimonials: {
    tag: "TESTIMONI",
    title: "Disayangi Pemain",
    reviews: [
      {
        name: "Alex W.",
        role: "Pemain Pro",
        text: "Analisis AI sangat tepat. Seperti mempunyai jurulatih yang memerhati setiap tangan.",
        stars: 5,
      },
      {
        name: "Sarah K.",
        role: "Pemain Kasual",
        text: "Saya suka bermain santai melawan AI apabila masa terhad. Penskalaan kesukaran sempurna.",
        stars: 5,
      },
      {
        name: "Raj M.",
        role: "Pemain Kejohanan",
        text: "Ulasan pasca-permainan mengubah permainan saya sepenuhnya. Kadar kemenangan saya meningkat 20%.",
        stars: 5,
      },
    ],
  },

  // Shop section
  shop: {
    tag: "KEDAI",
    title: "Pilih Pelan Token Anda",
    plans: [
      {
        name: "Pemula",
        price: "Percuma",
        period: "",
        sub: "Pengenalan pemain baru",
        features: [
          "100 Token",
          "Bonus daftar masuk harian",
          "Analisis AI asas",
          "Win Big / Landlord",
        ],
        highlight: false,
        cta: "Tuntut Sekarang",
      },
      {
        name: "Pemain",
        price: "RM39.90",
        period: "/bulan",
        sub: "Untuk pemain serius",
        features: [
          "8,000 Token/bulan",
          "Analisis AI lanjutan",
          "Permainan optimum masa nyata",
          "Ulasan pasca-permainan",
          "Peningkatan kedudukan",
          "Meja eksklusif",
        ],
        highlight: true,
        cta: "Langgan",
      },
      {
        name: "Mahir",
        price: "RM119.90",
        period: "/bulan",
        sub: "Pemain kompetitif",
        features: [
          "Token tanpa had",
          "AI tahap mahir",
          "Bilik peribadi",
          "Statistik lanjutan",
          "Padanan keutamaan",
          "Sokongan VIP",
        ],
        highlight: false,
        cta: "Langgan",
      },
    ],
  },

  // Security
  security: {
    tag: "KESELAMATAN",
    title: "Permainan Adil Dijamin",
    items: [
      {
        title: "Penyulitan Hujung-ke-Hujung",
        desc: "Semua data disulitkan dengan AES-256.",
      },
      {
        title: "RNG Bertauliah",
        desc: "Penjanaan nombor rawak diaudit secara bebas.",
      },
      {
        title: "Sistem Anti-Penipuan",
        desc: "Mencegah pakatan sulit, bot, dan permainan tidak adil.",
      },
      {
        title: "Pembayaran Selamat",
        desc: "Pemprosesan pembayaran patuh PCI-DSS.",
      },
    ],
  },

  // Rankings section
  ranking: {
    tag: "KEDUDUKAN",
    title: "Papan Pendahulu\nKompetitif Masa Nyata",
    subtitle:
      "Sistem kedudukan dikemas kini setiap minggu memaparkan pemain teratas. Kadar menang, rentetan, pendapatan Token, dan kecekapan penggunaan AI menyumbang kepada kedudukan anda.",
    players: [
      {
        rank: "\uD83E\uDD47",
        name: "KadMahir",
        wins: "1,247 menang",
        winRate: "78.3%",
      },
      {
        rank: "\uD83E\uDD48",
        name: "PokerPro",
        wins: "1,102 menang",
        winRate: "75.1%",
      },
      {
        rank: "\uD83E\uDD49",
        name: "AI_Slayer",
        wins: "986 menang",
        winRate: "72.8%",
      },
    ],
    liveTitle: "Aktiviti Permainan Langsung",
  },

  // Marquee
  marquee: {
    row1: [
      "Win Big",
      "Landlord",
      "Analisis AI",
      "Ganjaran Token",
      "Pertempuran Langsung",
      "Kedudukan",
      "Kejohanan",
      "Ulasan Permainan",
      "Permainan Pintar",
      "Pelbagai Meja",
    ],
    row2: [
      "Kira Kadar Menang",
      "Permainan Optimum",
      "Bonus Rentetan",
      "Perlawanan Rakan",
      "Bilik Peribadi",
      "Misi Harian",
      "Pencapaian",
      "Kedudukan Musim",
      "Keistimewaan VIP",
      "Kedai Token",
    ],
  },

  // CTA
  cta: {
    title: "Sedia Bermain?\nMulakan Permainan Pintar Anda.",
    subtitle:
      "Daftar hari ini dan terima 100 Token percuma serta-merta. Alami masa depan permainan kad \u2014 di mana setiap tangan dipertingkatkan oleh AI, setiap keputusan disokong data.",
    button: "Daftar Percuma",
  },

  // Games Page
  gamesPage: {
    tag: "BUTIRAN PERMAINAN",
    heroTitle: "Dua Permainan Klasik,\nStrategi Tanpa Had",
    heroDesc:
      "Terokai mekanik Win Big dan Landlord secara mendalam. Pelajari peraturan, temui ciri-ciri AI, dan kuasai setiap mod permainan.",
    gallery: [
      {
        src: "/picture/gameplay-win-big.jpg",
        alt: "Meja Win Big",
        label: "Meja Win Big",
      },
      {
        src: "/picture/gameplay-landlord.jpg",
        alt: "Permainan Landlord",
        label: "Permainan Landlord",
      },
      {
        src: "/picture/ai-pve-interface.jpg",
        alt: "Panel analisis AI",
        label: "Panel Analisis AI",
      },
      {
        src: "/picture/gameplay-pvp.jpg",
        alt: "Pertempuran PvP",
        label: "Pertempuran PvP",
      },
      {
        src: "/picture/gameplay-season.jpg",
        alt: "Mod Musim",
        label: "Mod Musim",
      },
    ],
    winBig: {
      title: "Menang Besar",
      subtitle: "Pertarungan 3 Kad \u2022 2\u20136 Pemain",
      rulesTitle: "Peraturan Permainan",
      rulesP1:
        "Poker 3 kad pantas. Setiap pemain menerima tiga kad tertutup. Bertaruh dalam pusingan \u2014 ikut, naikkan, atau lipat.",
      rulesP2:
        "Kedudukan tangan: Three of a Kind \u2192 Straight Flush \u2192 Flush \u2192 Straight \u2192 Pair \u2192 High Card. Tangan tertinggi memenangi pot.",
      aiFeaturesTitle: "Ciri AI",
      aiFeatures: [
        {
          label: "Analisis Kekuatan Tangan",
          desc: "Kebarangkalian menang masa nyata terhadap semua kombinasi lawan yang mungkin.",
        },
        {
          label: "Pengesanan Tipu",
          desc: "Menganalisis corak pertaruhan lawan untuk mengenal pasti potensi tipu muslihat.",
        },
        {
          label: "Peluang Masa Nyata",
          desc: "Mengira semula peluang menang apabila lawan lipat dan pot bertambah.",
        },
      ],
      tokenTitle: "Penggunaan Token",
      tokenItems: [
        {
          label: "lawan AI (Mudah)",
          cost: "2 Token/permainan",
          desc: "Belajar asas",
        },
        {
          label: "lawan AI (Sukar)",
          cost: "5 Token/permainan",
          desc: "AI tahap mahir",
        },
        {
          label: "Analisis AI (PvP)",
          cost: "3 Token/guna",
          desc: "Pandangan atas permintaan",
        },
      ],
    },
    landlord: {
      title: "Landlord",
      subtitle: "Pertempuran Kad Strategik \u2022 3 Pemain",
      rulesTitle: "Peraturan Permainan",
      rulesP1:
        "Permainan kad 3 pemain menggunakan dek 54 kad. Seorang pemain menjadi \u201CLandlord\u201D dan bermain melawan dua \u201CPetani\u201D yang berpasukan.",
      rulesP2:
        "Landlord menerima 3 kad tambahan tetapi mesti menewaskan kedua-dua lawan bersendirian. Kombinasi kad strategik: tunggal, pasangan, tiga serangkai, urutan, bom, dan roket.",
      aiFeaturesTitle: "Ciri AI",
      aiFeatures: [
        {
          label: "Pengoptimuman Kombo",
          desc: "Mencadangkan cara optimum untuk memisahkan kad kepada kombinasi.",
        },
        {
          label: "Koordinasi Rakan",
          desc: "Membantu menyelaraskan permainan dengan rakan Petani anda.",
        },
        {
          label: "Pengiraan Kad",
          desc: "Menjejaki kad yang dimainkan dan mengira kebarangkalian yang tinggal.",
        },
      ],
      tokenTitle: "Penggunaan Token",
      tokenItems: [
        {
          label: "lawan AI (Mudah)",
          cost: "5 Token/permainan",
          desc: "Kadar santai",
        },
        {
          label: "lawan AI (Mahir)",
          cost: "15 Token/permainan",
          desc: "Permainan tahap pakar",
        },
        {
          label: "Analisis AI (PvP)",
          cost: "5\u20138 Token/guna",
          desc: "Cadangan kombo penuh",
        },
      ],
    },
    modes: {
      title: "Mod Permainan",
      desc: "Tiga cara berbeza untuk bermain \u2014 masing-masing dengan dinamik Token unik dan integrasi AI.",
      items: [
        {
          title: "Lawan AI",
          desc: "Cabaran lawan AI dari kesukaran Pemula hingga Mahir. Sesuai untuk latihan dan pertanian Token.",
        },
        {
          title: "Lawan Pemain",
          desc: "Padankan dengan pemain sebenar di seluruh dunia. Panggil analisis AI pada saat kritikal secara pilihan.",
        },
        {
          title: "Kejohanan",
          desc: "Acara kompetitif mingguan dengan kumpulan hadiah Token yang besar dan ganjaran eksklusif.",
        },
      ],
    },
    cta: {
      title: "Sedia Bermain?",
      desc: "Sertai dengan 100 Token percuma dan alami permainan kad dikuasakan AI. Sama ada anda pemain kasual yang mencari keseronokan atau pakar strategi yang mencari cabaran seterusnya, OUBAOGAME mempunyai meja yang menunggu anda.",
      button: "Mula Bermain",
    },
    whyPlay: {
      title: "Mengapa Bermain di OUBAOGAME?",
      desc: "Kami menggabungkan tradisi permainan kad berdekad lamanya dengan teknologi AI terkini untuk pengalaman yang tiada tandingan.",
      points: [
        {
          title: "Adil & Telus",
          desc: "RNG (Penjana Nombor Rawak) yang disahkan memastikan pengedaran kad benar-benar rawak. Setiap kocok disahkan secara kriptografi dan boleh diaudit. Tiada hasil yang dimanipulasi.",
        },
        {
          title: "AI yang Mengajar, Bukan Sekadar Bermain",
          desc: "Tidak seperti platform lain di mana AI hanya sebagai lawan, AI kami secara aktif membantu anda meningkatkan kemahiran. Ulasan selepas permainan mengetengahkan kesilapan anda dan mencadangkan permainan yang lebih baik.",
        },
        {
          title: "Komuniti Asia Tenggara",
          desc: "Dibina untuk pemain di Malaysia, Indonesia, Thailand, Filipina dan seterusnya. Pelayan latensi rendah di seluruh rantau ini memastikan permainan lancar. Sokongan dalam Bahasa Melayu dan Inggeris.",
        },
        {
          title: "Permainan Bertanggungjawab",
          desc: "Ekonomi berasaskan Token dengan had harian memastikan tabiat bermain yang sihat. Tetapkan had perbelanjaan anda sendiri, berehat dengan ciri penyejukan kami, dan bermain mengikut kadar anda tanpa tekanan.",
        },
      ],
    },
  },

  // AI Page
  aiPage: {
    tag: "TEKNOLOGI AI",
    heroTitle: "Kecerdasan\nDi Sebalik Setiap Langkah",
    heroDesc:
      "Enjin AI kami menggabungkan pembelajaran mesin canggih dengan teori permainan untuk menyediakan sokongan keputusan masa nyata.",
    live: "LIVE",
    gamesAnalyzed: "Permainan Dianalisis",
    architecture: {
      title: "Seni Bina Sistem",
      desc: "Sistem AI berlapis dengan modul khusus untuk setiap aspek analisis permainan.",
      modules: [
        {
          title: "Enjin Keadaan Permainan",
          desc: "Mengekalkan perwakilan masa nyata keadaan permainan, menjejaki semua kad yang kelihatan, tindakan pemain, dan corak sejarah.",
        },
        {
          title: "Teras Rangkaian Neural",
          desc: "Rangkaian neural dalam yang dilatih dengan 12M+ permainan sejarah. Menilai kekuatan tangan dan menjana cadangan dalam masa di bawah 100ms.",
        },
        {
          title: "Simulator Monte Carlo",
          desc: "Menjalankan beribu-ribu simulasi permainan rawak sesaat untuk pengiraan kebarangkalian menang yang tepat.",
        },
        {
          title: "Pengecaman Corak",
          desc: "Menganalisis corak pertaruhan lawan, petunjuk masa, dan kecenderungan untuk membina profil tingkah laku.",
        },
        {
          title: "Pengoptimum Strategi",
          desc: "Menggabungkan semua output modul untuk cadangan tindakan optimum, dengan mempertimbangkan risiko dan nilai jangkaan.",
        },
        {
          title: "Saluran Masa Nyata",
          desc: "Saluran analisis penuh berjalan dalam masa di bawah 300ms, dioptimumkan dengan nod pengkomputeran tepi di seluruh Asia Tenggara.",
        },
      ],
    },
    performance: {
      title: "Metrik Prestasi",
      desc: "Diuji secara berterusan terhadap pemain profesional dan sistem AI lain.",
      stats: [
        { value: "98.2%", label: "Ketepatan Ramalan" },
        { value: "<300ms", label: "Latensi Respons" },
        { value: "12M+", label: "Permainan Latihan" },
        { value: "99.9%", label: "SLA Masa Aktif" },
      ],
      actionTitle: "AI Beraksi",
      actionDesc:
        "Tonton AI menganalisis situasi permainan langsung \u2014 mengira kebarangkalian, menilai corak lawan, dan menyampaikan cadangan yang jelas.",
      actionFeatures: [
        "Menilai 10,000+ hasil yang mungkin sesaat",
        "Menyesuaikan diri dengan gaya permainan lawan secara masa nyata",
        "Menyampaikan nasihat yang boleh dilaksanakan dalam masa di bawah 300ms",
      ],
    },
    difficulty: {
      title: "Tahap Kesukaran AI",
      desc: "Empat tahap kesukaran berbeza, masing-masing dengan ciri permainan unik.",
      tokenCostLabel: "Kos Token",
      levels: [
        {
          level: "Pemula",
          elo: "800\u20131200",
          desc: "Membuat kesilapan sesekali. Baik untuk mempelajari asas.",
          tokenCost: "Rendah",
        },
        {
          level: "Pertengahan",
          elo: "1200\u20131600",
          desc: "Permainan kukuh dengan beberapa strategi lanjutan. Mencabar pemain kasual.",
          tokenCost: "Sederhana",
        },
        {
          level: "Lanjutan",
          elo: "1600\u20132000",
          desc: "Permainan tahap pakar. Menyesuaikan diri dengan strategi anda secara masa nyata.",
          tokenCost: "Tinggi",
        },
        {
          level: "Mahir",
          elo: "2000+",
          desc: "Permainan hampir optimum menggunakan rangkaian neural penuh. Sangat sukar untuk dikalahkan — setara dengan 0.1% pemain manusia teratas. Disyorkan hanya untuk latihan kompetitif serius.",
          tokenCost: "Premium",
        },
      ],
    },
    howAiHelps: {
      title: "Bagaimana AI Meningkatkan Permainan Anda",
      desc: "AI kami bukan sekadar bermain melawan anda — ia bermain bersama anda untuk menjadikan anda pemain kad yang lebih baik.",
      items: [
        {
          title: "Persediaan Pra-permainan",
          desc: "Sebelum anda mula, AI menganalisis kelemahan sejarah anda dan mencadangkan bidang fokus. Sama ada meningkatkan kekerapan gertakan atau mengoptimumkan pilihan kombinasi kad, dapatkan pelan pemanasan peribadi.",
        },
        {
          title: "Bimbingan Masa Nyata Dalam Permainan",
          desc: "Semasa perlawanan PvP, aktifkan analisis AI untuk menerima pengiraan kebarangkalian serta-merta, profil kecenderungan lawan, dan cadangan permainan optimum.",
        },
        {
          title: "Ulasan Mendalam Selepas Permainan",
          desc: "Selepas setiap sesi, terima laporan komprehensif yang dijana AI. Setiap keputusan dinilai, titik perubahan utama diketengahkan, dan permainan alternatif diterokai.",
        },
        {
          title: "Penjejakan Kemajuan Jangka Panjang",
          desc: "AI menjejaki peningkatan anda selama berminggu-minggu dan berbulan-bulan. Visualisasikan perkembangan ELO anda, kenal pasti kelemahan berterusan dalam strategi anda, dan raikan pencapaian.",
        },
      ],
    },
  },

  // Ranking Page
  rankingPage: {
    tag: "KEDUDUKAN & MUSIM",
    heroTitle: "Bersaing. Mendaki.\nMenguasai.",
    heroDesc:
      "Jejaki prestasi anda merentasi musim, raih ganjaran, dan bersaing untuk kedudukan teratas. Setiap permainan menyumbang kepada pangkat anda.",
    topPlayer: { name: "CardMaster", winRate: "78.3% Kadar Menang" },
    tiers: {
      title: "Peringkat Kedudukan",
      desc: "Maju melalui 6 peringkat kompetitif. Setiap satu membuka kunci keistimewaan baru dan pendapatan Token lebih tinggi.",
      items: [
        {
          tier: "Gangsa",
          range: "0\u2013999 RP",
          perks: [
            "Akses semua mod permainan",
            "Analisis AI asas",
            "Bonus daftar masuk harian",
          ],
        },
        {
          tier: "Perak",
          range: "1,000\u20132,499 RP",
          perks: [
            "5% peningkatan pendapatan Token",
            "Bingkai profil Perak",
            "Ulasan lanjutan",
          ],
        },
        {
          tier: "Emas",
          range: "2,500\u20134,999 RP",
          perks: [
            "10% peningkatan Token",
            "Bingkai profil Emas",
            "Padanan keutamaan",
          ],
        },
        {
          tier: "Platinum",
          range: "5,000\u20137,499 RP",
          perks: [
            "15% peningkatan Token",
            "Lencana Platinum",
            "Keutamaan kejohanan",
          ],
        },
        {
          tier: "Berlian",
          range: "7,500\u20139,999 RP",
          perks: [
            "20% peningkatan Token",
            "Kesan Berlian",
            "Penalaan AI tersuai",
          ],
        },
        {
          tier: "Grandmaster",
          range: "10,000+ RP",
          perks: [
            "25% peningkatan Token",
            "Bingkai beranimasi",
            "Kelayakan Dewan Kemasyhuran",
          ],
        },
      ],
    },
    seasons: {
      title: "Sistem Musim",
      subtitle: "Persaingan segar setiap bulan",
      duration: "Tempoh Musim:",
      durationDesc:
        "4 minggu. Kedudukan dimuktamadkan dan ganjaran diagihkan pada akhir musim.",
      reset: "Reset Lembut:",
      resetDesc:
        "RP musim baru = (RP Sebelumnya \u00D7 0.6) + RP Asas. Memastikan persaingan segar.",
      rewards: "Ganjaran:",
      rewardsDesc: "Bonus Token, kosmetik eksklusif, dan akses Arkib Musim.",
      rewardsTitle: "Ganjaran Musim 12",
      rewardsList: [
        { tier: "Grandmaster", reward: "500 Token + Bingkai Lagenda" },
        { tier: "Berlian", reward: "300 Token + Belakang Kad Beranimasi" },
        { tier: "Platinum", reward: "150 Token + Avatar Eksklusif" },
        { tier: "Emas", reward: "80 Token + Belakang Kad Emas" },
        { tier: "Perak", reward: "40 Token + Bingkai Perak" },
        { tier: "Gangsa", reward: "20 Token + Lencana" },
      ],
    },
    categories: {
      title: "Kategori Papan Pendahulu",
      desc: "Pelbagai papan pendahulu memastikan setiap gaya permainan diiktiraf.",
      items: [
        {
          title: "Kadar Menang",
          desc: "Peratusan menang tertinggi. Min 50 permainan untuk layak.",
        },
        {
          title: "Rentetan Menang",
          desc: "Kemenangan berturut-turut terpanjang dalam satu sesi.",
        },
        {
          title: "Token Diperolehi",
          desc: "Jumlah Token yang diraih melalui permainan.",
        },
        {
          title: "Kecekapan AI",
          desc: "Kadar menang apabila menggunakan analisis AI.",
        },
      ],
    },
  },

  // Shop Page
  shopPage: {
    tag: "KEDAI TOKEN",
    heroTitle: "Dapatkan Token,\nBermain Lebih",
    heroDesc:
      "Pilih pelan yang sesuai dengan gaya permainan anda. Dari Token harian percuma hingga permainan AI tanpa had.",
    popular: "TERLARIS",
    plans: {
      title: "Pelan Langganan",
      desc: "Pelan bulanan dengan peruntukan Token berulang. Batal bila-bila masa.",
      items: [
        {
          name: "Pemula",
          price: "Percuma",
          period: "",
          desc: "Sesuai untuk pemain baru",
          cta: "Mula Sekarang",
          features: [
            "100 Token semasa daftar",
            "5 Token daftar masuk harian",
            "Analisis AI asas",
            "Akses Win Big & Landlord",
            "Kejohanan komuniti",
          ],
        },
        {
          name: "Pemain",
          price: "$9.99",
          period: "/bulan",
          desc: "Untuk pemain tetap",
          cta: "Langgan Sekarang",
          features: [
            "8,000 Token/bulan",
            "Analisis AI lanjutan",
            "Permainan optimum masa nyata",
            "Ulasan AI pasca-permainan",
            "Padanan keutamaan",
            "Meja eksklusif",
          ],
        },
        {
          name: "Mahir",
          price: "$29.99",
          period: "/bulan",
          desc: "Untuk pemain kompetitif",
          cta: "Jadi Mahir",
          features: [
            "Token tanpa had",
            "Lawan AI tahap mahir",
            "Bilik permainan peribadi",
            "Statistik lanjutan",
            "Sokongan VIP",
            "Akses awal ciri baru",
          ],
        },
      ],
    },
    packs: {
      title: "Pek Token Sekali Beli",
      desc: "Beli mengikut keperluan. Tiada komitmen berulang. Token tidak akan luput.",
      bestValue: "NILAI TERBAIK",
      tokensLabel: "Token",
      buyNow: "Beli Sekarang",
      items: [
        { name: "Pemula", tokens: "500", price: "$4.99", bonus: "" },
        {
          name: "Nilai",
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
      title: "Soalan Lazim",
      items: [
        {
          q: "Adakah Token luput?",
          a: "Tidak. Token yang dibeli atau diraih tidak akan luput.",
        },
        {
          q: "Bolehkah saya membatalkan langganan?",
          a: "Ya, batal bila-bila masa. Manfaat berterusan sehingga tempoh bil tamat.",
        },
        {
          q: "Apakah kaedah pembayaran yang diterima?",
          a: "Visa, Mastercard, AmEx, GrabPay, Touch 'n Go eWallet, dan pindahan bank.",
        },
        {
          q: "Adakah polisi bayaran balik?",
          a: "Pek yang tidak digunakan dalam 7 hari boleh dibayar balik sepenuhnya.",
        },
        {
          q: "Bolehkah saya menghadiahkan Token?",
          a: "Ya! Hantar Token kepada mana-mana pemain. Yuran transaksi 5% dikenakan. Minimum: 50 Token.",
        },
      ],
    },
    trust: {
      title: "Pembayaran Selamat & Dipercayai",
      desc: "Patuh PCI-DSS Tahap 1. Disulitkan hujung-ke-hujung. Dipercayai oleh 500,000+ pemain.",
      badges: [
        "Patuh PCI-DSS",
        "Penyulitan AES-256",
        "Penghantaran Segera",
        "Sokongan 24/7",
      ],
    },
  },

  // Token Page
  tokenPage: {
    tag: "EKONOMI TOKEN",
    heroTitle: "Ekonomi Token\nDiterangkan",
    heroDesc:
      "Token adalah bahan bakar yang menggerakkan analisis AI. Fahami cara memperoleh, membelanjakan, dan memaksimumkan kecekapan Token anda.",
    circulation: "Token dalam Edaran Hari Ini",
    howItWorks: {
      title: "Cara Token Berfungsi",
      desc: "Token digunakan setiap kali anda meminta bantuan AI. Kos berbeza berdasarkan kerumitan analisis dan jenis permainan.",
      items: [
        {
          title: "Peroleh",
          desc: "Beli pek Token, peroleh melalui daftar masuk, menang permainan, atau terima ganjaran musim.",
        },
        {
          title: "Belanja",
          desc: "Gunakan Token untuk pertempuran AI, analisis PvP, dan ulasan pasca-permainan.",
        },
        {
          title: "Edar",
          desc: "Ekonomi mampan \u2014 pemain mahir mengekalkan keseimbangan melalui kemenangan sahaja.",
        },
      ],
    },
    earning: {
      title: "Menjana Token",
      subtitle: "Pelbagai cara untuk menjana",
      items: [
        { method: "Daftar Masuk Harian", amount: "+5/hari", effort: "Tiada" },
        {
          method: "Menang lawan AI (Mudah)",
          amount: "+2\u20133",
          effort: "Rendah",
        },
        {
          method: "Menang lawan AI (Sukar)",
          amount: "+5\u20138",
          effort: "Sederhana",
        },
        {
          method: "Hadiah Kejohanan",
          amount: "+50\u2013500",
          effort: "Tinggi",
        },
        { method: "Rujuk Rakan", amount: "+20", effort: "Tiada" },
        {
          method: "Buka Pencapaian",
          amount: "+10\u2013100",
          effort: "Pelbagai",
        },
      ],
    },
    spending: {
      title: "Panduan Perbelanjaan",
      subtitle: "Maksimumkan kecekapan Token anda",
      headers: ["Tindakan", "Kos", "Apa Yang Anda Dapat"],
      rows: [
        {
          action: "Win Big lawan AI (Mudah)",
          cost: "2 Token",
          gets: "Permainan latihan + AI asas",
        },
        {
          action: "Win Big lawan AI (Mahir)",
          cost: "5 Token",
          gets: "AI pakar + analisis terperinci",
        },
        {
          action: "Landlord lawan AI (Mudah)",
          cost: "5 Token",
          gets: "Simulasi penuh 3 pemain",
        },
        {
          action: "Landlord lawan AI (Mahir)",
          cost: "15 Token",
          gets: "AI pakar + pengoptimuman kombo",
        },
        {
          action: "Analisis AI (sekali guna)",
          cost: "3\u20138 Token",
          gets: "Kebarangkalian menang + cadangan",
        },
        {
          action: "Ulasan Pasca-permainan",
          cost: "10 Token",
          gets: "Laporan ulasan AI penuh",
        },
      ],
    },
    cta: {
      title: "Mulakan Dengan 100 Token Percuma",
      desc: "Cipta akaun anda dan terima 100 Token serta-merta — mencukupi untuk 20+ permainan. Tiada kad kredit diperlukan. Mula bermain dengan segera dan temui bagaimana analisis dikuasakan AI boleh mengubah strategi permainan kad anda.",
      button: "Tuntut Token Percuma",
    },
    tips: {
      title: "Tips Kecekapan Token",
      desc: "Maksimumkan baki Token anda dengan strategi ini daripada pemain teratas kami.",
      items: [
        {
          title: "Daftar Masuk Harian Bertambah",
          desc: "Jangan lepas sehari! 5 Token sehari = 150 Token/bulan secara percuma. Itu 30+ permainan bantuan AI tanpa membelanjakan satu sen pun.",
        },
        {
          title: "Latih di Mudah Sebelum Susah",
          desc: "AI Mudah kos 2 Token vs 15 untuk Mahir. Panaskan diri di mod Mudah untuk mendapatkan aliran anda, kemudian tukar ke Susah apabila anda sedia secara mental.",
        },
        {
          title: "Guna Analisis AI Secara Terpilih dalam PvP",
          desc: "Jangan aktifkan AI setiap tangan. Simpan untuk detik kritikal — apabila pot besar atau anda benar-benar tidak pasti. Penggunaan strategik kos 60% kurang daripada pengaktifan berterusan.",
        },
        {
          title: "Menangi Kejohanan untuk Pembayaran Besar",
          desc: "Kejohanan mingguan menawarkan hadiah 50-500 Token. Malah berada di 10 teratas memulangkan lebih daripada kos penyertaan. Risiko tinggi, ganjaran tinggi untuk pemain mahir.",
        },
      ],
    },
  },

  // Contact Modal
  contactModal: {
    title: "Hubungi Kami",
    desc: "Isi borang di bawah dan kami akan menghubungi anda secepat mungkin.",
    nameLabel: "Nama",
    namePlaceholder: "Nama anda",
    phoneLabel: "Telefon",
    phonePlaceholder: "Nombor telefon anda",
    messageLabel: "Mesej",
    messagePlaceholder: "Bagaimana kami boleh membantu anda?",
    sendButton: "Hantar Mesej",
    sending: "Menghantar...",
    successTitle: "Mesej Dihantar!",
    successDesc: "Kami akan membalas secepat mungkin.",
    errorRequired: "Sila isi semua ruangan.",
    errorFailed: "Gagal menghantar. Sila cuba lagi kemudian.",
    purchasePrefix: "Saya ingin membeli",
  },

  // Footer
  footer: {
    brandDesc:
      "Platform permainan kad dikuasakan AI. Bermain lebih bijak, menang lebih besar.",
    gamesTitle: "Permainan",
    aiTitle: "Lawan AI",
    tokenTitle: "Token",
    shopTitle: "Kedai",
    rankingTitle: "Kedudukan",
    gameLinks: [
      { label: "Gambaran Permainan", href: "/games" },
      { label: "Win Big", href: "/games#win-big" },
      { label: "Landlord", href: "/games#landlord" },
      { label: "Mod Permainan", href: "/games#modes" },
    ],
    aiLinks: [
      { label: "Gambaran AI", href: "/ai" },
      { label: "Seni Bina", href: "/ai#architecture" },
      { label: "Prestasi", href: "/ai#performance" },
      { label: "Tahap Kesukaran", href: "/ai#difficulty" },
    ],
    tokenLinks: [
      { label: "Gambaran Token", href: "/token" },
      { label: "Menjana Token", href: "/token#earning" },
      { label: "Panduan Perbelanjaan", href: "/token#spending" },
    ],
    shopLinks: [
      { label: "Gambaran Kedai", href: "/shop" },
      { label: "Pelan Langganan", href: "/shop#plans" },
      { label: "Pek Token", href: "/shop#packs" },
      { label: "Soalan Lazim", href: "/shop#faq" },
    ],
    rankingLinks: [
      { label: "Peringkat Kedudukan", href: "/ranking#tiers" },
      { label: "Sistem Musim", href: "/ranking#seasons" },
      { label: "Papan Pendahulu", href: "/ranking#categories" },
    ],
    links: [
      { label: "Privasi", href: "#" },
      { label: "Terma", href: "#" },
      { label: "Hubungi", href: "#" },
    ],
    copyright: "\u00A9 2026 OUBAO SDN. BHD. Hak cipta terpelihara.",
  },

  // Misc UI
  misc: {
    live: "LIVE",
    popular: "TERLARIS",
  },
} as const;

export default ms;
