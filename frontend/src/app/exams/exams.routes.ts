import { Routes } from '@angular/router';

import { PageExamsListComponent } from './pages/page-exams-list/page-exams-list.component';

export const examRoutes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: 'list',
        component: PageExamsListComponent,
    },
];
