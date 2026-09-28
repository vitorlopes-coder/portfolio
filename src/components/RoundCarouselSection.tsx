'use client';

import React from 'react';
import RoundCarousel from './originkit/ui/roundcarousel';

const CAROUSEL_IMAGES = [
  { src: '/assets/gallery/project-gemini.jpg' },
  { src: '/assets/gallery/project-mobile-1.jpeg' },
  { src: '/assets/gallery/project-mobile-2.jpeg' },
  { src: '/assets/Screenshot_2025-01-05-17-12-26-049_com.miui.gallery~2.jpg' },
  { src: 'https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/e60dd7f7-a44f-40a7-df62-095b19cd8700/w=800' },
  { src: 'https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/eec164e9-23f8-4f87-b48a-a208fa806100/w=800' },
  { src: 'https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/859c75ea-953e-489e-be61-91a03a35d700/w=800' },
  { src: 'https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/933a7615-f4b6-4eae-8ed1-705fa0e24400/w=800' },
];

export const RoundCarouselSection: React.FC = () => {
  return (
    <section className="round-carousel-section glass" id="projects">
      <div className="carousel-top-bar">
        <div className="carousel-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="carousel-title">SYS.GALLERY // 3D_ROUND_CAROUSEL</span>
        </div>
        <div className="carousel-status-badge">
          <span className="pulse-dot" />
          <span>INTERACTION: 3D DRAG [360°]</span>
        </div>
      </div>

      <div className="carousel-viewport">
        <RoundCarousel
          imageWidth={207}
          imageHeight={247}
          spacing={7}
          speed={2}
          direction="right"
          tilt={-2}
          cornerRadius={35}
          innerDim={0}
          perspective={400}
          drag={true}
          sensitivity={0.8}
          background="#000000"
          images={CAROUSEL_IMAGES}
          style={{ width: '100%', height: '100%' }}
        />

        <div className="carousel-overlay-hint">
          <span className="hint-tag">[ 3D CYLINDER ]</span>
          <span className="hint-text">Arraste para girar livremente ou explore os cards</span>
        </div>
      </div>
    </section>
  );
};
