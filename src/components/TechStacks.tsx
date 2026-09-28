'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

export const TechStacks: React.FC = () => {
  const { stacks } = portfolioData;

  // Duplicamos a lista para criar um loop de marquee infinito sem interrupção
  const marqueeItems = [...stacks.technologies, ...stacks.technologies];

  return (
    <section className="main-section glass" id="stacks">
      <h2 className="section-title">{stacks.title}</h2>
      <p className="section-desc">{stacks.description}</p>
      <div className="status-line">{stacks.statusLine}</div>

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

      <p className="interest-text">{stacks.interestText}</p>

      <div className="description-box glass">
        {stacks.highlights.map((highlight, idx) => (
          <p key={idx}>{highlight}</p>
        ))}
      </div>

      <div className="anim-hint">{stacks.animationHint}</div>

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
      <div className="contact-hint">contato rápido</div>
    </section>
  );
};
