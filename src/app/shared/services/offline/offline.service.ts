import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { mapTo, tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {
  private readonly online$ = fromEvent(window, 'online').pipe(mapTo(true));
  private readonly offline$ = fromEvent(window, 'offline').pipe(mapTo(false));
  private readonly isOnline = new BehaviorSubject<boolean>(navigator.onLine);
  readonly isOnline$ = this.isOnline.asObservable().pipe(
    // tap(isOnline =>
    //   this.matSnackBar.open(`You are ${isOnline ? 'online' : 'offline'}.`)
    // ),
    shareReplay()
  );

  constructor(private matSnackBar: MatSnackBar) {
    const fireEvent = (value: boolean) => this.isOnline.next(value);
    this.online$.subscribe(fireEvent);
    this.offline$.subscribe(fireEvent);
  }
}
