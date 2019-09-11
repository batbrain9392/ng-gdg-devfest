import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  ThemeService,
  ServiceWorkerService,
  SeoService
} from './shared/services';
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
    private serviceWorkerService: ServiceWorkerService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.serviceWorkerService.watchForUpdates();
    this.createMainRoutes();
    this.seoService.seoForMainRoutes(this.routes);
  }

  createMainRoutes() {
    this.routes = [
      {
        title: 'Home',
        path: '/home',
        icon: 'home',
        type: 'website',
        description: 'Description of event',
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title: 'Schedule',
        path: '/schedule',
        icon: 'event',
        type: 'website',
        description: 'Description of schedule',
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title: 'Speakers',
        path: '/speakers',
        icon: 'mic',
        type: 'website',
        description: 'Description of speakers',
        imageUrl: 'https://via.placeholder.com/100'
      },
      {
        title: 'Team',
        path: '/team',
        icon: 'supervisor_account',
        type: 'website',
        description: 'Description of team',
        imageUrl: 'https://via.placeholder.com/100'
      }
    ];
  }
}
