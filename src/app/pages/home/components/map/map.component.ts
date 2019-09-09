import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnChanges {
  @Input() private readonly url: string;
  urlSafe: SafeResourceUrl;
  isResourceLoaded: boolean;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  onResourceLoad() {
    this.isResourceLoaded = true;
  }
}
