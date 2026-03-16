// src/app/core/services/github.service.ts

import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable }  from 'rxjs';
import { map }         from 'rxjs/operators';

import {
  GITHUB_USERNAME,
  GITHUB_API,
  type GithubProfile,
} from '../shared/data/github.data';

@Injectable({ providedIn: 'root' })
export class GithubService {

  constructor(private http: HttpClient) {}

  getProfile(): Observable<GithubProfile> {
    return this.http.get<GithubProfile>(GITHUB_API);
  }

  getContribUrl(): string {
    return `https://ghchart.rshah.org/58a6ff/${GITHUB_USERNAME}`;
  }
}