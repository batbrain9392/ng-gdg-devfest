import { ApplicationRef, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar, MatDialog } from '@angular/material';
import { interval, concat, Subject } from 'rxjs';
import { first, map, shareReplay } from 'rxjs/operators';
import { UpdateAppComponent } from '../../components/dialogs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  readonly isUpdateAvailable$ = this.swUpdate.available.pipe(
    map(value => !!value)
  );
  private readonly isUpdating = new Subject<boolean>();
  readonly isUpdating$ = this.isUpdating.asObservable().pipe(shareReplay());

  constructor(
    private applicationRef: ApplicationRef,
    private swUpdate: SwUpdate,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog,
    private title: Title
  ) {}

  watchForUpdates() {
    if (this.swUpdate.isEnabled) {
      const appIsStable$ = this.applicationRef.isStable.pipe(
        first(isStable => isStable)
      );
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(() => {
        console.log('App update: checking...');
        this.swUpdate
          .checkForUpdate()
          .then(() => console.log('App update: check finished'))
          .catch(err => console.log('App update: check error', err));
      });
      this.swUpdate.available.subscribe(updateObj => {
        console.log({ updateObj });
        this.title.setTitle(`⭳ ${this.title.getTitle()}`);
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
          this.isUpdating.next(true);
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
