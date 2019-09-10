import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly isDarkTheme = new BehaviorSubject(false);
  readonly isDarkTheme$ = this.isDarkTheme.asObservable().pipe(
    tap(isDarkTheme =>
      this.meta.updateTag({
        name: 'theme-color',
        content: isDarkTheme ? '#212121' : '#1976d2'
      })
    ),
    shareReplay()
  );

  constructor(private meta: Meta) {}

  toggleDarkTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.getValue());
  }
}
