import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject(false);
  isDarkTheme$ = this.isDarkTheme.asObservable();

  toggleDarkTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.getValue());
  }
}
