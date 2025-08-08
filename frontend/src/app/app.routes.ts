import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'exams',
    pathMatch: 'full',
  },
  {
    path: 'exams',
    loadChildren: () => import('./exams/exams.routes').then((m) => m.examRoutes),
  },
];
