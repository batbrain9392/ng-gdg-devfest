import { Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  constructor(swUpdate: SwUpdate, swPush: SwPush, matSnackBar: MatSnackBar) {
    swUpdate.available.subscribe(async x => {
      console.log(x);
      await matSnackBar
        .open('New version available!', 'UPDATE APP')
        .onAction()
        .toPromise();
      await swUpdate.activateUpdate();
      matSnackBar.open('App updated to the latest version.');
    });
  }
}
