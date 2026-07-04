const CACHE_NAME = "zoodb-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",

    "./css/estilos.css",

    "./js/app.js",
    "./js/datos.js",
    "./js/utils.js",
    "./js/ui.js",
    "./js/buscador.js",
    "./js/favoritos.js",
    "./js/comparador.js",
    "./js/quiz.js",
    "./js/glosario.js",
    "./js/graficos.js"

    // Agrega aquí las imágenes importantes si quieres que también funcionen sin internet.
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => response || fetch(event.request))

    );

});

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys =>

            Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }

                })

            )

        )

    );

});