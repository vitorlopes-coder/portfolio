import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | Terminal & Code',
  description: 'Portfólio interativo para desenvolvedor frontend com estética terminal e cyberpunk stained-glass.',
  keywords: ['portfolio', 'frontend', 'developer', 'react', 'nextjs', 'typescript'],
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
