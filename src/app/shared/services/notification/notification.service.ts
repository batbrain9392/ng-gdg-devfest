import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore } from '@angular/fire/firestore';
import { EMPTY, Subject } from 'rxjs';
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
  readonly unreadMessagesCount$ = this.messages$.pipe(
    map(messages => messages.filter(message => !message.isRead).length),
    shareReplay()
  );

  constructor(
    private afMessaging: AngularFireMessaging,
    private afFunctions: AngularFireFunctions,
    private afs: AngularFirestore
  ) {}

  async init() {
    await this.getPermission();
  }

  private async getPermission() {
    const token = await this.afMessaging.requestToken.pipe(take(1)).toPromise();
    this.sub(token).subscribe();
  }

  private sub(token: string) {
    return this.afFunctions
      .httpsCallable('subscribeToTopic')({ token })
      .pipe(
        tap(console.log),
        catchError(err => {
          console.log(err);
          return EMPTY;
        })
      );
  }

  markAllAsRead() {
    const markAllAsReadBatch = this.afs.firestore.batch();
    // this.afs.collection<any>('messages', ref =>
    //   ref.where('isRead', '==', false)
    // );
    const x = this.messageCollection.ref
      .where('isRead', '==', false)
      .get()
      .then(querySnapshot =>
        querySnapshot.forEach(doc => console.log(doc.id, ' => ', doc.data()))
      );
  }
}
