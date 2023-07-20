if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((reg) => console.log('service worker registered', reg))
        .catch((err) => console.log('service worker not registered', err));
}
// <!-- scientific calculator v4.7.5 -->
// <!------------ D E V E L O P E D     B Y    P R A N A V     S I R S U F A L E -------------->