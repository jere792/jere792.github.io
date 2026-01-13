import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  userInfo = {
    name: 'Jeremy Anton',
    email: 'jeremyar792@gmail.com',
    role: 'Systems Engineer',
  };

  navigationCommands = [
    { command: 'git checkout', page: 'about' },
    { command: 'git checkout', page: 'projects' },
    { command: 'git checkout', page: 'experience' },
    { command: 'git checkout', page: 'contact' }
  ];

  modifiedFiles = [
    '/components/Header.tsx',
    '/pages/About.tsx',
    '/pages/Projects.tsx',
    '/styles/global.css'
  ];

  siteInfo = {
    version: '1.0.0',
    lastUpdated: 'January 2026',
    framework: 'Angular',
    language: 'TypeScript',
  };
}
