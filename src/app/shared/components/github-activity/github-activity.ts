import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../../services/github.service';
import { type GithubProfile } from '../../data/github.data';

@Component({
  selector: 'app-github-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-activity.html',
  styleUrl: './github-activity.scss',
})
export class GithubActivity implements OnInit {

  profile:   GithubProfile | null = null;
  contribUrl = '';
  loading    = true;
  error      = false;

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.contribUrl = this.github.getContribUrl();

    this.github.getProfile().subscribe({
      next:  p  => { this.profile = p; this.loading = false; },
      error: () => { this.error   = true; this.loading = false; },
    });
  }
}