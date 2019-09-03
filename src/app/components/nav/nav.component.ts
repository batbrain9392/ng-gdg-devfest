import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from 'src/app/services';
import { IRoute } from 'src/app/models';

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService
  ) {}

  toggleDarkTheme() {
    this.themeService.toggleDarkTheme();
  }
}
