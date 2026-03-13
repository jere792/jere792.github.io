import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  image = 'assets/images/foto-git.jpg';

  skills = {
    backend:  ['Node.js', 'Express', 'TypeScript', 'GraphQL', 'REST APIs', 'ASP.NET Core', 'Spring Boot', 'C#', 'Java'],
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'SCSS', 'PrimeNG', 'HTML5', 'CSS3'],
    database: ['SQL Server', 'MySQL', 'MongoDB', 'Stored Procedures'],
    tools:    ['Git/GitHub', 'VS Code', 'Cloudinary', 'JWT Auth'],
  };
}