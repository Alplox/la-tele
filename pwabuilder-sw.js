const CACHE = 'v1';
const PRECACHE = [
  '/la-tele/', '/la-tele/index.html', '/la-tele/assets/css/style.css',
  '/la-tele/assets/js/main.js', '/la-tele/assets/js/canal.js', '/la-tele/assets/js/config.js',
  '/la-tele/assets/js/fetch.js', '/la-tele/assets/js/filtro.js', '/la-tele/assets/js/m3u-parser.js',
  '/la-tele/assets/js/modal.js', '/la-tele/assets/js/observer.js', '/la-tele/assets/js/overlay.js',
  '/la-tele/assets/js/ui-utils.js', '/la-tele/assets/js/videojs-lang.js',
  '/la-tele/site.webmanifest',
  '/la-tele/assets/favicon/apple-touch-icon.png', '/la-tele/assets/favicon/favicon-32x32.png',
  '/la-tele/assets/favicon/favicon-16x16.png', '/la-tele/assets/favicon/android-chrome-192x192.png',
  '/la-tele/assets/favicon/android-chrome-512x512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
});

self.addEventListener('fetch', e => {
  const { request: r } = e;
  if (!r.url.startsWith(self.location.origin)) return;
  if (r.destination === 'document') {
    e.respondWith(fetch(r).catch(() => caches.match(r)));
  } else {
    e.respondWith(
      caches.open(CACHE).then(c =>
        c.match(r).then(cached => {
          const fetched = fetch(r).then(res => { c.put(r, res.clone()); return res; }).catch(() => cached);
          return cached || fetched;
        })
      )
    );
  }
});

self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
