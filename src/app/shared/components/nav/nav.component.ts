import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay, mapTo } from 'rxjs/operators';
import {
  ThemeService,
  ServiceWorkerService,
  WebShareService,
  OfflineService
} from '../../services';
import { IRoute } from '../../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  @Input() routes: IRoute[];
  isNotHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    map(isHandset => !isHandset),
    shareReplay()
  );
  isDarkTheme$ = this.themeService.isDarkTheme$;
  isUpdateAvailable$ = this.serviceWorkerService.isUpdateAvailable$;
  isUpdating$ = this.serviceWorkerService.isUpdating$;
  isWebShareAvailable = this.webShareService.isWebShareAvailable;
  isOffline$ = this.offlineService.isOffline$;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private serviceWorkerService: ServiceWorkerService,
    private webShareService: WebShareService,
    private offlineService: OfflineService
  ) {}

  onShareClick() {
    this.webShareService.share({
      url: window.location.href
    });
  }

  toggleDarkTheme() {
    this.themeService.toggleDarkTheme();
  }

  updateApp() {
    this.serviceWorkerService.updateApp();
  }
}
