// src/app/features/home/home.ts

import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { TechStack } from './components/tech-stack/tech-stack';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, TechStack],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}