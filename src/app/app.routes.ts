import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { UserProfile } from './user-profile';

export const routes: Routes = [
  {
    path: 'admin',
    component: UserProfile,
    canActivate: [authGuardFn],
  },
];
