// src/app/features/home/components/hero/hero.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import {
  USER_INFO,
  SOCIAL_LINKS,
  type UserInfo,
  type SocialLink,
} from '../../../../shared/data/home.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  userInfo: UserInfo = USER_INFO;
  socialLinks: SocialLink[] = SOCIAL_LINKS;
  typedText = '';
  typingSpeed = 100;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startTyping();
  }

  private startTyping(index = 0): void {
    if (index < this.userInfo.typingText.length) {
      this.typedText += this.userInfo.typingText.charAt(index);
      setTimeout(() => this.startTyping(index + 1), this.typingSpeed);
    }
  }

  goToProjects(): void {
    this.router.navigate(['/projects']);
  }
  goToContact(): void {
    this.router.navigate(['/contact']);
  }
}
