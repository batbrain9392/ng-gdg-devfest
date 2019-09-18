import { Component, Input } from '@angular/core';
import {
  ThemeService,
  ServiceWorkerService,
  WebShareService,
  OfflineService,
  DeviceService
} from '../../services';
import { IRoute } from '../../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() readonly routes: IRoute[];
  readonly isHandset$ = this.deviceService.isHandset$;
  readonly isDarkTheme$ = this.themeService.isDarkTheme$;
  readonly isUpdateAvailable$ = this.serviceWorkerService.isUpdateAvailable$;
  readonly isUpdating$ = this.serviceWorkerService.isUpdating$;
  // readonly notificationCount$ = this.serviceWorkerService.notificationCount$;
  readonly isWebShareAvailable = this.webShareService.isWebShareAvailable;
  readonly isOffline$ = this.offlineService.isOffline$;

  constructor(
    private themeService: ThemeService,
    private serviceWorkerService: ServiceWorkerService,
    private webShareService: WebShareService,
    private offlineService: OfflineService,
    private deviceService: DeviceService
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
