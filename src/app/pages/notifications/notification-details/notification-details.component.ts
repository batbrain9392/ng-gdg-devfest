import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationDetailsComponent {
  constructor() {}
}
