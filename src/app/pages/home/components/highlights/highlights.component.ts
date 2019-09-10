import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss', '../home.shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightsComponent {
  loadResource1: boolean;
  loadResource2: boolean;

  onViewed(num: number) {
    num === 1 ? (this.loadResource1 = true) : (this.loadResource2 = true);
  }
}
