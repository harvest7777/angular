// user-profile.ts
import { Component, computed, signal } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'user-profile',
  imports: [MatSlideToggle],
  templateUrl: './user-profile.html',
})
export class UserProfile {
  userName = signal('sdlkjfjsld');
  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());
  toggleTrial() {
    this.isTrial.set(!this.isTrial());
  }
}
