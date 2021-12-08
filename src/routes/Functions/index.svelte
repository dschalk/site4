<script>
import { compute_rest_props } from "svelte/internal";

</script>
<h2>Introduction</h2>

<p>This website is built on the SvelteKit framework. It's located on a Digital Ocean droplet. The <a href = "Functions/async_with_WebSockets">async_with_Websockets</a> page is supported by two WebSockets servers on a separate Digital Ocean droplet.</p>

<p>Svelte modules look a lot like ordinary HTML pages, with JavaScript inside of script tags and CSS in style tags. Svelte adds features to facilitate reactivity and animation, among other things. They are few and the official tutorials make it convenient to start using them right away.</p>

<p>The modules in this presentation are small and isolated from other modules, making them easy to understand and maintain. There are no compelling reasons to avoid mutations and side effects, or to impose explicit type constraints on functions. There's no danger of introducing bugs, as would be the case in larger modules with more than one function reading or modifying global variables.</p>

<p>Functions that manipulate values other than those provided as arguments are dangerous where there are many lines of code. You might be scrupulously careful, but future maintainers might not understand your code as well as you do. If bugs appear, they might be difficult to trace.</p>

<p>When the global space is just a small, isolated module, many established "best practices" can be safely ignored. Deviations from usually adhered-to best practices are tolerated inside of functions; why not in small, isolated modules?   </p>

<h3>Ersatz Monads</h3>
<p>"Monad" is rigorously defined in Category Theory, but not in this presentation. Here, a monad is a closure that returns a function that facilitates the composition of values (usualy functions) in ways that can be specified by the monad's definition. For example, the Promises Monad processes chains of values, mostly asynchronous functions, assigning results to various attributes of a global object that is synchronized with the DOM.</p>

<h3>Some Thoughts about Functional Programming</h3>
<p>"Functional programming is an approach to programming based on function calls as the primary programming construct." - Greg Michaelson on Page 3 of An Introduction to Functional Programming Through Lambda Calculus.</p>

<p>I created this site to share my enthusiasm for JavaScript functions, and especially for the recursive closures I call "monads". But most of what people think of as "functional programming", with the cumbersom rules and constraints that go with it, I consider less than useless in the JavaScript modules you'll find on this site. </p>

<p>I still have bits and pieces of code for a fairly elaborate Haskell backend to an application I developed in 2013 and maintained for a while. It's a simulated dice game based on a game my young son learned in school. I'll provide a link to a working example and you can compare it with the Haskell code if you're interested. The drag & drop boxes are too big, the buttons could be better arranged, and the rules are missing. Maybe I'll spruce it up someday. The Haskell code and bare-bone rules are here:</p> <a href = "../Functions/score">Haskell Code</a>
    <br>
    <a href = "../Book/__Motion-to-clarify">Motion</a>
<p>The rules of the Game of Score are missing right now. If you want to check out the multi-player simulated dice game, click Group A or Group B or make up a group name. Click "refresh" whenever it is available, then click "Roll". You get a point for making the number 20 in at least two computations.</p> 

<p>Almost all Internet traffic to and from the "schalk.site" Digitalocean droplet is encrypted. The "Game of Score" is the only exception. The best way to load it in a browser is to navegate to <a href = "https://game.schalk.site">http://game.schalk.site</a> and click the link.   </p>

<p> It's such a joy, in the safety of small, isolated modules, to have the internal workings of a function rely on and mutate global variables - even variables that were not provided as arguments. When your functions don't have to be pure; for example, when you are free to define functions that return results only on every third, fourth, or whatever execution, JavaScript becomes more flexible and powerful. These sorts of things can be done safely in small, isolated modules.   </p>

<p>Trying to make JavaScript functions behave like Haskell functions can be enriching and for some, much more entertaining than sudoku or crossword puzzles. Such endeavors, however, aren't likely to help us develop robust, easily maintainable applications.</p>

<p>In the modules that follow, I define functions, experiment with functions, admire the power and possibilities of functions, and generally dwell on functions. If, to you, "functional JavaScript" means "cargo-cult JavaScript" (superstitiously imitating Haskell and similar languages), then call me a heretic. Still, I hope you will at least consider the possibility that in some circumstances, abandoning strict adherence to the so-called "functional paradigm" can greatly improve your JavaScript code.</p>
<p>And, by the way, I have thoroughly enjoyed programming in Haskell. The Game of Score was a complex, multiplayer application whose functionality was located in a Haskell WebSockets server. Why the state of the art for securing Haskell WebSocket servers (allowing wss instead of ws) is to put them behind reverse proxies in Nginx servers, I can't say. My effort to modify the server for wss trafic was getting me nowhere and, losing patience, one fine afternoon I spun up a couple of JavaScript WebSocket servers on my Digital Ocean droplet. I'm quite pleased with them. </p> 

