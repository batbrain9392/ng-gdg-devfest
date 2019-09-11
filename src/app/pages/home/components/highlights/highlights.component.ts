import { Component, ChangeDetectionStrategy, OnChanges, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss', '../home.shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightsComponent implements OnChanges {
  @Input() private readonly url1: string;
  @Input() private readonly url2: string;
  urlSafe1: SafeResourceUrl;
  urlSafe2: SafeResourceUrl;
  loadResource1: boolean;
  loadResource2: boolean;
  isResourceLoaded1: boolean;
  isResourceLoaded2: boolean;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.urlSafe1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
    this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
  }

  onViewed(num: number) {
    num === 1 ? (this.loadResource1 = true) : (this.loadResource2 = true);
  }

  onResourceLoad(num: number) {
    num === 1
      ? (this.isResourceLoaded1 = true)
      : (this.isResourceLoaded2 = true);
  }
}
