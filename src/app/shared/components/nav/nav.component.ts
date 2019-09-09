import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  ThemeService,
  ServiceWorkerService,
  WebShareService
} from '../../services';
import { IRoute } from '../../models';
import { Title, Meta } from '@angular/platform-browser';

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
  isWebShareAvailable$ = this.webShareService.isWebShareAvailable$;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private serviceWorkerService: ServiceWorkerService,
    private webShareService: WebShareService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  onShareClick() {
    this.webShareService.share({
      title: this.titleService.getTitle(),
      text: this.metaService.getTag('name=description').content,
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
