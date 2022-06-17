import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyBOUOfpYvI9yODtJGZMYC5MobOAnQ-fAf8",
  authDomain: "react-meal-f019c.firebaseapp.com",
  projectId: "react-meal-f019c",
  storageBucket: "react-meal-f019c.appspot.com",
  messagingSenderId: "117520377591",
  appId: "1:117520377591:web:b08f65342db5ef625a15f2",
  measurementId: "G-TGD7TXVVR5",
  // databaseURL: 'https://react-meal-f019c.firebaseio.com',
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
