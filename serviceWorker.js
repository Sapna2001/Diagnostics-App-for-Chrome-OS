self.addEventListener("install",event => {
    console.log("Install");
    event.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./index.html","./src/styles.css","./SystemDiagnosticsManager.html",
                                 "./SystemState.html"])
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
}); 