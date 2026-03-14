import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  PROJECT_SECTIONS,
  type Project,
  type ProjectSection,
} from '../../shared/data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  lightboxProject: Project | null = null;
  showControls = true;
  controlsTimeout: any;
  showComingSoonModal = false;

  sections: ProjectSection[] = PROJECT_SECTIONS.map(section => ({
    ...section,
    projects: section.projects.map(p => ({ ...p })),
  }));

  get allProjects(): Project[] {
    return this.sections.flatMap(s => s.projects);
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['highlight'];
      if (id) {
        setTimeout(() => this.scrollToProject(id), 300);
      }
    });
  }

  private scrollToProject(id: string): void {
    const el = document.getElementById('project-' + id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('highlighted');
      setTimeout(() => el.classList.remove('highlighted'), 2000);
    }
  }

  openVideoOrModal(url: string): void {
    if (!url || url === 'https://...' || url.trim() === '') {
      this.showComingSoonModal = true;
    } else {
      window.open(url, '_blank');
    }
  }

  closeComingSoonModal(): void {
    this.showComingSoonModal = false;
  }

  nextImage(project: Project) {
    if (project.currentImageIndex !== undefined && project.images.length > 1) {
      project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
    }
  }

  prevImage(project: Project) {
    if (project.currentImageIndex !== undefined && project.images.length > 1) {
      project.currentImageIndex =
        project.currentImageIndex === 0
          ? project.images.length - 1
          : project.currentImageIndex - 1;
    }
  }

  getCurrentImage(project: Project): string {
    return project.images[project.currentImageIndex || 0];
  }

  openLightbox(project: Project) {
    this.lightboxProject = { ...project };
    this.showControls = true;
    this.startControlsTimer();
  }

  closeLightbox() {
    this.lightboxProject = null;
    this.showControls = true;
    this.clearControlsTimer();
  }

  nextImageLightbox() {
    if (this.lightboxProject) {
      this.nextImage(this.lightboxProject);
      this.resetControlsTimer();
    }
  }

  prevImageLightbox() {
    if (this.lightboxProject) {
      this.prevImage(this.lightboxProject);
      this.resetControlsTimer();
    }
  }

  showControlsTemporarily() {
    this.showControls = true;
    this.resetControlsTimer();
  }

  resetControlsTimer() {
    if (this.showControls) {
      this.startControlsTimer();
    }
  }

  private startControlsTimer() {
    this.clearControlsTimer();
    this.controlsTimeout = setTimeout(() => {
      this.showControls = false;
    }, 1500);
  }

  private clearControlsTimer() {
    if (this.controlsTimeout) {
      clearTimeout(this.controlsTimeout);
      this.controlsTimeout = null;
    }
  }
}