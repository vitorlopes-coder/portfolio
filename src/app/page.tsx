'use client';

import { WireTerrainHero } from '@/components/WireTerrainHero';
import { BioSection } from '@/components/BioSection';
import { TerminalHero } from '@/components/TerminalHero';
import { SmoothScrollSliderSection } from '@/components/SmoothScrollSliderSection';
import { DescPanel } from '@/components/DescPanel';
import { TechStacks } from '@/components/TechStacks';
import { TerminalFooter } from '@/components/TerminalFooter';

export default function Home() {
  return (
    <>
      {/* 1. Topo da página: Wire Terrain 3D */}
      <WireTerrainHero />

      {/* 2. Logo abaixo: Foto de perfil + Abas de código à direita */}
      <BioSection />

      {/* 3. Hero Section com Terminal e Efeito Typewriter */}
      <TerminalHero />

      {/* 4. Meio do portfólio: Smooth Scroll Slider */}
      <SmoothScrollSliderSection />

      {/* 5. Desc Panel (Janela de logs e comandos) */}
      <DescPanel />

      {/* 6. Stacks com Marquee Infinito, Métricas e Redes Sociais */}
      <TechStacks />

      {/* 7. Rodapé com Fibre Arc */}
      <TerminalFooter />
    </>
  );
}
