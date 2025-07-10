self.addEventListener('install', event => {
    console.log('[ServiceWorker] Installed');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    console.log('[ServiceWorker] Activated');
  });
  
  self.addEventListener('fetch', event => {
    console.log('[ServiceWorker] Fetching:', event.request.url);
    event.respondWith(fetch(event.request));
  });