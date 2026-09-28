'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export const DescPanel: React.FC = () => {
  const { logPanel } = portfolioData;
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const handleCopy = (cmd: string) => {
    navigator.clipboard?.writeText(cmd.replace('$', '').trim());
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 1500);
  };

  return (
    <section className="desc-panel glass" id="log">
      <div className="window-top-bar">
        <div className="window-controls">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="window-title">{logPanel.title}</div>
        <div className="spacer" />
      </div>

      <div className="window-body">
        <div className="log-info">{logPanel.status}</div>
        <p className="log-text">{logPanel.description}</p>

        <div className="cmd-row">
          {logPanel.commands.map((c) => (
            <div
              key={c.cmd}
              className="cmd-box"
              onClick={() => handleCopy(c.cmd)}
              title={`${c.label} (Clique para copiar)`}
            >
              <span className="cmd-text">
                {copiedCmd === c.cmd ? '✓ copiado!' : c.cmd}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
