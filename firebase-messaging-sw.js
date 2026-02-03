self.addEventListener('push', function (event) {
  console.log('[SW] push diterima');

  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    // fallback kalau bukan JSON
    data = { title: 'TEST PUSH', body: event.data.text() };
  }

  const title = data.title || 'Notifikasi';
  const options = {
    body: data.body || 'Push berhasil',
    icon: '/icon-192.png',
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
