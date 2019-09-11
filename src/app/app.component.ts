import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ThemeService, ServiceWorkerService } from './shared/services';
import { IRoute } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  readonly isDarkTheme$ = this.themeService.isDarkTheme$;
  routes: IRoute[] = [];

  constructor(
    private themeService: ThemeService,
    private serviceWorkerService: ServiceWorkerService
  ) {}

  ngOnInit() {
    this.serviceWorkerService.watchForUpdates();
    this.createMainRoutes();
  }

  createMainRoutes() {
    this.routes = [
      { title: 'Home', path: '/home', icon: 'home' },
      { title: 'Schedule', path: '/schedule', icon: 'event' },
      { title: 'Speakers', path: '/speakers', icon: 'mic' },
      { title: 'Team', path: '/team', icon: 'supervisor_account' }
    ];
  }
}
