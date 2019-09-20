import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NotificationService } from '../../../shared/services';
import { staricase, fade } from '../../../shared/animations';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [staricase, fade]
})
export class NotificationListComponent {
  isLoading = true;
  readonly messages$ = this.notificationService.messages$;
  constructor(private notificationService: NotificationService) {}

  onDone() {
    this.isLoading = false;
  }
}
