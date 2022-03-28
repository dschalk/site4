import { c as create_ssr_component } from "../../../../chunks/index-63796eb4.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1mjayvr{margin-right:10px}ul.svelte-1mjayvr{display:flex;list-style:none;margin:0;font-size:14px}li.svelte-1mjayvr{margin-right:10px}body{margin-right:12%;margin-left:15%;padding-right:3%;padding-left:3%;background-color:#DDD}html{background-color:#BBB}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<span style="${"font-size: 30px"}">Binary Operations</span>
<ul class="${"svelte-1mjayvr"}"><li class="${"svelte-1mjayvr"}"><a href="${"/Functions/Binary_Operations/"}">Home</a></li>

    <li class="${"svelte-1mjayvr"}"><a href="${"/Functions/Binary_Operations/binary_arithmetic"}">Binary Arithmetic</a></li></ul>

<br>
<div class="${"container svelte-1mjayvr"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export { _layout as default };
