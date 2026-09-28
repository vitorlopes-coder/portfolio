'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const project = projects[0];

  if (!project) return null;

  return (
    <section className="projects-section glass" id="projects">
      <div className="projects-top-bar">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="projects-badge">SYS.PROJECTS // EXPERIÊNCIA_BACKEND</span>
        </div>
      </div>

      <div className="projects-content">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-spotlight-card glass"
          title="Clique para acessar o repositório no GitHub"
        >
          {/* Logo / Banner do Projeto */}
          <div className="project-brand-box">
            <img
              src={project.logo}
              alt={`Logo do ${project.title}`}
              className="project-logo-img"
            />
          </div>

          {/* Informações de Engenharia e Experiência */}
          <div className="project-info-box">
            <div className="project-meta-row">
              <span className="project-role-tag">{project.role}</span>
              <span className="project-category-tag">{project.badge}</span>
            </div>

            <h3 className="project-title-text">{project.title}</h3>
            <p className="project-desc-text">{project.description}</p>

            <div className="project-responsibilities-list">
              {project.responsibilities.map((resp, idx) => (
                <div key={idx} className="resp-item">
                  <span className="resp-bullet">▸</span>
                  <span>{resp}</span>
                </div>
              ))}
            </div>

            <div className="project-bottom-row">
              <div className="project-tags-group">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-cta-link">
                <span>Ver repositório no GitHub</span>
                <span className="cta-arrow">↗</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
