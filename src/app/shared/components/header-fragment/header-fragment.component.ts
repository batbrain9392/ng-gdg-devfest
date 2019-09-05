import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-header-fragment',
  templateUrl: './header-fragment.component.html',
  styleUrls: ['./header-fragment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderFragmentComponent {
  @Input() fragment: string;
}
