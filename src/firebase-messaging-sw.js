importScripts('https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.6.1/firebase-messaging.js');

firebase.initializeApp({ messagingSenderId: '608725602037' });
const messaging = firebase.messaging();
