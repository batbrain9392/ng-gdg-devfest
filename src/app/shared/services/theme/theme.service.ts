import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { OfflineService } from '../offline/offline.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly isDarkTheme = new BehaviorSubject(false);
  readonly isDarkTheme$ = this.isDarkTheme.asObservable().pipe(shareReplay());

  constructor(offlineService: OfflineService, meta: Meta) {
    combineLatest(this.isDarkTheme$, offlineService.isOffline$).subscribe(
      ([isDarkTheme, isOffline]) =>
        meta.updateTag({
          name: 'theme-color',
          content: isOffline ? '#bdbdbd' : isDarkTheme ? '#212121' : '#1976d2'
        })
    );
  }

  toggleDarkTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.getValue());
  }
}
