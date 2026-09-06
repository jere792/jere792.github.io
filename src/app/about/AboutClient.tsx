'use client';
import { useEffect, useState } from 'react';
import { GithubActivity } from '@/components/shared/GithubActivity';
import { type GithubProfile } from '@/data/github';

export function AboutPage() {
  const [githubProfile, setGithubProfile] = useState<GithubProfile | null>(null);

  const image = 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1773368005/foto-git_viukel.jpg';

  const skills = {
    backend:  ['Node.js', 'Express', 'TypeScript', 'GraphQL', 'REST APIs', 'ASP.NET Core', 'Spring Boot', 'C#', 'Java'],
    frontend: ['React', 'TypeScript', 'JavaScript', 'SCSS', 'HTML5', 'CSS3'],
    database: ['SQL Server', 'MySQL', 'MongoDB', 'Stored Procedures'],
    tools:    ['Git/GitHub', 'Cloudinary', 'JWT Auth', 'Vercel'],
  };

  useEffect(() => {
    fetch('https://api.github.com/users/jere792')
      .then(res => res.json())
      .then(data => setGithubProfile(data))
      .catch(() => {});
  }, []);

  return (
    <div className="about-container">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 60 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        <div className="code-content">
          <h1 className="page-title"># Sobre Mí</h1>

          <div className="main-layout">
            <div className="left-column">
              <p className="code-comment">// Personal Information</p>

              <div className="profile-card">
                <div className="avatar">
                  <img src={image} alt="Jeremy Anton" />
                </div>

                <div className="status-badge">
                  <span className="status-dot"></span>
                  Disponible para oportunidades
                </div>

                <div className="info-list">
                  <div className="info-item">
                    <span className="info-key">name:</span>
                    <span className="info-value">&quot;Jeremy Anton&quot;</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">role:</span>
                    <span className="info-value">&quot;Systems Engineer&quot;</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">location:</span>
                    <span className="info-value">&quot;Lima, Peru&quot;</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">experience:</span>
                    <span className="info-value">8+ months</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">university:</span>
                    <span className="info-value">&quot;UPN&quot;</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">degree:</span>
                    <span className="info-value">&quot;Ing. de Sistemas&quot;</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">semester:</span>
                    <span className="info-value">&quot;8vo ciclo&quot;</span>
                  </div>
                  <div className="info-item">
                    <span className="info-key">focus:</span>
                    <span className="info-value">&quot;Frontend Development&quot;</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="section">
                <p className="code-comment">// About Me</p>
                <div className="about-text">
                  <p>
                    Soy <strong className="name">Jeremy Yazid Anton Rojas</strong>, estudiante de octavo
                    ciclo de Ingeniería de Sistemas Computacionales en la
                    <strong className="university"> Universidad Privada del Norte</strong>, enfocado en el
                    desarrollo de aplicaciones web modernas y administración de sistemas.
                  </p>
                  <p>
                    Me especializo en desarrollo
                    <strong className="tech"> frontend con React y TypeScript</strong>, creando interfaces
                    modernas y responsivas con <strong className="tech">Next.js y SCSS</strong>. Complemento
                    mi perfil con conocimientos de
                    <strong className="tech"> backend (Node.js, Express)</strong>, bases de datos
                    <strong className="tech"> (SQL Server, MySQL, MongoDB)</strong>, lo que me permite
                    desarrollar soluciones completas de extremo a extremo.
                  </p>
                </div>
              </div>

              <div className="section">
                <p className="code-comment">// Stack Tecnológico</p>
                <div className="tech-stack">
                  {Object.entries(skills).map(([category, techs]) => (
                    <div key={category} className="tech-category">
                      <h3>{category}</h3>
                      <div className="tech-tags">
                        {techs.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section">
                <div className="bottom-grid">
                  <div className="bottom-item">
                    <p className="code-comment">// Contact</p>
                    <div className="contact-card">
                      <div className="contact-item">
                        <i className="pi pi-envelope"></i>
                        <a href="mailto:jeremyar792@gmail.com">jeremyar792@gmail.com</a>
                      </div>
                      <div className="contact-item">
                        <i className="pi pi-phone"></i>
                        <a href="tel:+51907851879">+51 907 851 879</a>
                      </div>
                    </div>
                  </div>

                  <div className="bottom-item">
                    <p className="code-comment">// GitHub Stats</p>
                    <div className="stats-card">
                      <div className="stat-item">
                        <span className="stat-number">{githubProfile?.public_repos ?? '...'}</span>
                        <span className="stat-label">Repos</span>
                      </div>
                      <div className="stat-divider"></div>
                      <div className="stat-item">
                        <span className="stat-number">{githubProfile?.followers ?? '...'}</span>
                        <span className="stat-label">Followers</span>
                      </div>
                      <div className="stat-divider"></div>
                      <div className="stat-item">
                        <span className="stat-number">{githubProfile?.following ?? '...'}</span>
                        <span className="stat-label">Following</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contrib-wrapper">
                  <div className="contrib-inner">
                    <p className="code-comment" style={{ marginTop: 0 }}>// GitHub Activity</p>
                    <GithubActivity compact={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="status-bar">
        <div className="status-left">
          <span><i className="pi pi-check-circle"></i> TypeScript</span>
          <span><i className="pi pi-code"></i> UTF-8</span>
        </div>
        <div className="status-right">
          <span>Ln 60, Col 18</span>
        </div>
      </div>
    </div>
  );
}