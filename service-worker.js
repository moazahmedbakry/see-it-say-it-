
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('see-it-say-it-cache').then(cache => {
      return cache.addAll([
        'see-it-say-it-pwa.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
