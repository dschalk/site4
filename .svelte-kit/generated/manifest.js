const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/Legal and Constitutional Matters/__layout.svelte"),
	() => import("../../src/routes/Legal and Constitutional Matters/index.svelte"),
	() => import("../../src/routes/Functions/__layout.svelte"),
	() => import("../../src/routes/Functions/index.svelte"),
	() => import("../../src/routes/Functions/bitmask_prime_generator.svelte"),
	() => import("../../src/routes/Functions/Binary_Operations/__layout.svelte"),
	() => import("../../src/routes/Functions/Binary_Operations/index.svelte"),
	() => import("../../src/routes/Functions/Binary_Operations/binary_arithmetic.svelte"),
	() => import("../../src/routes/Functions/bitwise_primes.svelte"),
	() => import("../../src/routes/Functions/malfunction.svelte"),
	() => import("../../src/routes/Functions/functional.svelte"),
	() => import("../../src/routes/Functions/Quadratic.svelte"),
	() => import("../../src/routes/Functions/factors.svelte"),
	() => import("../../src/routes/Functions/haskell.svelte"),
	() => import("../../src/routes/Functions/Monads/__layout.svelte"),
	() => import("../../src/routes/Functions/Monads/index.svelte"),
	() => import("../../src/routes/Functions/Monads/Promises_Monad.svelte"),
	() => import("../../src/routes/Functions/Monads/Async_monad.svelte"),
	() => import("../../src/routes/Functions/Monads/ObjectMonad.svelte"),
	() => import("../../src/routes/Functions/Monads/gameBA KUP.svelte"),
	() => import("../../src/routes/Functions/Monads/Button.svelte"),
	() => import("../../src/routes/Functions/Monads/Monad0.svelte"),
	() => import("../../src/routes/Functions/Monads/Monad3.svelte"),
	() => import("../../src/routes/Functions/Monads/Monad.svelte"),
	() => import("../../src/routes/Functions/Monads/game.svelte"),
	() => import("../../src/routes/Functions/proxy.svelte"),
	() => import("../../src/routes/Functions/score.svelte"),
	() => import("../../src/routes/Functions/code.svelte"),
	() => import("../../src/routes/Functions/time.svelte"),
	() => import("../../src/routes/Grammar/__layout.svelte"),
	() => import("../../src/routes/Grammar/index.svelte"),
	() => import("../../src/routes/Grammar/Niether of us (has or have).svelte"),
	() => import("../../src/routes/Mahjong/__layout.svelte"),
	() => import("../../src/routes/Mahjong/index.svelte"),
	() => import("../../src/routes/Mahjong/terms.svelte"),
	() => import("../../src/routes/Mahjong/time.svelte"),
	() => import("../../src/routes/Mahjong/yaku.svelte"),
	() => import("../../src/routes/Button.svelte"),
	() => import("../../src/routes/shared/Button.svelte"),
	() => import("../../src/routes/Law/__layout.svelte"),
	() => import("../../src/routes/Law/index.svelte"),
	() => import("../../src/routes/Law/chapter-1.svelte"),
	() => import("../../src/routes/Law/archive.svelte"),
	() => import("../../src/routes/Law/law.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/Legal and Constitutional Matters/index.svelte
	[/^\/Legal and Constitutional Matters\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/Functions/index.svelte
	[/^\/Functions\/?$/, [c[0], c[5], c[6]], [c[1]]],

	// src/routes/Functions/bitmask_prime_generator.svelte
	[/^\/Functions\/bitmask_prime_generator\/?$/, [c[0], c[5], c[7]], [c[1]]],

	// src/routes/Functions/Binary_Operations/index.svelte
	[/^\/Functions\/Binary_Operations\/?$/, [c[0], c[5], c[8], c[9]], [c[1]]],

	// src/routes/Functions/Binary_Operations/binary_arithmetic.svelte
	[/^\/Functions\/Binary_Operations\/binary_arithmetic\/?$/, [c[0], c[5], c[8], c[10]], [c[1]]],

	// src/routes/Functions/bitwise_primes.svelte
	[/^\/Functions\/bitwise_primes\/?$/, [c[0], c[5], c[11]], [c[1]]],

	// src/routes/Functions/malfunction.svelte
	[/^\/Functions\/malfunction\/?$/, [c[0], c[5], c[12]], [c[1]]],

	// src/routes/Functions/functional.svelte
	[/^\/Functions\/functional\/?$/, [c[0], c[5], c[13]], [c[1]]],

	// src/routes/Functions/Quadratic.svelte
	[/^\/Functions\/Quadratic\/?$/, [c[0], c[5], c[14]], [c[1]]],

	// src/routes/Functions/factors.svelte
	[/^\/Functions\/factors\/?$/, [c[0], c[5], c[15]], [c[1]]],

	// src/routes/Functions/haskell.svelte
	[/^\/Functions\/haskell\/?$/, [c[0], c[5], c[16]], [c[1]]],

	// src/routes/Functions/Monads/index.svelte
	[/^\/Functions\/Monads\/?$/, [c[0], c[5], c[17], c[18]], [c[1]]],

	// src/routes/Functions/Monads/Promises_Monad.svelte
	[/^\/Functions\/Monads\/Promises_Monad\/?$/, [c[0], c[5], c[17], c[19]], [c[1]]],

	// src/routes/Functions/Monads/Async_monad.svelte
	[/^\/Functions\/Monads\/Async_monad\/?$/, [c[0], c[5], c[17], c[20]], [c[1]]],

	// src/routes/Functions/Monads/ObjectMonad.svelte
	[/^\/Functions\/Monads\/ObjectMonad\/?$/, [c[0], c[5], c[17], c[21]], [c[1]]],

	// src/routes/Functions/Monads/gameBA KUP.svelte
	[/^\/Functions\/Monads\/gameBA KUP\/?$/, [c[0], c[5], c[17], c[22]], [c[1]]],

	// src/routes/Functions/Monads/Button.svelte
	[/^\/Functions\/Monads\/Button\/?$/, [c[0], c[5], c[17], c[23]], [c[1]]],

	// src/routes/Functions/Monads/Monad0.svelte
	[/^\/Functions\/Monads\/Monad0\/?$/, [c[0], c[5], c[17], c[24]], [c[1]]],

	// src/routes/Functions/Monads/Monad3.svelte
	[/^\/Functions\/Monads\/Monad3\/?$/, [c[0], c[5], c[17], c[25]], [c[1]]],

	// src/routes/Functions/Monads/Monad.svelte
	[/^\/Functions\/Monads\/Monad\/?$/, [c[0], c[5], c[17], c[26]], [c[1]]],

	// src/routes/Functions/Monads/game.svelte
	[/^\/Functions\/Monads\/game\/?$/, [c[0], c[5], c[17], c[27]], [c[1]], null, 1],

	// src/routes/Functions/proxy.svelte
	[/^\/Functions\/proxy\/?$/, [c[0], c[5], c[28]], [c[1]]],

	// src/routes/Functions/score.svelte
	[/^\/Functions\/score\/?$/, [c[0], c[5], c[29]], [c[1]]],

	// src/routes/Functions/code.svelte
	[/^\/Functions\/code\/?$/, [c[0], c[5], c[30]], [c[1]]],

	// src/routes/Functions/time.svelte
	[/^\/Functions\/time\/?$/, [c[0], c[5], c[31]], [c[1]]],

	// src/routes/Grammar/index.svelte
	[/^\/Grammar\/?$/, [c[0], c[32], c[33]], [c[1]]],

	// src/routes/Grammar/Niether of us (has or have).svelte
	[/^\/Grammar\/Niether of us \(has or have\)\/?$/, [c[0], c[32], c[34]], [c[1]]],

	// src/routes/Mahjong/index.svelte
	[/^\/Mahjong\/?$/, [c[0], c[35], c[36]], [c[1]]],

	// src/routes/Mahjong/terms.svelte
	[/^\/Mahjong\/terms\/?$/, [c[0], c[35], c[37]], [c[1]]],

	// src/routes/Mahjong/time.svelte
	[/^\/Mahjong\/time\/?$/, [c[0], c[35], c[38]], [c[1]]],

	// src/routes/Mahjong/yaku.svelte
	[/^\/Mahjong\/yaku\/?$/, [c[0], c[35], c[39]], [c[1]]],

	// src/routes/Button.svelte
	[/^\/Button\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/shared/Button.svelte
	[/^\/shared\/Button\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/Law/index.svelte
	[/^\/Law\/?$/, [c[0], c[42], c[43]], [c[1]]],

	// src/routes/Law/chapter-1.svelte
	[/^\/Law\/chapter-1\/?$/, [c[0], c[42], c[44]], [c[1]]],

	// src/routes/Law/archive.svelte
	[/^\/Law\/archive\/?$/, [c[0], c[42], c[45]], [c[1]]],

	// src/routes/Law/law.svelte
	[/^\/Law\/law\/?$/, [c[0], c[42], c[46]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];