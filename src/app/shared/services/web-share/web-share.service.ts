import { Injectable } from '@angular/core';
import { IWebShare } from './i-web-share';

@Injectable({
  providedIn: 'root'
})
export class WebShareService {
  share({ title, text, url }: IWebShare) {
    if (navigator && (navigator as any).share) {
      (navigator as any)
        .share({ title, text, url })
        .then(() => console.log('Successful share'))
        .catch((error: any) => console.log('Error sharing', error));
    } else {
      console.log('No share api');
    }
  }
}
