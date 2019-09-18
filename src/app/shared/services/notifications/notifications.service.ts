import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private afMessaging: AngularFireMessaging) {}

  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      token => console.log('Permission granted! Save to the server!', token),
      error => console.error(error)
    );
  }

  listenToNotifications() {
    this.afMessaging.messages.subscribe(message => console.log(message));
  }
}
