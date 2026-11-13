// Todo o conteúdo do site fica aqui. Para adaptar a um cliente real:
// 1) troque os textos PT e EN, 2) preencha site.url, 3) troque o número do WhatsApp,
// 4) apague a linha <meta name="robots" content="noindex, nofollow"> em index.html.

export const site = {
  // Endereço final do site (ex.: "https://pulsopersonal.com.br"). Vazio = sem canonical/hreflang/og:url.
  url: "",
  // Número fictício. Formato internacional, só dígitos.
  whatsapp: "5511900000000",
  instagram: "pulso.personal",
  brand: "Pulso",
};

// Preço por aula (R$), por modalidade
export const prices = { studio: 110, home: 140, online: 70 };
// Desconto por frequência semanal (aulas por semana -> desconto)
export const discounts = { 2: 0, 3: 0.05, 4: 0.1, 5: 0.12 };
export const frequencies = [2, 3, 4, 5];
export const WEEKS = 4;

export const content = {
  pt: {
    lang: "pt-BR",
    htmlLang: "pt-BR",
    meta: {
      title: "Pulso Personal | Tainá Rocha, personal trainer em Vila Madalena, São Paulo",
      description:
        "Treino personalizado com a Tainá Rocha: no estúdio em Vila Madalena, na sua casa ou online. Monte seu plano e agende uma aula experimental pelo WhatsApp.",
      ogAlt: "Pulso Personal: treino personalizado em Vila Madalena, São Paulo",
    },
    skip: "Pular para o conteúdo",
    langLabel: "Idioma",
    demoNotice: "Site de demonstração. Nome, preços e depoimentos são fictícios.",
    nav: {
      label: "Navegação principal",
      items: [
        { id: "metodo", label: "Método" },
        { id: "plano", label: "Monte seu plano" },
        { id: "sobre", label: "Sobre" },
        { id: "duvidas", label: "Dúvidas" },
      ],
      cta: "Aula experimental",
    },
    hero: {
      eyebrow: "Personal trainer · Vila Madalena, São Paulo",
      title: "Treino com o seu ritmo, não com o da academia.",
      text:
        "Eu sou a Tainá. Monto o treino em torno da sua rotina, do seu corpo e do seu objetivo, e acompanho cada aula de perto. No estúdio, na sua casa ou online.",
      primary: "Monte seu plano",
      secondary: "Agendar aula experimental",
      stats: [
        { value: "9", label: "anos de experiência" },
        { value: "320+", label: "alunos acompanhados" },
        { value: "1ª aula", label: "experimental sem custo" },
      ],
      card: {
        tag: "Treino de hoje",
        title: "Força · Inferiores",
        items: [
          ["Agachamento", "4 x 10"],
          ["Levantamento terra romeno", "3 x 12"],
          ["Avanço com halteres", "3 x 10"],
          ["Prancha", "3 x 40s"],
        ],
        footer: "Carga subiu 2 kg desde a semana passada",
      },
    },
    method: {
      id: "metodo",
      eyebrow: "Método",
      title: "Simples de começar, difícil de largar",
      steps: [
        {
          title: "Avaliação",
          text: "Conversamos 30 minutos sobre sua rotina, histórico e objetivo. Medimos o ponto de partida sem julgamento.",
        },
        {
          title: "Plano sob medida",
          text: "Você recebe um treino montado para você, com progressão semanal e ajustes quando a vida apertar.",
        },
        {
          title: "Acompanhamento",
          text: "Aulas com correção de execução, check-in mensal com números e suporte pelo WhatsApp entre os treinos.",
        },
      ],
    },
    builder: {
      id: "plano",
      eyebrow: "Monte seu plano",
      title: "Veja quanto fica antes de falar comigo",
      intro: "Escolha as opções e o valor mensal aparece na hora. Depois é só enviar pelo WhatsApp.",
      goalLabel: "Qual é o seu objetivo?",
      goals: [
        { id: "lose", label: "Emagrecer", text: "Treino que combina força e condicionamento, com metas de composição corporal." },
        { id: "gain", label: "Ganhar massa", text: "Treino de força com progressão de carga e orientação para a sua rotina de alimentação." },
        { id: "fit", label: "Condicionamento", text: "Mais fôlego e disposição para o dia a dia ou para uma corrida, com treinos intervalados." },
        { id: "mobility", label: "Mobilidade e saúde", text: "Treino leve e seguro para ganhar amplitude, aliviar dores de rotina e criar o hábito." },
      ],
      modeLabel: "Onde você prefere treinar?",
      modes: [
        { id: "studio", label: "No estúdio", text: "Vila Madalena, aulas de 55 min", unit: "por aula" },
        { id: "home", label: "Na sua casa", text: "Atendo até 8 km do estúdio", unit: "por aula" },
        { id: "online", label: "Online", text: "Videochamada, de qualquer lugar", unit: "por aula" },
      ],
      freqLabel: "Quantas vezes por semana?",
      freqUnit: (n) => `${n}x por semana`,
      freqOff: (p) => (p > 0 ? `${p}% de desconto` : "sem desconto"),
      periodLabel: "Melhor período para treinar",
      periods: [
        { id: "morning", label: "Manhã", text: "6h às 11h" },
        { id: "afternoon", label: "Tarde", text: "12h às 17h" },
        { id: "evening", label: "Noite", text: "18h às 21h" },
      ],
      summaryTitle: "Seu plano",
      perMonth: "por mês",
      perClass: "por aula",
      sessions: (n) => `${n} aulas por mês`,
      saving: (v) => `Você economiza ${v} por mês`,
      note: "Valores fictícios de demonstração. Primeira aula experimental sem custo.",
      cta: "Enviar meu plano pelo WhatsApp",
      goalWord: "Objetivo",
      modeWord: "Local",
      freqWord: "Frequência",
      periodWord: "Período",
      waMessage: ({ goal, mode, freq, period, total, sessions }) =>
        `Oi, Tainá! Montei meu plano no site da Pulso:\n- Objetivo: ${goal}\n- Local: ${mode}\n- Frequência: ${freq}\n- Período: ${period}\n- ${sessions}, total de ${total} por mês\nPodemos marcar a aula experimental?`,
    },
    about: {
      id: "sobre",
      eyebrow: "Sobre",
      title: "Quem vai treinar com você",
      paragraphs: [
        "Sou a Tainá Rocha, formada em Educação Física e especializada em treinamento de força. Há 9 anos ajudo pessoas que nunca se sentiram à vontade em academia a criar uma rotina de treino que dura.",
        "Acredito em treino que cabe na agenda, evolui com você e respeita seus limites. Nada de planilha genérica nem de promessa de resultado em 30 dias.",
      ],
      badges: ["Educação Física (CREF fictício 000000-G/SP)", "Especialização em treinamento de força", "Primeiros socorros e RCP atualizados"],
      photoAlt: "Ilustração da personal trainer Tainá Rocha",
    },
    testimonials: {
      eyebrow: "Depoimentos",
      title: "Quem treina com a Pulso",
      items: [
        { name: "Camila A.", role: "Designer, aluna há 1 ano", text: "Eu achava que não levava jeito para treinar. Hoje faço 3 aulas por semana e sinto falta quando perco uma." },
        { name: "Rafael M.", role: "Desenvolvedor, aluno online", text: "Treino em casa pela videochamada e a Tainá corrige cada movimento. Minha dor nas costas melhorou muito." },
        { name: "Dona Lúcia", role: "Aposentada, aluna há 8 meses", text: "Ela respeita meu ritmo e me deixa à vontade. Voltei a subir escada sem reclamar." },
      ],
    },
    faq: {
      id: "duvidas",
      eyebrow: "Dúvidas",
      title: "Perguntas frequentes",
      items: [
        { q: "Preciso ter experiência para começar?", a: "Não. A maioria dos meus alunos começa do zero. Na avaliação eu entendo seu ponto de partida e monto um treino que você consegue cumprir." },
        { q: "Como funciona a aula experimental?", a: "É uma aula de 55 minutos, sem custo e sem compromisso, para você conhecer o estúdio e o jeito de treinar. Depois decidimos juntos o melhor plano." },
        { q: "E se eu precisar faltar?", a: "Avise com 12 horas de antecedência e a aula é remarcada dentro do mesmo mês. Viagens e imprevistos de trabalho a gente ajusta." },
        { q: "O treino online funciona mesmo?", a: "Funciona. Treino ao vivo por videochamada, com correção de postura e carga adaptada ao material que você tem em casa." },
        { q: "Como é o pagamento?", a: "Mensal, por Pix ou cartão, pago no início de cada ciclo de 4 semanas." },
      ],
    },
    contact: {
      id: "contato",
      title: "Vamos marcar sua aula experimental?",
      text: "Me chame no WhatsApp e eu respondo no mesmo dia, de segunda a sábado.",
      cta: "Chamar no WhatsApp",
      waMessage: "Oi, Tainá! Vim pelo site da Pulso e quero agendar uma aula experimental.",
      address: "Rua Fradique Coutinho, 000 · Vila Madalena, São Paulo, SP",
      hours: "Seg a sex, 6h às 21h · Sáb, 8h às 13h",
      instagramLabel: "Instagram",
    },
    footer: "Pulso Personal. Site de demonstração com dados fictícios.",
    jsonLd: {
      name: "Pulso Personal",
      description: "Personal trainer em Vila Madalena, São Paulo: treino no estúdio, em domicílio e online.",
      address: { street: "Rua Fradique Coutinho, 000", locality: "São Paulo", region: "SP", country: "BR" },
    },
  },

  en: {
    lang: "en",
    htmlLang: "en",
    meta: {
      title: "Pulso Personal | Personal trainer in Vila Madalena, São Paulo",
      description:
        "Personal training with Tainá Rocha: at the studio in Vila Madalena, at your home or online. Build your plan and book a free trial class on WhatsApp.",
      ogAlt: "Pulso Personal: personal training in Vila Madalena, São Paulo",
    },
    skip: "Skip to content",
    langLabel: "Language",
    demoNotice: "Demo website. Name, prices and testimonials are fictional.",
    nav: {
      label: "Main navigation",
      items: [
        { id: "metodo", label: "Method" },
        { id: "plano", label: "Build your plan" },
        { id: "sobre", label: "About" },
        { id: "duvidas", label: "FAQ" },
      ],
      cta: "Free trial class",
    },
    hero: {
      eyebrow: "Personal trainer · Vila Madalena, São Paulo",
      title: "Training at your pace, not the gym's.",
      text:
        "I'm Tainá. I build your training around your routine, your body and your goal, and I coach every session up close. At the studio, at your home or online.",
      primary: "Build your plan",
      secondary: "Book a free trial class",
      stats: [
        { value: "9", label: "years of experience" },
        { value: "320+", label: "clients coached" },
        { value: "1st class", label: "free trial" },
      ],
      card: {
        tag: "Today's workout",
        title: "Strength · Lower body",
        items: [
          ["Squat", "4 x 10"],
          ["Romanian deadlift", "3 x 12"],
          ["Dumbbell lunge", "3 x 10"],
          ["Plank", "3 x 40s"],
        ],
        footer: "Load up 2 kg since last week",
      },
    },
    method: {
      id: "metodo",
      eyebrow: "Method",
      title: "Easy to start, hard to quit",
      steps: [
        {
          title: "Assessment",
          text: "We talk for 30 minutes about your routine, history and goal. We measure your starting point, no judgment.",
        },
        {
          title: "Tailored plan",
          text: "You get a program built for you, with weekly progression and adjustments when life gets busy.",
        },
        {
          title: "Coaching",
          text: "Sessions with form correction, a monthly check-in with numbers, and WhatsApp support between workouts.",
        },
      ],
    },
    builder: {
      id: "plano",
      eyebrow: "Build your plan",
      title: "See the price before you talk to me",
      intro: "Pick your options and the monthly price updates instantly. Then send it on WhatsApp.",
      goalLabel: "What is your goal?",
      goals: [
        { id: "lose", label: "Lose weight", text: "Training that blends strength and conditioning, with body composition goals." },
        { id: "gain", label: "Build muscle", text: "Strength training with load progression and guidance that fits your eating routine." },
        { id: "fit", label: "Conditioning", text: "More stamina and energy for daily life or a race, with interval sessions." },
        { id: "mobility", label: "Mobility and health", text: "Gentle, safe training to gain range of motion, ease everyday aches and build the habit." },
      ],
      modeLabel: "Where do you prefer to train?",
      modes: [
        { id: "studio", label: "At the studio", text: "Vila Madalena, 55-minute classes", unit: "per class" },
        { id: "home", label: "At your home", text: "Within 8 km of the studio", unit: "per class" },
        { id: "online", label: "Online", text: "Video call, from anywhere", unit: "per class" },
      ],
      freqLabel: "How many times per week?",
      freqUnit: (n) => `${n}x per week`,
      freqOff: (p) => (p > 0 ? `${p}% off` : "no discount"),
      periodLabel: "Best time of day",
      periods: [
        { id: "morning", label: "Morning", text: "6 am to 11 am" },
        { id: "afternoon", label: "Afternoon", text: "12 pm to 5 pm" },
        { id: "evening", label: "Evening", text: "6 pm to 9 pm" },
      ],
      summaryTitle: "Your plan",
      perMonth: "per month",
      perClass: "per class",
      sessions: (n) => `${n} classes per month`,
      saving: (v) => `You save ${v} per month`,
      note: "Demo prices in Brazilian reais (BRL). First trial class is free.",
      cta: "Send my plan on WhatsApp",
      goalWord: "Goal",
      modeWord: "Where",
      freqWord: "Frequency",
      periodWord: "Time of day",
      waMessage: ({ goal, mode, freq, period, total, sessions }) =>
        `Hi, Tainá! I built my plan on the Pulso website:\n- Goal: ${goal}\n- Where: ${mode}\n- Frequency: ${freq}\n- Time of day: ${period}\n- ${sessions}, total of ${total} per month\nCan we book the trial class?`,
    },
    about: {
      id: "sobre",
      eyebrow: "About",
      title: "Who you will train with",
      paragraphs: [
        "I'm Tainá Rocha, a physical education graduate specialized in strength training. For 9 years I've helped people who never felt at home in a gym build a training routine that lasts.",
        "I believe in training that fits your schedule, grows with you and respects your limits. No generic spreadsheets and no 30-day miracle promises.",
      ],
      badges: ["Physical Education degree (fictional license 000000-G/SP)", "Strength training specialization", "Up-to-date first aid and CPR"],
      photoAlt: "Illustration of personal trainer Tainá Rocha",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "People who train with Pulso",
      items: [
        { name: "Camila A.", role: "Designer, client for 1 year", text: "I used to think I wasn't cut out for working out. Now I do 3 classes a week and I miss it when I skip one." },
        { name: "Rafael M.", role: "Developer, online client", text: "I train at home over video call and Tainá corrects every movement. My back pain improved a lot." },
        { name: "Dona Lúcia", role: "Retired, client for 8 months", text: "She respects my pace and makes me feel at ease. I can climb stairs again without complaining." },
      ],
    },
    faq: {
      id: "duvidas",
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        { q: "Do I need experience to start?", a: "No. Most of my clients start from zero. In the assessment I understand your starting point and build a program you can actually stick to." },
        { q: "How does the trial class work?", a: "It's a free 55-minute class with no commitment, so you can see the studio and my way of training. Then we decide the best plan together." },
        { q: "What if I need to miss a class?", a: "Let me know 12 hours ahead and the class is rescheduled within the same month. Trips and work surprises we can adjust for." },
        { q: "Does online training really work?", a: "It does. Live training over video call, with posture correction and loads adapted to the equipment you have at home." },
        { q: "How does payment work?", a: "Monthly, by Pix or card, paid at the start of each 4-week cycle." },
      ],
    },
    contact: {
      id: "contato",
      title: "Shall we book your trial class?",
      text: "Message me on WhatsApp and I'll reply the same day, Monday to Saturday.",
      cta: "Chat on WhatsApp",
      waMessage: "Hi, Tainá! I found the Pulso website and I'd like to book a free trial class.",
      address: "Rua Fradique Coutinho, 000 · Vila Madalena, São Paulo, SP, Brazil",
      hours: "Mon to Fri, 6 am to 9 pm · Sat, 8 am to 1 pm",
      instagramLabel: "Instagram",
    },
    footer: "Pulso Personal. Demo website with fictional data.",
    jsonLd: {
      name: "Pulso Personal",
      description: "Personal trainer in Vila Madalena, São Paulo: studio, at-home and online training.",
      address: { street: "Rua Fradique Coutinho, 000", locality: "São Paulo", region: "SP", country: "BR" },
    },
  },
};
