const CACHE_NAME = 'my-cache-v1';
const URLS_TO_CACHE = ['/', '/main.js', '/script.js', '/style.css', 'sample.png', 'test.gif'];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service: Worker: Caching assets..');
      cache
        .addAll(URLS_TO_CACHE)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    })
  );
});
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            // Delete old cache entries that are no longer needed
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Service worker: Fetching');
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log('Service Worker: Returning cached response');
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
