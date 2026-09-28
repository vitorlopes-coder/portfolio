'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio';

export const TerminalHero: React.FC = () => {
  const { header } = portfolioData;
  const [displayedText, setDisplayedText] = useState<string>('> ');
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  useEffect(() => {
    const fullText = header.headlineText; // e.g. "> Crio sites e interfaces rápidas, bonitas e fáceis de usar."
    let index = 2; // Começa após "> "
    let timer: NodeJS.Timeout;

    const typeNextChar = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
        const delay = 45 + Math.random() * 45;
        timer = setTimeout(typeNextChar, delay);
      } else {
        setIsTypingComplete(true);
      }
    };

    const initialDelay = setTimeout(typeNextChar, 800);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timer);
    };
  }, [header.headlineText]);

  return (
    <section className="terminal-section glass" id="about">
      <div className="terminal-top-bar">
        <span className="status-badge">{header.status}</span>
      </div>

      <div className="hero-content">
        <h1 className={`headline ${isTypingComplete ? 'typing-cursor' : ''}`}>
          {displayedText}
        </h1>
        <p className="sub-headline">{header.subHeadline}</p>
      </div>

      <div className="terminal-footer-row" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className="cursor-block">_</span>
        <span className="footer-note">{header.footerNote}</span>
      </div>

      <nav className="quick-nav glass" aria-label="Navegação rápida">
        {header.navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-item">
            {item.label}
          </a>
        ))}
      </nav>
    </section>
  );
};
