import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import { BehaviorSubject, combineLatest, fromEvent } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { OfflineService } from '../offline/offline.service';
import { PlatformService } from '../platform/platform.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly preferDarkTheme = this.mediaMatcher.matchMedia(
    '(prefers-color-scheme: dark)'
  );
  private readonly isDarkTheme = new BehaviorSubject(
    this.preferDarkTheme.matches
  );
  readonly isDarkTheme$ = this.isDarkTheme.asObservable().pipe(shareReplay());

  constructor(
    platformService: PlatformService,
    private offlineService: OfflineService,
    private meta: Meta,
    private mediaMatcher: MediaMatcher
  ) {
    if (platformService.isBrowser) {
      this.watchAndUpdateMetaThemeColor();
      this.watchDeviceColorSchemeAndUpdateTheme();
    }
  }

  watchDeviceColorSchemeAndUpdateTheme() {
    fromEvent<MediaQueryListEvent>(this.preferDarkTheme, 'change')
      .pipe(map(({ matches }) => matches))
      .subscribe(value => this.isDarkTheme.next(value));
  }

  watchAndUpdateMetaThemeColor() {
    combineLatest(this.isDarkTheme$, this.offlineService.isOffline$).subscribe(
      ([isDarkTheme, isOffline]) =>
        this.meta.updateTag({
          name: 'theme-color',
          content: isOffline ? '#bdbdbd' : isDarkTheme ? '#212121' : '#1976d2'
        })
    );
  }

  toggleDarkTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.getValue());
  }
}
