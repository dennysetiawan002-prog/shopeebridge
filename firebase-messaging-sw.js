self.addEventListener('push', function (event) {
  console.log('[SW] push event diterima');

  const data = event.data ? event.data.json() : {};
  const title = data.title || 'TEST PUSH';
  const options = {
    body: data.body || 'Push dasar berhasil',
    icon: '/icon-192.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
});
