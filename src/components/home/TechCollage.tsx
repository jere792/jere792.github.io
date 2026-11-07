import { useCallback, useEffect, useState } from 'react';
import type * as React from 'react';
import { TECH_CARDS, type TechCard } from '@/data/home';
import './TechCollage.scss';

export function TechCollage() {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    setTranslateX(((e.clientX - cx) / cx) * -10);
    setTranslateY(((e.clientY - cy) / cy) * -8);
  }, []);

  const getCardStyle = (card: TechCard) => {
    const sizeMap: Record<string, string> = isMobile
      ? { xl: '48px', lg: '40px', md: '34px', sm: '28px' }
      : { xl: '110px', lg: '90px', md: '74px', sm: '58px' };
    const iconMap: Record<string, string> = isMobile
      ? { xl: '1.2rem', lg: '1rem', md: '0.85rem', sm: '0.7rem' }
      : { xl: '2.8rem', lg: '2.2rem', md: '1.75rem', sm: '1.4rem' };

    return {
      left: card.left + '%',
      top: card.top + '%',
      '--glow': card.glow,
      '--float': card.float + 'px',
      '--card-size': sizeMap[card.size],
      '--icon-size': iconMap[card.size],
      animationDuration: card.duration + 's',
      animationDelay: card.delay + 's',
      zIndex: card.z,
    } as React.CSSProperties;
  };

  return (
    <div className="collage-host" onMouseMove={onMouseMove}>
      <div className="bg-grid"></div>
      <div className="bg-vignette"></div>
      <div className="scene" style={{ transform: `translate(${translateX}px, ${translateY}px)` }}>
        <div className="cross-lines"></div>
        <div className="circles">
          {[1, 2, 3, 4].map((c) => (
            <div key={c} className="circle"></div>
          ))}
        </div>
        <div className="center-node">
          <div className="cn-dot"></div>
        </div>
        {TECH_CARDS.map((card) => (
          <div
            key={card.name}
            className={`card ${card.size} ${isMobile ? 'mobile' : ''}`}
            style={getCardStyle(card)}
          >
            <i className={card.icon}></i>
            {!isMobile && <span className="card-name">{card.name}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
