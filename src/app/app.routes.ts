import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { Landing } from './features/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'cms',
    component: Landing,
    canActivate: [authGuardFn],
  },
];
