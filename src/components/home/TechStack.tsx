import { TechCollage } from '@/components/home/TechCollage';
import './TechStack.scss';

export function TechStack() {
  return (
    <section className="tech-stack-section">
      <div className="section-header">
        <span className="section-eyebrow">
          <i className="pi pi-code"></i>
          <h2 className="section-heading">Tech Stack</h2>
        </span>
      </div>
      <div className="tech-grid">
        <div className="col-collage">
          <TechCollage />
        </div>
        <div className="col-info">
          <p className="section-desc">
            Trabajo con un stack completo que abarca desde interfaces modernas hasta arquitecturas de
            backend robustas. Me especializo en
            <span className="highlight"> React</span> y <span className="highlight">TypeScript</span>
            en el frontend, con experiencia sólida en APIs REST y GraphQL con
            <span className="highlight"> Node.js</span>, <span className="highlight">Spring Boot</span> y
            <span className="highlight"> ASP.NET Core</span>.
          </p>
          <p className="section-desc">
            En base de datos manejo tanto relacionales como no relacionales —
            <span className="highlight"> SQL Server</span>, <span className="highlight">MySQL</span> y
            <span className="highlight"> MongoDB</span>. El diseño UI/UX con
            <span className="highlight"> Figma</span> y el control de versiones con
            <span className="highlight"> GitHub</span> son parte de mi flujo diario.
          </p>
          <div className="categories">
            <div className="category">
              <span className="cat-dot frontend"></span>
              <span className="cat-label">Frontend</span>
              <span className="cat-techs">React &middot; TypeScript &middot; SCSS</span>
            </div>
            <div className="category">
              <span className="cat-dot backend"></span>
              <span className="cat-label">Backend</span>
              <span className="cat-techs">Node.js &middot; Spring Boot &middot; ASP.NET</span>
            </div>
            <div className="category">
              <span className="cat-dot database"></span>
              <span className="cat-label">Database</span>
              <span className="cat-techs">SQL Server &middot; MySQL &middot; MongoDB</span>
            </div>
            <div className="category">
              <span className="cat-dot tools"></span>
              <span className="cat-label">Tools</span>
              <span className="cat-techs">Figma &middot; GitHub &middot; Arduino</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
