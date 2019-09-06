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
  isDarkTheme$ = this.themeService.isDarkTheme$;
  routes: IRoute[] = [];

  constructor(
    private themeService: ThemeService,
    private serviceWorkerService: ServiceWorkerService
  ) {}

  ngOnInit() {
    this.createRoutes();
  }

  createRoutes() {
    this.routes = [
      { label: 'HOME', path: '/home', icon: 'home' },
      { label: 'SCHEDULE', path: '/schedule', icon: 'event' },
      { label: 'SPEAKERS', path: '/speakers', icon: 'mic' },
      { label: 'TEAM', path: '/team', icon: 'supervisor_account' }
    ];
  }
}
