self.addEventListener('install', function(e) {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', function(e) {
  // just allows passing through all requests normally for PWA to work
});