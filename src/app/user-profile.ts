// user-profile.ts
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'user-profile',
  imports: [MatSlideToggle],
  templateUrl: './user-profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfile {
  private auth = inject(AuthService);

  user = toSignal(this.auth.user$);
  userName = computed(() => this.user()?.name ?? this.user()?.email ?? 'Unknown');

  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

  toggleTrial() {
    this.isTrial.update((v) => !v);
  }
}
