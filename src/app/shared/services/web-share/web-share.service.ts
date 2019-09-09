import { Injectable } from '@angular/core';
import { IWebShare } from './i-web-share';
import { of, BehaviorSubject } from 'rxjs';
import { tap, shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebShareService {
  private readonly localNavigator = navigator as any;
  private readonly webShare = new BehaviorSubject<any>(
    this.localNavigator && this.localNavigator.share
  );
  readonly isWebShareAvailable$ = this.webShare.asObservable().pipe(
    map(obj => !!obj),
    tap(this.apiAvailabilityLog),
    shareReplay()
  );

  share({ title, text, url }: IWebShare) {
    this.webShare.subscribe(share => {
      if (share) {
        share({ title, text, url })
          .then(() => console.log('Successful share'))
          .catch((error: any) => console.log('Error sharing', error));
      } else {
        this.apiAvailabilityLog(!!share);
      }
    });
  }

  private apiAvailabilityLog(isWebShareAvailable: boolean) {
    console.log('Web-share Api available -', isWebShareAvailable);
  }
}
