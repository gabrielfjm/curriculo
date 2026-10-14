/*
 * Todo o conteúdo do site em um só lugar.
 * Textos bilíngues usam { pt, en }. Use **texto** para destacar em negrito.
 */

export const site = {
  url: 'https://gabrielfjm.com.br/',
  logo: 'GFJM',
}

export const profile = {
  name: 'Gabriel Felipe Jess Meira',
  nameLines: ['Gabriel Felipe', 'Jess Meira'],
  email: 'gabrielfjmeira@gmail.com',
  phone: '(41) 98496-1004',
  whatsapp: 'https://wa.me/5541984961004',
  github: 'https://github.com/gabrielfjm',
  linkedin: 'https://linkedin.com/in/gabrielfjm/',
  cv: '/assets/curriculo.pdf',
  cvEn: '/assets/resume.pdf',
  // Foto otimizada (a original de 2048px fica em assets-src/ e é usada só para gerar o CV)
  avatar: '/assets/foto-800.webp',
  avatarSrcSet: '/assets/foto-480.webp 480w, /assets/foto-800.webp 800w',
  location: 'Piraquara, PR',
  coords: '25°26′S 49°04′W',
}

export const company = {
  name: 'JESS Branding',
  url: 'https://www.jessbranding.com.br',
  domain: 'jessbranding.com.br',
  instagram: 'https://www.instagram.com/jess.branding/',
  instagramHandle: '@jess.branding',
}

export const meta = {
  pt: {
    title: 'Gabriel Felipe Jess Meira | Engenheiro de Software e CEO da JESS Branding',
    desc: 'Gabriel Felipe Jess Meira é Engenheiro de Software, CEO e fundador da JESS Branding e Mestrando em Informática na PUCPR. Sites, sistemas e branding em Curitiba e região.',
  },
  en: {
    title: 'Gabriel Felipe Jess Meira | Software Engineer and CEO of JESS Branding',
    desc: 'Gabriel Felipe Jess Meira is a Software Engineer, CEO and founder of JESS Branding and an MSc student in Computer Science at PUCPR. Websites, systems and branding.',
  },
}

export const nav = [
  { id: 'sobre', label: { pt: 'Sobre', en: 'About' } },
  { id: 'jess', label: 'JESS', menuLabel: 'JESS Branding' },
  { id: 'publicacoes', label: { pt: 'Publicações', en: 'Papers' }, menuLabel: { pt: 'Publicações', en: 'Publications' } },
  { id: 'formacao', label: { pt: 'Formação', en: 'Education' } },
  { id: 'habilidades', label: 'Stack' },
  { id: 'experiencia', label: { pt: 'Experiência', en: 'Experience' } },
  { id: 'projetos', label: { pt: 'Projetos', en: 'Projects' } },
  { id: 'voluntariado', label: { pt: 'Voluntariado', en: 'Volunteering' } },
  { id: 'contato', label: { pt: 'Contato', en: 'Contact' } },
]

export const hero = {
  status: { pt: 'Disponível para projetos', en: 'Available for projects' },
  areas: { pt: 'Engenharia · Branding · Pesquisa', en: 'Engineering · Branding · Research' },
  eyebrow: { pt: 'Engenheiro de Software · CEO da JESS', en: 'Software Engineer · CEO of JESS' },
  phrases: {
    pt: ['Engenheiro de Software', 'CEO & Founder @ JESS Branding', 'Mestrando em Informática · PUCPR', 'Autor · ICEIS 2026', 'Bolsista CAPES', 'Full Stack Developer'],
    en: ['Software Engineer', 'CEO & Founder @ JESS Branding', 'MSc Student in Computer Science · PUCPR', 'Author · ICEIS 2026', 'CAPES Scholar', 'Full Stack Developer'],
  },
  ctaProjects: { pt: 'Ver projetos', en: 'View projects' },
}

export const marqueeMain = ['Engenharia de Software', 'Branding', 'Sistemas', 'Pesquisa', 'Full Stack', 'JESS']

export const about = {
  statement: {
    pt: 'Engenheiro de software, pesquisador e empreendedor. Construo sistemas, marcas e experiências digitais que unem **estratégia**, **design** e **tecnologia** para transformar ideias em produtos que geram resultado.',
    en: 'Software engineer, researcher and entrepreneur. I build systems, brands and digital experiences that combine **strategy**, **design** and **technology** to turn ideas into products that deliver results.',
  },
  bio: {
    pt: [
      'Desenvolvedor de Sistemas e Engenheiro de Software apaixonado por tecnologia e por construir soluções que impactam pessoas. Com experiência em desenvolvimento back-end, front-end e mobile, atuo com Java, Spring Boot, PHP, .NET, React, Flutter e mais.',
      'Sou **CEO e fundador da JESS Branding**, onde lidero a criação de sites profissionais, landing pages, sistemas sob medida e branding. Também sou **Mestrando em Informática pela PUCPR**, Bolsista CAPES.',
      'Minha trajetória une formação acadêmica de excelência com aplicação prática em empresas privadas, setor público, pesquisa científica e empreendedorismo.',
    ],
    en: [
      'Systems Developer and Software Engineer passionate about technology and building solutions that impact people. With experience in back-end, front-end and mobile development, I work with Java, Spring Boot, PHP, .NET, React, Flutter and more.',
      "I'm the **CEO and founder of JESS Branding**, where I lead the creation of professional websites, landing pages, custom systems and branding. I'm also an **MSc student in Computer Science at PUCPR**, CAPES Scholar.",
      'My career combines academic excellence with hands-on experience in private companies, the public sector, scientific research and entrepreneurship.',
    ],
  },
  stats: [
    { value: 4, suffix: '+', label: { pt: 'Anos de experiência', en: 'Years of experience' } },
    { value: 25, suffix: '+', label: { pt: 'Tecnologias', en: 'Technologies' } },
    { value: 15, suffix: '+', label: { pt: 'Projetos & cases', en: 'Projects & cases' } },
    { text: 'MSc', label: { pt: 'Em andamento', en: 'In progress' } },
  ],
  softSkills: [
    { icon: 'fa-check', label: { pt: 'Responsabilidade', en: 'Responsibility' } },
    { icon: 'fa-users', label: { pt: 'Liderança', en: 'Leadership' } },
    { icon: 'fa-comments', label: { pt: 'Comunicação', en: 'Communication' } },
    { icon: 'fa-brain', label: { pt: 'Raciocínio Lógico', en: 'Logical Thinking' } },
    { icon: 'fa-lightbulb', label: { pt: 'Criatividade', en: 'Creativity' } },
    { icon: 'fa-puzzle-piece', label: { pt: 'Resolução de Problemas', en: 'Problem Solving' } },
    { icon: 'fa-rotate', label: { pt: 'Adaptabilidade', en: 'Adaptability' } },
    { icon: 'fa-rocket', label: { pt: 'Empreendedorismo', en: 'Entrepreneurship' } },
    { icon: 'fa-graduation-cap', label: { pt: 'Aprendizado Contínuo', en: 'Continuous Learning' } },
    { icon: 'fa-flask', label: { pt: 'Iniciação Científica', en: 'Scientific Research' } },
  ],
  languages: [
    { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' }, pct: 100 },
    { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Técnico / Intermediário', en: 'Technical / Intermediate' }, pct: 65 },
  ],
}

export const jess = {
  role: { pt: 'Fundador & CEO', en: 'Founder & CEO' },
  pillars: { pt: 'Branding · Sites · Sistemas', en: 'Branding · Sites · Systems' },
  tagline: { pt: 'Transformamos negócios em marcas que vendem.', en: 'We turn businesses into brands that sell.' },
  intro: {
    pt: 'A **JESS** une **estratégia, design e tecnologia** para criar sites profissionais, landing pages, sistemas sob medida e branding. Atendemos negócios de Piraquara, Curitiba e todo o Brasil, presencialmente na região e de forma remota.',
    en: '**JESS** combines **strategy, design and technology** to create professional websites, landing pages, custom systems and branding. We serve businesses in Piraquara, Curitiba and all of Brazil, on site locally and remotely.',
  },
  services: [
    { icon: 'fa-bullseye', name: 'Landing Page' },
    { icon: 'fa-building', name: { pt: 'Site Institucional', en: 'Corporate Website' } },
    { icon: 'fa-store', name: { pt: 'Catálogo Digital', en: 'Digital Catalog' } },
    { icon: 'fa-user-tie', name: { pt: 'Página para Autônomos', en: 'Freelancer Page' } },
    { icon: 'fa-wand-magic-sparkles', name: { pt: 'Redesign de Site', en: 'Website Redesign' } },
    { icon: 'fa-screwdriver-wrench', name: { pt: 'Manutenção Mensal', en: 'Monthly Maintenance' } },
  ],
  quote: {
    pt: ['Seu concorrente pode não ser melhor.', 'Ele pode apenas estar mais fácil de encontrar.'],
    en: ['Your competitor may not be better.', 'They may just be easier to find.'],
  },
  cta: { pt: 'Conhecer a JESS', en: 'Visit JESS' },
  segments: ['Lojas', 'Oficinas', 'Restaurantes', 'Salões de beleza', 'Clínicas', 'Profissionais autônomos', 'Imobiliárias', 'Academias', 'Empresas de serviços', 'Portais institucionais'],
}

/* Publicações científicas. me: true marca o seu nome na lista de autores */
export const publications = [
  {
    featured: true,
    badge: { pt: 'Primeira publicação · Primeiro autor', en: 'First publication · First author' },
    short: 'ICEIS 2026',
    venue: '28th International Conference on Enterprise Information Systems · SCITEPRESS',
    title: 'A Tool Supported by LLM for Heuristic Usability Evaluation',
    authors: [
      { name: 'Gabriel Felipe Jess Meira', me: true },
      { name: 'Brunno Tatsuo Noda Bandeira da Cruz' },
      { name: 'Tiago Vieira Paulin' },
      { name: 'Pedro Henrique Dias Valle' },
      { name: 'Leo Natan Paschoal' },
    ],
    review: {
      pt: [
        'O artigo apresenta a **PANDA**, uma ferramenta web que integra todo o fluxo de avaliação heurística, baseado nas 10 Heurísticas de Nielsen, a um **assistente virtual com LLM (Gemini)**. Em vez de automatizar a inspeção, o assistente atua como um mentor técnico sob demanda: explica heurísticas, dá exemplos e ajuda avaliadores iniciantes a justificar problemas e classificar a severidade, mantendo o julgamento humano no centro.',
        'Para validar a proposta, foi conduzido um **estudo experimental com 12 avaliadores iniciantes**, comparando a ferramenta com e sem o assistente e medindo a aceitação pelo modelo **TAM 3.0**. Utilidade percebida, facilidade de uso e intenção de uso tiveram **medianas acima de 5,5 em uma escala de 7 pontos**, mostrando alta aceitação. A diferença entre os grupos não foi estatisticamente significativa, o que o estudo interpreta como um efeito teto: a própria estrutura da PANDA já é percebida como muito útil.',
      ],
      en: [
        "The paper presents **PANDA**, a web tool that integrates the whole heuristic evaluation workflow, based on Nielsen's 10 Heuristics, with an **LLM-based virtual assistant (Gemini)**. Instead of automating the inspection, the assistant acts as an on-demand technical mentor: it explains heuristics, gives examples and helps novice evaluators justify problems and classify severity, keeping human judgment at the center.",
        'To validate the proposal, an **experimental study with 12 novice evaluators** compared the tool with and without the assistant, measuring acceptance with the **TAM 3.0** model. Perceived usefulness, ease of use and intention to use all had **medians above 5.5 on a 7-point scale**, showing high acceptance. The difference between groups was not statistically significant, which the study interprets as a ceiling effect: PANDA\'s own structure is already perceived as highly useful.',
      ],
    },
    facts: [
      { value: '12', label: { pt: 'avaliadores no experimento', en: 'evaluators in the study' } },
      { value: 'TAM 3.0', label: { pt: 'modelo de aceitação', en: 'acceptance model' } },
      { value: '5,5+', valueEn: '5.5+', label: { pt: 'medianas em escala de 7', en: 'medians on a 7-point scale' } },
      { value: 'Gemini', label: { pt: 'LLM do assistente', en: 'assistant LLM' } },
    ],
    cite: { pt: 'Proceedings do ICEIS 2026, Vol. 3, p. 1916 a 1927', en: 'ICEIS 2026 Proceedings, Vol. 3, pp. 1916 to 1927' },
    doi: '10.5220/0014829900004018',
    cvSummary: {
      pt: 'Apresenta a PANDA, ferramenta web de avaliação heurística com assistente baseado em LLM (Gemini), validada em estudo experimental com 12 avaliadores pelo modelo TAM 3.0, com alta aceitação (medianas acima de 5,5 em 7).',
      en: 'Presents PANDA, a heuristic evaluation web tool with an LLM-based assistant (Gemini), validated in an experimental study with 12 evaluators using TAM 3.0, showing high acceptance (medians above 5.5 out of 7).',
    },
    links: [
      { label: { pt: 'Ler artigo (PDF)', en: 'Read paper (PDF)' }, url: 'https://www.scitepress.org/Papers/2026/148299/148299.pdf', icon: 'fas fa-file-pdf', solid: true },
      { label: { pt: 'Usar a PANDA', en: 'Try PANDA' }, url: 'https://gabrielfjm.github.io/flutter-pandyzer/', icon: 'fas fa-arrow-right' },
    ],
  },
  {
    badge: { pt: 'Coautor', en: 'Co-author' },
    short: 'WBOTS 2026',
    venue: 'Workshop sobre Bots na Engenharia de Software · SBC',
    title: 'Uma Ferramenta para Apoiar a Seleção de Instrumentos de Avaliação de Chatbots Educacionais',
    authors: [
      { name: 'Mariana Almeida Faustino' },
      { name: 'Gabriel Felipe Jess Meira', me: true },
      { name: 'Silvana Morita Melo' },
      { name: 'Leo Natan Paschoal' },
      { name: 'Pedro Henrique Dias Valle' },
    ],
    review: {
      pt: ['Apresenta uma **ferramenta web** construída a partir de um mapeamento sistemático da literatura, que organiza instrumentos de avaliação de chatbots educacionais em um catálogo com busca e filtros, centralizando descrição, atributos de qualidade, modalidade, idiomas e acesso a cada instrumento.'],
      en: ['Presents a **web tool** built from a systematic literature mapping, which organizes evaluation instruments for educational chatbots into a searchable, filterable catalog, centralizing the description, quality attributes, modality, languages and access to each instrument.'],
    },
    cite: { pt: 'Anais do WBOTS 2026, p. 16 a 22', en: 'WBOTS 2026 Proceedings, pp. 16 to 22' },
    doi: '10.5753/wbots.2026.33025',
    // DOI ainda não registrado no doi.org: o link aponta para a página oficial do artigo na SBC
    doiUrl: 'https://sol.sbc.org.br/index.php/wbots/article/view/46030',
    facts: [
      { value: 'SBC', label: { pt: 'Sociedade Brasileira de Computação', en: 'Brazilian Computer Society' } },
      { value: '4', label: { pt: 'instituições: UTFPR, PUCPR, UFGD e USP', en: 'institutions: UTFPR, PUCPR, UFGD and USP' } },
      { value: '2º', valueEn: '2nd', label: { pt: 'autor, entre 5', en: 'author, out of 5' } },
      { value: 'Set/26', valueEn: 'Sep/26', label: { pt: 'publicado nos anais', en: 'published in proceedings' } },
    ],
    cvSummary: {
      pt: 'Ferramenta web que organiza, a partir de um mapeamento sistemático da literatura, instrumentos de avaliação de chatbots educacionais em um catálogo com busca e filtros.',
      en: 'Web tool that organizes, based on a systematic literature mapping, evaluation instruments for educational chatbots into a searchable, filterable catalog.',
    },
    links: [
      { label: { pt: 'Ver artigo', en: 'View paper' }, url: 'https://sol.sbc.org.br/index.php/wbots/article/view/46030', icon: 'fas fa-file-lines', solid: true },
    ],
  },
]

/* CV em PDF: textos que só aparecem no currículo (gerado por npm run cv) */
export const cv = {
  headline: {
    pt: 'Engenheiro de Software · Desenvolvedor Full Stack · CEO da JESS Branding',
    en: 'Software Engineer · Full Stack Developer · CEO of JESS Branding',
  },
  location: { pt: 'Piraquara, PR, Brasil', en: 'Piraquara, PR, Brazil' },
  // Faixa de destaques logo abaixo dos contatos: [texto em negrito, complemento]
  highlights: {
    pt: [['4+ anos', 'de experiência'], ['1º autor', 'no ICEIS 2026'], ['CEO', 'da JESS Branding'], ['Prêmio', 'Marcelino Champagnat']],
    en: [['4+ years', 'of experience'], ['1st author', 'at ICEIS 2026'], ['CEO', 'of JESS Branding'], ['Marcelino', 'Champagnat Award']],
  },
  summary: {
    pt: 'Engenheiro de Software e Desenvolvedor Full Stack, **CEO e fundador da JESS Branding** e **Mestrando em Informática na PUCPR**, Bolsista CAPES. Mais de 4 anos de experiência em desenvolvimento web, mobile e back-end com Java, Spring Boot, React, Flutter, .NET, PHP e MySQL, do levantamento de requisitos à publicação. **Primeiro autor de artigo internacional no ICEIS 2026** sobre avaliação de usabilidade apoiada por LLM. Premiado como Aluno Marcelino Champagnat, destaque único da turma de Engenharia de Software da PUCPR.',
    en: 'Software Engineer and Full Stack Developer, **CEO and founder of JESS Branding** and **MSc student in Computer Science at PUCPR**, CAPES Scholar. Over 4 years of experience in web, mobile and back-end development with Java, Spring Boot, React, Flutter, .NET, PHP and MySQL, from requirements gathering to launch. **First author of an international paper at ICEIS 2026** on LLM-supported usability evaluation. Awarded the Marcelino Champagnat Award as the sole outstanding student of the PUCPR Software Engineering class.',
  },
  skills: [
    { name: { pt: 'Linguagens', en: 'Languages' }, items: ['Java', 'JavaScript', 'TypeScript', 'C#', 'PHP', 'Python', 'Dart', 'SQL', 'HTML5', 'CSS3'] },
    { name: 'Back-end', items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', '.NET / .NET Core', 'Entity Framework', { pt: 'APIs REST', en: 'REST APIs' }] },
    { name: 'Front-end & Mobile', items: ['React', 'Vite', 'Tailwind CSS', 'Flutter', { pt: 'Design responsivo', en: 'Responsive design' }, 'PWA'] },
    { name: { pt: 'Banco de dados', en: 'Databases' }, items: ['MySQL', 'SQL Server (T-SQL)', 'Supabase'] },
    { name: { pt: 'Práticas e ferramentas', en: 'Practices & tools' }, items: ['Git', 'GitHub', 'GitHub Actions', 'Git Flow', 'Scrum', 'Kanban', 'UML', 'BPMN', { pt: 'Testes de software (Robot Framework)', en: 'Software testing (Robot Framework)' }, 'Design Patterns (MVC, Repository)'] },
    { name: { pt: 'IA e pesquisa', en: 'AI & research' }, items: ['LLM (Gemini)', { pt: 'Interação Humano-Computador', en: 'Human-Computer Interaction' }, { pt: 'Avaliação heurística', en: 'Heuristic evaluation' }, { pt: 'Estudos experimentais', en: 'Experimental studies' }] },
    { name: { pt: 'Negócios', en: 'Business' }, items: ['Branding', 'SEO', { pt: 'Levantamento de requisitos', en: 'Requirements gathering' }, { pt: 'ETP para licitações', en: 'Procurement studies (ETP)' }, 'Power BI', { pt: 'Pacote Office', en: 'Office Suite' }] },
    { name: { pt: 'Experiência breve', en: 'Brief experience' }, items: ['GeneXus', 'COBOL', 'Hadoop', 'Apache Spark'] },
  ],
  softSkills: {
    pt: ['Liderança', 'Comunicação', 'Responsabilidade', 'Resolução de problemas', 'Adaptabilidade', 'Aprendizado contínuo'],
    en: ['Leadership', 'Communication', 'Responsibility', 'Problem solving', 'Adaptability', 'Continuous learning'],
  },
  availability: {
    pt: 'Remoto, presencial ou híbrido · CLT ou PJ',
    en: 'Remote, on-site or hybrid · Full-time employee (CLT) or contractor (PJ)',
  },
  volunteering: {
    pt: 'Coordenador da Pastoral da Comunicação e dos Servidores do Altar, Paróquia N. Sra. Auxiliadora (atual)',
    en: 'Coordinator of Communication Ministry and Altar Servers, Our Lady Help of Christians Parish (current)',
  },
  languages: [
    { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'nativo', en: 'native' } },
    { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'intermediário, leitura técnica', en: 'intermediate, technical reading' } },
  ],
}

export const education = {
  items: [
    {
      date: { pt: '2026 · Atual', en: '2026 · Present' },
      title: { pt: 'Mestrando em Informática', en: 'MSc in Computer Science' },
      cvTitle: { pt: 'Mestrado em Informática (em andamento)', en: 'MSc in Computer Science (in progress)' },
      inst: 'PUCPR · Pontifícia Universidade Católica do Paraná',
      desc: { pt: 'Programa de Pós-Graduação em Informática (PPGIA). Pesquisa em desenvolvimento de software e computação aplicada.', en: 'Graduate Program in Computer Science (PPGIA). Research in software development and applied computing.' },
      badge: { icon: 'fa-award', label: { pt: 'Bolsista CAPES', en: 'CAPES Scholar' } },
    },
    {
      date: { pt: '2022 a 2025', en: '2022 to 2025' },
      title: { pt: 'Bacharel em Engenharia de Software', en: 'BSc in Software Engineering' },
      cvTitle: { pt: 'Bacharelado em Engenharia de Software', en: 'BSc in Software Engineering' },
      inst: 'PUCPR · Pontifícia Universidade Católica do Paraná',
      desc: { pt: 'Formação sólida em engenharia e desenvolvimento de software, arquitetura, qualidade de código e metodologias ágeis.', en: 'Solid training in software engineering and development, architecture, code quality and agile methodologies.' },
      badge: { icon: 'fa-star', label: { pt: 'Aluno Marcelino Champagnat · Turma 2022', en: 'Marcelino Champagnat Award · Class of 2022' } },
    },
    {
      date: { pt: '2019 a 2021', en: '2019 to 2021' },
      title: { pt: 'Técnico em Informática integrado ao Ensino Médio', en: 'IT Technician (integrated high school)' },
      inst: 'TECPUC · Centro de Educação Profissional Irmão Mário Cristóvão',
      desc: { pt: 'Formação técnica com foco em programação, redes, banco de dados e desenvolvimento web.', en: 'Technical training focused on programming, networks, databases and web development.' },
    },
  ],
  award: {
    label: { pt: 'destaque acadêmico', en: 'academic highlight' },
    title: { pt: 'Aluno Marcelino Champagnat', en: 'Marcelino Champagnat Award' },
    sub: { pt: 'Prêmio de Destaque Acadêmico · PUCPR · Turma 2022 · Engenharia de Software', en: 'Academic Excellence Award · PUCPR · Class of 2022 · Software Engineering' },
    text: {
      pt: 'Reconhecimento concedido ao **único aluno da turma de 2022** do curso de **Engenharia de Software da PUCPR** com maior destaque acadêmico. O Prêmio Marcelino Champagnat homenageia o fundador da Congregação dos Irmãos Maristas e é conferido ao estudante que demonstrou excelência, comprometimento e contribuição excepcional ao longo de toda a formação. É uma distinção concedida a apenas um aluno por turma.',
      en: 'Recognition given to the **sole outstanding student of the 2022 class** of **Software Engineering at PUCPR**. The Marcelino Champagnat Award honors the founder of the Marist Brothers Congregation and is granted to the student who demonstrated excellence, commitment and exceptional contribution throughout their entire program. It is a distinction given to only one student per class.',
    },
    chips: [
      { icon: 'fa-building-columns', label: 'PUCPR' },
      { icon: 'fa-code', label: { pt: 'Engenharia de Software', en: 'Software Engineering' } },
      { icon: 'fa-trophy', label: { pt: 'Turma 2022', en: 'Class of 2022' } },
      { icon: 'fa-medal', label: { pt: 'Destaque único da turma', en: 'Sole outstanding student' } },
    ],
  },
}

/* icon: classe completa (devicon-* ou "fas fa-*" / "fab fa-*") */
export const stack = [
  {
    name: 'Back-end',
    items: [
      ['devicon-java-plain', 'Java'], ['devicon-spring-plain', 'Spring Boot'], ['devicon-spring-plain', 'Spring MVC'],
      ['devicon-spring-plain', 'Spring Data'], ['devicon-csharp-plain', 'C#'], ['devicon-dotnetcore-plain', '.NET / .NET Core'],
      ['fas fa-cubes', 'Entity Framework'], ['devicon-php-plain', 'PHP'], ['devicon-python-plain', 'Python'],
    ],
  },
  {
    name: 'Front-end & Mobile',
    items: [
      ['devicon-html5-plain', 'HTML5'], ['devicon-css3-plain', 'CSS3'], ['devicon-javascript-plain', 'JavaScript (ES6+)'],
      ['devicon-typescript-plain', 'TypeScript'], ['devicon-react-original', 'React'], ['devicon-tailwindcss-plain', 'Tailwind CSS'],
      ['devicon-flutter-plain', 'Flutter'], ['devicon-dart-plain', 'Dart'],
    ],
  },
  {
    name: { pt: 'Banco de dados', en: 'Database' },
    items: [['devicon-mysql-plain', 'MySQL'], ['devicon-microsoftsqlserver-plain', 'T-SQL'], ['fas fa-bolt', 'Supabase']],
  },
  {
    name: { pt: 'DevOps & Versionamento', en: 'DevOps & Version control' },
    items: [
      ['devicon-git-plain', 'Git'], ['devicon-github-original', 'GitHub'], ['fas fa-code-branch', 'Git Flow'],
      ['fab fa-github', 'GitHub Flow'], ['fas fa-sitemap', 'Trunk-Based'],
    ],
  },
  {
    name: { pt: 'Metodologias & Modelagem', en: 'Methods & Modeling' },
    items: [
      ['fas fa-arrows-rotate', 'Scrum'], ['fas fa-table-columns', 'Kanban'], ['fas fa-diagram-project', 'UML'],
      ['fas fa-draw-polygon', 'BPMN'], ['fas fa-file-lines', 'ETP'],
      ['fas fa-clipboard-list', { pt: 'Análise de Requisitos', en: 'Requirements Analysis' }],
    ],
  },
  {
    name: { pt: 'Outros', en: 'Others' },
    items: [
      ['fas fa-robot', 'RobotFramework'], ['fas fa-chart-column', 'Power BI'], ['fas fa-layer-group', 'MVC'],
      ['fas fa-database', 'Repository Pattern'], ['fas fa-magnifying-glass-chart', 'SEO'], ['fas fa-pen-nib', 'Branding'],
      ['fas fa-file-word', { pt: 'Pacote Office', en: 'Office Suite' }],
    ],
  },
]
export const stackBonus = { name: { pt: 'Bônus · breve', en: 'Bonus · brief' }, items: ['COBOL', 'Hadoop', 'Apache Spark', 'GeneXus (GX9)'] }

/*
 * Experiência profissional (site e CV em PDF).
 * period: datas MM/AAAA, formato que a triagem automática (Gupy, LinkedIn) entende.
 * stack: tecnologias do cargo, que viram palavras-chave no CV.
 */
export const experience = [
  {
    current: true,
    when: { pt: 'Fev/2026 · Atual', en: 'Feb/2026 · Present' },
    period: { pt: '02/2026 - Atual', en: '02/2026 - Present' },
    whenSub: { pt: 'Fundador', en: 'Founder' },
    title: 'CEO & Founder',
    org: 'JESS Branding ↗',
    orgName: 'JESS Branding',
    orgUrl: 'https://www.jessbranding.com.br',
    place: { pt: 'Piraquara, PR · Presencial e remoto', en: 'Piraquara, Brazil · On-site and remote' },
    chip: { pt: 'Empreendedor', en: 'Entrepreneur' },
    bullets: {
      pt: [
        'Fundação e direção estratégica da JESS, empresa de branding, sites e sistemas',
        'Entrega de sites, landing pages, catálogos e sistemas sob medida para clientes como GM Select Brasil e Riss Planejados',
        'Condução dos projetos de ponta a ponta: briefing, identidade visual, desenvolvimento, SEO, publicação e manutenção',
        'Desenvolvimento do Portal JESS, plataforma própria de gestão de projetos, clientes e cobranças com assistente de IA',
      ],
      en: [
        'Founder and strategic lead of JESS, a branding, websites and systems company',
        'Delivered websites, landing pages, catalogs and custom systems for clients such as GM Select Brasil and Riss Planejados',
        'End-to-end project delivery: briefing, visual identity, development, SEO, launch and maintenance',
        'Built the JESS Portal, an in-house platform for project, client and billing management with an AI assistant',
      ],
    },
    stack: ['React', 'Vite', 'JavaScript', 'SEO', 'Branding', { pt: 'IA generativa', en: 'Generative AI' }],
  },
  {
    current: true,
    when: { pt: '2026 · Atual', en: '2026 · Present' },
    period: { pt: '2026 - Atual', en: '2026 - Present' },
    title: { pt: 'Pesquisador · Mestrando em Informática', en: 'Researcher · MSc in Computer Science' },
    org: 'PUCPR · Pontifícia Universidade Católica do Paraná',
    orgName: 'PUCPR (Pontifícia Universidade Católica do Paraná)',
    place: { pt: 'Curitiba, PR · Bolsista CAPES integral', en: 'Curitiba, Brazil · Full CAPES scholarship' },
    chip: { pt: 'Bolsista CAPES', en: 'CAPES Scholar' },
    bullets: {
      pt: [
        'Pesquisa em Engenharia de Software e Interação Humano-Computador no PPGIA da PUCPR',
        'Primeiro autor de artigo no ICEIS 2026 sobre a PANDA, ferramenta de avaliação heurística apoiada por LLM',
        'Coautor de artigo no WBOTS 2026 sobre seleção de instrumentos de avaliação de chatbots educacionais',
      ],
      en: [
        'Research in Software Engineering and Human-Computer Interaction at PUCPR (PPGIA)',
        'First author of an ICEIS 2026 paper on PANDA, an LLM-supported heuristic evaluation tool',
        'Co-author of a WBOTS 2026 paper on selecting evaluation instruments for educational chatbots',
      ],
    },
    stack: ['Flutter', 'Java', 'Spring Boot', 'MySQL', 'LLM (Gemini)', { pt: 'Estudos experimentais', en: 'Experimental studies' }],
  },
  {
    when: { pt: 'Fev/2025 a Ago/2025', en: 'Feb/2025 to Aug/2025' },
    period: { pt: '02/2025 - 08/2025', en: '02/2025 - 08/2025' },
    title: { pt: 'Auxiliar de Programação', en: 'Programming Assistant' },
    org: 'Evo Sistemas Inteligentes',
    orgName: 'Evo Sistemas Inteligentes',
    chip: { pt: 'Estagiário → Auxiliar', en: 'Intern → Assistant' },
    bullets: {
      pt: [
        'Manutenção e evolução do sistema da empresa com Flutter, Java (Spring Boot) e MySQL',
        'Promovido de estagiário a Auxiliar de Programação em julho de 2025',
        'Treinamento de novos estagiários: configuração do ambiente de desenvolvimento e padrões do código',
      ],
      en: [
        "Maintenance and evolution of the company's system with Flutter, Java (Spring Boot) and MySQL",
        'Promoted from intern to Programming Assistant in July 2025',
        'Training of new interns: development environment setup and code standards',
      ],
    },
    stack: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'MySQL', 'Git'],
  },
  {
    when: { pt: 'Mai/2024 a Fev/2025', en: 'May/2024 to Feb/2025' },
    period: { pt: '05/2024 - 02/2025', en: '05/2024 - 02/2025' },
    title: { pt: 'Coordenador de Estagiários de TI', en: 'IT Intern Coordinator' },
    org: { pt: 'Prefeitura Municipal de Piraquara', en: 'City Hall of Piraquara' },
    orgName: { pt: 'Prefeitura Municipal de Piraquara · Departamento de Hardware', en: 'City Hall of Piraquara · Hardware Department' },
    place: { pt: 'Piraquara, PR', en: 'Piraquara, Brazil' },
    chip: { pt: 'Estagiário → Coordenador', en: 'Intern → Coordinator' },
    bullets: {
      pt: [
        'Suporte técnico, manutenção de computadores e atendimento aos usuários da prefeitura',
        'Elaboração de Estudos Técnicos Preliminares (ETP) para processos de licitação do departamento',
        'Criação do DOS, sistema web em Java e Spring Boot para controle de computadores em manutenção',
        'Promovido a coordenador da equipe de estagiários do departamento',
      ],
      en: [
        'Technical support, computer maintenance and end-user assistance',
        'Preparation of Preliminary Technical Studies (ETP) for the department’s procurement processes',
        'Built DOS, a Java and Spring Boot web system to track computers under maintenance',
        'Promoted to coordinator of the department’s intern team',
      ],
    },
    stack: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', { pt: 'Suporte técnico', en: 'IT support' }],
  },
  {
    when: { pt: 'Set/2021 a Abr/2023', en: 'Sep/2021 to Apr/2023' },
    period: { pt: '09/2021 - 04/2023', en: '09/2021 - 04/2023' },
    title: { pt: 'Desenvolvedor de Sistemas', en: 'Systems Developer' },
    org: 'DBlink Sistemas',
    orgName: 'DBlink Sistemas',
    chip: { pt: 'Desenvolvedor', en: 'Developer' },
    bullets: {
      pt: [
        'Desenvolvimento de soluções para clientes com GeneXus 9 e MySQL, em equipe ágil com Scrum e Kanban',
        'Criação de CRUDs e relatórios em PDF e XML para dar aos clientes uma visão geral dos seus dados',
        'Testes de software antes das entregas',
      ],
      en: [
        'Built client solutions with GeneXus 9 and MySQL in an agile team using Scrum and Kanban',
        'Developed CRUDs and PDF and XML reports giving clients an overview of their data',
        'Software testing before deliveries',
      ],
    },
    stack: ['GeneXus 9', 'MySQL', 'Scrum', 'Kanban', { pt: 'Testes de software', en: 'Software testing' }],
  },
]

/* Top 6, na ordem: produtos próprios, clientes da JESS, acadêmico, pessoal. kind = selo do card; cta = texto do link */
export const projects = [
  {
    name: 'Portal JESS',
    cvDesc: { pt: "Plataforma de gestão de projetos, clientes e cobranças da JESS, com conteúdo editável pelo cliente e assistente com IA.", en: "JESS's project, client and billing management platform, with client-editable content and an AI assistant." },
    kind: 'JESS',
    year: 2026,
    icon: 'fa-gauge-high',
    url: 'https://www.jessbranding.com.br/portal',
    cta: { pt: 'Acessar portal', en: 'Open portal' },
    techs: ['React', 'Vite', { pt: 'IA', en: 'AI' }, 'SaaS'],
    desc: {
      pt: 'Plataforma de gestão da JESS: andamento dos projetos por etapas, briefing, conteúdo dos sites editável pelo cliente, chat centralizado, cobranças e um assistente com IA para copys, negociação e geração de imagens.',
      en: "JESS's management platform: step-by-step project tracking, briefing, client-editable site content, centralized chat, billing and an AI assistant for copywriting, negotiation and image generation.",
    },
  },
  {
    name: 'PANDA',
    cvDesc: { pt: "Ferramenta de avaliação heurística (Nielsen) com assistente LLM, tema do artigo publicado no ICEIS 2026.", en: "Heuristic evaluation tool (Nielsen) with an LLM assistant, subject of the paper published at ICEIS 2026." },
    kind: { pt: 'Produto', en: 'Product' },
    year: 2025,
    icon: 'fa-magnifying-glass-chart',
    url: 'https://gabrielfjm.github.io/flutter-pandyzer/',
    cta: { pt: 'Ver ferramenta', en: 'View tool' },
    techs: ['Flutter', 'Spring Boot', 'MySQL', 'Gemini', 'ICEIS 2026'],
    desc: {
      pt: 'Ferramenta colaborativa para avaliações heurísticas de interfaces com base nas 10 Heurísticas de Nielsen. Conecta especialistas, iniciantes e clientes, tem chatbot com IA e gera relatórios completos de usabilidade.',
      en: "Collaborative tool for heuristic evaluations of interfaces based on Nielsen's 10 Heuristics. It connects experts, beginners and clients, includes an AI chatbot and generates complete usability reports.",
    },
  },
  {
    name: 'GM Select Brasil',
    cvDesc: { pt: "Catálogo digital de produtos novos e usados, com navegação por categorias e pedidos pelo WhatsApp.", en: "Digital catalog of new and used products, with category navigation and WhatsApp orders." },
    kind: { pt: 'Cliente JESS', en: 'JESS client' },
    year: 2026,
    icon: 'fa-store',
    url: 'https://www.gmselectbrasil.com.br/',
    cta: { pt: 'Ver site', en: 'View site' },
    techs: [{ pt: 'Catálogo digital', en: 'Digital catalog' }, 'SEO', { pt: 'Responsivo', en: 'Responsive' }, 'WhatsApp'],
    desc: {
      pt: 'Vitrine comercial para produtos novos e usados, com navegação por categorias, identidade visual aplicada e integração com WhatsApp para transformar interesse em compra.',
      en: 'Commercial showcase for new and used products, with category navigation, applied visual identity and WhatsApp integration to turn interest into sales.',
    },
  },
  {
    name: 'Riss Planejados',
    cvDesc: { pt: "Site institucional premium para soluções em mármores, granitos e superfícies, com portfólio e captação pelo WhatsApp.", en: "Premium corporate website for marble, granite and surface solutions, with portfolio and WhatsApp lead capture." },
    kind: { pt: 'Cliente JESS', en: 'JESS client' },
    year: 2026,
    icon: 'fa-gem',
    url: 'https://www.rissplanejados.com.br/',
    cta: { pt: 'Ver site', en: 'View site' },
    techs: [{ pt: 'Site institucional', en: 'Corporate website' }, 'SEO', { pt: 'Portfólio', en: 'Portfolio' }, 'WhatsApp'],
    desc: {
      pt: 'Apresentação premium para soluções em mármores, granitos e superfícies, com posicionamento institucional, portfólio visual de projetos e conversão de contatos pelo WhatsApp.',
      en: 'Premium presentation of marble, granite and surface solutions, with institutional positioning, a visual project portfolio and WhatsApp lead conversion.',
    },
  },
  {
    name: 'WBOTS 2026',
    cvDesc: { pt: "Site oficial do Workshop sobre Bots na Engenharia de Software.", en: "Official website of the Workshop on Bots in Software Engineering." },
    kind: { pt: 'Evento acadêmico', en: 'Academic event' },
    year: 2026,
    icon: 'fa-robot',
    url: 'https://w-bots.github.io/wbots/2026/',
    cta: { pt: 'Ver site', en: 'View site' },
    techs: ['HTML', 'CSS', { pt: 'Responsivo', en: 'Responsive' }],
    desc: {
      pt: 'Site oficial do Workshop sobre Bots na Engenharia de Software, com chamadas, datas, submissões e programação. Também foi onde publiquei como coautor.',
      en: 'Official website of the Workshop on Bots in Software Engineering, with calls, dates, submissions and program. It is also where I published as a co-author.',
    },
  },
  {
    name: 'Rancho da Cozinha',
    cvDesc: { pt: "PWA de receitas offline-first com modo cozinha, cálculo nutricional e sincronização com Supabase.", en: "Offline-first recipe PWA with cooking mode, nutrition facts and Supabase sync." },
    kind: { pt: 'App pessoal', en: 'Personal app' },
    year: 2026,
    icon: 'fa-kitchen-set',
    url: 'https://rancho-da-cozinha.vercel.app',
    cta: { pt: 'Abrir app', en: 'Open app' },
    techs: ['React', 'TypeScript', 'Supabase', 'PWA', 'Offline-first'],
    desc: {
      pt: 'Caderno de receitas em PWA com modo cozinha, timers, ajuste de porções, cálculo nutricional com 833 ingredientes da tabela TACO, lista de compras e acervo de 789 receitas. Funciona offline e sincroniza com Supabase.',
      en: 'Recipe notebook PWA with cooking mode, timers, serving adjustment, nutrition facts from 833 ingredients, shopping list and a library of 789 recipes. Works offline and syncs with Supabase.',
    },
  },
]

export const volunteering = [
  {
    icon: 'fa-tower-broadcast',
    title: { pt: 'Coordenador de Pastoral da Comunicação', en: 'Communication Ministry Coordinator' },
    org: { pt: 'Paróquia Nossa Senhora Auxiliadora', en: 'Our Lady Help of Christians Parish' },
    desc: { pt: 'Coordenação da comunicação da paróquia: transmissões ao vivo, gestão de redes sociais, criação de artes visuais e produção de conteúdo para a comunidade.', en: 'Coordination of parish communication: live streams, social media management, visual design and content production for the community.' },
    link: { url: 'https://gabrielfjm.github.io/auxiliadora/', label: { pt: 'Portal da paróquia, feito pela JESS', en: 'Parish portal, built by JESS' } },
  },
  {
    icon: 'fa-hands-praying',
    title: { pt: 'Coordenador dos Servidores do Altar', en: 'Altar Servers Coordinator' },
    org: { pt: 'Paróquia Nossa Senhora Auxiliadora', en: 'Our Lady Help of Christians Parish' },
    desc: { pt: 'Liderança e formação da equipe de servidores do altar, organização de escalas, capacitações e acompanhamento espiritual do grupo ministerial.', en: 'Leadership and training of the altar servers team, scheduling, training sessions and spiritual accompaniment of the ministerial group.' },
  },
]
