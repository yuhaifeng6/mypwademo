try {
    self.importScripts('cache.js')
    // success get CACHE
    console.log('success load cache list')
  } catch (exp) {
    console.log('no cache.js')
    var CACHE = []
  }

var appShellFiles = [
    '/'
]
var contentToCache = appShellFiles.concat(CACHE)

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('yhf-store').then(function (cache) {
            return cache.addAll(contentToCache)
        })
    )
})

self.addEventListener('fetch', function (e) {
    console.log(e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request)
        })
    )
})
  