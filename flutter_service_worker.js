'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9adc3349eb93d62732a7be172cb59f6b",
"version.json": "c13d779f6295ef41637a68e247abc1f8",
"favicon.ico": "3c49542fe6de384372331ea82f541c9f",
"index.html": "3721f4d92672836fceb14e95c4b4b0a7",
"/": "3721f4d92672836fceb14e95c4b4b0a7",
"vercel.json": "3ce034f37a6661efc8073a99b87d2c87",
"main.dart.js": "7ec2ab4562c6379b43cb37c75ed08a43",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "4f8aec6a2fd299d196b877e1c4cadf6a",
"icons/Icon-192.png": "a985ef7062b1a89d8a258df9038249f3",
"icons/Icon-maskable-192.png": "a985ef7062b1a89d8a258df9038249f3",
"icons/Icon-maskable-512.png": "e789ff61465a9de99484400c903c032d",
"icons/Icon-512.png": "e789ff61465a9de99484400c903c032d",
"manifest.json": "6b353750516026c34907fbc5e989deb5",
"assets/NOTICES": "a93e275b54fc5b632971d295f530e785",
"assets/FontManifest.json": "1403b544d89405b6964f308c351f50f0",
"assets/AssetManifest.bin.json": "5c0bbef324e4558ed6b4e212ee7d2332",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/purchases_flutter/assets/web/purchases_js_hybrid_mappings.js": "36be330063c10ff0aa2caaafa352ea9e",
"assets/packages/flutter_local_notifications_web/web/notifications_service_worker.js": "087634de8a8c1c49d00bcd212bf7feb4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "a8ef3f46e3ac41637d90838123ecc77b",
"assets/fonts/MaterialIcons-Regular.otf": "ad3f671f2a1ce4312aaac07d156e51bc",
"assets/assets/halalmapp-logo2-green.png": "1e9a6aceaa4b9de77e737c6b43c8fd60",
"assets/assets/halalmapp-logo2-green-ig-profile-preview.png": "f3672cab73a23cfad7bfd1d82f4ab942",
"assets/assets/halalmapp-marker-logo-flat.png": "9e02e88ce6181f0f36e1538790f8ec89",
"assets/assets/halalmapp-logo-green-badge.png": "5541130dd30cdd042ee203f65ab72088",
"assets/assets/splash/crescent.svg": "6d12d031c03d4b213a72b2f7f4fcb029",
"assets/assets/splash/forknknife.svg": "888f0c4e35828b1c23bc551e4dd86fce",
"assets/assets/splash/marker.svg": "4a38a9edee96229a49cc463cecc0797f",
"assets/assets/halalmapp-logo2-comparison.png": "d11bb611be4b1fb500aeae0c4ed954c1",
"assets/assets/halalmapp-logo2-navy.png": "a50d5b2b48627ea8ca695105eb211896",
"assets/assets/map_style_light_streets.json": "8bfca8f543bd49d5b58c3fff9b29e9a3",
"assets/assets/halalmapp-logo2-navy-wordmark.png": "a8fad1c02d3a4594df00242347528313",
"assets/assets/halalmapp-logo2-green-dark-preview.png": "388df640892aa4437ced2e8fc507ff74",
"assets/assets/halalmapp-logo2-navy-wordmark-ig-preview.png": "de3d8fd1fef6feb0a7a8502dde608165",
"assets/assets/halalmapp-logo-v2.png": "0ab798a0bee521222bcd2eaf2deb84bf",
"assets/assets/halalmapp-marker-logo-dark-preview.png": "ac552ea7c2de7ea6529e8348a0a33e54",
"assets/assets/halalmapp-logo2-navy-transparent.png": "bc5c3babde64a494a0fdc9b3246fde51",
"assets/assets/halalmapp-logo2-green-transparent.png": "b67ea925cc1407d840f49b74573520d6",
"assets/assets/halalmapp-logo-v3.png": "3fdc401e6c9eea63002bf1a7ae75c68b",
"assets/assets/halalmapp-logo-v7.png": "9dca161efca77da80289751af852025a",
"assets/assets/halalmapp-logo-plate-pin.png": "b93f25ff6bf5b31f4729e6612ba19f9a",
"assets/assets/halalmapp-logo-v6.png": "c1ec2e3fe6bd9f08b5a3af738687cd86",
"assets/assets/halalmapp-logo-v4.png": "f2de03847a534353461085c0b01bab5e",
"assets/assets/halalmapp-marker-logo.png": "434d748e7e9fd694bd8fcdf77a3b8333",
"assets/assets/halalmapp-logo-v5.png": "103b04aa28225378accbcbe8680d63d5",
"assets/assets/halalmapp-logo-v8.png": "fe460bfd39677c49f994f579b532efac",
"assets/assets/halalmapp-logo2-transparency-check.png": "bdb87a2e278a443eadb70eb8a4bf6d68",
"assets/assets/halalmapp-logo.png": "e3a0df8408d82abdedeb6bbf0f11dd57",
"assets/assets/halalmapp-logo-v9.png": "f5bbfffd9ce7019335081af7a1049c35",
"assets/assets/map_style_dark_streets.json": "88a94726f89e93cc0cfe44e6fc9c54e0",
"assets/assets/halalmapp-logo2-navy-flat.png": "ca23dd8037bee4c2ef63a342cff0541f",
"assets/assets/halalmapp-logo2-navy-ig-profile-preview.png": "676a11c31a0ab8fdae4e3eaad55b90f3",
"assets/assets/halalmapp-logo-utensil-pin.png": "71f44a5acc07f8ff65c7ab7b86bc8a66",
"assets/assets/marker_glyphs/meat.svg": "7e0916e94e00fe6b1f3dfbd6b6900968",
"assets/assets/marker_glyphs/beef.svg": "b16c6fe13687baecedd1f22d612bdf43",
"assets/assets/marker_glyphs/croissant.svg": "714efd5f22b12951dc0450996fd895f8",
"assets/assets/marker_glyphs/hamburger.svg": "ec53999548daefc1c835742b6b774c19",
"assets/assets/marker_glyphs/ice-cream-cone.svg": "22b9f071d9441e2d7f6a2cb9e203d964",
"assets/assets/marker_glyphs/coffee.svg": "7ed17b5b42292b5e9cb971d63410524a",
"assets/assets/marker_glyphs/soup.svg": "41d3c43f400656eb534a48b76494a412",
"assets/assets/marker_glyphs/fish.svg": "5c084b3e9dc40feb5baea07a6d585a0c",
"assets/assets/marker_glyphs/onigiri.svg": "184da015b131074569f6d26a881ab49a",
"assets/assets/marker_glyphs/truck.svg": "7a2cc074fc0970547cf209e84c47c0f9",
"assets/assets/marker_glyphs/pizza.svg": "0d4fc3e7ef479a2a981091e381e3ac9a",
"assets/assets/marker_glyphs/bowl-chopsticks.svg": "33d28c7340b661d6d47573c8906e9600",
"assets/assets/marker_glyphs/flame.svg": "44bb86010f0bec4366a1ca316af1b38a",
"assets/assets/marker_glyphs/utensils-crossed.svg": "f7c7f327180fad14119326d964d3ae88",
"assets/assets/marker_glyphs/moon.svg": "71f2e04ebcca09c6651a3633b39c0863",
"assets/assets/halalmapp-logo2-green-ig-profile.png": "e0b1a7dcb25419a6164389fce10dd745",
"assets/assets/halalmapp-logo2-green-flat.png": "e73fa2fea91e92fd4a395baf6d5e7840",
"assets/assets/map_style_dark.json": "c939c8357efde72f973e0e2ceb0438c7",
"assets/assets/halalmapp-logo2-green-wordmark-ig-preview.png": "70fb4b4b5e99e9c9e7187f4a3e710407",
"assets/assets/halalmapp-logo-plate-crescent.png": "0f36aa7de6c8bbfd8a1fc36b294117e6",
"assets/assets/fonts/Amiri-Bold.ttf": "9d358a17fee722a979ee2f314e342937",
"assets/assets/fonts/Amiri-Regular.ttf": "ec11e84334894cf790512622f57e3190",
"assets/assets/halalmapp-logo2-navy-dark-preview.png": "971480d60c69f1cd227220824f26bd0f",
"assets/assets/halalmapp-logo2-navy-ig-profile.png": "9b397799ea9c850d9e4a781337e80d54",
"assets/assets/map_style_light.json": "a8576a1ad1d31b22433a516144079dfd",
"assets/assets/halalmapp-logo-green-pin.png": "0b6a6550b46f2ae6164471d25f602c9d",
"assets/assets/halalmapp-logo2-green-wordmark.png": "304d1af253a9981115baed41db919fad",
"assets/assets/halalmapp-logo2-wordmark-check.png": "f9de7f56b0768f69a9cf60c9ce255741",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
