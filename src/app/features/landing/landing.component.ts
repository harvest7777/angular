import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [MatButton, MatIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing.component.html',
})
export class Landing {}
