import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  username: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  
  profile = {
    name: 'Jeremy Yazid Anton Rojas',
    role: 'Frontend Developer',
    status: 'open_for_projects',
    preferred_contact: 'email',
    response_time: '24-48h',
    languages: ['Spanish'],
    timezone: 'UTC-5 (Lima)',
    availability: 'Freelance • Remote'
  };

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: 'devicon-github-original',
      url: 'https://github.com/jere792',
      username: '@jere792',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: 'devicon-linkedin-plain',
      url: 'https://www.linkedin.com/in/jeremy-ant%C3%B3n-61980235b/',
      username: 'Jeremy Anton',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: 'pi pi-envelope',
      url: 'mailto:jeremyar792@gmail.com',
      username: 'jeremyar792@gmail.com',
      color: '#ea4335'
    },
    {
      name: 'WhatsApp',
      icon: 'pi pi-whatsapp',
      url: 'https://wa.me/51907851879',
      username: '+51 907 851 879',
      color: '#25d366'
    }
  ];

  services = [
    'Desarrollo de aplicaciones web full-stack',
    'Arquitectura de sistemas escalables',
    'Integración de APIs REST y GraphQL',
    'Consultoría técnica en Angular/Node.js',
    'Optimización de bases de datos'
  ];
}
