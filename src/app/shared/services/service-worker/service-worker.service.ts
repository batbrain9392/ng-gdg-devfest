import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar, MatDialog } from '@angular/material';
import { interval, concat } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { UpdateAppComponent } from '../../components/dialogs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  updateAvailable$ = this.swUpdate.available.pipe(map(value => !!value));

  constructor(
    private applicationRef: ApplicationRef,
    private swUpdate: SwUpdate,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog
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
      this.swUpdate.available.subscribe(_ =>
        this.matSnackBar.open('New app available! Update from top bar.')
      );
    }
  }

  updateApp() {
    this.dialog
      .open(UpdateAppComponent)
      .afterClosed()
      .subscribe((isUpdate: boolean) => {
        if (isUpdate) {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        }
      });
  }
}
