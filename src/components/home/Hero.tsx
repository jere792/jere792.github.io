'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { USER_INFO, SOCIAL_LINKS } from '@/data/home';
import './Hero.scss';

export function Hero() {
  const router = useRouter();
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const text = USER_INFO.typingText;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-name">
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero-role">{USER_INFO.role}</p>
          <p className="hero-description">{USER_INFO.description}</p>
          <div className="cta-buttons">
            <button className="btn-raised" onClick={() => router.push('/projects')}>
              Ver Proyectos <i className="pi pi-arrow-right"></i>
            </button>
            <button className="btn-outlined" onClick={() => router.push('/contact')}>
              Contáctame <i className="pi pi-envelope"></i>
            </button>
          </div>
          <div className="social-links">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.external ? '_blank' : '_self'}
                rel={social.external ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="social-icon"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={USER_INFO.image} alt={USER_INFO.name} className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
