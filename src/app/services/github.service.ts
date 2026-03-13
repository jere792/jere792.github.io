// src/app/core/services/github.service.ts

import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable }  from 'rxjs';
import { map }         from 'rxjs/operators';

import {
  GITHUB_USERNAME,
  GITHUB_API,
  type GithubProfile,
  type GithubRepo,
  type GithubEvent,
} from '../shared/data/github.data';

@Injectable({ providedIn: 'root' })
export class GithubService {

  constructor(private http: HttpClient) {}

  // ── Perfil ─────────────────────────────────────────────────
  getProfile(): Observable<GithubProfile> {
    return this.http.get<GithubProfile>(GITHUB_API);
  }

  // ── Repos públicos (sin forks, ordenados por update) ───────
  getRepos(limit = 6): Observable<GithubRepo[]> {
    return this.http
      .get<GithubRepo[]>(`${GITHUB_API}/repos?sort=updated&per_page=30`)
      .pipe(
        map(repos => repos
          .filter(r => !r.fork)
          .slice(0, limit)
        )
      );
  }

  // ── Últimos eventos públicos ────────────────────────────────
  getEvents(limit = 10): Observable<GithubEvent[]> {
    return this.http
      .get<GithubEvent[]>(`${GITHUB_API}/events?per_page=${limit}`);
  }

  // ── Contribution graph (heatmap via GitHub chart) ──────────
  getContribUrl(): string {
    return `https://ghchart.rshah.org/58a6ff/${GITHUB_USERNAME}`;
  }
}