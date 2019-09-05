import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberComponent  {
  @Input() member: any;
}
