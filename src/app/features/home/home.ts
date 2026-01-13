import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  typedText = '';
  fullText = 'Hi, I\'m Jeremy Anton';
  typingSpeed = 100;

  userInfo = {
    name: 'Jeremy Anton',
    email: 'jeremy@portfolio.com',
    role: 'Systems Engineer',
  };

  image = 'assets/images/JereMaki.jpg'

  Description = 'Frontend Developer apasionado por Angular, TypeScript y diseño UI/UX. Creando aplicaciones web modernas con PrimeNG, SCSS y arquitecturas escalables. De la interfaz hasta la base de datos, construyendo soluciones completas.';

  technologies = [
    { name: 'Angular', icon: 'devicon-angular-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'SCSS', icon: 'devicon-sass-original colored' },
    { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: 'ASP.NET Core', icon: 'devicon-dotnetcore-plain colored' },
    { name: 'Figma', icon: 'devicon-figma-plain colored' },
    { name: 'Arduino', icon: 'devicon-arduino-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter(index: number = 0) {
    if (index < this.fullText.length) {
      this.typedText += this.fullText.charAt(index);
      setTimeout(() => this.typeWriter(index + 1), this.typingSpeed);
    }
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
