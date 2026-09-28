export interface TechStack {
  name: string;
  iconClass: string;
}

export interface TabContent {
  id: string;
  filename: string;
  lines: Array<{
    type: 'title' | 'content' | 'status' | 'list';
    text: string;
  }>;
}

export const portfolioData = {
  header: {
    status: "STATUS: ONLINE // IFPI - ADS",
    headlineText: "> Arquiteto soluções de software web e integro sistemas a modelos de IA generativa.",
    subHeadline: "Sou Vitor, graduando em Análise e Desenvolvimento de Sistemas no IFPI. Apaixonado por engenharia de software de alto nível, backend robusto, interfaces modernas e integração de LLMs.",
    footerNote: "Foco em engenharia de verdade, máxima entrega de valor, testes e segurança.",
    navItems: [
      { label: "[terreno]", href: "#wire-terrain" },
      { label: "[bio]", href: "#bio" },
      { label: "[sobre]", href: "#about" },
      { label: "[projetos]", href: "#projects" },
      { label: "[stacks]", href: "#stacks" },
      { label: "[contato]", href: "#contact" },
    ],
  },
  bio: {
    photoLabel: "[ FOTO PERFIL // VITOR ]",
    statusText: "UTF-8   TypeScript   IFPI // ADS",
    tabs: [
      {
        id: "bio.ts",
        filename: "bio.ts",
        lines: [
          { type: "title", text: "// sobre mim: Vitor" },
          { type: "content", text: "Sou Vitor, graduando em Análise e Desenvolvimento de Sistemas do Instituto Federal do Piauí (IFPI), atualmente inclinando meus estudos para a área de desenvolvimento de software para web." },
          { type: "content", text: "Sempre gostei de saber como tudo funciona por debaixo dos panos e agora na programação e com o advento da IA estou cada vez mais empolgado em arquitetar soluções de verdade que usam engenharia de software de alto nível e impactam o mundo à minha volta." },
          { type: "status", text: "// em busca constante de excelência técnica e impacto real" },
        ],
      },
      {
        id: "stack_experience.ts",
        filename: "stack_experience.ts",
        lines: [
          { type: "title", text: "// experiência & tecnologias" },
          { type: "content", text: "Grande parte da minha experiência desenvolvendo foi aplicada para construir sistemas de backend utilizando TypeScript, JavaScript, Node.js, Express e PostgreSQL." },
          { type: "content", text: "Na parte de frontend, desenvolvo interfaces de usuário modernas e reativas utilizando React e React Native." },
          { type: "list", text: "• Backend: Node.js, Express, TypeScript, JavaScript, PostgreSQL" },
          { type: "list", text: "• Frontend & Mobile: React, React Native, Next.js" },
          { type: "status", text: "// arquitetura limpa, código manutenível e escalável" },
        ],
      },
      {
        id: "ia_engenharia.ts",
        filename: "ia_engenharia.ts",
        lines: [
          { type: "title", text: "// foco atual: integração com IA Generativa" },
          { type: "content", text: "Estou cada vez mais direcionando o foco do meu estudo para integração de sistemas a modelos de IA generativa (LLMs) por meio de RAG, Fine-Tuning e MCPs (Model Context Protocol)." },
          { type: "content", text: "Meu objetivo é desenvolver essas integrações com o máximo de entrega de valor, cobertura de testes e total segurança para o usuário final." },
          { type: "list", text: "• RAG: Retrieval-Augmented Generation para bases de conhecimento" },
          { type: "list", text: "• Fine-Tuning: Ajuste fino de modelos para domínios específicos" },
          { type: "list", text: "• MCPs: Model Context Protocol para estender capacidades de agentes" },
          { type: "status", text: "// engenharia de software aplicada à revolução da IA" },
        ],
      },
    ] as TabContent[],
  },
  logPanel: {
    title: "vitor_profile.log - zsh",
    status: "[INFO] perfil do desenvolvedor carregado // IFPI - ADS",
    description: "Sou Vitor, graduando em Análise e Desenvolvimento de Sistemas (IFPI). Construo sistemas de backend com TypeScript, Node.js, Express e PostgreSQL, e interfaces com React e React Native. Direciono meus estudos à engenharia de software de alto nível e à integração de sistemas a LLMs via RAG, Fine-Tuning e MCPs com foco em testes, valor real e segurança.",
    commands: [
      { cmd: "$ node --version && psql --version", label: "Stack Backend (Node + Postgres)" },
      { cmd: "$ npm run test:security", label: "Testes e Segurança do Usuário" },
    ],
  },
  stacks: {
    title: "tecnologias & especialidades",
    description: "Ferramentas e tecnologias que utilizo no dia a dia para desenvolver sistemas de backend, interfaces web/mobile e pipelines de IA generativa.",
    statusLine: "ecossistema ativo: backend, frontend, mobile e IA generativa",
    technologies: [
      { name: "TypeScript", iconClass: "devicon-typescript-plain" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
      { name: "Express", iconClass: "devicon-express-original" },
      { name: "React", iconClass: "devicon-react-original" },
      { name: "React Native", iconClass: "devicon-react-original" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain" },
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
      { name: "Python", iconClass: "devicon-python-plain" },
    ] as TechStack[],
    interestText: "Foco de Estudo e Pesquisa: Integração com LLMs (RAG, Fine-Tuning, MCPs), Testes e Segurança",
    highlights: [
      "> Grande parte da experiência aplicada em backend com TypeScript, Node.js, Express e PostgreSQL, além de interfaces com React e React Native.",
      "> Entendimento profundo de 'como tudo funciona por debaixo dos panos' para arquitetar soluções de alto nível com IA e impacto real.",
    ],
    animationHint: "rolagem contínua do ecossistema técnico",
    metrics: [
      { label: "INSTITUIÇÃO", value: "IFPI (ADS)" },
      { label: "ESPECIALIDADE", value: "Backend & Web" },
      { label: "FOCO IA", value: "RAG, Fine-Tuning & MCPs" },
      { label: "DIRETRIZ", value: "Testes & Segurança" },
    ],
    social: [
      { label: "@", url: "mailto:contato@vitor.dev", title: "Email" },
      { label: "in", url: "https://linkedin.com", title: "LinkedIn" },
      { label: "gh", url: "https://github.com", title: "GitHub" },
    ],
  },
  footer: {
    command: 'vitor@ifpi:~$ sys_status --val=true',
    build: "© 2026 Vitor | Graduando ADS (IFPI) | Engenharia de Software & IA",
  },
};
