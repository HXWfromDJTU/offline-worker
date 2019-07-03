
const cacheName = 'v2'
// Call Install Event 
self.addEventListener('install', (e) => {
    console.log('Service Worker : Install')

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: 正在缓存文件')
            })
            .then(() => {
                self.skipWaiting()
            })
    )
})


// Call Activated Event 
self.addEventListener('activated', e => {
    console.log('Service Worker : Activated')

    e.waitUntil(
        caches.keys().then(cacheName => {
            return Promise.all(
                cacheName.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: 清理旧的缓存')
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})


