import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PROJECT_SECTIONS, type Project } from '../../../../shared/data/projects.data';

@Component({
  selector: 'app-recent-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-projects.html',
  styleUrl: './recent-projects.scss',
})
export class RecentProjects {

  recentProjects: Project[] = PROJECT_SECTIONS
    .flatMap(s => s.projects)
    .slice(0, 2);

  constructor(private router: Router) {}

  goToProjects(): void {
    this.router.navigate(['/projects']);
  }

  goToProject(project: Project): void {
    this.router.navigate(['/projects'], {
      queryParams: { highlight: project.id }
    });
  }

  getCategoryColor(index: number): string {
    const colors = ['#58a6ff', '#7ee787'];
    return colors[index] ?? '#58a6ff';
  }
}