import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  readonly isBrowser = isPlatformBrowser(this.platform);
  readonly isServer = isPlatformServer(this.platform);
  readonly url = this.isBrowser
    ? window.location.origin
    : 'https://gdg-devfest-ng.web.app';

  constructor(@Inject(PLATFORM_ID) private platform: any) {}
}
