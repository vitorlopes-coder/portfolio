'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import PredictiveArc from './originkit/ui/predictive-arc';

export const TerminalFooter: React.FC = () => {
  const { footer } = portfolioData;

  return (
    <footer className="terminal-footer-section glass" id="footer">
      <div className="footer-top-bar">
        <div className="footer-status-pill">
          <span className="pulse-dot" />
          <span>PREDICTIVE_ARC // PARTICLE_FIELD</span>
        </div>
        <div className="footer-tag">SYS.EXIT // V1.0</div>
      </div>

      <div className="footer-arc-wrapper">
        <PredictiveArc
          background="#000000"
          baseColor="#ff1744"
          accentColor="#ff6b7b"
          highlight="#ffffff"
          density={80}
          dotSize={110}
          speed={65}
          height={260}
          style={{ width: '100%', height: '260px' }}
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
