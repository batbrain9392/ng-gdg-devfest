import { Injectable } from '@angular/core';
import { fromEvent, BehaviorSubject, merge, Observable } from 'rxjs';
import { mapTo, shareReplay } from 'rxjs/operators';
import { PlatformService } from '../platform/platform.service';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {
  private readonly online$: Observable<boolean>;
  private readonly offline$: Observable<boolean>;
  private readonly isOffline: BehaviorSubject<boolean>;
  readonly isOffline$: Observable<boolean>;

  constructor(platformService: PlatformService) {
    if (platformService.isBrowser) {
      this.online$ = fromEvent(window, 'online').pipe(mapTo(false));
      this.offline$ = fromEvent(window, 'offline').pipe(mapTo(true));
      this.isOffline = new BehaviorSubject<boolean>(!navigator.onLine);
      this.isOffline$ = this.isOffline.asObservable().pipe(shareReplay());
      merge(this.online$, this.offline$).subscribe((value: boolean) =>
        this.isOffline.next(value)
      );
    }
  }
}
