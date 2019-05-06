/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */
console.log('Hello from service-worker.js');
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [{
    "url": "css/bootstrap.min.css",
    "revision": "9e0e10750bdba57eefa5ddb9212dd216"
  },
  {
    "url": "css/style.css?v=0.0.1",
    "revision": "1a17068ee478f485c00fe0a699d096dd"
  },
  {
    "url": "images/1259823837_02.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/324776.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "images/6802.jpg",
    "revision": "4a478a4650af41e3c5807f5ca400742e"
  },
  {
    "url": "images/7a47385a6725666fa6cf17c1d5c1849f.jpg",
    "revision": "e9008a4ff56690944c42df49caa0be99"
  },
  {
    "url": "images/black_an.jpg",
    "revision": "179b0ebf61bcfd0c60462d1eb355352b"
  },
  {
    "url": "images/fotopechat-fp-008.jpg",
    "revision": "04f52648a284b2b7ecb1b8cf663b710f"
  },
  {
    "url": "images/trash-solid.png",
    "revision": "525cb07302fa945b1becde7a074be6cf"
  },
  {
    "url": "images/trash-solid.svg",
    "revision": "a3e4c2f7c32ce9a7ad6fa8d381b9d9cf"
  },
  {
    "url": "index.html",
    "revision": "5f3d44ac2610ae115b2ed9c164e1cc71"
  },
  {
    "url": "js/ivenMob.js?v=0.0.1",
    "revision": "5f3fe84f0445fc4cefca1133c0e1e68b"
  },
  {
    "url": "js/script.js?v=0.0.1",
    "revision": "7b4fd68b45861470dc1c4d16d622e23d"
  },
  {
    "url": "Выводы.txt",
    "revision": "0a8b7bc85a692f6e427c5339f72b4369"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});