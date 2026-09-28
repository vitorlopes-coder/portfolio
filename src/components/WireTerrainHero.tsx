'use client';

import React from 'react';
import WireTerrain from './originkit/ui/wire-terrain';

export const WireTerrainHero: React.FC = () => {
  return (
    <section className="wire-terrain-section glass" id="wire-terrain">
      <div className="terrain-top-bar">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="terrain-title">SYS.RENDER // WIRE_TERRAIN_3D</span>
        </div>
        <div className="terrain-telemetry">
          <span className="telemetry-badge">
            <span className="pulse-dot" /> ALT: 180M
          </span>
          <span className="telemetry-badge">SPEED: MACH 1.2</span>
          <span className="telemetry-badge status-active">FLIGHT: ACTIVE</span>
        </div>
      </div>

      <div className="terrain-canvas-container">
        <WireTerrain
          background="#000000"
          lineColor="#ff2438"
          accent="#ff3b30"
          density={95}
          speed={65}
          relief={92}
          sunSize={95}
          cameraHeight={88}
          hover={190}
          style={{ width: '100%', height: '100%' }}
        />

        <div className="terrain-overlay-hint">
          <span className="hint-tag">[ SIMULAÇÃO 3D ]</span>
          <span className="hint-text">Mova o cursor para pilotar o terreno retro-futurista</span>
        </div>
      </div>
    </section>
  );
};
