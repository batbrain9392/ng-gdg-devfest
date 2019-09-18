import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { tap, switchMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private token: string;

  constructor(
    private afMessaging: AngularFireMessaging,
    private afFunctions: AngularFireFunctions
  ) {}

  init() {
    this.getPermission();
    this.watchMessages();
  }

  private getPermission() {
    this.afMessaging.requestToken
      .pipe(
        tap(token => (this.token = token)),
        switchMapTo(this.sub())
      )
      .subscribe();
  }

  private watchMessages() {
    this.afMessaging.messages.pipe(tap(console.log)).subscribe();
  }

  private sub() {
    return this.afFunctions
      .httpsCallable('subscribeToTopic')({ token: this.token })
      .pipe(tap(_ => console.log('Subscribed to messages')));
  }

  private unsub() {
    this.afFunctions
      .httpsCallable('unsubscribeFromTopic')({ token: this.token })
      .pipe(tap(_ => console.log('Unsubscribed from messages')))
      .subscribe();
  }
}
