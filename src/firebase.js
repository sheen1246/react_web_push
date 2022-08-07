import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAeONRnY2L0-ko3Gi3mTh089OVpGYK-pG4",
  authDomain: "web-push-bb5a2.firebaseapp.com",
  projectId: "web-push-bb5a2",
  storageBucket: "web-push-bb5a2.appspot.com",
  messagingSenderId: "676536604489",
  appId: "1:676536604489:web:7ca1afd153797480dc2c98",
  measurementId: "G-PZXR3613R4"
};

const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey: 'BMEpEVMhxrEdngSygEijv9JCQBwk_Pm-hYb5BEmvrox6suVVt7dZTU-RTbHg-Whm_TIzNa7HB4HqDQnkpJDQY00'
  }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});