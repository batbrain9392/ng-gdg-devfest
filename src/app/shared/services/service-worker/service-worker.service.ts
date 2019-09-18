import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { MatSnackBar, MatDialog } from '@angular/material';
import { interval, concat, Subject } from 'rxjs';
import { first, map, shareReplay } from 'rxjs/operators';
import { UpdateAppComponent } from '../../components/dialogs';
import { environment } from 'src/environments/environment';

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
    private swPush: SwPush,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  init() {
    const appIsStable$ = this.applicationRef.isStable.pipe(
      first(isStable => isStable)
    );
    const everyHour$ = interval(1 * 60 * 60 * 1000);
    const everyHourOnceAppIsStable$ = concat(appIsStable$, everyHour$);
    everyHourOnceAppIsStable$.subscribe(() => {
      this.checkForUpdate();
      this.getNotificationPermission();
    });
    this.watchUpdate();
  }

  private checkForUpdate() {
    if (this.swUpdate.isEnabled) {
      console.log('App update: checking...');
      this.swUpdate
        .checkForUpdate()
        .then(() => console.log('App update: check finished'))
        .catch(err => console.log('App update: check error', err));
    }
  }

  private watchUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(updateObj => {
        console.log({ updateObj });
        this.matSnackBar.open(
          'New update available! Download from the top bar.'
        );
      });
    }
  }

  private async getNotificationPermission() {
    if (this.swPush.isEnabled) {
      const pushSubscription = await this.swPush.requestSubscription({
        serverPublicKey: environment.serverPublicKey
      });
      console.log(pushSubscription.toJSON());
      this.swPush.messages.subscribe(console.log);
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
