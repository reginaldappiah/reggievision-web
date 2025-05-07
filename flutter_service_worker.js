'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4f19409a69c3cadcbe5312d99fc418db",
"version.json": "44b21a2b2313bcaa43d13da8ae64f013",
"index.html": "7f3098104d8d75ffb8548960d8abce09",
"/": "7f3098104d8d75ffb8548960d8abce09",
"CNAME": "215b828e220949a30ae0db724c37798b",
"main.dart.js": "193057006b528fec28c26493f20db6c8",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4242e06e6ad0620a0e686ccdc936c28f",
".git/config": "c46f5472a1757b7b5defca9b2c44b6e0",
".git/objects/92/e5bf51851022d40a039456ddfc3fb0dfa519fa": "91b35c3ff1f09dca662a73833fc31588",
".git/objects/3e/8f1bdfe441249633d1eb227da7f90f4407a953": "5da91f3cde48208a2cf7e2dad6ba94d2",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "64c360caa9c76cbab202f0f37227ad05",
".git/objects/50/0683edcdfd6dbdf7a579a6090ef46ae7768ecb": "03f82ef1f4e5d76d103beb58978b27ef",
".git/objects/6f/77c27507f2328cf2b2a34c68d6d44cbe8cad7d": "741b16d2b806f40357a454522653d245",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "e105e618ebe72cd32bb8ffbede8c4bf6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "dc1d3b6ac68817e26c52a2b7aca98a10",
".git/objects/9e/722f5db5488ebcf59d735a6220157d9df0369c": "e6f58de44e3aeb4359f1540cbe53def3",
".git/objects/6a/d5a77f7028dd6c4fa9437dec0a3c39ef321754": "914143e124d780e1d3866e17e8f35c29",
".git/objects/35/93b2f180b8fafafdfb7d21f19a1ea77990d173": "b7bfc4941211ac7bf6f243b85e94dcdd",
".git/objects/69/d047e81dccf255dd3e9f07bce3989af4e97344": "ddbd31355fec2623926f0aaf4169ea0e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "c04d0bcbee109da1b68573e9237d1b84",
".git/objects/56/911d13103c3e5efc8a04164a4ee4ae926b9983": "3a410225b58640ad6ba7cdb70e223431",
".git/objects/51/ff8c06df0f28bc4bff797e87a4ce4ba3715250": "b87be28dc9af2ffa73d51a33678e3d93",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "24deb07a93d7e0dcc8e55b7be1f11989",
".git/objects/60/9d82e5e6e4b81c84d36f0735bd9a4caa153e3f": "d8eebc47655e8e64db130f3d272958bc",
".git/objects/60/f9c3a473a9c7ee290bdec3c299d242f6504081": "28c934c96142469d875972ac777d928f",
".git/objects/60/580efabc7e766f14082692fd8d247a0b83e69f": "6076636567e670e02b2da2ba81ecf2bd",
".git/objects/02/c84acd15aa0fb19314e907956b935f71c31429": "45db6b0bed517c6bb3a7d3accde4d852",
".git/objects/02/1df55f596c104584b0679ae39ac8e81740473e": "819fd2dc4c31a0560d9cb1f971fbf70d",
".git/objects/ad/3a446762cf0e0de561ae0f73daadf2b1391c77": "d796f433bcb58723ab5395132a378ebf",
".git/objects/bb/24b0a3b6e1f7f6cc3856b1dd6abf75058839d2": "476fc054273b69d1cd86fdc0839d99ac",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/d0/2413b71df8f822b2467a30515539c22c97d1ab": "858c286039e170b1710e6df902de6075",
".git/objects/b3/1eaaf43790570cb66e7a4208731fcb95ed3f7d": "ab482014032658cc7e660bdb1831ce3b",
".git/objects/a5/0f31213339a3b14bf4bce739b865c8c1a0c3bb": "e6530b1c31ec3c541d7750a9a890d0a8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e2/a52d83ac78c097ce94466914dea00394991027": "cc0bdee0c24fdfd99fb0e8b70effe3cb",
".git/objects/e2/58b0b19e3aecb08864fc6c282fcd4b1f35f59a": "fc47d4611366f301ba7955ea28784e13",
".git/objects/f4/b17c135aba31a156a4a293c6bb3d29ade52581": "3c351b879077af9b7d7a93f339db2264",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c9/793b5882893626d8b389fde4335b894aa0b3d5": "dbef156d82ce4e02e2e464355556a5bc",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "6d9279f777bb9f4a4d82d12aa6126867",
".git/objects/fc/c0f98deb5d11d2cd161c0b5fc756c9c46fd02a": "5487220fcf7313d7fbf1e756d460df34",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/07ff4be924c7bbc39c4e3cf8408953189b3177": "7ca2e5068582ce8e7575b73677dd79ce",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/e4/8559dc1ae4ac4e2d5eac64080a1311662ae8d9": "c13d1c8c16d73fd9a8249458db7c23e9",
".git/objects/20/77c954b85f47a067caac6bad64dc8cb3695ac0": "7a3f6e73d7449cd67797c2aa3d7c7779",
".git/objects/18/e052cbfabd4c7a445170fcf0fcc80109d0bd40": "a972d67f9f8f2f2381fa4fcc4403fe55",
".git/objects/4b/3cd27578e69b0d6b9e2488ebd01b9f3ebcf80c": "37be90cf231086e20fe345983d62b7a4",
".git/objects/11/ddc5781c517a50123159b72f192255a722f520": "78fd16930cb2d2932a80e7c67540cfc6",
".git/objects/7d/9fbd732c5e0e2a265df3e561b1b4781cb57567": "9bee578b48a70a86b3b554befb1e3d20",
".git/objects/42/0065d99da89771f8057aa0ab95fe222d43eb5e": "ed509f877799754325a2ff296ffbbad7",
".git/objects/80/129e4304b69f74bb63921cf122b423a491463f": "1514c5556ba54efbd66f92efc27b0014",
".git/objects/28/96f2705b7355d89c5daa93c8fe129b279d1817": "3666a3dfaa3d9af6f03abd85e0da7724",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "6db9ef87f25d1bcf0e7bea48b7fdf817",
".git/objects/8f/febe33bec1d82b7160db28fe351b1415780e0f": "01203cfc334a6d025448bde48cb32e74",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "c90089055a4f7117fb58f15dd50973a0",
".git/objects/4d/57d04e10721663b361b6f93cf881a57a8556ca": "071d29f799d70078ce99f49b03db4183",
".git/objects/44/dee89b790ed2a0565ca47bb75994668672eb85": "dbff1173110c92ce75ad870d1518d696",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "a285976a30d9d9853ec76d45237be835",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/4b3d4777f4444817ca4f00909ae36f9e440de3": "39dc2309cb00f62b4104aedbd2b8e847",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/9a/4ec4c18eb3795574040032ed742fac75a7421c": "df1789cac7f2c41a58def286cba31f82",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "abaee217f18e544d20dc0cdba473ddc5",
".git/objects/36/520f9ef8d1b23129e309873d998fc26c5c0cba": "8bdf72041dda8804751c19ebeefb8dbe",
".git/objects/91/75ea56dba0d200b49c3fcc3290f6d25f484d9b": "1436cbea09bc9519949d1540d94d77d9",
".git/objects/3a/6fb40081515f6158da868ff8986c3cb9273a63": "15a14a582052f606f0936691a65298df",
".git/objects/3a/d4802185ac22f3f880ac733c251ba98a5c638a": "28115512288350b9a14b52cfe1f9021c",
".git/objects/3f/d43d2ec94fa12d813c91e2a0f6e80f06dab0ce": "c37301c5de969cc1b8fe8b6e4b21cee3",
".git/objects/5e/0c37c189be6957c822a997e25e307b80ee079b": "5320d1286a3a34bc4e11df06ea761847",
".git/objects/37/a034988fe76445a29b18d2971716c03287103b": "c22bc3e087246a76885d897a9101a828",
".git/objects/08/894824028c7ffbc5276af35fd6849ba369315d": "c4e972355cae9310f3329418b90f9da7",
".git/objects/01/0d8f0811d350ee60a5c7231146841ba04667bd": "a58773708379b4e9a703bcd08d21ddb1",
".git/objects/06/58bb2a36dac5ae56da9be2c4ac2b3af81b94bb": "6ad50d8595bdb7b38e4442b3c03c88ef",
".git/objects/99/aa71aca6b5fea534b72c7e43e9d3831c26e912": "693890e6ad4e44990fa2f7990c4aff5e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/aa86956077891e67a098cf4de5b404212ea346": "e37848ef29e1de3692cbab7b0fdc8fd7",
".git/objects/ba/551a91bc0d895f4b7c6bd00d58c4c467908f8f": "5d31d068f171c157e2150798302ef1cd",
".git/objects/a0/33f7984a4e01df1941478653e6948c1dae93c7": "4c4f26572c98373c97e8d471066f2c2a",
".git/objects/a7/e5dca9fffe0850dcd8ad73398dfbede3bd2a61": "78d2cc001dadb716a5d3271f8953e61b",
".git/objects/b8/c741537969532c4114871c840ad31ea85affbe": "3b0f12223f7f5f0bd1223dff5b58b698",
".git/objects/dd/197e2f95cd7c4ab331f870cf70eebd38eb2f1e": "655a75a4aabab33e457e749e803bd723",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "6a4baf0ee5d7f24d01892e880c87e9b5",
".git/objects/a9/662458a6b158aba1ee4d81407137c086f8720d": "d235de1eccea46fb1778129c6ad195f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/9366503f654141e1da2369ab96be9363d2d886": "e673491405fd2c9dc3f80837a483b3ef",
".git/objects/a8/9c970d7bf7eddc2c4d2362ea0a124426ad2dd9": "c9819ba95ca423c4d8283ee9af2839ba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "a488dd5b768f3e95bb3ded676201c413",
".git/objects/ea/d17c05485713a1ebb9e47a114f157e4e45aaa3": "19bd4f5078592e97e802ebbbe7c76815",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "ff0540ff2ad01de40a8a51b854e31e72",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "bb2eac7ac7b6a9c500a94c9e6289e6ec",
".git/objects/f9/5b85c351c110e2831652fbf4cb6b286e9e703d": "6c782e6bfe0bf746e268dadd77209f4c",
".git/objects/e8/6887bf30ed01fc3e9c242d8593119e7139c98c": "cc681284f28f964ec2af506d1f1cb572",
".git/objects/ff/6c0b21fafc6cc73a9c3ccf3cbcc68df8fc7b78": "0a2a3d60e2a12b31ed5467412b4876b9",
".git/objects/c5/8e91d42529dcfc8d9b8cec7db25bd05f97ddbc": "81cda2a8b209f7c1fa19cb9ff4c40ec8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/cb/4241b3204c744425d25433ee4c9070cfa54e90": "593fb456688e4b26ac0a40402fb11be7",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "83351f335d88560f1b430e313ad3cb5f",
".git/objects/cb/b5628c48fad5e15a80988a9ebfe74d6e03db2f": "c6de2932d1cd92918d51aaa893de8e84",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/46/d5481dda73d87ecbfd28a19c4dcf7a18256164": "920b10db3f6f94a5117acbdab61ab3ed",
".git/objects/46/09f8466fcbdb1d7d58aa3fb26d8542a1b5285a": "afbdf623471341024b641b26f28d7c47",
".git/objects/2c/ecff4c9b1451700ae8f6398a705893a0c3f708": "c834cddc9f95ef89f9bfa9e859ba0a38",
".git/objects/79/81e2a568bc39d6ec81021ceab1951f6d8cf933": "cf3776038f9f42f444f7687ed2cdb0ed",
".git/objects/83/82ee1232776988929761a86d6193b013e755d1": "0ad98d4b02a51e6d6bf14b6a5040e3c4",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "b1ef66f3885813d266e0413975db0a56",
".git/objects/48/0ae603adf903d15fd7d65db235b31593e7f58a": "7ba400ab3e0f0a22785826e8c92c2ec4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "6dc767ec6498faa598b6dd7d00386498",
".git/objects/84/1e347aeeace4b179e3d652e04ef7890d53eae0": "36295ff30569d454398e86cc580b4ea2",
".git/objects/4f/5c8c41ad87d8b5d44afe38361a367f367f4c8e": "7ac934e5abdc5068a096976677398744",
".git/objects/4f/78f2c783cd21421aba344006f432acb75df1a5": "5b19a51039c3ba9ad0fa3c8a0db518b6",
".git/objects/8d/6b4cc2cda1f8c04082daf47feb59f554512575": "ad4f730435a1873e4f1858e5450b2033",
".git/objects/15/154ff633ed3604d663187216d982f195010cbf": "d7ff097785ef6f15048555ce2cadab6e",
".git/objects/85/bc7ca1c15b9ca6159e61a8585bd9df37f0955c": "13601399f9de504b15f1b05fd7a178f1",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "4cd8e95b87d7bb2b2c3e8979aff35223",
".git/objects/49/af542822260b511108778d11bfa9f2cea71cd9": "e3d94ce91843db58a4cfe7fe4b328ddf",
".git/objects/2b/49942809ddacb2ccd42baba5698a4d9687bc34": "f17a15d8a5c44cc731a846eb82155aef",
".git/objects/47/989047b8acc702db9613e3d32327e4369c3ac2": "5cb58ba8779edd8f6d24e3e2402bbc80",
".git/objects/7f/e1be049e96ba8aaad86e3f365c011580ee73d7": "a905b6b2664cdf8aa8251118c0e79256",
".git/objects/7f/3dcde8002698a1e06533e8f4131f07be2e3104": "ea0d0c7a5c3c70f7d635c3e9ac18a932",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bffe0b30cb9a5c967889f75378a21ccb",
".git/logs/refs/heads/main": "6ef295276a9fed29cb10615f57be049e",
".git/logs/refs/remotes/origin/main": "04bfda2581e80a92bf1b4d751cb7507a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
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
".git/refs/heads/main": "ed59d159b57196ba93816673e745ab03",
".git/refs/remotes/origin/main": "ed59d159b57196ba93816673e745ab03",
".git/index": "6c0bc63416942ca62b0605c998a2b978",
".git/COMMIT_EDITMSG": "5ffae234aab6f816ebd9fcc28edc2830",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "14c416789cf373a7ccf47410f4aa5d56",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
