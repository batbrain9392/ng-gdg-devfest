import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-member-small',
  templateUrl: './member-small.component.html',
  styleUrls: ['./member-small.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberSmallComponent {
  @Input() member: any;
}
