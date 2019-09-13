import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay, tap } from 'rxjs/operators';
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
  @Input() readonly routes: IRoute[];
  isHandset = true;
  readonly isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    tap(isHandset => this.isHandset = isHandset),
    shareReplay()
  );
  readonly isDarkTheme$ = this.themeService.isDarkTheme$;
  readonly isUpdateAvailable$ = this.serviceWorkerService.isUpdateAvailable$;
  readonly isUpdating$ = this.serviceWorkerService.isUpdating$;
  readonly isWebShareAvailable = this.webShareService.isWebShareAvailable;
  readonly isOffline$ = this.offlineService.isOffline$;

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
