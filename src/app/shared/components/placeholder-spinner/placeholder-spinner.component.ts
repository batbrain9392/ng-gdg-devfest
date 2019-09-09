import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-spinner',
  templateUrl: './placeholder-spinner.component.html',
  styleUrls: ['./placeholder-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderSpinnerComponent {
  @Input() diameter = 100;
}
