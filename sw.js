/* Service worker (facultatif) : met la page en cache pour qu'elle s'ouvre sans réseau.
   Ne fonctionne qu'en HTTPS ou sur localhost. Aucune donnée de capture n'y passe. */
var CACHE = "capture-idees-v1";
var FICHIERS = ["./", "capture.html", "manifest.webmanifest", "icone-192.png", "icone-512.png"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FICHIERS); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(noms){
    return Promise.all(noms.filter(function(n){ return n !== CACHE; }).map(function(n){ return caches.delete(n); }));
  }).then(function(){ return self.clients.claim(); }));
});
/* Réseau d'abord (pour recevoir les mises à jour), cache en secours hors ligne. */
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(function(r){
    var copie = r.clone(); caches.open(CACHE).then(function(c){ c.put(e.request, copie); }); return r;
  }).catch(function(){ return caches.match(e.request).then(function(r){ return r || caches.match("capture.html"); }); }));
});
