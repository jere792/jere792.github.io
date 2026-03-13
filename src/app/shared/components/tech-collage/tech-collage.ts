// src/app/features/home/components/tech-collage/tech-collage.ts

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
  circles           = [1, 2, 3, 4];
  translateX        = 0;
  translateY        = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    this.translateX = ((e.clientX - cx) / cx) * -10;
    this.translateY = ((e.clientY - cy) / cy) * -8;
  }

  getSceneStyle() {
    return { transform: `translate(${this.translateX}px, ${this.translateY}px)` };
  }

  getCardStyle(card: TechCard) {
    return {
      left:               card.left     + '%',
      top:                card.top      + '%',
      '--glow':           card.glow,
      '--float':          card.float    + 'px',
      'animation-duration': card.duration + 's',
      'animation-delay':  card.delay    + 's',
      'z-index':          card.z,
    };
  }

  trackByName(_: number, card: TechCard) {
    return card.name;
  }
}