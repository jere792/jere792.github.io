import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
export class Projects {
  lightboxProject: Project | null = null;
  showControls = true;
  controlsTimeout: any;

  sections: ProjectSection[] = PROJECT_SECTIONS.map(section => ({
    ...section,
    projects: section.projects.map(p => ({ ...p })),
  }));

  get allProjects(): Project[] {
    return this.sections.flatMap(s => s.projects);
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