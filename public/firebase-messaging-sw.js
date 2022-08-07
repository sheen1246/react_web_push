// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAeONRnY2L0-ko3Gi3mTh089OVpGYK-pG4",
  authDomain: "web-push-bb5a2.firebaseapp.com",
  projectId: "web-push-bb5a2",
  storageBucket: "web-push-bb5a2.appspot.com",
  messagingSenderId: "676536604489",
  appId: "1:676536604489:web:7ca1afd153797480dc2c98",
  measurementId: "G-PZXR3613R4"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});