import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vitor | Desenvolvedor de Software & IA (IFPI)',
  description: 'Portfólio de Vitor - Graduando em Análise e Desenvolvimento de Sistemas no IFPI. Backend com TypeScript, Node.js, Express e PostgreSQL, frontend com React e React Native, e integração de sistemas a LLMs (RAG, Fine-Tuning, MCPs).',
  keywords: [
    'Vitor',
    'IFPI',
    'ADS',
    'desenvolvedor web',
    'software engineer',
    'backend',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Express',
    'PostgreSQL',
    'React',
    'React Native',
    'IA generativa',
    'LLMs',
    'RAG',
    'Fine-Tuning',
    'MCP',
  ],
  authors: [{ name: 'Vitor' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={jetbrainsMono.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <main className="portfolio-container">{children}</main>
      </body>
    </html>
  );
}
