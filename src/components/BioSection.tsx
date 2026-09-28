'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import AsciiImage from './originkit/ui/ascii-reveal';

const profilePhoto = '/assets/Screenshot_2025-01-05-17-12-26-049_com.miui.gallery~2.jpg';

export const BioSection: React.FC = () => {
  const { bio } = portfolioData;
  const [activeTabId, setActiveTabId] = useState<string>(bio.tabs[0]?.id || 'bio.ts');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const activeTab = bio.tabs.find((tab) => tab.id === activeTabId) || bio.tabs[0];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTabId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTabId(tabId);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <section className="bio-section glass" id="bio">
      {/* Imagem com componente ASCII Reveal interativo */}
      <div className="profile-ascii-card glass">
        <div className="ascii-card-header">
          <span className="ascii-file-name">// vitor_avatar.raw</span>
          <span className="ascii-badge">ASCII-REVEAL</span>
        </div>
        <div className="ascii-canvas-wrapper">
          <AsciiImage
            image={profilePhoto}
            fit="cover"
            focusY={22}
            columns={75}
            contrast={120}
            inkColor="#ff2b3c"
            reveal={true}
            revealOptions={{ size: 90, softness: 18 }}
          />
        </div>
        <div className="ascii-card-footer">
          <span className="ascii-hint-icon">◉</span>
          <span className="ascii-hint-text">Passe o cursor para revelar a foto original</span>
        </div>
      </div>

      {/* Bio / Code Editor (Descrição à direita) */}
      <div className="bio-content glass">
        <div className="ide-top-bar">
          <div className="tabs-container">
            {bio.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab ${activeTabId === tab.id ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.filename}
              </button>
            ))}
          </div>
          <div className="ide-status">{bio.statusText}</div>
        </div>

        <div
          className="editor-area"
          style={{ opacity: isTransitioning ? 0 : 1 }}
        >
          {activeTab.lines.map((line, idx) => (
            <div key={idx} className={`code-line ${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
