import { Injectable } from '@angular/core';
import { fromEvent, BehaviorSubject, merge } from 'rxjs';
import { mapTo, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {
  private readonly online$ = fromEvent(window, 'online').pipe(mapTo(false));
  private readonly offline$ = fromEvent(window, 'offline').pipe(mapTo(true));
  private readonly isOffline = new BehaviorSubject<boolean>(!navigator.onLine);
  readonly isOffline$ = this.isOffline.asObservable().pipe(shareReplay());

  constructor() {
    merge(this.online$, this.offline$).subscribe((value: boolean) =>
      this.isOffline.next(value)
    );
  }
}
