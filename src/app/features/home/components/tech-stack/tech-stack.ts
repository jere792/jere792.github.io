import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechCollage } from '../../../../shared/components/tech-collage/tech-collage';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, TechCollage],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {}