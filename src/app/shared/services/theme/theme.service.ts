import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject(false);
  isDarkTheme$ = this.isDarkTheme.asObservable().pipe(shareReplay());

  toggleDarkTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.getValue());
  }
}
