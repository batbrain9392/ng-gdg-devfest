import { Injectable } from '@angular/core';
import { IWebShare } from './i-web-share';

@Injectable({
  providedIn: 'root'
})
export class WebShareService {
  readonly isWebShareAvailable = !!(navigator && (navigator as any).share);

  constructor() {
    this.apiAvailabilityLog();
  }

  share({ title, text, url }: IWebShare) {
    (navigator as any)
      .share({ title, text, url })
      .then(() => console.log('Shared'))
      .catch((error: any) => console.log('Error sharing', error));
  }

  private apiAvailabilityLog() {
    console.log('Web-share api available -', this.isWebShareAvailable);
  }
}
