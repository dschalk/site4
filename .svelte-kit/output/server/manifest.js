export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","test1.js","service-worker.js"]),
	_: {
		mime: {".png":"image/png",".js":"application/javascript"},
		entry: {"file":"start-b6a591d0.js","js":["start-b6a591d0.js","chunks/vendor-7ab9b2a4.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js'),
			() => import('./nodes/35.js'),
			() => import('./nodes/36.js'),
			() => import('./nodes/37.js'),
			() => import('./nodes/38.js'),
			() => import('./nodes/39.js'),
			() => import('./nodes/40.js'),
			() => import('./nodes/41.js'),
			() => import('./nodes/42.js'),
			() => import('./nodes/43.js'),
			() => import('./nodes/44.js'),
			() => import('./nodes/45.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Legal and Constitutional Matters\/?$/,
				params: null,
				path: "/Legal and Constitutional Matters",
				shadow: null,
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/Legal and Constitutional Matters\/Amended_Brief_of_Respondent_\(Supreme_Court\)\/?$/,
				params: null,
				load: () => import('./entries/endpoints/Legal and Constitutional Matters/Amended_Brief_of_Respondent_(Supreme_Court).pdf.js')
			},
			{
				type: 'page',
				pattern: /^\/Functions\/?$/,
				params: null,
				path: "/Functions",
				shadow: null,
				a: [0,5,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/bitmask_prime_generator\/?$/,
				params: null,
				path: "/Functions/bitmask_prime_generator",
				shadow: null,
				a: [0,5,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Binary_Operations\/?$/,
				params: null,
				path: "/Functions/Binary_Operations",
				shadow: null,
				a: [0,5,8,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Binary_Operations\/binary_arithmetic\/?$/,
				params: null,
				path: "/Functions/Binary_Operations/binary_arithmetic",
				shadow: null,
				a: [0,5,8,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/bitwise_primes\/?$/,
				params: null,
				path: "/Functions/bitwise_primes",
				shadow: null,
				a: [0,5,11],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/malfunction\/?$/,
				params: null,
				path: "/Functions/malfunction",
				shadow: null,
				a: [0,5,12],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/functional\/?$/,
				params: null,
				path: "/Functions/functional",
				shadow: null,
				a: [0,5,13],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Quadratic\/?$/,
				params: null,
				path: "/Functions/Quadratic",
				shadow: null,
				a: [0,5,14],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/factors\/?$/,
				params: null,
				path: "/Functions/factors",
				shadow: null,
				a: [0,5,15],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/haskell\/?$/,
				params: null,
				path: "/Functions/haskell",
				shadow: null,
				a: [0,5,16],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Monads\/?$/,
				params: null,
				path: "/Functions/Monads",
				shadow: null,
				a: [0,5,17,18],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Monads\/Promises_Monad\/?$/,
				params: null,
				path: "/Functions/Monads/Promises_Monad",
				shadow: null,
				a: [0,5,17,19],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Monads\/Async_monad\/?$/,
				params: null,
				path: "/Functions/Monads/Async_monad",
				shadow: null,
				a: [0,5,17,20],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Monads\/ObjectMonad\/?$/,
				params: null,
				path: "/Functions/Monads/ObjectMonad",
				shadow: null,
				a: [0,5,17,21],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Monads\/Button\/?$/,
				params: null,
				path: "/Functions/Monads/Button",
				shadow: null,
				a: [0,5,17,22],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Monads\/Monad0\/?$/,
				params: null,
				path: "/Functions/Monads/Monad0",
				shadow: null,
				a: [0,5,17,23],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Monads\/Monad3\/?$/,
				params: null,
				path: "/Functions/Monads/Monad3",
				shadow: null,
				a: [0,5,17,24],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Monads\/Monad\/?$/,
				params: null,
				path: "/Functions/Monads/Monad",
				shadow: null,
				a: [0,5,17,25],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/Monads\/game\/?$/,
				params: null,
				path: "/Functions/Monads/game",
				shadow: null,
				a: [0,5,17,26],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/proxy\/?$/,
				params: null,
				path: "/Functions/proxy",
				shadow: null,
				a: [0,5,27],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/score\/?$/,
				params: null,
				path: "/Functions/score",
				shadow: null,
				a: [0,5,28],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/code\/?$/,
				params: null,
				path: "/Functions/code",
				shadow: null,
				a: [0,5,29],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Functions\/time\/?$/,
				params: null,
				path: "/Functions/time",
				shadow: null,
				a: [0,5,30],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Grammar\/?$/,
				params: null,
				path: "/Grammar",
				shadow: null,
				a: [0,31,32],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Grammar\/Niether of us \(has or have\)\/?$/,
				params: null,
				path: "/Grammar/Niether of us (has or have)",
				shadow: null,
				a: [0,31,33],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Mahjong\/?$/,
				params: null,
				path: "/Mahjong",
				shadow: null,
				a: [0,34,35],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Mahjong\/terms\/?$/,
				params: null,
				path: "/Mahjong/terms",
				shadow: null,
				a: [0,34,36],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Mahjong\/time\/?$/,
				params: null,
				path: "/Mahjong/time",
				shadow: null,
				a: [0,34,37],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Mahjong\/yaku\/?$/,
				params: null,
				path: "/Mahjong/yaku",
				shadow: null,
				a: [0,34,38],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Button\/?$/,
				params: null,
				path: "/Button",
				shadow: null,
				a: [0,39],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Motion-to-clarify\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Motion-to-clarify.pdf.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man5-Dora\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man5-Dora.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin5-Dora\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin5-Dora.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou5-Dora\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou5-Dora.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Blank\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Blank.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Front\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Front.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Hatsu\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Hatsu.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Back\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Back.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Chun\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Chun.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Haku\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Haku.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man1\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man1.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man2\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man2.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man3\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man3.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man4\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man4.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man5\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man5.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man6\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man6.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man7\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man7.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man8\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man8.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Man9\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Man9.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin1\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin1.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin2\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin2.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin3\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin3.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin4\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin4.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin5\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin5.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin6\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin6.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin7\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin7.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin8\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin8.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pin9\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pin9.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Shaa\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Shaa.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou1\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou1.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou2\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou2.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou3\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou3.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou4\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou4.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou5\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou5.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou6\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou6.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou7\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou7.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou8\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou8.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Sou9\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Sou9.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Nan\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Nan.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Pei\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Pei.svg.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/images\/Ton\/?$/,
				params: null,
				load: () => import('./entries/endpoints/images/Ton.svg.js')
			},
			{
				type: 'page',
				pattern: /^\/shared\/Button\/?$/,
				params: null,
				path: "/shared/Button",
				shadow: null,
				a: [0,40],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/Brief\/?$/,
				params: null,
				load: () => import('./entries/endpoints/Brief.pdf.js')
			},
			{
				type: 'page',
				pattern: /^\/Law\/?$/,
				params: null,
				path: "/Law",
				shadow: null,
				a: [0,41,42],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/Law\/Motion-to-clarify\/?$/,
				params: null,
				load: () => import('./entries/endpoints/Law/Motion-to-clarify.pdf.js')
			},
			{
				type: 'page',
				pattern: /^\/Law\/chapter-1\/?$/,
				params: null,
				path: "/Law/chapter-1",
				shadow: null,
				a: [0,41,43],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Law\/archive\/?$/,
				params: null,
				path: "/Law/archive",
				shadow: null,
				a: [0,41,44],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/Law\/law\/?$/,
				params: null,
				path: "/Law/law",
				shadow: null,
				a: [0,41,45],
				b: [1]
			}
		]
	}
};
