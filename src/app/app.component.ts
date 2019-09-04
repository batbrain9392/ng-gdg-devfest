import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from './shared/services';
import { IRoute } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isDarkTheme$ = this.themeService.isDarkTheme$;
  routes: IRoute[] = [];

  constructor(private themeService: ThemeService) {
    this.createRoutes();
  }

  createRoutes() {
    this.routes.push({ label: 'home', path: '/home', icon: 'home' });
    this.routes.push({ label: 'schedule', path: '/schedule', icon: 'event' });
    this.routes.push({ label: 'speakers', path: '/speakers', icon: 'mic' });
    this.routes.push({ label: 'team', path: '/team', icon: 'supervisor_account' });
  }
}
