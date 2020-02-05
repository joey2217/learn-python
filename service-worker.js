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
    "revision": "f3853b870679049cb71d0153d67d234b"
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
    "url": "assets/js/6.faf31a3b.js",
    "revision": "f351c6e2683ddb827f406986fcb411af"
  },
  {
    "url": "assets/js/7.690f37e7.js",
    "revision": "86bcec01a2d243b03a39e02ec52e3a81"
  },
  {
    "url": "assets/js/8.d123e3ea.js",
    "revision": "535a487510005588184b7ae618bdcd85"
  },
  {
    "url": "assets/js/app.5b466044.js",
    "revision": "030bd1ee6c5fe278cbc54e16eb2e017f"
  },
  {
    "url": "base/index.html",
    "revision": "1303cbd2380d8841e40233c1fc419dc6"
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
    "revision": "48fbc3a1ec6c74cc6b8ac5f333db2674"
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
