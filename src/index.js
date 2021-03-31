if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js").then(registration => {
        console.log("Service Worker Registered");
    }).catch(error => {
        console.log("Service Worker registration failed!!!");
        console.log(error);
    })
}