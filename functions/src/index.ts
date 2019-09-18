import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const subscribeToTopic = functions.https.onCall(
  async (data, context) => {
    await admin.messaging().subscribeToTopic(data.token, data.topic);
    return `subscribed to ${data.topic}`;
  }
);

export const unsubscribeFromTopic = functions.https.onCall(
  async (data, context) => {
    await admin.messaging().unsubscribeFromTopic(data.token, data.topic);
    return `unsubscribed from ${data.topic}`;
  }
);

export const sendOnFirestoreCreate = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async snapshot => {
    const message = snapshot.data();
    const notification: admin.messaging.Notification = {
      title: 'New Message Available!',
      body: message.headline
    };
    const payload: admin.messaging.Message = {
      notification,
      webpush: {
        notification: {
          vibrate: [200, 100, 200],
          icon: 'https://angular.io/generated/images/marketing/concept-icons/pwa.svg',
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
    return admin.messaging().send(payload);
  });
