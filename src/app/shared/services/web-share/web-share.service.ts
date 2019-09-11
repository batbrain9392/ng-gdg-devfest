import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PlatformService } from '../platform/platform.service';
import { IWebShare } from './i-web-share';

@Injectable({
  providedIn: 'root'
})
export class WebShareService {
  readonly isWebShareAvailable: boolean;

  constructor(platformService: PlatformService, private matSnackBar: MatSnackBar) {
    if (platformService.isBrowser) {
      this.isWebShareAvailable = !!(navigator && (navigator as any).share);
    }
  }

  share({ title, text, url }: IWebShare) {
    (navigator as any)
      .share({ title, text, url })
      .then(() => this.matSnackBar.open('Shared.'))
      .catch((error: any) => {
        this.matSnackBar.open('Something went wrong! Please try again later.');
        console.log('Error sharing', error);
      });
  }
}
