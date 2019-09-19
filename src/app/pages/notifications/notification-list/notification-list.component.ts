import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NotificationService } from '../../../shared/services';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationListComponent implements OnInit {
  readonly messages$ = this.notificationService.messages$;
  readonly unreadMessagesCount$ = this.notificationService.unreadMessagesCount$;
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {}
}
