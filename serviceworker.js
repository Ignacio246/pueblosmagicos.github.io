// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = [
    "/",
    "/index.html",
    "/acerca.html",
    "/artesanos.html",
    "/Culturas.html",
    "/huasca.html",
    "/huichapan.html",
    "/login.html",
    "/mineraldelchico.html",
    "/realdelmonte.html",
    "/registrarse.html",
    "/tecozautla.html",
    "/zempoala.html",
    "/zimapan.html",
    "/estilos.css",
    "/hola.css",
    "/aquamarine.css",
    "/app.js",
    "/serviceworker.js",
    "/imagenes/acueducto.jpg",
    "/imagenes/artesania.jpeg",
    "/imagenes/artesaniadehuichapan.jpg",
    "/imagenes/artesaniamineraldelchico.jpg",
    "/imagenes/artesaniasdehuasca.jpg",
    "/imagenes/artesaniatecozautla.jpg",
    "/imagenes/artesaniazempoala.jpg",
    "/imagenes/artesaniazimapan.jpeg",
    "/imagenes/balneariocaminoreal.jpg",
    "/imagenes/barbaco.jpeg",
    "/imagenes/barbacoa.jpg",
    "/imagenes/cañondelinfiernillo.jpg",
    "/imagenes/carboneras.jpg",
    "/imagenes/carnaval.jpg",
    "/imagenes/carnitas.jpg",
    "/imagenes/casagrande.jpeg",
    "/imagenes/Cecina.png",
    "/imagenes/cedral.jpg",
    "/imagenes/centrozimapan.jpg",
    "/imagenes/chalupas.jpeg",
    "/imagenes/chapitel3.jpg",
    "/imagenes/chicharron.jpg",
    "/imagenes/dunasrojas.jpg",
    "/imagenes/ecoturisticoaljibes.jpg",
    "/imagenes/enchiladasmineras.jpg",
    "/imagenes/exconvento.jpg",
    "/imagenes/festivaldelpaste.jpg",
    "/imagenes/Fondodepagina.jpg",
    "/imagenes/fondorealdelmonte.jpg",
    "/imagenes/geiser.jpg",
    "/imagenes/haciendasanmiguelregla.jpeg",
    "/imagenes/hidalgo.png",
    "/imagenes/huasca.jpg",
    "/imagenes/huichapan.jpg",
    "/imagenes/iglesiadesanjuanbautista.jpg",
    "/imagenes/iglesiaPurisimaConcepcion.jpg",
    "/imagenes/laguadalupana.jpg",
    "/imagenes/lasadjuntas.jpeg",
    "/imagenes/logoutec.png",
    "/imagenes/manantialesdetaxidho.jpg",
    "/imagenes/mariscos.jpeg",
    "/imagenes/minaacosta.jpg",
    "/imagenes/MinaSanAntonio01.jpg",
    "/imagenes/mineraldelchico.jpg",
    "/imagenes/mineraldelchicofondo.jpg",
    "/imagenes/mineraldelchicofondo2.jpg",
    "/imagenes/molerojo.jpg",
    "/imagenes/museodearqueología.jpeg",
    "/imagenes/museodelpaste.jpg",
    "/imagenes/museodemedicinalaboral.jpg",
    "/imagenes/museoduendes.jpg",
    "/imagenes/naranjete.jpg",
    "/imagenes/parqueecológicolossabinos.jpg",
    "/imagenes/parqueecoturísticobosquedelastruchas.jpg",
    "/imagenes/parqueecoturísticosaucillo.jpg",
    "/imagenes/parquenacionalelchico.jpg",
    "/imagenes/paseoporelcallejóndelosartistas.jpg",
    "/imagenes/paste.jpeg",
    "/imagenes/pasterealdelmonte.jpeg",
    "/imagenes/pinturasrupestresenbanzhá.jpeg",
    "/imagenes/pinturasrupestresenboye.jpeg",
    "/imagenes/plazaprincipal.jpg",
    "/imagenes/presazimapan.jpeg",
    "/imagenes/primasbasalticos.jpg",
    "/imagenes/prismas.jpg",
    "/imagenes/pueblofondo.jpg",
    "/imagenes/pueblosmagicosicono.png",
    "/imagenes/pulque.png",
    "/imagenes/realdelmonte.jpg",
    "/imagenes/relojmonumentaldetecozautla.jpg",
    "/imagenes/tachuela.jpg",
    "/imagenes/tamales.jpg",
    "/imagenes/tecozautla.jpg",
    "/imagenes/trucha.jpg",
    "/imagenes/truchamineraldelchico.jpg",
    "/imagenes/universidad.jpg",
    "/imagenes/verdolagas.jpg",
    "/imagenes/volarengobo.jpg",
    "/imagenes/ximbote.jpeg",
    "/imagenes/zempoala.jpg",
    "/imagenes/zimapan.jpg",
    "/imagenes/icons/icon-72x72.png",
    "/imagenes/icons/icon-512x512.png",
  ];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(precacheResources);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});
