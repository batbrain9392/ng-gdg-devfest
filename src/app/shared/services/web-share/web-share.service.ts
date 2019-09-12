import { Injectable } from '@angular/core';
import { PlatformService } from '../platform/platform.service';
import { IWebShare } from './i-web-share';

@Injectable({
  providedIn: 'root'
})
export class WebShareService {
  readonly isWebShareAvailable: boolean;

  constructor(platformService: PlatformService) {
    if (platformService.isBrowser) {
      this.isWebShareAvailable = !!(navigator && (navigator as any).share);
    }
  }

  share({ title, text, url }: IWebShare) {
    (navigator as any).share({ title, text, url });
  }
}
