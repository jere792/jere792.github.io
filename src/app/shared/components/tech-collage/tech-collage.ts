import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECH_CARDS, type TechCard } from '../../data/home.data';

@Component({
  selector: 'app-tech-collage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-collage.html',
  styleUrl: './tech-collage.scss',
})
export class TechCollage {
  cards: TechCard[] = TECH_CARDS;
  circles = [1, 2, 3, 4];
  translateX = 0;
  translateY = 0;
  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    this.translateX = ((e.clientX - cx) / cx) * -10;
    this.translateY = ((e.clientY - cy) / cy) * -8;
  }

  getSceneStyle() {
    return { transform: `translate(${this.translateX}px, ${this.translateY}px)` };
  }

  getCardStyle(card: TechCard) {
    const sizeMap: Record<string, string> = this.isMobile
      ? { xl: '48px', lg: '40px', md: '34px', sm: '28px' }
      : { xl: '110px', lg: '90px', md: '74px', sm: '58px' };

    const iconMap: Record<string, string> = this.isMobile
      ? { xl: '1.2rem', lg: '1rem', md: '0.85rem', sm: '0.7rem' }
      : { xl: '2.8rem', lg: '2.2rem', md: '1.75rem', sm: '1.4rem' };

    return {
      left: card.left + '%',
      top: card.top + '%',
      '--glow': card.glow,
      '--float': card.float + 'px',
      '--card-size': sizeMap[card.size],
      '--icon-size': iconMap[card.size],
      'animation-duration': card.duration + 's',
      'animation-delay': card.delay + 's',
      'z-index': card.z,
    };
  }

  trackByName(_: number, card: TechCard) {
    return card.name;
  }
}
