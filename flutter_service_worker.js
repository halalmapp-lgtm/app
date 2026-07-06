'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6c232322dfa058893dc2f2075c931539",
"version.json": "cfdc9413ede4c9f790df45936e3be7ca",
"index.html": "1583340db621432cda3a02e4c8bc5877",
"/": "1583340db621432cda3a02e4c8bc5877",
"vercel.json": "3ce034f37a6661efc8073a99b87d2c87",
"main.dart.js": "5b33cb295c297deb7e6024c354c573f1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "3463d836d7dedf023e04415be011dd9c",
"icons/Icon-192.png": "c0a7a7de2f63f87c862cc8a09f932c24",
"icons/Icon-maskable-192.png": "c0a7a7de2f63f87c862cc8a09f932c24",
"icons/Icon-maskable-512.png": "451b817b86bd57562a0eb907bbea3574",
"icons/Icon-512.png": "451b817b86bd57562a0eb907bbea3574",
".github/workflows/deploy-app.yml": "78a951ea18efd31198bfe6833c8f88f3",
"manifest.json": "18cb9618e4e4ac1f87cc6faa2debd030",
".git/config": "de7c9f4651a160599d360bfd39137cc0",
".git/objects/0d/f771b6da5c37c415fdd18158f833dd4f373585": "7e91525e9fa1d9bfff13c1e76d9de414",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/73f46d09cba428394d72a3c30855dcfe4a3216": "7e0c54c743ab6ab7daadefbba24ac5ea",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b4/2008cae783b8947d6ffe1e7bfb8a4ac9dedadf": "d6827ab021f84e7a591de3c74be4e989",
".git/objects/bc/84a912c618b529d3d5fd4ddb174a80c05780aa": "eeaee188ae961c6b014b68a6745f28ed",
".git/objects/e2/94676d1639657fc1af8cb88e748ca68bf1a43d": "d653b938b29ab37aeb8236356ba4e0bb",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/a5c6b739de5e07ce3cdc6e6cb46ec2541a1b38": "db0d79a17f5168b7ed87e5dc93a3b119",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/76bd0de15ce037ae9e0d0b41ea48acdb8496e2": "257091523d5b9b15e7f4da0463d09321",
".git/objects/e4/3b0f988953ae3a84b00331d0ccf5f7d51cb3cf": "106f9f8f7e8a39d99259935974ba928a",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c1/a2573933405e6609f4492f50dfd61289ff7c97": "f13316b53204e32edb923b26d90a4a8f",
".git/objects/4e/b6e49af980bb3a92c4f4b4a1a80fe6b10389b9": "1b8420089b5d8043aa94f0e850865c8d",
".git/objects/18/eca2aaf33172c104b5fb25351dcd32da33d306": "ecc402fe7cd096a8d1ac361b54ac72d9",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/42/01e8ba34d56b4fc7dac0cd7a40f4886bf4c32d": "60282a289f79a3dfc3e8fd3fffac82bc",
".git/objects/28/740ef1829beb1bfabba882266069aa02a26a3b": "fb4b8aa99e436d6996f5363cc9dade69",
".git/objects/7b/d04123de06f1ae353c3342c4af45684c52cb3d": "34dfd4c773c52084bac9413f5a2c162d",
".git/objects/8a/520cea30a7c5fe8ea580eb38e161478c5b7d10": "bdca40043cca5aa1fe81b0c9234e7ee0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/91/f1b38857bceafdc0e05bbd37bae5988a92ebc1": "f3fd9b1f9e0015ee1ed5d51ec1f66d41",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/932aae8e418e10b22ae502ba133fcb21083d8a": "dcdbc08c79b7f14b02b76bf0fa85b4b9",
".git/objects/98/b129963c12fa8747acb1ab2e9ad7b1fcbba0a3": "07677aea03fd652ea484b9cda9ab73c0",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/52/66727adce48258e0a415d5042ea8eb2b4ec7f8": "c67e76c9cfe97cfc6ac1c39fe45da271",
".git/objects/0f/32683a980f1a03be6c50ec86c476b762c756e6": "ad0b33c4650dd2ac47e2204f8acfe44a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/86c23709b309123a20eabda3e1999dc87a37e5": "28a14208f2ca29bded5f4380155b79d8",
".git/objects/b8/4ec04c5804fc40621f554ef31ee136c842013f": "be74309eeaf0b86a6ceab68297eafbd5",
".git/objects/a8/182ca86a1e499cd355dd07857e06060a07c0bc": "a91f99e1e9dce5f5620776ef02f6c774",
".git/objects/a6/72607fd1f93aa65c8b2def4c50c1f061f830bf": "9e908bf5bba91468fcf4f53831f89b29",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/f8d043b77167565969566d540852703dbde838": "c7744dc766833e573e597119feed3e22",
".git/objects/c4/dd981dd61f598020d544321a8e308eee181c77": "a8d2151524c84b33558f5cc93066ef8f",
".git/objects/cd/3120df3ff718afd9d249d86b15ec656f4ee3ae": "abea9f43a1eb67fc2efc2ad02ba19b46",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/29264a39775cf8df21dfa82e83c0e430c734a1": "5193b75e86c399269416bae721bf5806",
".git/objects/f1/611f802ef7e79435d9d7ca772220f4a92235a2": "0bc9b86fcc6bc7869b8024c812293c12",
".git/objects/e0/ab57f7d9e142d068ccb2db9784d3ef604e82f1": "24b8b59819e013ed3a7a9d99d68d2bd0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/a46872f1b88b71dd1b6c34f0957e3744a001a6": "18c661e8514f9121041aaf59fb3a2871",
".git/objects/48/77c1e3025d799c72dd165da3765a0298e9427d": "7d48708cd3f215f1c5912dab91da7178",
".git/objects/24/c858ec8cc81a18bf1cec3610de8281b3914175": "675c17a8c55112bd864affc264171447",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/40/b693ad8c7e588ae7a4852024649fec0bec4b50": "73840fe239fccc43d6928cc8b2638ca8",
".git/objects/47/f352f3f30d7e7a2465b797699f14de12f82586": "cfe57a9481131b70162181f70e79047b",
".git/objects/78/371fd72de1f9a1ceb6a4d236704caec52ab69f": "ca3f03faa667f12d4db05663e962b59f",
".git/objects/7f/cbcd0c36ab2c1fb1871a9b1db188a218e49b7c": "5daccee71ab53e615d0bbc7624eacf7d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed8f8c4b822fb89a8517f6400673a5d9",
".git/logs/refs/heads/main": "ed8f8c4b822fb89a8517f6400673a5d9",
".git/logs/refs/remotes/origin/main": "e3ea041f41a976fccf17712e51b8afee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1867097b6bb99e37821ad88484fb5b31",
".git/refs/remotes/origin/main": "1867097b6bb99e37821ad88484fb5b31",
".git/index": "f16e6d0ae00a16699a9e174e92f6a8e9",
".git/COMMIT_EDITMSG": "6edd4635fdb07ecf644a157d07bf1bbd",
"assets/NOTICES": "dd2e89616a7358badca1aed3e9584a07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e8eaf48b880a1879cf5ea968103e0e4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/purchases_flutter/assets/web/purchases_js_hybrid_mappings.js": "53d53f8d40720504a758a8632fa603d3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "e5860c4616df5ec4268a3f9c8fd59db2",
"assets/fonts/MaterialIcons-Regular.otf": "3766a0b0c9f8f1429c8a0a89d01a9fa8",
"assets/assets/map_style_light_streets.json": "d55d98ff88f1bc462af675e8d90be75b",
"assets/assets/halalmapp-logo.png": "e3a0df8408d82abdedeb6bbf0f11dd57",
"assets/assets/map_style_dark_streets.json": "b084e87e88a103fdc3cbfa2b24ce2268",
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
"assets/assets/marker_glyphs/moon.svg": "99f709d8c328d8f3ca860c25666b0060",
"assets/assets/map_style_dark.json": "3b85330c6e3804202b26bd7504c1c2b8",
"assets/assets/map_style_light.json": "55ae5b3fed5682d7c5a16ea1a16b0748",
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
