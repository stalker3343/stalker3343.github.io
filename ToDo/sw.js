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
    "url": "css/style.css",
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
    "url": "images/icons/icon-128x128.png",
    "revision": "4f6607f41105e4764ab22c263e8dc85a"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "ef685a04faea7c419057823fe93b4154"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "fef006812fdb8388d44e8f3eff17b224"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "0c6522957583983e29a40271ecbc77ff"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "ff5edf118ed4d9dbc2009e1a7870d710"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "341fc92dacd0804a8fbe7f6147a5b81f"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "4c2e816d5e5344a73363a47252714c6b"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "f288fc71327bab2cd84c6b9e4a7cc689"
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
    "revision": "e9c52a84b8c3bdca4900fd51e5470261"
  },
  {
    "url": "js/ivenMob.js",
    "revision": "5f3fe84f0445fc4cefca1133c0e1e68b"
  },
  {
    "url": "js/script.js",
    "revision": "7b4fd68b45861470dc1c4d16d622e23d"
  },
  {
    "url": "manifest.json",
    "revision": "f3769bb1348a68e6a72e0efde47a383f"
  },
  {
    "url": "package.json",
    "revision": "fabbec1a100e6f674ef946e00c549aee"
  },
  {
    "url": "Выводы.txt",
    "revision": "0a8b7bc85a692f6e427c5339f72b4369"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});