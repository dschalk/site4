import { c as create_ssr_component } from "../../chunks/index-63796eb4.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1ofk2mc{margin-right:10px}ul.svelte-1ofk2mc{display:flex;list-style:none;margin:0;font-size:11px}li.svelte-1ofk2mc{margin-right:10px}body{margin-right:12%;margin-left:12%;padding-right:3%;padding-left:3%;background-color:papayawhip}p{text-indent:3%}html{background-color:rgb(32,0,0)}body{background-color:papayawhip}p{font-size:20px}a{font-size:20px}pre{font-size:16px}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div><nav><ul class="${"svelte-1ofk2mc"}"><li class="${"svelte-1ofk2mc"}"><a href="${"/"}">Home</a></li>

    <li class="${"svelte-1ofk2mc"}"><a href="${"/Functions"}">Functions</a></li>

    <li class="${"svelte-1ofk2mc"}"><a href="${"/Mahjong"}">Riichi Mahjong</a></li>

    <li class="${"svelte-1ofk2mc"}"><a href="${"/Grammar"}">Grammar</a></li>

    <li class="${"svelte-1ofk2mc"}"><a href="${"/Law"}">Rule By Law</a></li></ul></nav></div>


<div></div>
<div class="${"container svelte-1ofk2mc"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export { _layout as default };
