import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  readonly isBrowser = isPlatformBrowser(this.platform);
  readonly isServer = isPlatformServer(this.platform);

  constructor(@Inject(PLATFORM_ID) private platform: any) {}
}
