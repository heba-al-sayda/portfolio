"use strict";

const copy = {
  en: {
    title: "Heba Al-Sayda | Brand Growth Specialist & Strategic Marketer",
    description: "Heba Al-Sayda's portfolio in brand growth, business diagnostics, market research, AI-driven insights, training, and business management.",
    skip: "Skip to content",
    brandName: "Heba Al-Sayda",
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    lightboxLabel: "Image preview",
    brandSubtitle: "Brand Growth & Strategic Marketing",
    nav: { home: "Home", about: "About", methodology: "Methodology", experience: "Experience", campaigns: "Campaigns", work: "Case Studies", creative: "Creative", skills: "Skills", contact: "Contact" },
    language: "العربية",
    languageLabel: "Switch to Arabic",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    hero: {
      eyebrow: "Strategy · Intelligence · Sustainable Growth",
      name: "Heba Al-Sayda",
      role: "Brand Growth Specialist & Strategic Marketer | Facilitator, Trainer & Business Manager",
      description: "I dive deep into business anatomy, analyze data using AI and Excel, and build sustainable growth strategies that turn challenges into real business impact.",
      work: "Explore My Work",
      contact: "Get in Touch",
      scroll: "Scroll to explore"
    },
    about: {
      eyebrow: "Beyond conventional marketing",
      title: "Business thinking, built for growth",
      description: "I connect business diagnostics, customer insight, creative execution, and measurable performance in one clear growth system.",
      imageAlt: "Abstract artwork representing creative strategy",
      imageCaption: "Insight, imagination, and direction."
    },
    method: {
      eyebrow: "How I turn insight into impact",
      title: "My Strategic Brand Growth Methodology",
      description: "Four connected pillars move every project from the right questions to measurable, sustainable growth."
    },
    experience: {
      eyebrow: "Professional & research track record",
      title: "Experience grounded in real execution",
      description: "Consulting, field campaigns, international research, facilitation, and academic inquiry—all connected by evidence-led decisions.",
      certificate: "View Certificate"
    },
    campaigns: {
      eyebrow: "Field impact & community leadership",
      title: "Featured Campaigns & Strategic Initiatives",
      description: "Practical coordination, measurable acquisition, and community programs delivered through strong local partnerships.",
      metricLead: "qualified leads collected in one day",
      communityMark: "Community initiative"
    },
    achievements: {
      eyebrow: "Recognition",
      title: "Achievements",
      description: "Recognition for communication, analysis, and persuasion."
    },
    achievement: {
      title: "National Debate Champion",
      subtitle: "Palestinian Universities Debate Competition",
      description: "National-level winner selected among the top six debaters to represent the university, recognized for persuasive communication, sharp analysis, and precise refutation.",
      certificate: "View certificate"
    },
    work: {
      eyebrow: "Selected strategy engagements",
      title: "Featured Case Studies",
      description: "Structured work that shows the business question, analytical approach, strategic direction, and practical deliverables.",
      deliverables: "Case study deliverables",
      download: "Download",
      supportingTitle: "Identity & Presentations",
      supportingDescription: "Additional strategy and communication resources.",
      presentation: "View presentation"
    },
    creative: {
      eyebrow: "Creative & visual production",
      title: "Photoshop Design Showcase",
      description: "A curated selection of professional advertising and visual concepts created with Adobe Photoshop.",
      openDesign: "Open design",
      galleryLabel: "Design gallery"
    },
    reels: {
      eyebrow: "Video & Reels Portfolio",
      title: "Stories built to be remembered",
      description: "Perfume-brand campaigns, behind-the-scenes reels, and motion-led visual storytelling—from concept to creative production.",
      instagram: "Visit @lasoriee.ps ↗",
      note: "For the latest video reels and campaign work, visit the Instagram portfolio."
    },
    skills: {
      eyebrow: "Capabilities & tools",
      title: "An analytical and creative toolkit",
      description: "The tools I use to diagnose, plan, execute, facilitate, and optimize."
    },
    contact: {
      eyebrow: "Let’s build what’s next",
      title: "Turn your next challenge into a growth opportunity",
      description: "For consulting, strategy, research, training, or creative campaign collaborations, let’s start a focused conversation.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Tulkarm, Palestine",
      emailCta: "Email Me",
      linkedin: "Connect on LinkedIn ↗"
    },
    footer: "Heba Al-Sayda — All Rights Reserved",
    backToTop: "Back to top ↑",
    closePreview: "Close preview",
    previousDesign: "Previous design",
    nextDesign: "Next design"
  },
  ar: {
    title: "هبة سعايدة | أخصائية نمو العلامات التجارية ومسوقة استراتيجية",
    description: "أعمال هبة سعايدة في نمو العلامات التجارية، تحليل الأعمال، أبحاث السوق، الذكاء الاصطناعي، والتدريب وإدارة الأعمال.",
    skip: "انتقل إلى المحتوى",
    brandName: "هبة سعايدة",
    mainNavLabel: "التنقل الرئيسي",
    mobileNavLabel: "التنقل عبر الهاتف",
    lightboxLabel: "معاينة الصورة",
    brandSubtitle: "نمو العلامات التجارية والتسويق الاستراتيجي",
    nav: { home: "الرئيسية", about: "عني", methodology: "منهجيتي", experience: "الخبرة", campaigns: "الحملات", work: "دراسات الحالة", creative: "الإبداع", skills: "المهارات", contact: "تواصل" },
    language: "English",
    languageLabel: "التبديل إلى الإنجليزية",
    menuOpen: "فتح قائمة التنقل",
    menuClose: "إغلاق قائمة التنقل",
    hero: {
      eyebrow: "استراتيجية · ذكاء · نمو مستدام",
      name: "هبة سعايدة",
      role: "أخصائية نمو العلامات التجارية ومسوقة استراتيجية | ميسرة، مدربة، ومديرة أعمال",
      description: "أغوص في أعماق البزنس، أحلل البيانات باستخدام أدوات الذكاء الاصطناعي و Excel، وأبني استراتيجيات نمو مستدامة تحول التحديات إلى نتائج حقيقية وأرقام ملموسة.",
      work: "تصفح أعمالي ومشاريعي",
      contact: "تواصلي معي",
      scroll: "مرري لاستكشاف أعمالي"
    },
    about: {
      eyebrow: "أبعد من التسويق التقليدي",
      title: "تفكير تجاري يصنع النمو",
      description: "أربط بين تشخيص الأعمال، وفهم العملاء، والتنفيذ الإبداعي، وقياس الأداء ضمن منظومة نمو واضحة وقابلة للقياس.",
      imageAlt: "عمل فني تجريدي يعبر عن الاستراتيجية الإبداعية",
      imageCaption: "رؤية وخيال واتجاه."
    },
    method: {
      eyebrow: "كيف أحول المعرفة إلى أثر",
      title: "منهجيتي الاستراتيجية في نمو العلامات التجارية",
      description: "أربع ركائز مترابطة تنقل كل مشروع من الأسئلة الصحيحة إلى نمو مستدام قابل للقياس."
    },
    experience: {
      eyebrow: "مسيرتي المهنية والبحثية",
      title: "خبرة مبنية على تنفيذ حقيقي",
      description: "استشارات وحملات ميدانية وأبحاث دولية وتيسير وبحث أكاديمي، تجمعها قرارات مبنية على الدليل.",
      certificate: "عرض الشهادة"
    },
    campaigns: {
      eyebrow: "أثر ميداني وقيادة مجتمعية",
      title: "أبرز الحملات والمبادرات الاستراتيجية",
      description: "تنسيق عملي، واستحواذ قابل للقياس، وبرامج مجتمعية نُفذت عبر شراكات محلية قوية.",
      metricLead: "عميلًا محتملًا مؤهلًا تم جمعهم في يوم واحد",
      communityMark: "مبادرة مجتمعية"
    },
    achievements: {
      eyebrow: "تقدير وإنجاز",
      title: "الإنجازات",
      description: "تقدير لمهارات التواصل والتحليل والإقناع."
    },
    achievement: {
      title: "بطلة المناظرات على المستوى الوطني",
      subtitle: "مسابقة مناظرات الجامعات الفلسطينية",
      description: "فوز على المستوى الوطني واختيار ضمن أفضل ستة مناظرين لتمثيل الجامعة، مع تقدير لمهارات الإقناع والتحليل العميق والدحض الدقيق.",
      certificate: "عرض الشهادة"
    },
    work: {
      eyebrow: "نماذج من مشاريعي الاستراتيجية",
      title: "دراسات حالة مختارة",
      description: "أعمال منظمة تعرض سؤال العمل، والمنهج التحليلي، والتوجه الاستراتيجي، والمخرجات العملية.",
      deliverables: "مخرجات دراسة الحالة",
      download: "تحميل",
      supportingTitle: "هوية وعروض تقديمية",
      supportingDescription: "مصادر إضافية في الاستراتيجية والتواصل.",
      presentation: "عرض التقديم"
    },
    creative: {
      eyebrow: "الإنتاج الإبداعي والبصري",
      title: "معرض تصاميم الفوتوشوب",
      description: "مجموعة مختارة من الإعلانات والمفاهيم البصرية الاحترافية المصممة باستخدام Adobe Photoshop.",
      openDesign: "فتح التصميم",
      galleryLabel: "معرض التصاميم"
    },
    reels: {
      eyebrow: "معرض الفيديوهات والريلز",
      title: "قصص بصرية صُممت لتبقى في الذاكرة",
      description: "حملات لعلامات عطور، وريلز من الكواليس، وسرد بصري متحرك يمتد من الفكرة إلى الإنتاج الإبداعي.",
      instagram: "زيارة @lasoriee.ps ↗",
      note: "للاطلاع على أحدث الفيديوهات والحملات، زوري معرض الأعمال على إنستغرام."
    },
    skills: {
      eyebrow: "القدرات والأدوات",
      title: "منظومة مهارات تحليلية وإبداعية",
      description: "الأدوات التي أستخدمها للتشخيص والتخطيط والتنفيذ والتيسير والتطوير."
    },
    contact: {
      eyebrow: "لنبنِ الخطوة القادمة",
      title: "حوّلي تحديك القادم إلى فرصة نمو",
      description: "للاستشارات أو الاستراتيجية أو الأبحاث أو التدريب أو التعاون في الحملات الإبداعية، لنبدأ حوارًا واضحًا وهادفًا.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      locationValue: "طولكرم، فلسطين",
      emailCta: "راسليني عبر البريد",
      linkedin: "تواصلي معي على لينكدإن ↗"
    },
    footer: "هبة سعايدة — جميع الحقوق محفوظة",
    backToTop: "العودة إلى الأعلى ↑",
    closePreview: "إغلاق المعاينة",
    previousDesign: "التصميم السابق",
    nextDesign: "التصميم التالي"
  }
};

const content = {
  en: {
    about: [
      ["Business Analyst", "I examine the business model, internal challenges, customer journey, and numbers before recommending any marketing action."],
      ["Growth Strategist", "I turn market research, competitor intelligence, AI tools, and Excel analysis into focused positioning and sustainable growth plans."],
      ["Facilitator & Business Leader", "I facilitate practical learning, coordinate teams and projects, and translate strategy into organized execution with clear ownership."]
    ],
    methodology: [
      ["Deep Business Diagnostics", "Dive into the business structure, diagnose problems, assess SWOT factors, and use Excel and Claude to test hypotheses and answer critical questions with data."],
      ["Market, Trends & AI Intelligence", "Monitor market movements, analyze competitors precisely, and uncover hidden opportunities using AI-powered research tools."],
      ["Targeted & Creative Execution", "Translate analysis into action plans, precise targeting, and carefully managed campaigns built on numbers and organic results."],
      ["Measurement & Optimization", "Track campaign performance, measure impact through clear KPIs, and optimize continuously for stronger returns and sustainable growth."]
    ],
    experience: [
      ["Karmol Roastery & Local Retail Businesses", "Marketing Consultant", "4 Months · Completed", ["Positioning", "Brand Identity", "Craft-led Content"], "Built positioning strategies, developed visual identity direction, and created craft-led marketing content. Delivered market and competitor studies and complete marketing plans for local shops, including Karmol’s relaunch strategy."],
      ["Bank of Palestine", "Promotional Team", "April 2025 · Completed", ["Field Campaigns", "Customer Acquisition", "35 Accounts / Day"], "Managed and organized field promotional activities, explained banking services, and delivered tailored marketing messages. Achieved a record of opening 35 new accounts in one working day.", true],
      ["Karunya University · Coimbatore, India · IAESTE", "Marketing Researcher & Data Analyst", "August – September 2026 · Completed", ["Market Research", "Consumer Behaviour", "Excel"], "Completed two months of market and competitor research, segmentation, questionnaires, and customer interviews. Cleaned data in Excel, applied linear regression and pivot tables, and translated quantitative and qualitative findings into business recommendations. Joined an industrial visit to study operational workflows."],
      ["Academic Research · AI & Marketing", "Researcher", "Advanced Research Study", ["AI Adoption", "SMEs", "Palestine"], "Prepared an advanced research study on the impact of artificial intelligence on marketing strategies and the barriers to its adoption among small and medium-sized enterprises in Palestine."],
      ["Roya Palestinian Organization", "Facilitator & Life Skills Trainer", "Completed", ["Facilitation", "Training Design", "Communication"], "Trained teenagers in communication and time management through practical simulations. Coordinated a community psychological first aid initiative for children with a PhD expert, and organized a three-day recreational program led by the trained teams."],
      ["SheTech · Tahaluf Consulting & Galaxy Training Center", "Digital Marketing Specialist Training", "February – July 2026 · Completed", ["96 Hours", "AI in Marketing", "U.S. Department of State"], "Completed a 96-hour professional program supported by the U.S. Department of State, covering SEO, SEM, social media, content, AI-assisted analytics, e-commerce business models, and tech entrepreneurship."],
      ["Marketing Direction · Tulkarm", "Marketing Director", "March – April 2026 · Completed", ["Campaign Direction", "Client Coordination", "Production"], "Developed marketing plans and content scripts, coordinated schedules and client communication, directed photographers on shoots, and defined brand identity guidelines for consistent campaign production."]
    ],
    campaigns: [
      ["Bank of Palestine · Rashfh Cafe, Tulkarm", "Bank of Palestine Field Campaign", "Coordinated an on-ground promotional and customer-acquisition campaign at Rashfh Cafe, engaging visitors through direct conversations and tailored banking-service messages.", "50"],
      ["Roya Palestinian Organization · Community Initiative", "Community & Psychological First Aid Initiative", "Coordinated the initiative with Roya Palestinian Organization, trained a local team, and delivered an interactive program for children that strengthened participation and community engagement."]
    ],
    cases: [
      ["Karmol Roastery Relaunch Strategy", "From discount-led selling to authentic craft", "A comprehensive relaunch strategy for a local roastery in Tulkarm, centered on authentic in-house roasting and blending instead of random discounts. The work included visual identity direction, behind-the-scenes Reels scripts, market positioning, and campaign planning.", ["Market & Competitors", "Brand Positioning", "Content & Campaigns"], "work-karmol-plan.jpg", [["Arabic Marketing Plan", "Karmol_Arabic_Marketing_Plan.pdf", "PDF"], ["Original English Plan", "Karmol_Original_Marketing_Plan_EN.docx", "DOCX"], ["Final Integrated Plan", "Karmol_Final_Plan_EN.docx", "DOCX"]]],
      ["On-Demand Laundry App Strategy", "A market-backed service launch roadmap", "Strategic research and planning for an on-demand laundry and ironing application, including PESTEL macro-environment analysis, SWOT, market segmentation, competitor understanding, and the extended 7 Ps marketing mix.", ["PESTEL & SWOT", "Segmentation", "7 Ps"], "work-laundry.jpg", [["Full App Marketing Plan", "Laundry_App_Marketing_Plan.pptx", "PPTX"], ["Marketing Research Methodology", "Marketing_Research_Methodology.pdf", "PDF"]]]
    ],
    supporting: [
      ["Logo Guidelines", "Brand identity and logo usage specifications for consistent application.", "work-logo.jpg", "./files/Logo_Guidelines.pdf", "download"],
      ["Volunteer at Work Leadership", "A presentation on leadership, initiative, and volunteer experience.", "work-volunteer.jpg", "https://app.presentations.ai/view/Q5ysg6", "presentation"]
    ],
    skills: [
      ["Business Diagnostics", ["Business Model Analysis", "SWOT & Critical Questions", "Growth Strategy"]],
      ["Market Intelligence", ["Market & Competitor Research", "Trend Analysis", "Audience Segmentation"]],
      ["Data & AI", ["Excel: Regression & Pivot Tables", "Claude & AI Research", "AI-driven Insights"]],
      ["Campaigns & Measurement", ["Targeting & Campaign Planning", "SEO / SEM", "KPIs & Optimization"]],
      ["Training & Management", ["Facilitation", "Training Design", "Project & Business Management"]],
      ["Creative Production", ["Adobe Photoshop", "Reels & Visual Storytelling", "Illustrator & Canva"]]
    ],
    designs: [
      ["LV Capucines — Product Ad", "design-lv-bag.jpg"],
      ["YOYOSO — Product Promotion", "design-yoyoso.jpg"],
      ["YSL Libre — Perfume Ad", "design-libre.jpg"],
      ["Boeing — Vintage Poster (Photoshop)", "design-boeing.jpg"],
      ["Chanel Coco Noir — Ad Design", "design-chanel.png"],
      ["Flowers — Photography (Photoshop)", "design-flowers.jpg"],
      ["Delicious Burger — Food Ad (Photoshop)", "design-burger.jpg"]
    ],
    reels: [
      ["Visual campaign concept", "design-libre.jpg"],
      ["Product storytelling", "design-lv-bag.jpg"],
      ["Brand identity in motion", "work-logo.jpg"],
      ["Creative direction", "design-flowers.jpg"],
      ["Campaign art direction", "design-yoyoso.jpg"]
    ]
  },
  ar: {
    about: [
      ["محللة أعمال", "أدرس نموذج العمل والتحديات الداخلية ورحلة العميل والأرقام قبل التوصية بأي خطوة تسويقية."],
      ["استراتيجية نمو", "أحول أبحاث السوق وتحليل المنافسين وأدوات الذكاء الاصطناعي وExcel إلى تموضع واضح وخطط نمو مستدامة."],
      ["ميسرة وقائدة أعمال", "أيسّر تجارب تعلم تطبيقية، وأنسق الفرق والمشاريع، وأحول الاستراتيجية إلى تنفيذ منظم بمسؤوليات واضحة."]
    ],
    methodology: [
      ["تحليل أعماق البزنس", "الغوص في هيكل المشروع، تحليل المشكلات، دراسة نقاط القوة والضعف (SWOT)، واستخدام Excel وClaude لطرح الفرضيات والإجابة عن الأسئلة الحرجة بناءً على البيانات."],
      ["أبحاث السوق والترندات والذكاء الاصطناعي", "رصد اتجاهات السوق، تحليل المنافسين بدقة، واكتشاف الفرص الكامنة باستخدام أدوات الذكاء الاصطناعي."],
      ["التنفيذ الإبداعي والاستهداف", "ترجمة التحليلات إلى خطط عمل، واستهداف دقيق، وإدارة حملات مدروسة تُبنى على الأرقام والنتائج العضوية."],
      ["القياس والتطوير المستمر", "متابعة أداء الحملات، قياس الأثر بدقة عبر مؤشرات الأداء (KPIs)، والتطوير المستمر لضمان أعلى عائد ونمو مستدام."]
    ],
    experience: [
      ["محمص كرمول ومحلات تجارية محلية", "مستشارة تسويق", "4 أشهر · مكتمل", ["التموضع", "الهوية البصرية", "محتوى الصنعة"], "بناء استراتيجيات التموضع، تطوير اتجاه الهوية البصرية، وإعداد محتوى تسويقي قائم على الصنعة، مع دراسات للسوق والمنافسين وخطط تسويقية متكاملة لمحلات محلية، بما فيها استراتيجية إعادة إطلاق كرمول."],
      ["بنك فلسطين", "فريق الترويج", "نيسان 2025 · مكتمل", ["حملات ميدانية", "جذب العملاء", "35 حسابًا / يوم"], "إدارة وتنظيم أنشطة ترويجية ميدانية، وشرح الخدمات المصرفية برسائل تسويقية مخصصة، وتحقيق رقم قياسي بفتح 35 حسابًا جديدًا في يوم عمل واحد.", true],
      ["جامعة كارونيا · كويمباتور، الهند · IAESTE", "باحثة تسويق ومحللة بيانات", "آب – أيلول 2026 · مكتمل", ["أبحاث السوق", "سلوك المستهلك", "إكسل"], "أتممت شهرين من أبحاث السوق والمنافسين وتجزئة السوق وتصميم الاستبيانات وإجراء مقابلات العملاء. نظفت البيانات باستخدام Excel وطبقت الانحدار الخطي والجداول المحورية، وحولت النتائج الكمية والنوعية إلى توصيات للأعمال، مع زيارة صناعية لدراسة سير العمليات."],
      ["البحث العلمي الأكاديمي · الذكاء الاصطناعي والتسويق", "باحثة", "دراسة بحثية متقدمة", ["تبني الذكاء الاصطناعي", "الشركات الصغيرة والمتوسطة", "فلسطين"], "إعداد دراسة بحثية متقدمة حول تأثير الذكاء الاصطناعي على استراتيجيات التسويق وتحديد عوائق تبنيه بين الشركات الصغيرة والمتوسطة في فلسطين."],
      ["مؤسسة رؤيا الفلسطينية", "ميسرة ومدربة مهارات حياتية", "مكتمل", ["التيسير", "تصميم التدريب", "التواصل"], "دربت اليافعين على التواصل وإدارة الوقت عبر محاكاة تطبيقية. نسقت مبادرة مجتمعية للإسعاف النفسي الأولي للأطفال بالتعاون مع خبير حاصل على الدكتوراه، ونظمت برنامجًا ترفيهيًا لثلاثة أيام بمشاركة الفرق المدربة."],
      ["SheTech · تحالف للاستشارات ومركز غالاكسي للتدريب", "تدريب أخصائية تسويق رقمي", "شباط – تموز 2026 · مكتمل", ["96 ساعة", "الذكاء الاصطناعي في التسويق", "وزارة الخارجية الأمريكية"], "إتمام برنامج مهني لمدة 96 ساعة بدعم من وزارة الخارجية الأمريكية، شمل SEO وSEM ووسائل التواصل والمحتوى والتحليلات المدعومة بالذكاء الاصطناعي ونماذج أعمال التجارة الإلكترونية وريادة الأعمال التقنية."],
      ["الإدارة التسويقية · طولكرم", "مديرة تسويق", "آذار – نيسان 2026 · مكتمل", ["توجيه الحملات", "تنسيق العملاء", "الإنتاج"], "طورت خطط التسويق وسكريبتات المحتوى، ونسقت المواعيد والتواصل مع العملاء، ووجهت المصورين خلال جلسات التصوير، وحددت إرشادات الهوية لضمان اتساق إنتاج الحملات."]
    ],
    campaigns: [
      ["بنك فلسطين · مقهى رشفة، طولكرم", "حملة الترويج الميداني والاستحواذ – بنك فلسطين", "نسقت حملة ترويجية ميدانية لجذب العملاء في مقهى رشفة، وتفاعلت مع الزوار عبر حوارات مباشرة ورسائل مخصصة عن الخدمات المصرفية.", "50"],
      ["مؤسسة رؤيا الفلسطينية · مبادرة مجتمعية", "مبادرة الإسعاف النفسي الأولي والمجتمع المحلي", "نسقت المبادرة مع مؤسسة رؤيا الفلسطينية، ودربت فريقًا محليًا، ونفذت برنامجًا تفاعليًا للأطفال عزز المشاركة والتفاعل المجتمعي."]
    ],
    cases: [
      ["استراتيجية إعادة إطلاق محمص كرمول", "من البيع بالخصومات إلى إبراز الصنعة الحقيقية", "استراتيجية إعادة إطلاق شاملة لمحمص محلي في طولكرم، تركز على الصنعة الحقيقية المتمثلة بالتحميص والخلط داخل المحل بدلًا من الخصومات العشوائية. تضمنت بناء اتجاه الهوية البصرية، وسكريبتات ريلز الكواليس، والتموضع السوقي، وخطة الحملات.", ["السوق والمنافسون", "تموضع العلامة", "المحتوى والحملات"], "work-karmol-plan.jpg", [["خطة العمل التسويقية — عربي", "Karmol_Arabic_Marketing_Plan.pdf", "PDF"], ["الخطة الإنجليزية الأصلية", "Karmol_Original_Marketing_Plan_EN.docx", "DOCX"], ["الخطة النهائية المتكاملة والموسعة", "Karmol_Final_Plan_EN.docx", "DOCX"]]],
      ["استراتيجية تطبيق خدمات الغسيل حسب الطلب", "خارطة إطلاق خدمة مبنية على دراسة السوق", "دراسة وتخطيط استراتيجي لتطبيق غسيل وكي ملابس حسب الطلب، متضمنة تحليل البيئة الكلية PESTEL، وتحليل SWOT، وتجزئة السوق، وفهم المنافسين، وتطبيق المزيج التسويقي الموسع 7Ps.", ["PESTEL وSWOT", "تجزئة السوق", "المزيج 7Ps"], "work-laundry.jpg", [["الخطة التسويقية الكاملة للتطبيق", "Laundry_App_Marketing_Plan.pptx", "PPTX"], ["منهجية البحث التسويقي", "Marketing_Research_Methodology.pdf", "PDF"]]]
    ],
    supporting: [
      ["دليل استخدام الشعار", "مواصفات الهوية واستخدام الشعار لضمان اتساق تطبيقه.", "work-logo.jpg", "./files/Logo_Guidelines.pdf", "download"],
      ["القيادة والتطوع في العمل", "عرض تقديمي حول القيادة والمبادرة والتجربة التطوعية.", "work-volunteer.jpg", "https://app.presentations.ai/view/Q5ysg6", "presentation"]
    ],
    skills: [
      ["تشخيص الأعمال", ["تحليل نموذج العمل", "SWOT والأسئلة الحرجة", "استراتيجيات النمو"]],
      ["ذكاء السوق", ["أبحاث السوق والمنافسين", "تحليل الاتجاهات", "تجزئة الجمهور"]],
      ["البيانات والذكاء الاصطناعي", ["Excel: الانحدار والجداول المحورية", "Claude وأبحاث الذكاء الاصطناعي", "رؤى مدعومة بالذكاء الاصطناعي"]],
      ["الحملات والقياس", ["الاستهداف وتخطيط الحملات", "SEO / SEM", "مؤشرات الأداء والتطوير"]],
      ["التدريب وإدارة الأعمال", ["التيسير", "تصميم التدريب", "إدارة المشاريع والأعمال"]],
      ["الإنتاج الإبداعي", ["Adobe Photoshop", "الريلز والسرد البصري", "Illustrator وCanva"]]
    ],
    designs: [
      ["LV Capucines — إعلان منتج", "design-lv-bag.jpg"],
      ["YOYOSO — ترويج منتج", "design-yoyoso.jpg"],
      ["YSL Libre — إعلان عطر", "design-libre.jpg"],
      ["بوينغ — ملصق كلاسيكي (Photoshop)", "design-boeing.jpg"],
      ["Chanel Coco Noir — تصميم إعلاني", "design-chanel.png"],
      ["زهور — تصوير (Photoshop)", "design-flowers.jpg"],
      ["برغر شهي — إعلان طعام (Photoshop)", "design-burger.jpg"]
    ],
    reels: [
      ["مفهوم حملة بصرية", "design-libre.jpg"],
      ["سرد بصري للمنتج", "design-lv-bag.jpg"],
      ["الهوية البصرية للعلامة", "work-logo.jpg"],
      ["التوجيه الإبداعي", "design-flowers.jpg"],
      ["الإخراج الفني للحملة", "design-yoyoso.jpg"]
    ]
  }
};

const state = { language: readSavedLanguage(), galleryIndex: -1 };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let sectionObserver;
let revealObserver;
document.documentElement.classList.add("js");
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);
const asset = (filename) => `./assets/${encodeURIComponent(filename)}`;
const file = (filename) => `./files/${encodeURIComponent(filename)}`;

function readSavedLanguage() {
  try {
    return localStorage.getItem("heba-portfolio-language") === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

function tagsMarkup(tags) {
  return `<div class="tag-list">${tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>`;
}

function renderAbout() {
  $("#about-cards").innerHTML = content[state.language].about.map(([title, description], index) => `
    <article class="info-card reveal">
      <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
      <div><h3>${escapeHTML(title)}</h3><p>${escapeHTML(description)}</p></div>
    </article>`).join("");
}

function renderMethodology() {
  $("#method-grid").innerHTML = content[state.language].methodology.map(([title, description], index) => `
    <article class="method-card reveal">
      <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHTML(title)}</h3><p>${escapeHTML(description)}</p>
    </article>`).join("");
}

function renderExperience() {
  $("#experience-list").innerHTML = content[state.language].experience.map(([company, role, period, tags, description, certificate], index) => `
    <article class="experience-card reveal">
      <div class="experience-topline"><span class="experience-period">${escapeHTML(period)}</span><span class="card-number">${String(index + 1).padStart(2, "0")}</span></div>
      <h3>${escapeHTML(company)}</h3><p class="experience-role">${escapeHTML(role)}</p>
      ${tagsMarkup(tags)}<p>${escapeHTML(description)}</p>
      ${certificate ? `<button class="certificate-button" type="button" data-lightbox="${asset("bank-certificate.png")}" data-copy="experience.certificate">${escapeHTML(copy[state.language].experience.certificate)}</button>` : ""}
    </article>`).join("");
}

function renderCampaigns() {
  $("#campaign-grid").innerHTML = content[state.language].campaigns.map(([organization, title, description, metric], index) => `
    <article class="campaign-card reveal">
      <p class="campaign-org">${escapeHTML(organization)}</p><h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(description)}</p>
      ${metric ? `<div class="campaign-metric"><strong>${escapeHTML(metric)}</strong><span>${escapeHTML(copy[state.language].campaigns.metricLead)}</span></div>` : `<div class="campaign-art" aria-hidden="true"><span>✦</span></div>`}
    </article>`).join("");
}

function renderCases() {
  $("#case-studies").innerHTML = content[state.language].cases.map(([title, subtitle, overview, tags, image, deliverables], index) => `
    <article class="case-study reveal">
      <img class="case-image" src="${asset(image)}" alt="${escapeHTML(title)}" loading="lazy">
      <div class="case-copy">
        <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHTML(title)}</h3><p class="case-subtitle">${escapeHTML(subtitle)}</p><p>${escapeHTML(overview)}</p>
        ${tagsMarkup(tags)}
        <div class="deliverables"><p class="deliverables-heading">${escapeHTML(copy[state.language].work.deliverables)}</p>
          ${deliverables.map(([label, filename, format]) => `<a class="download-link" href="${file(filename)}" download="${escapeHTML(filename)}"><span aria-hidden="true">↓</span><span>${escapeHTML(label)} · ${escapeHTML(format)}</span></a>`).join("")}
        </div>
      </div>
    </article>`).join("");
}

function renderSupporting() {
  $("#supporting-grid").innerHTML = content[state.language].supporting.map(([title, description, image, href, action]) => `
    <article class="support-card reveal">
      <img src="${asset(image)}" alt="${escapeHTML(title)}" loading="lazy">
      <div class="support-card-content"><h3>${escapeHTML(title)}</h3><p>${escapeHTML(description)}</p>
        <a href="${action === "download" ? href : escapeHTML(href)}" ${action === "download" ? `download="${escapeHTML(href.split("/").pop())}"` : 'target="_blank" rel="noopener noreferrer"'}>${action === "download" ? `↓ ${escapeHTML(copy[state.language].work.download)}` : `↗ ${escapeHTML(copy[state.language].work.presentation)}`}</a>
      </div>
    </article>`).join("");
}

function renderSkills() {
  $("#skills-grid").innerHTML = content[state.language].skills.map(([title, skills]) => `
    <article class="skill-card reveal"><h3>${escapeHTML(title)}</h3>
      <ul>${skills.map((skill) => `<li>${escapeHTML(skill)}</li>`).join("")}</ul>
    </article>`).join("");
}

function renderGallery() {
  $("#creative-grid").innerHTML = content[state.language].designs.map(([title, image], index) => `
    <button class="design-button reveal" type="button" data-gallery-index="${index}" aria-label="${escapeHTML(copy[state.language].creative.openDesign)}: ${escapeHTML(title)}">
      <img src="${asset(image)}" alt="${escapeHTML(title)}" loading="lazy"><span class="design-caption">${escapeHTML(title)}</span>
    </button>`).join("");
  $("#reels-grid").innerHTML = content[state.language].reels.map(([caption, image]) => `
    <figure class="reel-card reveal"><img src="${asset(image)}" alt="${escapeHTML(caption)}" loading="lazy"><figcaption>${escapeHTML(caption)}</figcaption></figure>`).join("");
}

function renderStaticCopy() {
  const strings = copy[state.language];
  $$("[data-copy]").forEach((element) => {
    const value = element.dataset.copy.split(".").reduce((object, key) => object && object[key], strings);
    if (typeof value === "string") element.textContent = value;
  });
  $$("[data-copy-alt]").forEach((element) => {
    const value = element.dataset.copyAlt.split(".").reduce((object, key) => object && object[key], strings);
    if (typeof value === "string") element.alt = value;
  });
  $$("[data-copy-aria]").forEach((element) => {
    const value = element.dataset.copyAria.split(".").reduce((object, key) => object && object[key], strings);
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
  document.title = strings.title;
  const description = $('meta[name="description"]');
  if (description) description.content = strings.description;
  const openGraphTitle = $('meta[property="og:title"]');
  if (openGraphTitle) openGraphTitle.content = strings.title;
  const openGraphDescription = $('meta[property="og:description"]');
  if (openGraphDescription) openGraphDescription.content = strings.description;
  const toggle = $("[data-language-toggle]");
  toggle.textContent = strings.language;
  toggle.setAttribute("aria-label", strings.languageLabel);
  const menuToggle = $("[data-menu-toggle]");
  menuToggle.setAttribute("aria-label", $("#mobile-nav").hidden ? strings.menuOpen : strings.menuClose);
  $("[data-dialog-close]").setAttribute("aria-label", strings.closePreview);
  $("[data-gallery-previous]").setAttribute("aria-label", strings.previousDesign);
  $("[data-gallery-next]").setAttribute("aria-label", strings.nextDesign);
  $$("[data-lightbox]").forEach((button) => {
    const path = button.dataset.lightbox.split("/").pop();
    button.dataset.lightboxTitle = path === "bank-certificate.png" ? strings.experience.certificate : strings.achievement.title;
  });
}

function render() {
  renderStaticCopy();
  renderAbout();
  renderMethodology();
  renderExperience();
  renderCampaigns();
  renderCases();
  renderSupporting();
  renderSkills();
  renderGallery();
  observeSections();
}

function openLightbox(src, title, index = -1) {
  const dialog = $("#lightbox");
  state.galleryIndex = index;
  $("#lightbox-image").src = src;
  $("#lightbox-image").alt = title;
  $("#lightbox-caption").textContent = title;
  const isGallery = index >= 0;
  $("[data-gallery-previous]").hidden = !isGallery;
  $("[data-gallery-next]").hidden = !isGallery;
  dialog.showModal();
}

function showGalleryDesign(index) {
  const designs = content[state.language].designs;
  const selected = (index + designs.length) % designs.length;
  state.galleryIndex = selected;
  openLightbox(asset(designs[selected][1]), designs[selected][0], selected);
}

function observeSections() {
  sectionObserver?.disconnect();
  revealObserver?.disconnect();
  const revealElements = $$(".reveal, .section-heading");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const linkHash = `#${entry.target.id}`;
      $$(".desktop-nav a, .mobile-nav a").forEach((link) => {
        if (link.hash === linkHash) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  $$("main section[id]").forEach((section) => sectionObserver.observe(section));
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  revealElements.forEach((element) => revealObserver.observe(element));
}

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const languageButton = target.closest("[data-language-toggle]");
  if (languageButton) {
    state.language = state.language === "en" ? "ar" : "en";
    try { localStorage.setItem("heba-portfolio-language", state.language); } catch { /* The toggle still works without storage. */ }
    render();
    return;
  }

  const menuButton = target.closest("[data-menu-toggle]");
  if (menuButton) {
    const menu = $("#mobile-nav");
    menu.hidden = !menu.hidden;
    menuButton.setAttribute("aria-expanded", String(!menu.hidden));
    menuButton.setAttribute("aria-label", menu.hidden ? copy[state.language].menuOpen : copy[state.language].menuClose);
    return;
  }

  if (target.closest("#mobile-nav a")) {
    $("#mobile-nav").hidden = true;
    $("[data-menu-toggle]").setAttribute("aria-expanded", "false");
    renderStaticCopy();
    return;
  }

  const galleryButton = target.closest("[data-gallery-index]");
  if (galleryButton) {
    showGalleryDesign(Number(galleryButton.dataset.galleryIndex));
    return;
  }

  const lightboxButton = target.closest("[data-lightbox]");
  if (lightboxButton) {
    openLightbox(lightboxButton.dataset.lightbox, lightboxButton.dataset.lightboxTitle || "");
  }
});

$("[data-dialog-close]").addEventListener("click", () => $("#lightbox").close());
$("[data-gallery-previous]").addEventListener("click", () => {
  if (state.galleryIndex >= 0) showGalleryDesign(state.galleryIndex - 1);
});
$("[data-gallery-next]").addEventListener("click", () => {
  if (state.galleryIndex >= 0) showGalleryDesign(state.galleryIndex + 1);
});
$("#lightbox").addEventListener("click", (event) => {
  if (event.target === $("#lightbox")) $("#lightbox").close();
});
$("#current-year").textContent = String(new Date().getFullYear());
render();
