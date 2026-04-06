import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { UserProfile } from './user-profile';
import { Landing } from './features/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'admin',
    component: UserProfile,
    canActivate: [authGuardFn],
  },
  {
    path: 'cms',
    component: UserProfile,
    canActivate: [authGuardFn],
  },
];
