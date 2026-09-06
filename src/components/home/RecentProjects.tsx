'use client';
import { useRouter } from 'next/navigation';
import { PROJECT_SECTIONS, type Project } from '@/data/projects';
import './RecentProjects.scss';

export function RecentProjects() {
  const router = useRouter();
  const recentProjects: Project[] = PROJECT_SECTIONS
    .flatMap(s => s.projects)
    .slice(0, 2);

  const getCategoryColor = (index: number) => {
    const colors = ['#58a6ff', '#7ee787'];
    return colors[index] ?? '#58a6ff';
  };

  return (
    <section className="recent-section">
      <div className="section-header">
        <div className="header-left">
          <span className="eyebrow">
            <i className="pi pi-code"></i>
            En desarrollo
          </span>
          <h2 className="section-title">Proyectos Recientes</h2>
        </div>
        <button className="btn-more" onClick={() => router.push('/projects')}>
          <span>Ver todos</span>
          <i className="pi pi-arrow-right"></i>
        </button>
      </div>
      <div className="projects-grid">
        {recentProjects.map((project, i) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => router.push(`/projects?highlight=${project.id}`)}
            style={{ '--accent': getCategoryColor(i) } as React.CSSProperties}
          >
            <div className="card-image">
              <img src={project.images[0]} alt={project.title} />
              <div className="card-overlay">
                <span className="overlay-label">
                  <i className="pi pi-external-link"></i>
                  Ver proyecto
                </span>
              </div>
              <div className="card-status">
                <span className="status-dot"></span>
                En desarrollo
              </div>
            </div>
            <div className="card-body">
              <div className="card-meta">
                <span className="card-date">
                  <i className="pi pi-calendar"></i>
                  {project.date}
                </span>
                <span className="card-client">{project.client}</span>
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              <div className="card-techs">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-more">+{project.technologies.length - 4}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-cta">
        <button className="btn-all" onClick={() => router.push('/projects')}>
          <i className="pi pi-folder-open"></i>
          <span>Ver todos los proyectos</span>
          <i className="pi pi-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}
