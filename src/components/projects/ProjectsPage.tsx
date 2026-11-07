import { useState, useEffect, useCallback, useRef } from 'react';
import {
  PROJECT_SECTIONS,
  type Project,
  type ProjectCategory,
  type ProjectSection,
  type ProjectType,
} from '@/data/projects';

const TYPE_LABELS: Record<ProjectType, string> = {
  erp: 'ERP',
  landing: 'Landing',
  ecommerce: 'E-commerce',
  'app-mobile': 'App Mobile',
  web: 'Web',
};

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  business: 'Empresarial',
  personal: 'Personal',
  university: 'Universitario',
};

type ProjectWithContext = Project & {
  category: ProjectCategory;
  categoryLabel: string;
};

export function ProjectsPage() {
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [showControls, setShowControls] = useState(true);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [activeType, setActiveType] = useState<ProjectType | 'all'>('all');
  const controlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [sections] = useState<ProjectSection[]>(() =>
    PROJECT_SECTIONS.map((section) => ({
      ...section,
      projects: section.projects.map((project) => ({
        ...project,
        currentImageIndex: project.currentImageIndex ?? 0,
      })),
    })),
  );

  const allProjects: ProjectWithContext[] = sections.flatMap((section) =>
    section.projects.map((project) => ({
      ...project,
      category: section.category,
      categoryLabel: CATEGORY_LABELS[section.category],
    })),
  );

  const filteredProjects =
    activeType === 'all'
      ? allProjects
      : allProjects.filter((project) => project.type === activeType);

  const filterOptions: Array<{ value: ProjectType | 'all'; label: string }> = [
    { value: 'all', label: 'Todos' },
    ...Object.entries(TYPE_LABELS).map(([value, label]) => ({
      value: value as ProjectType,
      label,
    })),
  ];

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('highlight');
    if (!id) return;

    const highlightTimeout = setTimeout(() => {
      const el = document.getElementById('project-' + id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('highlighted');
        setTimeout(() => el.classList.remove('highlighted'), 2000);
      }
    }, 300);

    return () => clearTimeout(highlightTimeout);
  }, []);

  const openVideoOrModal = useCallback((url: string) => {
    if (!url || url === 'https://...' || url.trim() === '') {
      setShowComingSoonModal(true);
    } else {
      window.open(url, '_blank');
    }
  }, []);

  const getCurrentImage = useCallback((project: Project) => {
    return project.images[project.currentImageIndex || 0];
  }, []);

  const nextImage = useCallback((project: Project) => {
    if (project.currentImageIndex !== undefined && project.images.length > 1) {
      project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
    }
  }, []);

  const prevImage = useCallback((project: Project) => {
    if (project.currentImageIndex !== undefined && project.images.length > 1) {
      project.currentImageIndex =
        project.currentImageIndex === 0
          ? project.images.length - 1
          : project.currentImageIndex - 1;
    }
  }, []);

  const startControlsTimer = useCallback(() => {
    clearControlsTimer();
    controlsTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 1500);
  }, []);

  const clearControlsTimer = useCallback(() => {
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
      controlsTimeout.current = null;
    }
  }, []);

  const openLightbox = useCallback((project: Project) => {
    setLightboxProject({ ...project });
    setShowControls(true);
    startControlsTimer();
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxProject(null);
    setShowControls(true);
    clearControlsTimer();
  }, []);

  const resetControlsTimer = useCallback(() => {
    if (showControls) {
      startControlsTimer();
    }
  }, [showControls, startControlsTimer]);

  const showControlsTemporarily = useCallback(() => {
    setShowControls(true);
    resetControlsTimer();
  }, [resetControlsTimer]);

  // Force re-render for the lightbox carousel
  const [, setTick] = useState(0);
  const forceUpdate = () => setTick((t) => t + 1);

  return (
    <div className="projects-container">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 120 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className="code-content">
          <header className="projects-header">
            <h1 className="page-title"># Proyectos</h1>
          </header>

          <div className="projects-toolbar">
            <div className="projects-filters">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  className={`filter-btn ${activeType === option.value ? 'active' : ''}`}
                  onClick={() => setActiveType(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <span className="projects-count">
              {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="projects-grid-modern">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className={`project-tile tile-${project.type} category-${project.category}`}
              >
                <div
                  className={`tile-media ${project.images.length === 0 ? 'tile-media-empty' : ''}`}
                >
                  {project.images.length > 0 ? (
                    <img
                      src={getCurrentImage(project)}
                      alt={project.title}
                      onClick={() => openLightbox(project)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <i className="pi pi-image"></i>
                      <span>Imágenes referenciales próximamente</span>
                    </div>
                  )}
                  <span className={`tile-type type-${project.type}`}>
                    {TYPE_LABELS[project.type]}
                  </span>
                  <span className="tile-category">{project.categoryLabel}</span>
                  {project.images.length > 1 && (
                    <span className="tile-photo-count">
                      <i className="pi pi-images"></i> {project.images.length}
                    </span>
                  )}
                </div>

                <div className="tile-body">
                  <div className="tile-meta">
                    <span>{project.client}</span>
                    <span>{project.date}</span>
                  </div>
                  <h2 className="tile-title">{project.title}</h2>
                  <p className="tile-desc">{project.description}</p>

                  <div className="tech-badges">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="tech-badge">+{project.technologies.length - 5}</span>
                    )}
                  </div>

                  {(project.liveUrl || project.videoUrl || project.images.length > 0) && (
                    <div className="tile-actions">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link link-live"
                        >
                          <i className="pi pi-external-link"></i>
                          Ver proyecto
                        </a>
                      )}
                      {project.videoUrl && (
                        <button
                          className="project-link link-video"
                          onClick={() => openVideoOrModal(project.videoUrl!)}
                        >
                          <i className="pi pi-play-circle"></i>
                          Ver demo
                        </button>
                      )}
                      {project.images.length > 0 && (
                        <button
                          className="project-link link-gallery"
                          onClick={() => openLightbox(project)}
                        >
                          <i className="pi pi-images"></i>
                          Ver imágenes
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="projects-empty">
              <i className="pi pi-search"></i>
              <p>No hay proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </div>

      <div className="status-bar">
        <div className="status-left">
          <span>
            <i className="pi pi-check-circle"></i> TypeScript
          </span>
          <span>
            <i className="pi pi-code"></i> UTF-8
          </span>
        </div>
        <div className="status-right">
          <span>{filteredProjects.length} proyectos</span>
        </div>
      </div>

      {lightboxProject && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onMouseMove={showControlsTemporarily}
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              className={`close-corner-btn ${showControls ? 'visible' : ''}`}
              onClick={(e) => {
                closeLightbox();
                e.stopPropagation();
              }}
            >
              <i className="pi pi-times"></i>
            </button>
            {lightboxProject.images.length > 1 && (
              <>
                <button
                  className={`nav-corner-btn left ${showControls ? 'visible' : ''}`}
                  onClick={(e) => {
                    prevImage(lightboxProject);
                    resetControlsTimer();
                    forceUpdate();
                    e.stopPropagation();
                  }}
                >
                  <i className="pi pi-chevron-left"></i>
                </button>
                <button
                  className={`nav-corner-btn right ${showControls ? 'visible' : ''}`}
                  onClick={(e) => {
                    nextImage(lightboxProject);
                    resetControlsTimer();
                    forceUpdate();
                    e.stopPropagation();
                  }}
                >
                  <i className="pi pi-chevron-right"></i>
                </button>
              </>
            )}
            <div className="lightbox-image-container">
              <img src={getCurrentImage(lightboxProject)} alt={lightboxProject.title} />
            </div>
            <div
              className={`lightbox-controls ${showControls ? 'visible' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="controls-left">
                <h3>{lightboxProject.title}</h3>
              </div>
              <div className="controls-center">
                {lightboxProject.images.length > 1 && (
                  <div className="thumbnail-strip">
                    {lightboxProject.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`thumbnail-item ${idx === lightboxProject.currentImageIndex ? 'active' : ''}`}
                        onClick={() => {
                          lightboxProject.currentImageIndex = idx;
                          resetControlsTimer();
                          forceUpdate();
                        }}
                      >
                        <img src={img} alt={`Preview ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="controls-right">
                <span className="counter">
                  {(lightboxProject.currentImageIndex || 0) + 1} / {lightboxProject.images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {showComingSoonModal && (
        <div className="modal-overlay" onClick={() => setShowComingSoonModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowComingSoonModal(false)}>
              <i className="pi pi-times"></i>
            </button>
            <div className="modal-icon">
              <i className="pi pi-video"></i>
            </div>
            <h3 className="modal-title">Demo en camino</h3>
            <p className="modal-subtitle">// video: proximamente</p>
            <p className="modal-desc">
              Este proyecto aún no tiene una demo grabada disponible.
              <br />
              Estará disponible próximamente.
            </p>
            <button className="modal-btn" onClick={() => setShowComingSoonModal(false)}>
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
