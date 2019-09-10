import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-event-introduction',
  templateUrl: './event-introduction.component.html',
  styleUrls: ['./event-introduction.component.scss', '../home.shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventIntroductionComponent implements OnChanges {
  @Input() private readonly url: string;
  urlSafe: SafeResourceUrl;
  loadResource: boolean;
  isResourceLoaded: boolean;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  onViewed() {
    this.loadResource = true;
  }

  onResourceLoad() {
    this.isResourceLoaded = true;
  }
}
