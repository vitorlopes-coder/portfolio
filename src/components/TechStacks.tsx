'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

export const TechStacks: React.FC = () => {
  const { stacks } = portfolioData;

  // Duplicamos a lista para criar um loop de marquee infinito sem interrupção
  const marqueeItems = [...stacks.technologies, ...stacks.technologies];

  return (
    <section className="main-section glass" id="stacks">
      <div className="section-header-compact">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="stacks-badge">SYS.STACKS // CORE_ECOSYSTEM</span>
        </div>
        <h2 className="section-title-compact">Tecnologias &amp; Especialidades</h2>
      </div>

      <div className="stacks-viewport">
        <div className="marquee-track" id="stacks-track">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="stack-card glass"
              title={tech.name}
            >
              <i className={tech.iconClass} />
              <span className="stack-card-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorias limpas e escaneáveis (redução drástica de carga cognitiva) */}
      <div className="stack-categories-grid">
        <div className="stack-category-card glass">
          <span className="category-tag">⚡ BACKEND</span>
          <span className="category-items">Node.js • Express • PostgreSQL • TypeScript</span>
        </div>
        <div className="stack-category-card glass">
          <span className="category-tag">📱 FRONTEND &amp; MOBILE</span>
          <span className="category-items">React • React Native • Next.js • JavaScript</span>
        </div>
        <div className="stack-category-card glass highlight-ai">
          <span className="category-tag">🧠 IA GENERATIVA</span>
          <span className="category-items">RAG • Fine-Tuning • MCPs • Testes &amp; Segurança</span>
        </div>
      </div>

      <div className="metrics-row">
        {stacks.metrics.map((metric, idx) => (
          <div key={idx} className="metric-card glass">
            <span className="label">{metric.label}</span>
            <span className="value">{metric.value}</span>
          </div>
        ))}
      </div>

      <div className="contact-wrapper glass" id="contact">
        {stacks.social.map((s, idx) => (
          <a
            key={idx}
            href={s.url}
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            title={s.title}
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
};
