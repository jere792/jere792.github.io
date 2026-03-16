import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    data: { animation: 'HomePage' },
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    data: { animation: 'AboutPage' },
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
    data: { animation: 'ContactPage' },
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects').then((m) => m.Projects),
    data: { animation: 'ProjectsPage' },
  },
  {
    path: 'now',
    loadComponent: () => import('./features/now/now').then((m) => m.Now),
    data: { animation: 'NowPage' },
  },

  {
    path: '**',
    redirectTo: '/home',
  },
];
