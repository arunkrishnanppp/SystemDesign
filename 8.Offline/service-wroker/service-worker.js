//SW On insstall handler
const resourcesToCache = ['/', 'index.html', 'script.js', 'main.js'];
const CACHE_NAME = 'v1-service-worker';

const addResourcesToCache = async (resources) => {
  try {
    const cache = await caches.open(CACHE_NAME);
    console.log('Opened cache:', cache);

    for (const resource of resources) {
      try {
        await cache.add(resource);
        console.log(`Cached successfully: ${resource}`);
      } catch (error) {
        console.error(`Failed to cache: ${resource}`, error);
      }
    }
  } catch (err) {
    console.error('addResourcesToCache failed:', err);
  }
};

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(addResourcesToCache(resourcesToCache));
});

const cleanUpOldEntries = async () => {
  const cacheWhitelist = [CACHE_NAME];
  const cacheKeys = await caches.keys();
  cacheKeys.map(async (cacheName) => {
    if (!cacheWhitelist.includes(cacheName)) {
      await caches.delete(cacheName);
    }
  });
};
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(cleanUpOldEntries());
});

const putInCache = async (request, response) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
};
const getFromCacheFirst = async (request, fallbackUrl) => {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    console.log('request', request.url, 'found cached');
    return cachedResponse;
  }
  console.log('request', request.url, 'not found in cache');

  try {
    console.log('Fetching From NW');
    const responseFromNetwork = await fetch(request);
    // Check if the response is OK (status 200-299)
    if (!responseFromNetwork.ok) {
      throw new Error(`Fetch failed with status: ${responseFromNetwork.status}`);
    }
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (err) {
    console.log('Error Happened, Fetching fallback');
    const fallBackResponse = await caches.match(fallbackUrl);
    console.log('fallback resppnse', fallBackResponse);
    if (fallBackResponse) {
      return fallBackResponse;
    }
    throw new Response('Network Unavailable', {
      status: 408,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
//Fetch
self.addEventListener('fetch', (event) => {
  console.log('Service worker: Fetching');
  event.respondWith(
    getFromCacheFirst(event.request, '/SystemDesign/8.Offline/service-wroker/public/img9.jpeg')
  );
});
