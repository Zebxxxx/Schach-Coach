self.addEventListener('install', e=>{
  e.waitUntil(caches.open('schach-coach-v1').then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./icon-512.png'])));
  self.skipWaiting();
});
self.addEventListener('activate', e=> self.clients.claim());
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request))); });