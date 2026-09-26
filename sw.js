/* Service worker de Yanapay Finanzas.
   Objetivo: que el sitio abra igual aunque no haya señal, después de la
   primera visita. Estrategia "cache-first": si ya está guardado, se
   muestra al toque; si no, se pide a la red y se guarda para la próxima.

   IMPORTANTE: si cambias archivos del sitio, sube también CACHE_NAME
   (por ejemplo a "yanapay-v2") para que los celulares descarguen la
   versión nueva en vez de quedarse con la guardada. */

const CACHE_NAME = "yanapay-v1";

const PRECACHE_URLS = [
  "./",
  "index.html",
  "ahorro-jugando.html",
  "evaluacion.html",
  "talleres.html",
  "estrategias.html",
  "css/base.css",
  "css/index.css",
  "css/juego.css",
  "css/talleres.css",
  "css/estrategias.css",
  "js/main.js",
  "js/juego.js",
  "js/evaluacion.js",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "icons/favicon-16.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req)
        .then((res) => {
          // Solo guardamos en caché archivos propios del sitio (no mapas,
          // no fuentes externas) que respondieron bien.
          if (req.url.startsWith(self.location.origin) && res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => {
          // Sin red y sin caché: si pedían una página, mostramos el inicio.
          if (req.mode === "navigate") return caches.match("index.html");
        });
    })
  );
});
