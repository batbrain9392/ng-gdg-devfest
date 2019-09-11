import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SubSink } from 'subsink';
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
export class AppComponent implements OnInit, OnDestroy {
  readonly isDarkTheme$ = this.themeService.isDarkTheme$;
  routes: IRoute[] = [];
  private subs = new SubSink();

  constructor(
    private themeService: ThemeService,
    private serviceWorkerService: ServiceWorkerService,
    private seoService: SeoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.serviceWorkerService.watchForUpdates();
    this.createRoutes();
    this.subs.sink = this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        map(navigationEndEvent => navigationEndEvent.url),
        map(url => this.routes.find(route => route.path === url))
      )
      .subscribe(route => {
        if (route) {
          this.seo(route);
        }
      });
  }

  createRoutes() {
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

  seo(route: IRoute) {
    this.seoService.updateTitle(route.title);
    this.seoService.updateUrl(route.path);
    this.seoService.updateType(route.type);
    this.seoService.updateDescription(route.description);
    this.seoService.updateImageUrl(route.imageUrl);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
