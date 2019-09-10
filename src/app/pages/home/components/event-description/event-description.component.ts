import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss', '../home.shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDescriptionComponent {
  loadResource: boolean;

  onViewed() {
    this.loadResource = true;
  }
}
