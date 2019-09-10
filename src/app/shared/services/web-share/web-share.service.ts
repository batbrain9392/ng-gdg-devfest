import { Injectable } from '@angular/core';
import { IWebShare } from './i-web-share';

@Injectable({
  providedIn: 'root'
})
export class WebShareService {
  private readonly localNavigator = navigator as any;
  readonly shareFunction = this.localNavigator && this.localNavigator.share;
  readonly isWebShareAvailable = !!this.shareFunction;

  constructor() {
    this.apiAvailabilityLog();
  }

  share({ title, text, url }: IWebShare) {
    alert(JSON.stringify(this.shareFunction));
    if (this.isWebShareAvailable) {
      this.shareFunction({ title, text, url })
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
