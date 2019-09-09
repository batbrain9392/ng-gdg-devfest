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
        first(isStable => isStable)
      );
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(async () => {
        console.log('App update check: start');
        await this.swUpdate.checkForUpdate();
        console.log('App update check: done');
      });
      this.swUpdate.available.subscribe(updateObj => {
        console.log({ updateObj });
        this.matSnackBar.open(
          'New update available! Download from the top bar.'
        );
      });
    }
  }

  updateApp() {
    this.dialog
      .open(UpdateAppComponent)
      .afterClosed()
      .subscribe((isUpdate: boolean) => {
        if (isUpdate) {
          this.swUpdate.activateUpdate().then(() =>
            this.matSnackBar
              .open('App updated. Reloading...')
              .afterDismissed()
              .subscribe(_ => document.location.reload())
          );
        }
      });
  }
}
