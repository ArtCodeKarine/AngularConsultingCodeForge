import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import {
  usersDataAccessKey,
  usersEffects,
  UsersGuard,
  usersReducer,
} from './shared/data/data-access-users';

export const appRoutes: Routes = [
  {
    path: '',
    providers: [provideState(usersDataAccessKey, usersReducer), provideEffects(usersEffects)],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        canActivate: [UsersGuard],
        path: 'home',
        loadComponent: () =>
          import('./pages/page-dashboard/page-dashboard.component').then(
            (m) => m.PageDashboardComponent,
          ),
      },
    ],
  },
];
