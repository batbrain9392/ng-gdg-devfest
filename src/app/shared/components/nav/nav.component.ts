import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
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
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isDarkTheme$ = this.themeService.isDarkTheme$;
  isUpdateAvailable$ = this.serviceWorkerService.isUpdateAvailable$;
  isUpdating$ = this.serviceWorkerService.isUpdating$;
  isWebShareAvailable = this.webShareService.isWebShareAvailable;
  isOnline$ = this.offlineService.isOnline$;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private serviceWorkerService: ServiceWorkerService,
    private webShareService: WebShareService,
    private offlineService: OfflineService,
    private title: Title,
    private meta: Meta
  ) {}

  onShareClick() {
    this.webShareService.share({
      title: this.title.getTitle(),
      text: this.meta.getTag('name=description').content,
      url: window.location.origin
    });
  }

  toggleDarkTheme() {
    this.themeService.toggleDarkTheme();
  }

  updateApp() {
    this.serviceWorkerService.updateApp();
  }
}
