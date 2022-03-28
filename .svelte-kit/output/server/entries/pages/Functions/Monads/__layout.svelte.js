import { c as create_ssr_component } from "../../../../chunks/index-63796eb4.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-1e9oi5x{display:flex;list-style:none;margin:0}li.svelte-1e9oi5x{margin-right:10px}a.svelte-1e9oi5x{font-size:22px}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<br>
<div style="${"font-size: 26px"}">Monads</div>


<nav><ul class="${"svelte-1e9oi5x"}"><li class="${"svelte-1e9oi5x"}"><a href="${"/Functions/Monads/"}" class="${"svelte-1e9oi5x"}">Home</a></li>

      	<li class="${"svelte-1e9oi5x"}"><a href="${"/Functions/Monads/Monad"}" class="${"svelte-1e9oi5x"}">Monads</a></li>

		<li class="${"svelte-1e9oi5x"}"><a href="${"/Functions/Monads/Monad0"}" class="${"svelte-1e9oi5x"}">A Simple Monad</a></li>

		<li class="${"svelte-1e9oi5x"}"><a href="${"/Functions/Monads/ObjectMonad"}" class="${"svelte-1e9oi5x"}">Object Monads</a></li>

        <li class="${"svelte-1e9oi5x"}"><a href="${"/Functions/Monads/Async_monad"}" class="${"svelte-1e9oi5x"}">Async Monad</a></li>

        <li class="${"svelte-1e9oi5x"}"><a href="${"/Functions/Monads/game"}" class="${"svelte-1e9oi5x"}">Score</a></li></ul></nav>


${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
