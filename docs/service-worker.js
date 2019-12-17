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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4734700e39ce15320dfe2d86f57ae367"
  },
  {
    "url": "assets/css/0.styles.e2fe0995.css",
    "revision": "73e89ba503802f636e5ad657da598a9e"
  },
  {
    "url": "assets/js/2.2a1bd3c5.js",
    "revision": "c9b889dd988ef2375199a70ccf583e2b"
  },
  {
    "url": "assets/js/3.93d76b80.js",
    "revision": "f1f4927e3b6bde91efbbe8e801a2e927"
  },
  {
    "url": "assets/js/4.32f5350a.js",
    "revision": "3a1b77dab9c502c9d284ef5c6f4773f9"
  },
  {
    "url": "assets/js/5.fb31189b.js",
    "revision": "2553c19a40dce94574705071bab1023c"
  },
  {
    "url": "assets/js/app.613042d2.js",
    "revision": "0afd04ef1f0a1ec31b0726ccb3ab8011"
  },
  {
    "url": "index.html",
    "revision": "2fce6e833d087423898fb55d7b07ca4f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
