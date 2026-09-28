'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import FibreArc from './originkit/ui/fibre-arc';

export const TerminalFooter: React.FC = () => {
  const { footer } = portfolioData;

  return (
    <footer className="terminal-footer-section glass" id="footer">
      <div className="footer-top-bar">
        <div className="footer-status-pill">
          <span className="pulse-dot" />
          <span>FIBRE_ARC // OPTICAL_FIELD</span>
        </div>
        <div className="footer-tag">SYS.EXIT // V1.0</div>
      </div>

      <div className="footer-arc-wrapper">
        <FibreArc
          background="#000000"
          baseColor="#ff1744"
          accentColor="#ff4d61"
          highlight="#ffffff"
          density={26}
          speed={65}
          direction={0}
          hover={180}
          reach={25}
          bundle={{ curve: 95, spread: 110, thickness: 110, comb: 180 }}
          style={{ width: '100%', height: '340px' }}
        />

        <div className="footer-overlay-content">
          <div className="footer-bar glass">
            <span className="footer-left">{footer.command}</span>
            <span className="footer-right">{footer.build}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
