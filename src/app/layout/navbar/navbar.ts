import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  menuItems = [
    { label: 'home.html', route: '/home', icon: 'devicon-html5-plain colored' },
    { label: 'about.ts', route: '/about', icon: 'devicon-typescript-plain colored' },
    { label: 'contact.json', route: '/contact', icon: 'devicon-nodejs-plain colored' },
    { label: 'projects.css', route: '/projects', icon: 'devicon-css3-plain colored' }
    //{ label: 'experience.yaml', route: '/experience', icon: 'devicon-git-plain colored' }
  ];

}
