import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  personalInfo = {
    name: 'Jeremy Anton',
    role: 'Systems Engineer',
    location: 'Lima, Peru',
    currentCompany: 'Freelance/Open to work',
    monthsOfExperience: 6,
    university: 'Universidad Privada del Norte',
    degree: 'Ingeniería de Sistemas Computacionales',
    semester: '8vo ciclo',
    focus: 'Frontend Development',
  };

  image_git = 'assets/images/foto-git.jpg';

  contact = {
    email: 'jeremyar792@gmail.com',
    phone: '+51 907 851 879',
  };

  githubStats = {

    projects: '+5',
  };

  skills = {

    backend: [
      'Node.js',
      'Express',
      'TypeScript',
      'GraphQL',
      'REST APIs',
      'ASP.NET Core',
      'Spring Boot',
      'C#',
      'Java',
    ],
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'SCSS', 'PrimeNG', 'HTML5', 'CSS3'],
    database: ['SQL Server', 'MySQL', 'MongoDB', 'Stored Procedures'],
    tools: ['Git/GitHub', 'VS Code', 'Cloudinary', 'JWT Auth'],
    other: ['DDD', 'Clean Architecture', 'Responsive Design', 'Microservices'],
  };

  aboutMe = {

    intro:
      'Soy <strong class="name">Jeremy Yazid Anton Rojas</strong>, estudiante de octavo ciclo de Ingeniería de Sistemas Computacionales en la <strong class="university">Universidad Privada del Norte</strong>, enfocado en el desarrollo de aplicaciones web modernas y administración de sistemas.',

    description:
      'Me especializo en desarrollo <strong class="tech">frontend con Angular y TypeScript</strong>, creando interfaces modernas y responsivas con <strong class="tech">PrimeNG y SCSS</strong>. Complemento mi perfil con conocimientos de <strong class="tech">backend (Node.js, Express)</strong>, bases de datos <strong class="tech">(SQL Server, MySQL, MongoDB)</strong>, administración de <strong class="tech">Windows Server y Cliente</strong>, así como fundamentos de redes de computadoras, lo que me permite desarrollar soluciones completas y entender la infraestructura tecnológica de extremo a extremo.',
  };
}
