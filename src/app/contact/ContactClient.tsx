'use client';
import './contact.scss';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  username: string;
  color: string;
}

const profile = {
  name: 'Jeremy Yazid Anton Rojas',
  role: 'Frontend Developer',
  status: 'open_for_projects',
  preferred_contact: 'email',
  response_time: '24-48h',
  languages: ['Spanish'],
  timezone: 'UTC-5 (Lima)',
  availability: 'Freelance • Remote',
};

const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: 'devicon-github-original', url: 'https://github.com/jere792', username: '@jere792', color: '#ffffff' },
  { name: 'LinkedIn', icon: 'devicon-linkedin-plain', url: 'https://www.linkedin.com/in/jeremy-ant%C3%B3n-61980235b/', username: 'Jeremy Anton', color: '#0077b5' },
  { name: 'Email', icon: 'pi pi-envelope', url: 'mailto:jeremyar792@gmail.com', username: 'jeremyar792@gmail.com', color: '#ea4335' },
  { name: 'WhatsApp', icon: 'pi pi-whatsapp', url: 'https://wa.me/51907851879', username: '+51 907 851 879', color: '#25d366' },
];

const services = [
  'Desarrollo de aplicaciones web full-stack',
  'Arquitectura de sistemas escalables',
  'Integración de APIs REST y GraphQL',
  'Consultoría técnica en React/Node.js',
  'Optimización de bases de datos',
];

export function ContactPage() {
  return (
    <div className="contact-container">
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 40 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        <div className="code-content">
          <header className="contact-header">
            <h1 className="page-title"># Contacto</h1>
            <p className="page-subtitle">// Let&apos;s connect and create innovative solutions</p>
          </header>

          <section className="contact-section">
            <div className="contact-grid">
              <div className="terminal-card">
                <div className="terminal-header">
                  <span className="terminal-button red"></span>
                  <span className="terminal-button yellow"></span>
                  <span className="terminal-button green"></span>
                  <span className="terminal-title">contact.ts</span>
                </div>

                <div className="terminal-content">
                  <div className="terminal-block">
                    <p className="terminal-line">
                      <span className="terminal-user">jeremy@portfolio:</span>
                      <span className="terminal-path">~/contact$</span>
                      <span className="terminal-command"> whoami</span>
                    </p>
                    <div className="terminal-output">
                      <p className="output-name">{profile.name}</p>
                      <p className="output-role">{profile.role}</p>
                    </div>
                  </div>

                  <div className="terminal-block">
                    <p className="terminal-line">
                      <span className="terminal-user">jeremy@portfolio:</span>
                      <span className="terminal-path">~/contact$</span>
                      <span className="terminal-command"> cat profile.json</span>
                    </p>
                    <div className="terminal-output json-output">
                      <pre>{`{`}
{`  "role": "${profile.role}",`}
{`  "status": "${profile.status}",`}
{`  "availability": "${profile.availability}",`}
{`  "preferred_contact": "${profile.preferred_contact}",`}
{`  "response_time": "${profile.response_time}",`}
{`  "timezone": "${profile.timezone}",`}
{`  "languages": [${profile.languages.map((l, i) => `"${l}"${i < profile.languages.length - 1 ? ', ' : ''}`).join('')}]`}
{`}`}</pre>
                    </div>
                  </div>

                  <div className="terminal-block">
                    <p className="terminal-line">
                      <span className="terminal-user">jeremy@portfolio:</span>
                      <span className="terminal-path">~/contact$</span>
                      <span className="terminal-command"> cat services.txt</span>
                    </p>
                    <div className="terminal-output">
                      <ul className="services-list">
                        {services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-wrapper">
                <div className="social-card">
                  <h2 className="social-title">
                    <i className="pi pi-share-alt"></i>
                    # Canales de Comunicación
                  </h2>

                  <div className="social-links">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <i className={social.icon} style={{ color: social.color }}></i>
                        <div className="social-info">
                          <span className="social-name">{social.name}</span>
                          <span className="social-username">{social.username}</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="contact-note">
                    <i className="pi pi-info-circle"></i>
                    <p>
                      <strong>Horario de respuesta:</strong> {profile.response_time}<br />
                      Para colaboraciones profesionales o consultas técnicas, el contacto preferido es
                      por <strong>{profile.preferred_contact}</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="status-bar">
        <div className="status-left">
          <span><i className="pi pi-check-circle"></i> TypeScript</span>
          <span><i className="pi pi-code"></i> UTF-8</span>
        </div>
        <div className="status-right">
          <span>Ln 35, Col 22</span>
        </div>
      </div>
    </div>
  );
}