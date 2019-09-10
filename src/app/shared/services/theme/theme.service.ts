import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly isDarkTheme = new BehaviorSubject(false);
  readonly isDarkTheme$ = this.isDarkTheme.asObservable().pipe(shareReplay());

  constructor(private meta: Meta) {}

  toggleDarkTheme() {
    const isDarkTheme = !this.isDarkTheme.getValue();
    this.isDarkTheme.next(isDarkTheme);
    const themeColor = isDarkTheme ? '#212121' : '#1976d2';
    this.meta.updateTag({ name: 'theme-color', content: themeColor });
  }
}
