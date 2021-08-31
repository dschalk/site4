<h2>Introduction</h2>

<p>This website is built on the Sapper framework, an extension of Svelte 3. It's hosted on a Digital Ocean droplet which is supported by a Haskell WebSockets server on a separate droplet.</p>

<p>Svelte modules look a lot like plain, old-fashioned HTML pages, with JavaScript inside of script tags and CSS in style tags. Svelte enhancements of plain vanilla HTML facilitate reactivity and animation. They are few and the official tutorials make it convenient to start using them right away.</p>

<p>The modules in this presentation are small and isolated from other modules, making them easy to understand and maintain. There are no compelling reasons to avoid mutations and side effects, or to impose explicit type constraints on functions. There's no danger of introducing bugs, as would be the case in larger modules with more than one function reading or modifying state.</p>

<p>As global spaces increase in size, it becomes increasingly likely that mutating global variables will cause bugs. Variables that are not safely tucked inside of small or medium-sized functions should be immutable in large global spaces.</p>

<p>Likewise, functions that manipulate values other than those provided as arguments are dangerous in large global spaces. You might be scrupulously careful, but future maintainers might not understand your code as well as you do. If bugs appear, they might be difficult to trace.</p>

<p>When the global space is just a small isolated module, what we have come to recognize as "best practices" can be safely ignored. All the power and flexibility of the JavaScript programming language is then at our fingertips, allowing us to write more concise, understandable, and easily maintainable code.</p>

<h3>Ersatz Monads</h3>
<p>"Monad" is rigorously defined in Category Theory, but not in this presentation. Here, a monad is a closure that returns a function that facilitates the composition of values (usualy functions) in ways that can be specified by the monad's definition. The Async Monad receives values from a WebSockets server and sends them to a Web Worker. It receives values from the Web Worker and attaches them to a global object synchronized with the DOM. The Promises Monad processes chains of composed values, mostly asynchronous functions, assigning results to various attributes of a global object that is synchronized with the DOM.</p>

<p>Some Thoughts about Functional Programming
"Functional programming is an approach to programming based on function calls as the primary programming construct." - Greg Michaelson on Page 3 of An Introduction to Functional Programming Through Lambda Calculus.</p>

<p>The WebSockets server supporting the game of score is written in the Haskell programming language. It supports multiplayer games in which groups compete, share a to-do list, and chat among themselves. Any player can join any existing group, and can create new groups. Players can try for points or print out all existing solutions to randomly generated puzzles. The Haskell server routes group scores, todo's, and chat messages exclusively to online group members, generates the puzzles, and reliably does all that is required of it with amazing ease and transparency. The purity of functions and immutability of variables keeps the codebase easy to understand and maintain.</p>

<p>I say "immutability of variables" because elements in objects of type TMVar are routinely removed and replaced. When removal and replacement of an element is accomplished with one expression, the process looks a lot like mutating an element in a JavaScript object.

<p>TMVars are generally accepted as safe and appropriate for use in atomic transactions; i.e., those that must completely reverse if they fail to complete. Banks that use Haskell for online money transfers don't take chances by trying to force JavaScript to perform atomic transactions. They do, however, use MVars, TVars, and TMVars.</p>

<p>I created this site to share my enthusiasm for JavaScript functions, and especially for the recursive closures I call "monads". I began this page explaining why I have no need for most of the trappings of what people these days call "functional programming".</p>

<p>Trying to make JavaScript functions behave like Haskell functions can be enriching and for some, more entertaining than working crossword puzzles; but when we're developing applications, such projects probably belong on the back burner, or next to the Rubik's cube, mahjong tiles, and Chess pieces in the bottom drawer.</p>

<p>In the modules that follow, I define functions, experiment with functions, admire the power and possibilities of functions, and generally dwell on functions. If, to you, "functional JavaScript" means "cargo-cult JavaScript" (superstitiously imitating Haskell and similar languages), then call me a heretic. Still, I hope you will at least consider the possibility that in some circumstances, abandoning strict adherence to the so-called "functional paradigm" can greatly improve your JavaScript code.</p>

