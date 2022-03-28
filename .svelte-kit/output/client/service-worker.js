const timestamp = 1647156892844;
const build = [
  "/_app/start-b6a591d0.js",
  "/_app/pages/__layout.svelte-31f91b2d.js",
  "/_app/assets/pages/__layout.svelte-b6adefe3.css",
  "/_app/error.svelte-b5550679.js",
  "/_app/pages/index.svelte-c8a8cc0a.js",
  "/_app/pages/Legal and Constitutional Matters/__layout.svelte-bf9075ff.js",
  "/_app/pages/Legal and Constitutional Matters/index.svelte-b5723b5a.js",
  "/_app/pages/Functions/__layout.svelte-c22d6533.js",
  "/_app/assets/pages/Functions/__layout.svelte-45d8fac8.css",
  "/_app/pages/Functions/index.svelte-16f77273.js",
  "/_app/pages/Functions/bitmask_prime_generator.svelte-853cd214.js",
  "/_app/pages/Functions/Binary_Operations/__layout.svelte-e9894232.js",
  "/_app/assets/pages/Functions/Binary_Operations/__layout.svelte-a90709b6.css",
  "/_app/pages/Functions/Binary_Operations/index.svelte-4adeee3c.js",
  "/_app/pages/Functions/Binary_Operations/binary_arithmetic.svelte-28fb910d.js",
  "/_app/pages/Functions/bitwise_primes.svelte-8177893e.js",
  "/_app/pages/Functions/malfunction.svelte-1fd4d436.js",
  "/_app/pages/Functions/functional.svelte-c9064eaa.js",
  "/_app/pages/Functions/Quadratic.svelte-435bcaae.js",
  "/_app/pages/Functions/factors.svelte-aec24369.js",
  "/_app/assets/pages/Functions/factors.svelte-55088df6.css",
  "/_app/pages/Functions/haskell.svelte-30a42c60.js",
  "/_app/assets/Button.svelte_svelte_type_style_lang-8dd3bd33.css",
  "/_app/pages/Functions/Monads/__layout.svelte-880bf17c.js",
  "/_app/assets/pages/Functions/Monads/__layout.svelte-ed3bdd87.css",
  "/_app/pages/Functions/Monads/index.svelte-6464b3db.js",
  "/_app/pages/Functions/Monads/Promises_Monad.svelte-0a212882.js",
  "/_app/assets/pages/Functions/Monads/Promises_Monad.svelte-61b9bbc2.css",
  "/_app/pages/Functions/Monads/Async_monad.svelte-e591c2ea.js",
  "/_app/pages/Functions/Monads/ObjectMonad.svelte-d0e5855d.js",
  "/_app/pages/Functions/Monads/Button.svelte-e5f85693.js",
  "/_app/assets/Button.svelte_svelte_type_style_lang-63f25223.css",
  "/_app/pages/Functions/Monads/Monad0.svelte-89c4fbd9.js",
  "/_app/assets/pages/Functions/Monads/Monad0.svelte-a66a1f9f.css",
  "/_app/pages/Functions/Monads/Monad3.svelte-05335dee.js",
  "/_app/pages/Functions/Monads/Monad.svelte-1f05996a.js",
  "/_app/pages/Functions/Monads/game.svelte-7e53b39a.js",
  "/_app/assets/pages/Functions/Monads/game.svelte-e6dee2aa.css",
  "/_app/pages/Functions/proxy.svelte-691dd5fb.js",
  "/_app/assets/pages/Functions/proxy.svelte-f1322b8c.css",
  "/_app/pages/Functions/score.svelte-eda4d105.js",
  "/_app/pages/Functions/code.svelte-42791cb2.js",
  "/_app/pages/Functions/time.svelte-664b0c7f.js",
  "/_app/assets/pages/Functions/time.svelte-eb38a1e9.css",
  "/_app/pages/Grammar/__layout.svelte-91b0ff6b.js",
  "/_app/pages/Grammar/index.svelte-552f9955.js",
  "/_app/pages/Grammar/Niether of us (has or have).svelte-392e778e.js",
  "/_app/pages/Mahjong/__layout.svelte-67e84b7b.js",
  "/_app/assets/pages/Law/__layout.svelte-68f6d88a.css",
  "/_app/pages/Mahjong/index.svelte-f3049e2d.js",
  "/_app/pages/Mahjong/terms.svelte-28ed7b2e.js",
  "/_app/pages/Mahjong/time.svelte-8c2d04f6.js",
  "/_app/assets/pages/Mahjong/time.svelte-1655e8b9.css",
  "/_app/pages/Mahjong/yaku.svelte-8ce513b2.js",
  "/_app/assets/pages/Mahjong/yaku.svelte-2697c378.css",
  "/_app/pages/Button.svelte-498b2931.js",
  "/_app/pages/shared/Button.svelte-b2712d5c.js",
  "/_app/pages/Law/__layout.svelte-60dca692.js",
  "/_app/pages/Law/index.svelte-7f53ec2c.js",
  "/_app/pages/Law/chapter-1.svelte-30d65714.js",
  "/_app/pages/Law/archive.svelte-2a87e2e9.js",
  "/_app/pages/Law/law.svelte-8f0d6a30.js",
  "/_app/chunks/vendor-7ab9b2a4.js",
  "/_app/chunks/Shaa-f7d25e62.js",
  "/_app/chunks/Chun-c77faa24.js"
];
const files = [
  "/favicon.png",
  "/test1.js"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
