import { Injectable } from '@angular/core';
import { IWebShare } from './i-web-share';

@Injectable({
  providedIn: 'root'
})
export class WebShareService {
  readonly shareFunction = navigator && (navigator as any).share;
  readonly isWebShareAvailable = !!this.shareFunction;

  constructor() {
    this.apiAvailabilityLog();
  }

  share({ title, text, url }: IWebShare) {
    alert(JSON.stringify(this.shareFunction));
    alert(this.isWebShareAvailable);
    alert(JSON.stringify(navigator && (navigator as any).share));
    if (this.isWebShareAvailable) {
      (navigator as any)
        .share({ title, text, url })
        .then(() => console.log('Successful share'))
        .catch((error: any) => console.log('Error sharing', error));
    } else {
      this.apiAvailabilityLog();
    }
  }

  private apiAvailabilityLog() {
    console.log('Web-share Api available -', this.isWebShareAvailable);
  }
}
