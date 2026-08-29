const CACHE = 'adawati-v8';
const BASE = '/my-tools-site';
const STATIC = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/style.css',
  BASE + '/i18n.js',
  BASE + '/manifest.json',
  BASE + '/icon-192.svg',
  BASE + '/icon-512.svg',
  BASE + '/bmi-calculator.html',
  BASE + '/diet-plan.html',
  BASE + '/currency-converter.html',
  BASE + '/loan-calculator.html',
  BASE + '/age-calculator.html',
  BASE + '/discount-calculator.html',
  BASE + '/tip-calculator.html',
  BASE + '/unit-converter.html',
  BASE + '/password-generator.html',
  BASE + '/word-counter.html',
  BASE + '/qr-generator.html',
  BASE + '/timezone-converter.html',
  BASE + '/random-number.html',
  BASE + '/stopwatch.html',
  BASE + '/about.html',
  BASE + '/contact.html',
  BASE + '/privacy.html',
  BASE + '/terms.html',
  BASE + '/vat-calculator.html',
  BASE + '/salary-calculator.html',
  BASE + '/end-of-service.html',
  BASE + '/hijri-converter.html',
  BASE + '/percentage-calculator.html',
  BASE + '/compound-interest.html',
  BASE + '/date-diff.html',
  BASE + '/image-compressor.html',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Network-first for live currency APIs
  if (url.hostname === 'open.er-api.com' || url.hostname === 'api.frankfurter.app' || url.hostname === 'api.exchangerate-api.com' || url.hostname === 'api.country.is') {
    e.respondWith(fetch(e.request).catch(() => new Response('{}', { headers: { 'Content-Type': 'application/json' } })));
    return;
  }
  // Network-first for CDN resources
  if (url.hostname === 'cdn.jsdelivr.net' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const fetchPromise = fetch(e.request).then(resp => { cache.put(e.request, resp.clone()); return resp; });
          return cached || fetchPromise;
        })
      )
    );
    return;
  }
  // Cache-first for everything else (static assets)
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
      if (resp.status === 200) {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return resp;
    }))
  );
});
