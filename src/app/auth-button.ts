import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'auth-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isLoading()) {
      <span aria-live="polite">Loading...</span>
    } @else if (isAuthenticated()) {
      <button type="button" (click)="logout()">Log out</button>
    } @else {
      <button type="button" (click)="login()">Log in</button>
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
