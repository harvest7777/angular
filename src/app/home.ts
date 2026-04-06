import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthButton } from './auth-button';

@Component({
  selector: 'app-home',
  imports: [AuthButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <auth-button />
    </main>
  `,
})
export class Home {}
