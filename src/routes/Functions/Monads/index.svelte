<script>

import {fade} from "svelte/transition"
let visible = true;
</script>

{#if visible}
 	<div style = "font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
     <p></p>
SEQUENCING, ISOLATING, AND PRESERVING OPERATIONS ON DATA
<br> 
 USING JAVASCRIPT CLOSURES AND HASKELL MONADS
 	</div>
 {/if}
 <br>

 <span class="tao"> Monad (from Greek μονάς monas, "singularity" in turn from μόνος monos, "alone")[1] refers, in cosmogony, to the Supreme Being, divinity or the totality of all things. A basic unit of perceptual reality is a "monad" in Gottfried Leibniz' </span>
<span style = "font-style: italic"> Monadology </span>
<span>, published in 1714. A single note in music theory is called a monad. </span>
<p> Monads in the Haskell Programming Language were inspired by Category Theory monads. The Haskell programming language isn't a mathematical category and its monads certainly aren't Category-Theory monads. The closures mentioned in the title (above) were inspired by Haskell monads. From now on, I'll call the JavaScript closures "monads" and remind scoffers that Haskell monads are not Category Theory monads either, contrary to what they may have been told. With some finageling, Haskell types and isomorphisms among them can be made into a Category. It's called "Hask." </p>
<p>My Github respository shows some of the variations on the theme of JavaScript monads I experimented with over the years. Proving they obey the monad rules, stated in Haskell documentation but optional in practice, was interesting and reassuring. <a href = "https://github.com/dschalk?tab=repositories">dschalk repository</a></p>
