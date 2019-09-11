import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  loadResource: boolean;
  isResourceLoaded: boolean;

  onViewed() {
    this.loadResource = true;
  }

  onResourceLoad() {
    this.isResourceLoaded = true;
  }
}
