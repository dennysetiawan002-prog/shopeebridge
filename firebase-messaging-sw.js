importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Gunakan konfigurasi yang sama dengan index.html
const firebaseConfig = {
  apiKey: "AIzaSyD_zJ9VxNeNZCBwaXpzgHbbfmw3Ymj5QTA",
  authDomain: "shopee-promo.firebaseapp.com",
  projectId: "shopee-promo",
  storageBucket: "shopee-promo.firebasestorage.app",
  messagingSenderId: "526441713326",
  appId: "1:526441713326:web:4ba5bb996f44e98bc5673f",
  measurementId: "G-L6NTGB9CE6"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Logika untuk menampilkan notifikasi saat browser tertutup
messaging.onBackgroundMessage((payload) => {
  console.log('Notifikasi masuk:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

