// Make sure service-worker supported
if ('service-worker' in navigator) {
    console.log('You have service-worker supported')
    // listen the 'load' event
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_cached_pages.js')
            .then(reg => {
                console.log('service worker is registedred')
            })
            .catch(e => {
                console.log('service-worker hace occured an error' + e.message)
            })
    })
}