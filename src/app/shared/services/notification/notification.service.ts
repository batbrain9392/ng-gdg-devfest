import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { tap, take } from 'rxjs/operators';

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
    this.getPermission().then(() => this.watchMessages());
  }

  private getPermission() {
    return this.afMessaging.requestToken
      .pipe(take(1))
      .toPromise()
      .then(token => {
        this.token = token;
        this.sub();
      })
      .catch(console.log);
  }

  private watchMessages() {
    this.afMessaging.messages.pipe(tap(console.log)).subscribe();
  }

  private sub() {
    return this.afFunctions
      .httpsCallable('subscribeToTopic')({ token: this.token })
      .pipe(tap(_ => console.log('Subscribed to messages')));
  }
}
