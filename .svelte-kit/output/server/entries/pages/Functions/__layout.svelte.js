import { c as create_ssr_component } from "../../../chunks/index-63796eb4.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".large.svelte-14w1mcn{font-size:24px;color:purple;font-weight:6}ul.svelte-14w1mcn{display:flex;list-style:none;margin:0}li.svelte-14w1mcn{margin-right:10px}a.svelte-14w1mcn{font-size:22px}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<br>
<div style="${"font-size: 26px"}">Functions</div>


<nav><ul class="${"svelte-14w1mcn"}"><li class="${"svelte-14w1mcn"}"><a href="${"/Functions/"}" class="${"svelte-14w1mcn"}">Home</a></li>

        <li class="${"svelte-14w1mcn"}"><a href="${"/Functions/haskell"}" class="${"svelte-14w1mcn"}">Haskell</a></li>

      	<li class="${"svelte-14w1mcn"}"><a href="${"/Functions/bitmask_prime_generator"}" class="${"svelte-14w1mcn"}">Primes</a></li>

		<li class="${"svelte-14w1mcn"}"><a href="${"/Functions/factors"}" class="${"svelte-14w1mcn"}">Factors</a></li>

		<li class="${"svelte-14w1mcn"}"><a href="${"/Functions/proxy"}" class="${"svelte-14w1mcn"}">Proxies</a></li>

        <li class="${"svelte-14w1mcn"}"><a class="${"large svelte-14w1mcn"}" href="${"/Functions/Monads"}">Monads</a></li>

        <li class="${"svelte-14w1mcn"}"><a class="${"large svelte-14w1mcn"}" href="${"/Functions/Binary_Operations"}">Binary</a></li>

		<li class="${"svelte-14w1mcn"}"><a href="${"/Functions/score"}" class="${"svelte-14w1mcn"}">Score</a></li></ul></nav>


${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
