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

/**
 * ⬇️ INI KUNCI UTAMA
 * Tangani PUSH SENDIRI
 */
messaging.onBackgroundMessage(function(payload) {
  console.log('[SW] Push diterima:', payload);

  const title = payload.data?.title || 'Promo Shopee';
  const options = {
    body: payload.data?.body || '',
    icon: '/icon-192.png',
    data: {
      url: payload.data?.url || 'https://shopee.co.id'
    }
  };

  self.registration.showNotification(title, options);
});

/**
 * Klik notif → buka link
 */
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data.url;
  event.waitUntil(
    clients.openWindow(url)
  );
});
