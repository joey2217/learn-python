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
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e7e23e681e15d39455298ad97539fa49"
  },
  {
    "url": "assets/css/0.styles.856a8525.css",
    "revision": "b8aeb62e1dec65160a674f5e9a08bb88"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.f0d2b61f.js",
    "revision": "409b07e7775cd499e18acc4e6bfe564c"
  },
  {
    "url": "assets/js/3.ec95c71a.js",
    "revision": "4d59b9a62aaeb37455ae893525275b71"
  },
  {
    "url": "assets/js/4.cdcd594a.js",
    "revision": "94ecc4945c2eca0b37183625a1e92675"
  },
  {
    "url": "assets/js/5.2366413d.js",
    "revision": "17fa11b6d7ad0471d9f7bd0d8623dfba"
  },
  {
    "url": "assets/js/6.b538576e.js",
    "revision": "1f43e92ce53757be8e8f1a438b5ee734"
  },
  {
    "url": "assets/js/7.cad8709e.js",
    "revision": "8b5f35d59c984c56b452aee575700b4c"
  },
  {
    "url": "assets/js/8.d123e3ea.js",
    "revision": "535a487510005588184b7ae618bdcd85"
  },
  {
    "url": "assets/js/app.d80f6e46.js",
    "revision": "7a99b73a63576a66e57a92932c2327ff"
  },
  {
    "url": "base/index.html",
    "revision": "a3ccbd041039d1f0a41a33bd59a959f5"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "ca409e056508397f469dcf365f208f09"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "a6fb4bfd252ae5c1dd65228849255801"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "0596cb4186430830bd1ada9f2dd9a485"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "ca409e056508397f469dcf365f208f09"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "ca409e056508397f469dcf365f208f09"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "0596cb4186430830bd1ada9f2dd9a485"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "0596cb4186430830bd1ada9f2dd9a485"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "97c1d56319aab5af7af83d320d17ff21"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "60245d5dfb8706b28a4c1256c065988b"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "ca409e056508397f469dcf365f208f09"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "ca409e056508397f469dcf365f208f09"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "c9d9ceb574d85297a258857693235076"
  },
  {
    "url": "index.html",
    "revision": "7496bc46f3ccb27e4b46ecbbc016a096"
  },
  {
    "url": "logo.png",
    "revision": "eda8c5831ea74ecd32e1d08ac2d925f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
