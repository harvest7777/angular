import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('lebron');
  protected readonly auth = inject(AuthService);
  protected readonly isAuthenticated = toSignal(this.auth.isAuthenticated$, { initialValue: false });
  protected readonly isLoading = toSignal(this.auth.isLoading$, { initialValue: true });

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({
      logoutParams: { returnTo: environment.auth0.authorizationParams.redirect_uri },
    });
  }
}
