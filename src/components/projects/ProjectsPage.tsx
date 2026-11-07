import { useState, useEffect, useCallback, useRef } from 'react';
import { PROJECT_SECTIONS, type Project, type ProjectSection } from '@/data/projects';

export function ProjectsPage() {
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [showControls, setShowControls] = useState(true);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const controlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sections: ProjectSection[] = PROJECT_SECTIONS.map((section) => ({
    ...section,
    projects: section.projects.map((p) => ({ ...p })),
  }));

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

  // Force re-render for image carousel
  const [, setTick] = useState(0);
  const forceUpdate = () => setTick((t) => t + 1);

  return (
    <div className="projects-container">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 170 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className="code-content">
          <header className="projects-header">
            <h1 className="page-title"># Proyectos</h1>
          </header>

          {sections.map((section, si) => (
            <div key={si}>
              <div className={`section-divider divider-${section.category}`}>
                <div className="divider-line"></div>
                <div className="divider-label">
                  <i className={section.icon}></i>
                  <span className="divider-title">{section.label}</span>
                  <span className="divider-count">
                    {section.projects.length} proyecto{section.projects.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="divider-line"></div>
              </div>

              <p className="section-comment">{section.comment}</p>

              <section className="projects-section">
                {section.projects.map((project, i) => (
                  <div
                    key={project.id}
                    id={`project-${project.id}`}
                    className={`project-card card-${section.category} ${i % 2 !== 0 ? 'reverse' : ''}`}
                  >
                    <div className="project-header">
                      <div className={`project-status status-${section.category}`}></div>
                      <h2 className="project-title">{project.title}</h2>
                      <span className={`category-badge badge-${section.category}`}>
                        <i className={section.icon}></i>
                        {section.label}
                      </span>
                    </div>

                    <div className="project-grid">
                      <div className="project-info">
                        <div className={`info-box info-box-${section.category}`}>
                          <div className="info-item">
                            <span className="info-label">CLIENT:</span>
                            <span className="info-value">{project.client}</span>
                          </div>
                          {project.company && (
                            <div className="info-item">
                              <span className="info-label">COMPANY:</span>
                              <span className="info-value">{project.company}</span>
                            </div>
                          )}
                          {project.ruc && (
                            <div className="info-item">
                              <span className="info-label">RUC:</span>
                              <span className="info-value ruc-value">
                                <i className="pi pi-verified"></i>
                                {project.ruc}
                              </span>
                            </div>
                          )}
                          <div className="info-item">
                            <span className="info-label">DATE:</span>
                            <span className="info-value">{project.date}</span>
                          </div>
                        </div>

                        <p className="project-description">{project.description}</p>

                        <div className="tech-badges">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {(project.liveUrl || project.videoUrl) && (
                          <div className="project-links">
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
                          </div>
                        )}
                      </div>

                      <div className="project-image">
                        <div className="image-wrapper">
                          {project.images.length > 1 && (
                            <button
                              className="carousel-btn prev"
                              onClick={() => {
                                prevImage(project);
                                forceUpdate();
                              }}
                            >
                              <i className="pi pi-chevron-left"></i>
                            </button>
                          )}
                          <div className="image-frame">
                            <img
                              src={getCurrentImage(project)}
                              alt={project.title}
                              onClick={() => openLightbox(project)}
                              loading="lazy"
                            />
                          </div>
                          {project.images.length > 1 && (
                            <button
                              className="carousel-btn next"
                              onClick={() => {
                                nextImage(project);
                                forceUpdate();
                              }}
                            >
                              <i className="pi pi-chevron-right"></i>
                            </button>
                          )}
                          {project.images.length > 1 && (
                            <div className="carousel-indicators">
                              {project.images.map((_, idx) => (
                                <span
                                  key={idx}
                                  className={`indicator ${idx === project.currentImageIndex ? 'active' : ''}`}
                                  onClick={() => {
                                    project.currentImageIndex = idx;
                                    forceUpdate();
                                  }}
                                ></span>
                              ))}
                            </div>
                          )}
                          <button className="fullscreen-btn" onClick={() => openLightbox(project)}>
                            <i className="pi pi-window-maximize"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          ))}
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
          <span>Ln 50, Col 18</span>
        </div>
      </div>

      {lightboxProject && (
        <div className="lightbox-overlay" onClick={closeLightbox} onMouseMove={showControlsTemporarily}>
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
