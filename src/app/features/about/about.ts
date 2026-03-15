import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubActivity } from '../../shared/components/github-activity/github-activity';
import { GithubService } from '../../services/github.service';
import { type GithubProfile } from '../../shared/data/github.data';

@Component({
  selector: 'app-about',
  imports: [CommonModule, GithubActivity],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {

  image = 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368005/foto-git_viukel.jpg';
  githubProfile: GithubProfile | null = null;

  skills = {
    backend:  ['Node.js', 'Express', 'TypeScript', 'GraphQL', 'REST APIs', 'ASP.NET Core', 'Spring Boot', 'C#', 'Java'],
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'SCSS', 'PrimeNG', 'HTML5', 'CSS3'],
    database: ['SQL Server', 'MySQL', 'MongoDB', 'Stored Procedures'],
    tools:    ['Git/GitHub', 'Cloudinary', 'JWT Auth', 'Vercel'],
  };

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.github.getProfile().subscribe({
      next: p => this.githubProfile = p,
      error: () => {}
    });
  }
}