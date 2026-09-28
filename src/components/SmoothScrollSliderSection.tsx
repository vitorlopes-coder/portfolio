'use client';

import React from 'react';
import SmoothScrollSlider from './originkit/ui/smooth-scroll-slider';

// Imagens estritamente da pasta assets/gallery/ conforme solicitado
const GALLERY_ITEMS = [
  { image: '/assets/gallery/project-gemini.jpg', offsetY: 0 },
  { image: '/assets/gallery/project-mobile-1.jpeg', offsetY: 0 },
  { image: '/assets/gallery/project-mobile-2.jpeg', offsetY: 0 },
  { image: '/assets/gallery/project-gemini.jpg', offsetY: 0 },
  { image: '/assets/gallery/project-mobile-1.jpeg', offsetY: 0 },
  { image: '/assets/gallery/project-mobile-2.jpeg', offsetY: 0 },
];

export const SmoothScrollSliderSection: React.FC = () => {
  return (
    <section className="smooth-scroll-slider-section glass" id="projects">
      <div className="slider-top-bar">
        <div className="slider-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="slider-title">SYS.GALLERY // SMOOTH_SCROLL_SLIDER</span>
        </div>
        <div className="slider-status-badge">
          <span className="pulse-dot" />
          <span>INTERACTION: DRAG &amp; MOMENTUM SCROLL</span>
        </div>
      </div>

      <div className="slider-viewport">
        <SmoothScrollSlider
          images={GALLERY_ITEMS}
          slideWidth={380}
          slideHeight={380}
          spacing={3}
          direction="right"
          smoothness={8}
          radius={16}
          dim={5}
          background="#000000"
          sensitivity={6}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        />

        <div className="slider-overlay-hint">
          <span className="hint-tag">[ MOMENTUM SLIDER ]</span>
          <span className="hint-text">Arraste horizontalmente ou use o mouse para navegar pelos projetos</span>
        </div>
      </div>
    </section>
  );
};
