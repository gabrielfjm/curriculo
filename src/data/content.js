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
  avatar: '/assets/icon.png',
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
    links: [
      { label: { pt: 'Ler artigo (PDF)', en: 'Read paper (PDF)' }, url: 'https://www.scitepress.org/Papers/2026/148299/148299.pdf', icon: 'fas fa-file-pdf', solid: true },
      { label: 'DOI', url: 'https://doi.org/10.5220/0014829900004018', icon: 'fas fa-link' },
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
    links: [
      { label: { pt: 'Ver artigo', en: 'View paper' }, url: 'https://sol.sbc.org.br/index.php/wbots/article/view/46030', icon: 'fas fa-file-lines', solid: true },
      { label: 'DOI', url: 'https://doi.org/10.5753/wbots.2026.33025', icon: 'fas fa-link' },
      { label: { pt: 'Site do WBOTS', en: 'WBOTS website' }, url: 'https://w-bots.github.io/wbots/2026/', icon: 'fas fa-globe' },
    ],
  },
]

export const education = {
  items: [
    {
      date: { pt: '2026 · Atual', en: '2026 · Present' },
      title: { pt: 'Mestrando em Informática', en: 'MSc in Computer Science' },
      inst: 'PUCPR · Pontifícia Universidade Católica do Paraná',
      desc: { pt: 'Programa de Pós-Graduação em Informática (PPGIA). Pesquisa em desenvolvimento de software e computação aplicada.', en: 'Graduate Program in Computer Science (PPGIA). Research in software development and applied computing.' },
      badge: { icon: 'fa-award', label: { pt: 'Bolsista CAPES', en: 'CAPES Scholar' } },
    },
    {
      date: { pt: '2022 a 2025', en: '2022 to 2025' },
      title: { pt: 'Bacharel em Engenharia de Software', en: 'BSc in Software Engineering' },
      inst: 'PUCPR · Pontifícia Universidade Católica do Paraná',
      desc: { pt: 'Formação sólida em engenharia e desenvolvimento de software, arquitetura, qualidade de código e metodologias ágeis.', en: 'Solid training in software engineering and development, architecture, code quality and agile methodologies.' },
      badge: { icon: 'fa-star', label: { pt: 'Aluno Marcelino Champagnat · Turma 2022', en: 'Marcelino Champagnat Award · Class of 2022' } },
    },
    {
      date: { pt: '2019 a 2021', en: '2019 to 2021' },
      title: { pt: 'Técnico em Informática', en: 'IT Technician' },
      inst: 'TECPUC · Centro Tecnológico da PUCPR',
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

export const experience = [
  {
    current: true,
    when: { pt: 'Atual', en: 'Present' },
    whenSub: { pt: 'Fundador', en: 'Founder' },
    title: 'CEO & Founder',
    org: 'JESS Branding ↗',
    orgUrl: 'https://www.jessbranding.com.br',
    chip: { pt: 'Empreendedor', en: 'Entrepreneur' },
    bullets: {
      pt: [
        'Fundação e direção estratégica da JESS: branding, sistemas e crescimento',
        'Criação de sites profissionais, landing pages, catálogos digitais e sistemas sob medida',
        'Condução dos projetos de ponta a ponta: estratégia, identidade visual, desenvolvimento, SEO e publicação',
        'Desenvolvimento do Portal JESS, plataforma própria de gestão de projetos e clientes',
      ],
      en: [
        'Founded and lead the strategy of JESS: branding, systems and growth',
        'Creation of professional websites, landing pages, digital catalogs and custom systems',
        'End-to-end project delivery: strategy, visual identity, development, SEO and launch',
        'Built the JESS Portal, an in-house platform for project and client management',
      ],
    },
  },
  {
    current: true,
    when: { pt: '2026 · Atual', en: '2026 · Present' },
    title: { pt: 'Mestrando em Informática', en: 'MSc in Computer Science' },
    org: 'PUCPR · Pontifícia Universidade Católica do Paraná',
    chip: { pt: 'Bolsista CAPES', en: 'CAPES Scholar' },
    bullets: {
      pt: [
        'Pesquisa no Programa de Pós-Graduação em Informática (PPGIA)',
        'Desenvolvimento de pesquisa científica em computação aplicada',
        'Primeiro autor de artigo no ICEIS 2026 e coautor de artigo no WBOTS 2026',
        'Bolsista integral CAPES, com dedicação exclusiva à pesquisa e ao ensino',
      ],
      en: [
        'Research in the Graduate Program in Computer Science (PPGIA)',
        'Scientific research development in applied computing',
        'First author of a paper at ICEIS 2026 and co-author of a paper at WBOTS 2026',
        'Full CAPES scholarship, with exclusive dedication to research and teaching',
      ],
    },
  },
  {
    when: { pt: 'Fev/2025 a Ago/2025', en: 'Feb/2025 to Aug/2025' },
    title: { pt: 'Auxiliar de Programação', en: 'Programming Assistant' },
    org: 'Evo Sistemas Inteligentes',
    chip: { pt: 'Estagiário → Auxiliar', en: 'Intern → Assistant' },
    bullets: {
      pt: [
        'Desenvolvimento de sistemas web e APIs REST em ambiente ágil',
        'Evolução de estagiário para Auxiliar de Programação durante o período',
        'Atuação em times Scrum com entregas incrementais e sprints semanais',
        'Manutenção e evolução de sistemas legados',
      ],
      en: [
        'Web systems and REST API development in an agile environment',
        'Promoted from Intern to Programming Assistant during the period',
        'Worked in Scrum teams with incremental deliveries and weekly sprints',
        'Maintenance and evolution of legacy systems',
      ],
    },
  },
  {
    when: { pt: 'Mai/2024 a Fev/2025', en: 'May/2024 to Feb/2025' },
    title: { pt: 'Coordenador de Estagiários', en: 'Intern Coordinator' },
    org: { pt: 'Prefeitura Municipal de Piraquara', en: 'City Hall of Piraquara' },
    chip: { pt: 'Estagiário → Coordenador', en: 'Intern → Coordinator' },
    bullets: {
      pt: [
        'Gestão e coordenação de equipe de estagiários de TI',
        'Desenvolvimento e manutenção de sistemas para administração pública',
        'Implantação de soluções tecnológicas para processos municipais',
        'Liderança técnica e mentoria de novos estagiários',
      ],
      en: [
        'Management and coordination of the IT intern team',
        'Development and maintenance of public administration systems',
        'Implementation of technology solutions for municipal processes',
        'Technical leadership and mentoring of new interns',
      ],
    },
  },
  {
    when: { pt: 'Set/2021 a Abr/2023', en: 'Sep/2021 to Apr/2023' },
    title: { pt: 'Desenvolvedor de Sistemas', en: 'Systems Developer' },
    org: 'DBlink Sistemas',
    chip: { pt: 'Desenvolvedor', en: 'Developer' },
    bullets: {
      pt: [
        'Desenvolvimento full-stack de sistemas corporativos',
        'Implementação de APIs e integrações entre sistemas',
        'Modelagem e otimização de banco de dados relacional',
        'Aplicação de padrões de projeto e boas práticas de desenvolvimento',
      ],
      en: [
        'Full-stack development of corporate systems',
        'API implementation and system integrations',
        'Relational database modeling and optimization',
        'Application of design patterns and development best practices',
      ],
    },
  },
]

/* Top 6. kind = selo do card; cta = texto do link */
export const projects = [
  {
    name: 'Portal JESS',
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
    name: 'Rancho da Cozinha',
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
  {
    name: 'Riss Planejados',
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
]

export const volunteering = [
  {
    icon: 'fa-tower-broadcast',
    title: { pt: 'Coordenador de Pastoral da Comunicação', en: 'Communication Ministry Coordinator' },
    org: { pt: 'Paróquia Nossa Senhora Auxiliadora', en: 'Our Lady Help of Christians Parish' },
    desc: { pt: 'Coordenação das atividades de comunicação pastoral, gestão de redes sociais, produção de conteúdo e comunicação com a comunidade paroquial.', en: 'Coordination of pastoral communication activities, social media management, content production and communication with the parish community.' },
    link: { url: 'https://gabrielfjm.github.io/auxiliadora/', label: { pt: 'Portal da paróquia, feito pela JESS', en: 'Parish portal, built by JESS' } },
  },
  {
    icon: 'fa-hands-praying',
    title: { pt: 'Coordenador dos Servidores do Altar', en: 'Altar Servers Coordinator' },
    org: { pt: 'Paróquia Nossa Senhora Auxiliadora', en: 'Our Lady Help of Christians Parish' },
    desc: { pt: 'Liderança e formação da equipe de servidores do altar, organização de escalas, capacitações e acompanhamento espiritual do grupo ministerial.', en: 'Leadership and training of the altar servers team, scheduling, training sessions and spiritual accompaniment of the ministerial group.' },
  },
]
