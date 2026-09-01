'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9d7699782f17272a67d3ea591988f4bd",
"version.json": "0bc7758b4b4ce9e708f9bce07b1e919a",
"favicon.ico": "3c49542fe6de384372331ea82f541c9f",
"index.html": "d04cccbfb37905e62dc60a3d1ffe2273",
"/": "d04cccbfb37905e62dc60a3d1ffe2273",
"vercel.json": "3ce034f37a6661efc8073a99b87d2c87",
"main.dart.js": "ead6731412cc5ca90a763b39d896387a",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "4f8aec6a2fd299d196b877e1c4cadf6a",
"icons/Icon-192.png": "a985ef7062b1a89d8a258df9038249f3",
"icons/Icon-maskable-192.png": "a985ef7062b1a89d8a258df9038249f3",
"icons/Icon-maskable-512.png": "e789ff61465a9de99484400c903c032d",
"icons/Icon-512.png": "e789ff61465a9de99484400c903c032d",
".github/workflows/deploy-app.yml": "78a951ea18efd31198bfe6833c8f88f3",
"manifest.json": "6b353750516026c34907fbc5e989deb5",
".git/ORIG_HEAD": "a936d7d0915748eafc7f637f6c8afc5f",
".git/config": "de7c9f4651a160599d360bfd39137cc0",
".git/objects/0d/f771b6da5c37c415fdd18158f833dd4f373585": "7e91525e9fa1d9bfff13c1e76d9de414",
".git/objects/95/83dfc8919f87e15622ba871ef4cad40c5f97f9": "153b71fea51b7cc83fa0653f09774f5f",
".git/objects/95/ac1b7070d2b734062ac3a1f51347c453adabdb": "3409c8400c662b6e74fcd19c7f22a15d",
".git/objects/92/12f4646692177b205499153ea5127badcc8821": "16f36f41eaa9ac5ab21dc2a06860dbce",
".git/objects/50/be69c8e278e3f86dad12a048cea83055d4c5aa": "16b25a197528658cfdf7719178c04a43",
".git/objects/50/2c78a3fee4eebf49cd513787a27d3f4ffcb000": "9fccba2593f16d14e016b164df35be43",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/57/76be6f910af6167ece5583b56f97594b435688": "9e827ca74a8fafddf9b31d61a3f98bcc",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/8d04b6331b0412d6433832d585652af0d1a7dd": "302073d434fec1de71da15cebc7cca9f",
".git/objects/6f/8fe1e11ea6fdabf46b04adfa0f8dff981b5ec0": "5a0ee56cf90479a23965d260ead7a516",
".git/objects/03/f1a88d120d9e819f82d7c0445c82962c55f41b": "aa0a477dcb23edae9ca0561275038235",
".git/objects/9b/006ba7292f01c884b5fcd5a299fb5666e03b2f": "362101c9bc10b262b578e8f80ed89623",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/73f46d09cba428394d72a3c30855dcfe4a3216": "7e0c54c743ab6ab7daadefbba24ac5ea",
".git/objects/a3/3e433d6dd63118451de491c051b5f671e2e473": "076f5448c31c1089eff5e586f70f984f",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/be/eebcf015a42f895626325bfc2955fdcf244236": "62f3121f5729e479572f6bdeeded23c7",
".git/objects/da/88bdca27e0777094d45343b3dd45c0ab79ac51": "3101cfc956d2ef5fa9891ef7ec48e5e7",
".git/objects/b4/2008cae783b8947d6ffe1e7bfb8a4ac9dedadf": "d6827ab021f84e7a591de3c74be4e989",
".git/objects/a5/cf7bd49b5548abf6560fd5cc63a828225027dd": "5b5d5d48236acc168c93fe03bca35d03",
".git/objects/d6/351a96f8df00df98541439af207c844c5374ab": "f0139c187cb8a629d29b3a28fc67ebbe",
".git/objects/bc/84a912c618b529d3d5fd4ddb174a80c05780aa": "eeaee188ae961c6b014b68a6745f28ed",
".git/objects/d8/a1eb3f7ae3d6283ff5209e3db55b5d3b74c15a": "7242ff715867e8d76c3f2cb693f72e7a",
".git/objects/e2/94676d1639657fc1af8cb88e748ca68bf1a43d": "d653b938b29ab37aeb8236356ba4e0bb",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/a5c6b739de5e07ce3cdc6e6cb46ec2541a1b38": "db0d79a17f5168b7ed87e5dc93a3b119",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/9ee8ff78116e5fbf8d54d9210aa1046280809e": "2df47aae8971dc20c8f587b8c2b64957",
".git/objects/ca/76bd0de15ce037ae9e0d0b41ea48acdb8496e2": "257091523d5b9b15e7f4da0463d09321",
".git/objects/e4/3b0f988953ae3a84b00331d0ccf5f7d51cb3cf": "106f9f8f7e8a39d99259935974ba928a",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ed/348a05167aadea43d485d719e1c9225ef4ee1e": "1c34106085affbcaf159306a9b21f6a7",
".git/objects/c1/a2573933405e6609f4492f50dfd61289ff7c97": "f13316b53204e32edb923b26d90a4a8f",
".git/objects/4e/5590d9c34ff5043f43d3534d6a50d82c0668bf": "85f2c4ab56324b849d511796d81e3afb",
".git/objects/4e/b6e49af980bb3a92c4f4b4a1a80fe6b10389b9": "1b8420089b5d8043aa94f0e850865c8d",
".git/objects/18/00e66a7ee8dc0e9250b9637533f158e0169fb2": "729b69fa48c22ee6696e9e29c9ae0432",
".git/objects/18/eca2aaf33172c104b5fb25351dcd32da33d306": "ecc402fe7cd096a8d1ac361b54ac72d9",
".git/objects/27/6f82bf6935a74ae1c2c75243626d118a509808": "92623312b77005db8345b2c57143c0b2",
".git/objects/pack/pack-fb6e65606421690b84b9fd19fca0b9026703d3bb.idx": "412cba3c6065cd16d3d1f260ea132aaa",
".git/objects/pack/pack-fb6e65606421690b84b9fd19fca0b9026703d3bb.pack": "328414986823c0646301757787a7ff03",
".git/objects/pack/pack-fb6e65606421690b84b9fd19fca0b9026703d3bb.rev": "e4f16c9aff9afc65dd848a181ce2f77e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/42/01e8ba34d56b4fc7dac0cd7a40f4886bf4c32d": "60282a289f79a3dfc3e8fd3fffac82bc",
".git/objects/74/eaec10a83b786e1208008ac5b72f36f956d791": "9744e252244e10f2860fa78888bfa15c",
".git/objects/28/740ef1829beb1bfabba882266069aa02a26a3b": "fb4b8aa99e436d6996f5363cc9dade69",
".git/objects/7b/d04123de06f1ae353c3342c4af45684c52cb3d": "34dfd4c773c52084bac9413f5a2c162d",
".git/objects/8a/520cea30a7c5fe8ea580eb38e161478c5b7d10": "bdca40043cca5aa1fe81b0c9234e7ee0",
".git/objects/2a/5ca97bc3a42eed9d783f41cd4c3ba1115c6fc6": "23fe08d3ed3a62d1fd849d818fa6e33f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/2ff2af45e72cec5544f840cb44358dbbfb0dd7": "da82fa215f73f1a65fe351d2d2222bb4",
".git/objects/36/9167d853c46cac7d92d6bee4c13136b15a7998": "0d3b8c417795bf2959aefd8db246fed6",
".git/objects/91/f1b38857bceafdc0e05bbd37bae5988a92ebc1": "f3fd9b1f9e0015ee1ed5d51ec1f66d41",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/932aae8e418e10b22ae502ba133fcb21083d8a": "dcdbc08c79b7f14b02b76bf0fa85b4b9",
".git/objects/98/b129963c12fa8747acb1ab2e9ad7b1fcbba0a3": "07677aea03fd652ea484b9cda9ab73c0",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/52/66727adce48258e0a415d5042ea8eb2b4ec7f8": "c67e76c9cfe97cfc6ac1c39fe45da271",
".git/objects/97/f1b37bfe088f5a6cf19e75610f7b499c3dcd7f": "ca5d675641650e9852ba1c5461d98762",
".git/objects/0f/32683a980f1a03be6c50ec86c476b762c756e6": "ad0b33c4650dd2ac47e2204f8acfe44a",
".git/objects/bf/3969475616773d8fc4f2dd77f0b68ce02a7b5d": "7637e3bada554110cacc3626774b9bfe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/86c23709b309123a20eabda3e1999dc87a37e5": "28a14208f2ca29bded5f4380155b79d8",
".git/objects/b8/4ec04c5804fc40621f554ef31ee136c842013f": "be74309eeaf0b86a6ceab68297eafbd5",
".git/objects/d5/63047f3e1154d5e3ad8da21f9d3a45e4edb3d8": "d39fb8d8f2b644c20c106c5e8171bdaf",
".git/objects/a8/182ca86a1e499cd355dd07857e06060a07c0bc": "a91f99e1e9dce5f5620776ef02f6c774",
".git/objects/a6/72607fd1f93aa65c8b2def4c50c1f061f830bf": "9e908bf5bba91468fcf4f53831f89b29",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/f8d043b77167565969566d540852703dbde838": "c7744dc766833e573e597119feed3e22",
".git/objects/a1/567674ce3556ec8bd5f14d54111f0f7c7fd307": "3341a17451f1eed01de998b01354e925",
".git/objects/c4/dd981dd61f598020d544321a8e308eee181c77": "a8d2151524c84b33558f5cc93066ef8f",
".git/objects/cd/3120df3ff718afd9d249d86b15ec656f4ee3ae": "abea9f43a1eb67fc2efc2ad02ba19b46",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/fa/704a6331c8fe1fc0fd8052f995f39cf59a6436": "6019f315ac4c18cc2ddb728f485e8a39",
".git/objects/c5/53763c701fb056fcf9d12eea7bdf093ff2b688": "100aac312ebff7b90cfc0964d98e5847",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/29264a39775cf8df21dfa82e83c0e430c734a1": "5193b75e86c399269416bae721bf5806",
".git/objects/f1/611f802ef7e79435d9d7ca772220f4a92235a2": "0bc9b86fcc6bc7869b8024c812293c12",
".git/objects/e7/169214e322aef8db11797a1c9030ce6e6b10f9": "53070f796599d5f78218584f2f90d7c7",
".git/objects/f8/f63aa5c45abc131599e96b19a4bd0d29f3fd21": "c9ec41921e657d7668fdd8691eb88da2",
".git/objects/e0/ab57f7d9e142d068ccb2db9784d3ef604e82f1": "24b8b59819e013ed3a7a9d99d68d2bd0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d65f6a0b3a29b11b534eaa6598ff2ccbc0f6a2": "189412e7e9320f862b99fb1c6d93d189",
".git/objects/79/a46872f1b88b71dd1b6c34f0957e3744a001a6": "18c661e8514f9121041aaf59fb3a2871",
".git/objects/41/134c8cff14959820f46f34833b4a0df26f4c5f": "8984858b35a2c5a63d381585fcba7148",
".git/objects/48/77c1e3025d799c72dd165da3765a0298e9427d": "7d48708cd3f215f1c5912dab91da7178",
".git/objects/24/c858ec8cc81a18bf1cec3610de8281b3914175": "675c17a8c55112bd864affc264171447",
".git/objects/12/1ed5409548a24a95bdaa02feed6339962efe7d": "9eb34ba29edb7ad198dea48c3b20bf6a",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/641c91f32d0062378b14197f1bc180389da048": "ef40326535546b65466a88560394ce0f",
".git/objects/1c/1a45abeeea775d0df385dddf4cab200dc19f4d": "8d123f7fb3fea77cad813affd1d63d37",
".git/objects/40/b693ad8c7e588ae7a4852024649fec0bec4b50": "73840fe239fccc43d6928cc8b2638ca8",
".git/objects/47/f352f3f30d7e7a2465b797699f14de12f82586": "cfe57a9481131b70162181f70e79047b",
".git/objects/78/371fd72de1f9a1ceb6a4d236704caec52ab69f": "ca3f03faa667f12d4db05663e962b59f",
".git/objects/7f/cbcd0c36ab2c1fb1871a9b1db188a218e49b7c": "5daccee71ab53e615d0bbc7624eacf7d",
".git/objects/7a/5511256f566aaeb0779a2c09d321b19686b54c": "7ac478f77e00f2f14e418fc7271de398",
".git/objects/25/2cfe9cae21f40a16ada8f6a73adf4bf3b33ae9": "42af0e42e673dfc67eacfae56361cbee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "47d7fe9301553a99c5fef4e33b9129c3",
".git/logs/refs/heads/main": "e9483bf205353600d1e26a59683e8f54",
".git/logs/refs/remotes/origin/HEAD": "c5fb7b8070c1ec9bcc18587b33c47304",
".git/logs/refs/remotes/origin/main": "e25f4576090abfd4d4e977714c8a9f5c",
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
".git/refs/heads/main": "07ef80707184d5116773fe43de8960bc",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "07ef80707184d5116773fe43de8960bc",
".git/index": "f8d403b152b85bdc86da7ed5180a2dbc",
".git/COMMIT_EDITMSG": "6320096409aded571678b669513d2c70",
".git/FETCH_HEAD": "e82cbc39fd4920d6970f119664834570",
"assets/NOTICES": "ff06aafb8eeea853cb17d7a32770819c",
"assets/FontManifest.json": "1403b544d89405b6964f308c351f50f0",
"assets/AssetManifest.bin.json": "5c0bbef324e4558ed6b4e212ee7d2332",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/purchases_flutter/assets/web/purchases_js_hybrid_mappings.js": "53d53f8d40720504a758a8632fa603d3",
"assets/packages/flutter_local_notifications_web/web/notifications_service_worker.js": "087634de8a8c1c49d00bcd212bf7feb4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "a8ef3f46e3ac41637d90838123ecc77b",
"assets/fonts/MaterialIcons-Regular.otf": "64397d703dee6c994ff47f2188a00deb",
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
