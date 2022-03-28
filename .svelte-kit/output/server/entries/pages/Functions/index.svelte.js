import { c as create_ssr_component } from "../../../chunks/index-63796eb4.js";
const Functions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Introduction</h2>

<p>This website is built on the SvelteKit framework. It&#39;s located on a Digital Ocean droplet. The <a href="${"Functions/Monads/Async_monad"}">async_with_Websockets</a> page is supported by two WebSockets servers on a separate Digital Ocean droplet.</p>

<p>Svelte modules look a lot like ordinary HTML pages, with JavaScript inside of script tags,  CSS in style tags, and, aside from just a few quirks, plain JavaScript. There&#39;s no virtual DOM. Svelte modules can be imported to facilitate reactivity and animation, among other things. Svelte is well documentat, with examples and interactive tutorials, so getting started and learning to use the modules effectively is easily. </p>

<p>The modules in this presentation are small and isolated from other modules, making them easy to understand and maintain. There are no compelling reasons to avoid mutations and side effects, or to impose explicit type constraints on functions. There&#39;s no danger of introducing bugs, as would be the case in larger modules with more than one function reading or modifying global variables. Years ago, I elaborated on these ideas and presented examples at <a href="${"https://functional.schalk.net"}">https://functional</a></p>

<p>Functions that manipulate values other than those provided as arguments are dangerous where there are many lines of code. You might be scrupulously careful, but future maintainers might not understand your code as well as you do. If bugs appear, they might be difficult to trace.</p>

<p>When the global space is just a small, isolated module, many established &quot;best practices&quot; can be safely ignored. Deviations from usually adhered-to best practices are tolerated inside of functions; why not in small, isolated modules?   </p>

<h3>Ersatz Monads</h3>
<p>&quot;Monad&quot; is rigorously defined in Category Theory, but not in this presentation. Here, a monad is a closure that returns a function that facilitates the composition of values (usualy functions) in ways that can be specified by the monad&#39;s definition. For example, the Promises Monad processes chains of values, mostly asynchronous functions, assigning results to various attributes of a global object that is synchronized with the DOM.</p>

<h3>Some Thoughts about Functional Programming</h3>
<p>&quot;Functional programming is an approach to programming based on function calls as the primary programming construct.&quot; - Greg Michaelson on Page 3 of An Introduction to Functional Programming Through Lambda Calculus.</p>

<p>I created this section of the schalk.net site to share my enthusiasm for JavaScript functions, and especially for the recursive closures I call &quot;monads&quot;. This are what come to mind when I think of &quot;functional programming.&quot; The prevalent concept of &quot;functional programming&quot; involves using only pure functions and immutable values. I enjoy coding in Haskell that way, but mindlessly wasting the power and flexibility of JavaScript in situations where nothing can be gained from it doesn&#39;t seem very bright. These situations include code affecting on the internal workings of functions, and small modules where clobbering values used by other functions is easily avoided and side effects have nowhere to hide when debugging and refactoring occur. When benchmarkers evaluate the efficiency of having lots of modules, they overlook this important factor. Years ago, I elaborated on some of this in <a href="${"https://functional.schalk.net"}">https://functional.schalk.net/</a></p>

<p>I still have code for a fairly elaborate Haskell backend to an application I developed in 2013 and maintained for a while. It&#39;s a multi-player, multi-group simulated dice game based on a game my young son learned in school. It includes a shared group todo list and chat box. A version is online at <a href="${"score.schalk.net"}">https://score.schalk.net/</a> The drag &amp; drop boxes are too big, the buttons could be better arranged, and the rules are missing. Maybe I&#39;ll spruce it up someday. The Haskell code and bare-bone rules are here:</p> <a href="${"../Functions/score"}">Haskell Code</a>
    <br>
<p>The rules of the Game of Score are missing right now. If you want to check out the multi-player simulated dice game, click Group A or Group B or make up a group name. Click &quot;refresh&quot; whenever it is available, then click &quot;Roll&quot;. You get a point for making the number 20 in at least two computations.</p> 

<p>WebSockets traffic to and from the &quot;schalk.site&quot; Digitalocean droplet is encrypted. The &quot;Game of Score&quot; Haskell WebSockets server handles secure websockets traffic by reverse proxy to a background process running at http://127.0.0.1:3055. WebSockets packets addressed to wss://game.schalk.site get passed by the Nginx web server to http://127.0.0.1:3055 and responses to out addressed to wss://game.schalk.site. Here&#39;s a link to the front-end on the schalk.net droplet: <a href="${"https://score.schalk.net"}">https:/score.schalk.net</a>.   </p>

<p>It&#39;s such a joy, in the safety of small, isolated modules, to have the internal workings of a function rely on and mutate global variables - even variables that were not provided as arguments. When your functions don&#39;t have to be pure; for example, when you are free to define functions that return results only on every third, fourth, or whatever execution, JavaScript becomes more flexible and powerful. These sorts of things can be done safely in small, isolated modules.   </p>

<p>Trying to make JavaScript functions behave like Haskell functions can be enriching and for some, much more entertaining than sudoku or crossword puzzles. Such endeavors, however, aren&#39;t likely to help us develop robust, easily maintainable applications.</p>

<p>In the modules that follow, I define functions, experiment with functions, admire the power and possibilities of functions, and generally dwell on functions. If, to you, &quot;functional JavaScript&quot; means &quot;cargo-cult JavaScript&quot; (superstitiously imitating Haskell and similar languages), then call me a heretic. Still, I hope you will at least consider the possibility that in some circumstances, abandoning strict adherence to the so-called &quot;functional paradigm&quot; can greatly improve your JavaScript code.</p>`;
});
export { Functions as default };
