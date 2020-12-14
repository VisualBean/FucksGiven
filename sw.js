self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fucksgiven').then(function(cache) {
     return cache.addAll([
       '/',
       '/favicon.ico',
       '/nope.html',
       '/index.html',
       '/scripts/app.js',
	     '/scripts/jquery-2.2.4.min.js'
     ]);
   })
 );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request));
});
