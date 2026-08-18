// Service Worker for Vini Amaral Portfolio & PWA
const CACHE_NAME = 'vini-pwa-cache-v1';
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/manifest.webmanifest',
  '/curriculo.html',
  '/curriculo-vini-amaral.html',
  '/eu.JPG',
  '/vini-amaral.jpg',
  '/foto.jpg',
  '/curriculo-vini-amaral.pdf',
  '/curriculo.pdf',
  '/icons/icon.svg',
  '/icons/icon-maskable.svg',
  '/favicon.svg'
];

// Install Event - Pre-cache core shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Pre-cache partial fail (normal during dev):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-While-Revalidate for fast loading and offline resilience
self.addEventListener('fetch', (event) => {
  // Only handle GET requests and non-API/non-websocket requests
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Ignore cross-origin non-cacheable schemes
  if (!url.protocol.startsWith('http')) return;

  // Stale-While-Revalidate Strategy
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback
          if (cachedResponse) return cachedResponse;
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('/index.html');
          }
        });

      return cachedResponse || fetchPromise;
    })
  );
});

// Listen to message from client to skip waiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
