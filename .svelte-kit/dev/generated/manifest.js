const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/Legal and Constitutional Matters/__layout.svelte"),
	() => import("../../../src/routes/Legal and Constitutional Matters/index.svelte"),
	() => import("../../../src/routes/Functions/__layout.svelte"),
	() => import("../../../src/routes/Functions/index.svelte"),
	() => import("../../../src/routes/Functions/bitmask_prime_generator.svelte"),
	() => import("../../../src/routes/Functions/Binary_Operations/__layout.svelte"),
	() => import("../../../src/routes/Functions/Binary_Operations/index.svelte"),
	() => import("../../../src/routes/Functions/Binary_Operations/binary_arithmetic.svelte"),
	() => import("../../../src/routes/Functions/bitwise_primes.svelte"),
	() => import("../../../src/routes/Functions/malfunction.svelte"),
	() => import("../../../src/routes/Functions/functional.svelte"),
	() => import("../../../src/routes/Functions/Quadratic.svelte"),
	() => import("../../../src/routes/Functions/factors.svelte"),
	() => import("../../../src/routes/Functions/haskell.svelte"),
	() => import("../../../src/routes/Functions/Monads/__layout.svelte"),
	() => import("../../../src/routes/Functions/Monads/index.svelte"),
	() => import("../../../src/routes/Functions/Monads/Promises_Monad.svelte"),
	() => import("../../../src/routes/Functions/Monads/Async_monad.svelte"),
	() => import("../../../src/routes/Functions/Monads/ObjectMonad.svelte"),
	() => import("../../../src/routes/Functions/Monads/gameOLD.svelte"),
	() => import("../../../src/routes/Functions/Monads/Monad0.svelte"),
	() => import("../../../src/routes/Functions/Monads/Monad3.svelte"),
	() => import("../../../src/routes/Functions/Monads/Monad.svelte"),
	() => import("../../../src/routes/Functions/Monads/trace.svelte"),
	() => import("../../../src/routes/Functions/Monads/game.svelte"),
	() => import("../../../src/routes/Functions/proxy.svelte"),
	() => import("../../../src/routes/Functions/score.svelte"),
	() => import("../../../src/routes/Functions/code.svelte"),
	() => import("../../../src/routes/Functions/time.svelte"),
	() => import("../../../src/routes/Grammar/__layout.svelte"),
	() => import("../../../src/routes/Grammar/index.svelte"),
	() => import("../../../src/routes/Grammar/Niether of us (has or have).svelte"),
	() => import("../../../src/routes/Mahjong/__layout.svelte"),
	() => import("../../../src/routes/Mahjong/index.svelte"),
	() => import("../../../src/routes/Mahjong/terms.svelte"),
	() => import("../../../src/routes/Mahjong/time.svelte"),
	() => import("../../../src/routes/Mahjong/yaku.svelte"),
	() => import("../../../src/routes/Button.svelte"),
	() => import("../../../src/routes/Law/__layout.svelte"),
	() => import("../../../src/routes/Law/index.svelte"),
	() => import("../../../src/routes/Law/chapter-1.svelte"),
	() => import("../../../src/routes/Law/archive.svelte"),
	() => import("../../../src/routes/Law/law.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/Legal and Constitutional Matters/index.svelte
	[/^\/Legal and Constitutional Matters\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/Legal and Constitutional Matters/Amended_Brief_of_Respondent_(Supreme_Court).pdf
	[/^\/Legal and Constitutional Matters\/Amended_Brief_of_Respondent_\(Supreme_Court\)\/?$/],

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

	// src/routes/Functions/Haskell/static/index.html
	[/^\/Functions\/Haskell\/static\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/index.html
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/jquery-ui.structure.min.css
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/jquery-ui\.structure\.min$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/jquery-ui.structure.css
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/jquery-ui\.structure$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/jquery-ui.theme.min.css
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/jquery-ui\.theme\.min$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/jquery-ui.theme.css
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/jquery-ui\.theme$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/jquery-ui.min.css
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/jquery-ui\.min$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/jquery-ui.min.js
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/jquery-ui\.min$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/jquery-ui.css
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/jquery-ui\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/jquery-ui.js
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/jquery-ui\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/external/jquery/jquery.js
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/external\/jquery\/jquery\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-bg_highlight-soft_80_eeeeee_1x100.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-bg_highlight-soft_80_eeeeee_1x100\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-bg_gloss-wave_25_333333_500x100.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-bg_gloss-wave_25_333333_500x100\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-bg_inset-soft_25_000000_1x100.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-bg_inset-soft_25_000000_1x100\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-bg_inset-soft_30_f58400_1x100.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-bg_inset-soft_30_f58400_1x100\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-bg_flat_30_cccccc_40x100.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-bg_flat_30_cccccc_40x100\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-bg_flat_50_5c5c5c_40x100.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-bg_flat_50_5c5c5c_40x100\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-bg_glass_20_555555_1x400.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-bg_glass_20_555555_1x400\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-bg_glass_40_0078a3_1x400.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-bg_glass_40_0078a3_1x400\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-bg_glass_40_ffc73d_1x400.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-bg_glass_40_ffc73d_1x400\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-icons_222222_256x240.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-icons_222222_256x240\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-icons_4b8e0b_256x240.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-icons_4b8e0b_256x240\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-icons_a83300_256x240.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-icons_a83300_256x240\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-icons_cccccc_256x240.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-icons_cccccc_256x240\/?$/],

	// src/routes/Functions/Haskell/static/jquery-ui-1.11.2.custom/images/ui-icons_ffffff_256x240.png
	[/^\/Functions\/Haskell\/static\/jquery-ui-1\.11\.2\.custom\/images\/ui-icons_ffffff_256x240\/?$/],

	// src/routes/Functions/Haskell/static/jquery-1.11.2.min.js
	[/^\/Functions\/Haskell\/static\/jquery-1\.11\.2\.min$/],

	// src/routes/Functions/Haskell/static/IMPOSSIBLES.html
	[/^\/Functions\/Haskell\/static\/IMPOSSIBLES\/?$/],

	// src/routes/Functions/Haskell/static/scripts/jquery-ui.js
	[/^\/Functions\/Haskell\/static\/scripts\/jquery-ui\/?$/],

	// src/routes/Functions/Haskell/static/scripts/socket.io.js
	[/^\/Functions\/Haskell\/static\/scripts\/socket\.io$/],

	// src/routes/Functions/Haskell/static/scripts/jquery.js
	[/^\/Functions\/Haskell\/static\/scripts\/jquery\/?$/],

	// src/routes/Functions/Haskell/static/README.html
	[/^\/Functions\/Haskell\/static\/README\/?$/],

	// src/routes/Functions/Haskell/static/client.js
	[/^\/Functions\/Haskell\/static\/client\/?$/],

	// src/routes/Functions/Haskell/static/screen.css
	[/^\/Functions\/Haskell\/static\/screen\/?$/],

	// src/routes/Functions/Haskell/Main.hs
	[/^\/Functions\/Haskell\/Main\/?$/],

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

	// src/routes/Functions/Monads/gameOLD.svelte
	[/^\/Functions\/Monads\/gameOLD\/?$/, [c[0], c[5], c[17], c[22]], [c[1]]],

	// src/routes/Functions/Monads/Monad0.svelte
	[/^\/Functions\/Monads\/Monad0\/?$/, [c[0], c[5], c[17], c[23]], [c[1]]],

	// src/routes/Functions/Monads/Monad3.svelte
	[/^\/Functions\/Monads\/Monad3\/?$/, [c[0], c[5], c[17], c[24]], [c[1]]],

	// src/routes/Functions/Monads/Monad.svelte
	[/^\/Functions\/Monads\/Monad\/?$/, [c[0], c[5], c[17], c[25]], [c[1]]],

	// src/routes/Functions/Monads/trace.svelte
	[/^\/Functions\/Monads\/trace\/?$/, [c[0], c[5], c[17], c[26]], [c[1]]],

	// src/routes/Functions/Monads/game.svelte
	[/^\/Functions\/Monads\/game\/?$/, [c[0], c[5], c[17], c[27]], [c[1]]],

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

	// src/routes/images/Motion-to-clarify.pdf
	[/^\/images\/Motion-to-clarify\/?$/],

	// src/routes/images/Man5-Dora.svg
	[/^\/images\/Man5-Dora\/?$/],

	// src/routes/images/Pin5-Dora.svg
	[/^\/images\/Pin5-Dora\/?$/],

	// src/routes/images/Sou5-Dora.svg
	[/^\/images\/Sou5-Dora\/?$/],

	// src/routes/images/Blank.svg
	[/^\/images\/Blank\/?$/],

	// src/routes/images/Front.svg
	[/^\/images\/Front\/?$/],

	// src/routes/images/Hatsu.svg
	[/^\/images\/Hatsu\/?$/],

	// src/routes/images/Back.svg
	[/^\/images\/Back\/?$/],

	// src/routes/images/Chun.svg
	[/^\/images\/Chun\/?$/],

	// src/routes/images/Haku.svg
	[/^\/images\/Haku\/?$/],

	// src/routes/images/Man1.svg
	[/^\/images\/Man1\/?$/],

	// src/routes/images/Man2.svg
	[/^\/images\/Man2\/?$/],

	// src/routes/images/Man3.svg
	[/^\/images\/Man3\/?$/],

	// src/routes/images/Man4.svg
	[/^\/images\/Man4\/?$/],

	// src/routes/images/Man5.svg
	[/^\/images\/Man5\/?$/],

	// src/routes/images/Man6.svg
	[/^\/images\/Man6\/?$/],

	// src/routes/images/Man7.svg
	[/^\/images\/Man7\/?$/],

	// src/routes/images/Man8.svg
	[/^\/images\/Man8\/?$/],

	// src/routes/images/Man9.svg
	[/^\/images\/Man9\/?$/],

	// src/routes/images/Pin1.svg
	[/^\/images\/Pin1\/?$/],

	// src/routes/images/Pin2.svg
	[/^\/images\/Pin2\/?$/],

	// src/routes/images/Pin3.svg
	[/^\/images\/Pin3\/?$/],

	// src/routes/images/Pin4.svg
	[/^\/images\/Pin4\/?$/],

	// src/routes/images/Pin5.svg
	[/^\/images\/Pin5\/?$/],

	// src/routes/images/Pin6.svg
	[/^\/images\/Pin6\/?$/],

	// src/routes/images/Pin7.svg
	[/^\/images\/Pin7\/?$/],

	// src/routes/images/Pin8.svg
	[/^\/images\/Pin8\/?$/],

	// src/routes/images/Pin9.svg
	[/^\/images\/Pin9\/?$/],

	// src/routes/images/Shaa.svg
	[/^\/images\/Shaa\/?$/],

	// src/routes/images/Sou1.svg
	[/^\/images\/Sou1\/?$/],

	// src/routes/images/Sou2.svg
	[/^\/images\/Sou2\/?$/],

	// src/routes/images/Sou3.svg
	[/^\/images\/Sou3\/?$/],

	// src/routes/images/Sou4.svg
	[/^\/images\/Sou4\/?$/],

	// src/routes/images/Sou5.svg
	[/^\/images\/Sou5\/?$/],

	// src/routes/images/Sou6.svg
	[/^\/images\/Sou6\/?$/],

	// src/routes/images/Sou7.svg
	[/^\/images\/Sou7\/?$/],

	// src/routes/images/Sou8.svg
	[/^\/images\/Sou8\/?$/],

	// src/routes/images/Sou9.svg
	[/^\/images\/Sou9\/?$/],

	// src/routes/images/Nan.svg
	[/^\/images\/Nan\/?$/],

	// src/routes/images/Pei.svg
	[/^\/images\/Pei\/?$/],

	// src/routes/images/Ton.svg
	[/^\/images\/Ton\/?$/],

	// src/routes/Law/index.svelte
	[/^\/Law\/?$/, [c[0], c[41], c[42]], [c[1]]],

	// src/routes/Law/Motion-to-clarify.pdf
	[/^\/Law\/Motion-to-clarify\/?$/],

	// src/routes/Law/chapter-1.svelte
	[/^\/Law\/chapter-1\/?$/, [c[0], c[41], c[43]], [c[1]]],

	// src/routes/Law/archive.svelte
	[/^\/Law\/archive\/?$/, [c[0], c[41], c[44]], [c[1]]],

	// src/routes/Law/law.svelte
	[/^\/Law\/law\/?$/, [c[0], c[41], c[45]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];