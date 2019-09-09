import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly isDarkTheme = new BehaviorSubject(false);
  readonly isDarkTheme$ = this.isDarkTheme.asObservable().pipe(shareReplay());

  toggleDarkTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.getValue());
  }
}
