import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';
import { interval, concat } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  updateAvailable$ = this.swUpdate.available.pipe(map(value => !!value));

  constructor(
    private applicationRef: ApplicationRef,
    private swUpdate: SwUpdate,
    private matSnackBar: MatSnackBar
  ) {}

  watchForUpdates() {
    if (this.swUpdate.isEnabled) {
      const appIsStable$ = this.applicationRef.isStable.pipe(
        first(isStable => isStable === true)
      );
      const everySixHours$ = interval(6 * 60 * 60 * 1000);
      const everySixHoursOnceAppIsStable$ = concat(
        appIsStable$,
        everySixHours$
      );
      everySixHoursOnceAppIsStable$.subscribe(() =>
        this.swUpdate.checkForUpdate()
      );
      this.setUpdateSubscriptions();
    }
  }

  setUpdateSubscriptions() {
    this.swUpdate.available.subscribe(_ =>
      this.matSnackBar.open('New app available! Update from top bar.')
    );
    this.swUpdate.activated.subscribe(_ =>
      this.matSnackBar.open('App updated to the latest version.')
    );
  }

  async updateApp() {
    await this.swUpdate.activateUpdate();
    document.location.reload();
  }
}
