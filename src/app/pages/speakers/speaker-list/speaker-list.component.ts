import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerListComponent {
  speakers$ = of([1, 1, 1, 1, 1, 1, 1, 1]);

  constructor() {}
}
