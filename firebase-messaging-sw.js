importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD_zJ9VxNeNZCBwaXpzgHbbfmw3Ymj5QTA",
  authDomain: "shopee-promo.firebaseapp.com",
  projectId: "shopee-promo",
  storageBucket: "shopee-promo.firebasestorage.app",
  messagingSenderId: "526441713326",
  appId: "1:526441713326:web:4ba5bb996f44e98bc5673f"
});

const messaging = firebase.messaging();
