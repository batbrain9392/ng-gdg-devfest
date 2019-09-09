import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss', '../home.shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightsComponent {}
