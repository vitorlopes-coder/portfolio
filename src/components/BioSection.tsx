'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

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
      {/* Imagem de perfil original limpa e de alta resolução */}
      <div className="profile-photo-card glass">
        <div className="photo-card-header">
          <span className="photo-file-name">// vitor_avatar.jpg</span>
          <span className="photo-badge">PROFILE</span>
        </div>
        <div className="photo-img-wrapper">
          <img
            src={profilePhoto}
            alt="Foto de perfil de Vitor"
            className="profile-photo-img"
          />
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
