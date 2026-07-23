const CACHE_NAME = "smart-tech-cache-v2";
const OFFLINE_URL = "/offline.html";

const PRECACHE_ASSETS = [
  OFFLINE_URL,
  "/manifest.json"
];

// Install Event - Precache offline assets & activate immediately
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up obsolete caches (e.g., smart-tech-cache-v1) and claim clients
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Allow client messages to trigger skipWaiting
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Fetch Event - Smart Caching Strategy
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ignore non-http or browser extension requests
  if (!url.protocol.startsWith("http")) return;

  // 1. Navigation Requests (HTML Pages) -> NETWORK FIRST
  if (
    event.request.mode === "navigate" ||
    (event.request.headers.get("accept") && event.request.headers.get("accept").includes("text/html"))
  ) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            return response;
          }
          return response;
        })
        .catch(() => {
          // Network failed (user is offline) -> Return offline fallback
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // 2. Next.js Immutable Static Assets (/_next/static/) -> CACHE FIRST
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // 3. Static Media / Assets (/gallery/, /manifest.json, images) -> NETWORK FIRST WITH CACHE FALLBACK
  if (
    url.pathname.startsWith("/gallery/") ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|json)$/i)
  ) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }
});
