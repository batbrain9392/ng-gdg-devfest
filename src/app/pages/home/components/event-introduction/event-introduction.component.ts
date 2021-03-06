import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event-introduction',
  templateUrl: './event-introduction.component.html',
  styleUrls: ['./event-introduction.component.scss', '../home.shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventIntroductionComponent {
  loadResource: boolean;
  isResourceLoaded: boolean;

  onViewed() {
    this.loadResource = true;
  }

  onResourceLoad() {
    this.isResourceLoaded = true;
  }
}
