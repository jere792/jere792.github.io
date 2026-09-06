'use client';
import { useEffect, useState } from 'react';
import { getContribUrl } from '@/lib/github';
import './GithubActivity.scss';

interface Props {
  compact?: boolean;
}

export function GithubActivity({ compact = false }: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const contribUrl = getContribUrl();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className={`github-section ${compact ? 'compact' : ''}`}>
      {!compact && (
        <h2 className="section-heading">
          <i className="devicon-github-original"></i>
          GitHub Activity
        </h2>
      )}

      {loading && (
        <div className="loading-state">
          <span className="terminal-prompt">$ fetching github data</span>
          <span className="blink">_</span>
        </div>
      )}

      {error && !loading && (
        <div className="error-state">
          <i className="pi pi-exclamation-triangle"></i>
          No se pudo conectar con la API de GitHub
        </div>
      )}

      {!loading && !error && (
        <div className="github-content">
          <div className="contrib-card">
            <span className="card-label">
              <i className="pi pi-chart-bar"></i>
              Contributions
            </span>
            <img
              src={contribUrl}
              alt="GitHub contribution graph"
              className="contrib-img"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}