
<script>
import { merge_ssr_styles } from "svelte/internal";

// import { onMount } from "svelte";
import {fade} from "svelte/transition";
import Button from "./Button.svelte";

var A,B,C,D,AA,BB,CC,DD,EE,FF,GG,HH = "wait";
var N = 0;

var b0 = "none";
var b1 = "none";
var b2 = "none";
var b3 = "none";

var b4 = "none";
var b5 = "none";
var b6 = "none";
var b7 = "none";

var s = 'stop';
var AA;
var BB;
var CC;
var DD;
var EE = "awaiting selection";
var FF;
var WW;
var XX;
var YY;
var ZZ;
var ZYXW;
var WXYZ;
var m2;
var Z = "";
$: Z;
var fu;
var x = [ [0,0,0,0], [], [], [] ]

function intersection (a,b) {return a.filter(x => b.includes(x))};

function calc(aa,bb,c) {
var a = parseInt(aa,10);
var b = parseInt(bb,10);
if (c === "+") return (a + b);
else if (c === "*") return (a * b);
else if (c === "-") return (a - b);
else if (c === "/") return (a / b);
else if (c === "concat") return parseInt("" + a + b, 10);
else return "fubar";
}

function g(ar) {
  var x = (ar.pop())**3;
  ar.unshift(x);
  return ar;
};

function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};

function clone (x) {return JSON.parse(JSON.stringify(x))};

var clean = a => a.map( ar => ar.filter(x => (x != (undefined && 0))));

var cleanB = a => a.filter(x => x != (undefined && 0));

fu = a => {
  var result;
  var interSec = intersection(a[1],a[3]);
  console.log("interSec is", interSec);
  console.log("In fu, a is", clone(a));
  if (a[1].length === 2 && a[2].length === 1)   {
    console.log("In fu. a[0]", clone(a[0]));
    result = calc(a[1][0], a[1][1],a[2][0]);
    a[0].push(result);
    a[3].push(result);  
    a[1] = [];
  }

  if (a[1].length === 3) {
    a[0].push(a[1].pop());
  }

  if (result == 20 && interSec[0]) {
      Z = "Congratulations! You did it.";
      setTimeout(() => Z = "", 3000);
      console.log("Z is", Z);
      runRoll();
  }
  update();
  sfunc();
  return a;
};

function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
};

m2 = M(x);

var roll = ar => {
  ar = [ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [8888] ];
  b4 = b5 = b6 = b7 = 'none';
};

function runRoll () {
    m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [] ]);
    updateRoll();
    EE = "yet to be selected";
}
const updateRoll = () => {
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  b0 = b1 = b2 = b3 = "inline";
  b4 = b5 = b6 = b7 = 'none';
}
function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}
var update = () => {
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
}

var mon3 = M([1,2,3,4]);
// function fmon3 (f) {mon3 = mon3(f)};
// function fmon3Reset () {mon3 = M([1,2,3,4])}

var fmon = f => x => x(f);
var reset = x => [1,2,3,4]

var click0 = m => ar => {
    ar[1].push(ar[0].splice(0,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click1 = m => ar => {
    ar[1].push(ar[0].splice(1,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click2 = m => ar => {
    ar[1].push(ar[0].splice(2,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click3 = m => ar => {
    ar[1].push(ar[0].splice(3,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

function clic0 () {
  EE = "add";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['+'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic1 () {
  EE = "subtract";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['-'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic2 () {
  EE = "multiply";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['*'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic3 () {
  EE = "divide";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['/'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic4 () {
  EE = "concat";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['concat'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function m2Func () {console.log("In m2Func m2(s), b4, b5, b6 and b7 are", m2(s),b4,b5,b6,b7)};

$: Z = Z;

var monad = `function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};

m2 = M(any value); // The argument can be any JavaScript value
// For the game, the starting value is [ [0,0,0,0], [], [], [] ].`   

var monad3 = `var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`;


var simple = `var someMonad = M(3)
someMonad(v=>v**3);
someMonad('stop');  // 27
someMonad(v=>v+15)('stop');  // 42 .. Now let's go back to 42 the hard way:
someMonad(v=>v/7)(v=>v+2)(v=>v*v)(v=>v**(1/6))(v=>v*21)('stop'); // 42
someMonad(s) // 42 

var s = 'stop';
var m3 = M(3);   // creates a new monad named "m3".
var cube = x => x**3;
var square = x => x*x;
var pow = n => x => x**n;
var add = n => x => x + n;
var mult = n => x => x * n;
console.log(m3(s));             // 3
console.log(m3(pow(3))(s));     // 27
console.log(m3(s));             // 27
console.log(m3(add(-6))(mult(2))(s));          // 42
console.log(m3(add(7))(pow(1/2))(mult(6))(s)); // 42
console.log(m3(s));             // 42` 

var runR = `function runRoll () {
    m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, // Actually one line
    Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [] ]);
    updateRoll();
    EE = "yet to be selected";
}  
const updateRoll = () => {
    AA = m2(s)[0][0];
    BB = m2(s)[0][1];
    CC = m2(s)[0][2];
    DD = m2(s)[0][3];
  
    WW = m2(s)[1][0];
    XX = m2(s)[1][1];
    YY = m2(s)[1][2];
    ZZ = m2(s)[1][3];
    EE = m2(s)[2];
    FF = m2(s)[3];
    b0 = b1 = b2 = b3 = "inline";
    b4 = b5 = b6 = b7 = 'none';
};`;

var clickFuncs = `function clic0 () {
  EE = "add";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['+'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic1 () {
  EE = "subtract";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['-'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic2 () {
  EE = "multiply";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['*'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic3 () {
  EE = "divide";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['/'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic4 () {
  EE = "concat";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['concat'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

var click0 = m => ar => {
    ar[1].push(ar[0].splice(0,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click1 = m => ar => {
    ar[1].push(ar[0].splice(1,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click2 = m => ar => {
    ar[1].push(ar[0].splice(2,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click3 = m => ar => {
    ar[1].push(ar[0].splice(3,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

fu = a => {
  var result;
  var interSec = intersection(a[1],a[3]);
  if (a[1].length === 2 && a[2].length === 1)   {
    result = calc(a[1][0], a[1][1],a[2][0]);
    a[0].push(result);
    a[3].push(result);  
    a[1] = [];
  }

  if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  }

  if (result == 20 && interSec[0]) {
      Z = "Congratulations! You made it.";
      setTimeout(() => Z = "", 3000);
      runRoll();
  }
  update();
  sfunc();
  return a;
};`

var putBack = `if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`

var sf =`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`

var upD = `var update = () => {
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
};`;


</script>

<svelte:head>
	<title>Monad Encapsulation </title>
</svelte:head>
<br>
<div>**********************************************************************</div>
<br><br>
<div style = "font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
<p></p>
The Recursive Closure "m2" Controls the Action
</div>
<br><br><br>
<p>m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
<pre>{monad}</pre>
<p>I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript (my beloved favorite language) could possibly have monads such as those defined in the Haskell programming language. I won't elaborate any further, except to point out that neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.</p>
<p>In a solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. To get accustomed to how it works, let's start with x = 3 and some elementary math functions. </p>
<pre>{simple}</pre>  
<p>m2 encapsulates its x value. Since x can be accessed only by calling "m2('stop')", it is unlikely that any future code-maintainer will inadvertently step on it. </p>

<p>Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:</p>
<pre>{monad3}</pre>
<p>If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.  </p>
<div style = "margin-left: 10%; font-size:44px; color:#ddaadd">[{mon3(s).join(", ")}]</div>
<br><br>
<button on:click={() => mon3 = mon3(g)}>mon3 = mon3(g)</button>
<button on:click={() => mon3 = mon3(g2)}>mon3 = mon3(g2)</button>
<button on:click={() => mon3 = mon3(g3)}>mon3 = mon3(g3)</button>
<button on:click={() => mon3 = mon3(x => [1,2,3,4])}>mon3 = mon3(x => [1,2,3,4])</button>
<br><br><br>
<p>Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at <a href = "https://score.schalk.net">https://score.schalk.net</a>.</p>

<p>This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or putting functionality into methods, these monads take care of business by consuming function that that do their work sheltered from what goes on in the global space, now or after future maintainers have added features. </p>
<h1 style = "color:#ffccff">{Z}</h1>
<br>
<button style = "display: {b0}" on:click = {() => m2(click0(m2))}>{AA}</button> 
<button style = "display: {b1}" on:click = {() => m2(click1(m2))}>{BB}</button> 
<button style = "display: {b2}" on:click = {() => m2(click2(m2))}>{CC}</button> 
<button style = "display: {b3}" on:click = {() => m2(click3(m2))}>{DD}</button>
<span style = "margin-left: 8%; font-size: 22px">The operator is {EE}</span>

<br><br>
<button on:click = {clic0}>add</button>
<button on:click = {clic1}>subtract</button>
<button on:click = {clic2}>multiply</button>
<button on:click = {clic3}>divide</button>
<button on:click = {clic4}>concat</button>

<br><br>
<button on:click = {runRoll}>ROLL</button>
<br><br>
<button style = "display: {b4}">{WW}</button> 
<button style = "display: {b5}">{XX}</button> 
<button style = "display: {b6}">{YY}</button> 
<button style = "display: {b7}">{ZZ}</button>
<button style = "display: {b7}">{EE}</button>
<br><br>
<p>Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.</p>
<pre>{runR}</pre>
<p>The "x = [ [], [], [], [] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:</p>
<pre>{clickFuncs}</pre>
<p>The first line of fu() is the calculation result that is generated whenever there are two items in m2(s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.</p> 
<p>If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:</p>
<pre>{putBack}</pre>
<p>If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right. </p>
<p>sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:</p>
<pre>{sf}</pre>
<p>After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:</p>
<pre>{upD}</pre>
<br><br><br><br><br><br>


<!-- <button on:click = {m2Func}>m2Func</button>
<button on:click = {update}>Update</button>
<button on:click = {() => m2(fu)}>m2(fu)</button>
<button on:click = {sfunc}>sfunc</button>
-->

<br><br><br><br>

