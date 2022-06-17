importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js');

const config = { 
  apiKey: "AIzaSyBOUOfpYvI9yODtJGZMYC5MobOAnQ-fAf8",
  authDomain: "react-meal-f019c.firebaseapp.com",
  projectId: "react-meal-f019c",
  storageBucket: "react-meal-f019c.appspot.com",
  messagingSenderId: "117520377591",
  appId: "1:117520377591:web:b08f65342db5ef625a15f2",
  measurementId: "G-TGD7TXVVR5",

};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});
