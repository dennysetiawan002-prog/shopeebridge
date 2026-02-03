self.addEventListener('push', function (event) {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = {};
  }

  const title = data.title || 'Promo Shopee';
  const options = {
    body: data.body || '',
    icon: '/icon-192.png',
    image: data.image || undefined,
    data: {
      product_id: data.product_id || '',
      link: data.link || ''
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  const pid = event.notification.data.product_id;
  const fallback = event.notification.data.link || 'https://shopee.co.id';

  const landingUrl = pid
    ? `/landing.html?pid=${encodeURIComponent(pid)}`
    : fallback;

  event.waitUntil(
    clients.openWindow(landingUrl)
  );
});
