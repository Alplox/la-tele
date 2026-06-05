importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const HTML_CACHE = "html";
const JS_CACHE = "javascript";
const STYLE_CACHE = "stylesheets";
const IMAGE_CACHE = "images";
const FONT_CACHE = "fonts";
const CACHE_VERSION = 'v1';

const PRECACHE_FILES = [
  { url: '/la-tele/', revision: CACHE_VERSION },
  { url: '/la-tele/index.html', revision: CACHE_VERSION },
  { url: '/la-tele/assets/css/style.css', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/main.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/canal.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/config.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/fetch.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/filtro.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/m3u-parser.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/modal.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/observer.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/overlay.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/ui-utils.js', revision: CACHE_VERSION },
  { url: '/la-tele/assets/js/videojs-lang.js', revision: CACHE_VERSION },
  { url: '/la-tele/site.webmanifest', revision: CACHE_VERSION },
  { url: '/la-tele/assets/favicon/apple-touch-icon.png', revision: CACHE_VERSION },
  { url: '/la-tele/assets/favicon/favicon-32x32.png', revision: CACHE_VERSION },
  { url: '/la-tele/assets/favicon/favicon-16x16.png', revision: CACHE_VERSION },
  { url: '/la-tele/assets/favicon/android-chrome-192x192.png', revision: CACHE_VERSION },
  { url: '/la-tele/assets/favicon/android-chrome-512x512.png', revision: CACHE_VERSION },
];

workbox.precaching.precacheAndRoute(PRECACHE_FILES);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'document',
  new workbox.strategies.NetworkFirst({
    cacheName: HTML_CACHE,
    networkTimeoutSeconds: 3,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'script' ||
    event.request.destination === 'worker',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: JS_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: STYLE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'image',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: IMAGE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 30,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'font',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: FONT_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  })
);

workbox.routing.setCatchHandler(({ event }) => {
  if (event.request.destination === 'document') {
    return caches.match('/la-tele/index.html');
  }
  return Response.error();
});

self.addEventListener('activate', (event) => {
  const expectedCaches = [HTML_CACHE, JS_CACHE, STYLE_CACHE, IMAGE_CACHE, FONT_CACHE,
    ...workbox.precaching.getCacheNamesForUpdate()];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!expectedCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
