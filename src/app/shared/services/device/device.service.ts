import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { PlatformService } from '../platform/platform.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  readonly isHandset$: Observable<boolean>;

  constructor(
    breakpointObserver: BreakpointObserver,
    platformService: PlatformService
  ) {
    if (platformService.isBrowser) {
      this.isHandset$ = breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches),
        shareReplay()
      );
    } else {
      this.isHandset$ = of(true);
    }
  }
}
