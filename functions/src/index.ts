import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const subscribeToTopic = functions.https.onCall(
  async (data, context) => {
    const response = await admin.messaging().subscribeToTopic(data.token, 'messages');
    console.log(JSON.stringify(response));
    return 'Subscribed to messages';
  }
);

export const unsubscribeFromTopic = functions.https.onCall(
  async (data, context) => {
    const response = await admin.messaging().unsubscribeFromTopic(data.token, 'messages');
    console.log(JSON.stringify(response));
    return 'Unsubscribed from messages';
  }
);

export const sendOnFirestoreCreate = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async snapshot => {
    const message = snapshot.data();
    if (message) {
      const notification: admin.messaging.Notification = {
        title: message.title,
        body: message.body
      };
      const payload: admin.messaging.Message = {
        notification,
        webpush: {
          notification: {
            vibrate: [200, 100, 200],
            icon:
              'https://angular.io/generated/images/marketing/concept-icons/pwa.svg',
            actions: [
              {
                action: 'view',
                title: 'VIEW'
              }
            ]
          }
        },
        topic: 'messages'
      };
      console.log({ payload });
      return admin.messaging().send(payload);
    }
    return;
  });
