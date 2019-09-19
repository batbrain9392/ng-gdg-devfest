import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { EMPTY } from 'rxjs';
import { tap, take, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private afMessaging: AngularFireMessaging,
    private afFunctions: AngularFireFunctions
  ) {}

  init() {
    this.getPermission().then(() => this.watchMessages());
  }

  private async getPermission() {
    const token = await this.afMessaging.requestToken.pipe(take(1)).toPromise();
    console.log({ token });
    this.sub(token).subscribe();
  }

  private watchMessages() {
    this.afMessaging.messages.pipe(tap(console.log)).subscribe();
  }

  private sub(token: string) {
    return this.afFunctions
      .httpsCallable('subscribeToTopic')({ token })
      .pipe(
        tap(_ => console.log('Subscribed to messages')),
        catchError(err => {
          console.log(err);
          return EMPTY;
        })
      );
  }
}
