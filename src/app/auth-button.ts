import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@auth0/auth0-angular';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'auth-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton, MatProgressSpinner],
  template: `
    @if (isLoading()) {
      <button matButton type="button" disabled>
        <mat-progress-spinner mode="indeterminate" diameter="20" />
      </button>
    } @else if (isAuthenticated()) {
      <button matButton type="button" (click)="logout()">Log out</button>
    } @else {
      <button matButton type="button" (click)="login()">Log in</button>
    }
  `,
})
export class AuthButton {
  private auth = inject(AuthService);

  isAuthenticated = toSignal(this.auth.isAuthenticated$, { initialValue: false });
  isLoading = toSignal(this.auth.isLoading$, { initialValue: true });

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
