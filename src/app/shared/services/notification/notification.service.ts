import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseError } from 'firebase';
import { EMPTY } from 'rxjs';
import { tap, take, catchError, shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly messageCollection = this.afs.collection<any>('messages');
  readonly messages$ = this.messageCollection.snapshotChanges().pipe(
    map(actions =>
      actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ),
    shareReplay()
  );
  private notificationsBlocked: boolean;

  constructor(
    private afMessaging: AngularFireMessaging,
    private afFunctions: AngularFireFunctions,
    private afs: AngularFirestore
  ) {}

  async init() {
    await this.getPermission();
  }

  private async getPermission() {
    let token = await this.afMessaging.getToken
      .pipe(
        take(1),
        catchError((err: FirebaseError) => {
          this.notificationsBlocked =
            err.code === 'messaging/notifications-blocked';
          return this.errHandler(err);
        })
      )
      .toPromise();
    console.log(
      token ? 'Notifications are enabled' : 'Asking notification permission'
    );
    if (!token && !this.notificationsBlocked) {
      token = await this.afMessaging.requestToken
        .pipe(
          take(1),
          catchError(err => this.errHandler(err))
        )
        .toPromise();
      await this.sub(token);
    }
    console.log('Listening to incoming notifications');
    this.afMessaging.messages.subscribe(message => console.log(message));
  }

  private sub(token: string) {
    return this.afFunctions
      .httpsCallable('subscribeToTopic')({ token })
      .pipe(
        take(1),
        tap(console.log),
        catchError(err => this.errHandler(err))
      )
      .toPromise();
  }

  private errHandler(err: any) {
    console.log(err.message);
    return EMPTY;
  }
}
