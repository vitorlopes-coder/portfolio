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
    status: "STATUS: ONLINE",
    headlineText: "> Crio sites e interfaces rápidas, bonitas e fáceis de usar.",
    subHeadline: "Ajudo pessoas e empresas a transformar ideias em produtos digitais claros e eficientes.",
    footerNote: "Pronto para colaborar em projetos reais.",
    navItems: [
      { label: "[terreno]", href: "#wire-terrain" },
      { label: "[bio]", href: "#bio" },
      { label: "[sobre]", href: "#about" },
      { label: "[stacks]", href: "#stacks" },
      { label: "[contato]", href: "#contact" },
    ],
  },
  bio: {
    photoLabel: "[ FOTO PERFIL ]",
    statusText: "UTF-8   TypeScript   Ln 18, Col 4",
    tabs: [
      {
        id: "bio.ts",
        filename: "bio.ts",
        lines: [
          { type: "title", text: "// sobre mim" },
          { type: "content", text: "Sou desenvolvedor frontend e gosto de criar experiências simples e agradáveis." },
          { type: "content", text: "Trabalho com foco em clareza visual, desempenho e acessibilidade." },
          { type: "content", text: "Também estudo IA aplicada e arquitetura para construir soluções duráveis." },
          { type: "status", text: "// aberto a novos projetos e parcerias" },
        ],
      },
      {
        id: "projects.md",
        filename: "projects.md",
        lines: [
          { type: "title", text: "# Meus Projetos" },
          { type: "list", text: "• E-commerce Dashboard: React + Node.js" },
          { type: "list", text: "• Terminal Portfolio: Next.js + React + SSG" },
          { type: "list", text: "• AI Integration Tool: Estudo de modelos LLM" },
          { type: "status", text: "// confira mais no meu GitHub!" },
        ],
      },
    ] as TabContent[],
  },
  logPanel: {
    title: "about_me.log - zsh",
    status: "[INFO] perfil carregado",
    description: "Transformo ideias em produto com foco em UX, performance e arquitetura frontend. Entrego interfaces escaláveis e consistentes do discovery ao deploy.",
    commands: [
      { cmd: "$ npm run build", label: "Build estático otimizado" },
      { cmd: "$ git push origin main", label: "Entrega contínua" },
    ],
  },
  stacks: {
    title: "tecnologias que uso",
    description: "Aqui estão as tecnologias com as quais trabalho e também as que estou estudando para evoluir continuamente.",
    statusLine: "atualização automática dos cards ativa",
    technologies: [
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain" },
      { name: "Python", iconClass: "devicon-python-plain" },
      { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Express", iconClass: "devicon-express-original" },
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
      { name: "React", iconClass: "devicon-react-original" },
    ] as TechStack[],
    interestText: "Interesses atuais: IA, Cloud, Sistemas e Segurança",
    highlights: [
      "> Experiência prática em projetos reais com foco em resultado para o usuário.",
      "> Comunicação simples, implementação sólida e melhoria contínua.",
    ],
    animationHint: "animações suaves para orientar a navegação sem distrações",
    metrics: [
      { label: "PROJETOS", value: "12+ entregas" },
      { label: "FOCO", value: "UX + Performance" },
    ],
    social: [
      { label: "@", url: "mailto:contato@vitor.dev", title: "Email" },
      { label: "in", url: "https://linkedin.com", title: "LinkedIn" },
      { label: "gh", url: "https://github.com", title: "GitHub" },
    ],
  },
  footer: {
    command: 'obrigado pela visita',
    build: "© 2026 | build: next-static-v1.0",
  },
};
