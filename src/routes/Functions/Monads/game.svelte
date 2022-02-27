
<script>
	import { onMount } from "svelte";
 import {fade} from "svelte/transition";

	var A,B,C,D,AA,BB,CC,DD,EE,FF,GG,HH = "wait";
	var N = 0;
	let func = function () {};
	let login = function () {};
	let groupM = "solo";
	let playerM;
	var rollM = "6,6,12,20";
	var pointsM = 0;
	var scoreM = 0;
	let pM;
	let pR = 0;
	let roll;
	var extra, ext4, ext5, ext6, ext7, ext8, d2, d3, F, gameArray, G, e, check, prefix;
 var s = 'stop';
var points = 0;
var score = 0;
	var s = 'stop';
var di = [extra, ext4, ext5, ext6];
var dice = [...di]
function rollFunc () {};

function M (x) {
  var choices = [];
	 return function (func) {
    if (typeof func === "function") {x = func(x); return M(x)}
    else if (func === "stop") return x
  }
}

function g(ar) {
		var x = (ar.pop())**3;
		ar.unshift(x);
		return ar;
};

function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};

var s = "stop";
var mon = M([1,2,3,4]);

	console.log("mon(s)", mon(s));
	console.log("mon(g)(s)", mon(g)(s));
	console.log("mon(g)(s)", mon(g)(s));

	var ar = [1,2,3,4];

	function upd (a,b) {
	  return function (v) {
	    v.splice(a,1,b);
	    return v;
	   }
	};
	function updat (x,y) {
	  return function (z) {return upd(x,y)(z)}
	}

	var update = updat(2,6)

	var mon2 = M([1,2,3,4]);
	console.log("mon2(update)(s) is", mon2(update)(s))
	update = updat(3,11)
	console.log("mon2(update)(s) is", mon2(update)(s))
	update = updat(0,3)
	console.log("mon2(update)(s) is", mon2(update)(s))



onMount(async () => {
		var socket = new WebSocket("wss://score.schalk.site");
		 setInterval( () => {console.log(socket.readyState)},3000);
  	socket.onmessage = e => {
			console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
			console.log("e is ", e);
			console.log("N is", N);
			console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
			A = e.data;
			N+=1;
			console.log("The message is", e.data);
			gameArray = e.data.split(",");
			console.log("gameArray is", gameArray);
			// d2 = e.data.substring(0, 6);
			// d3 = e.data.substring(2, 6);
			prefix = gameArray[0];
			groupM = gameArray[1]; // The sender's group.
			playerM = gameArray[2];
			extra = gameArray[3];
			ext4 = gameArray[4];
			ext5 = gameArray[5];
			ext6 = gameArray[6];
			ext7 = gameArray[7];
			ext8 = gameArray[8];
			if (prefix === "CA#$42") {
			    di = [extra, ext4, ext5, ext6];
			    dice = [...di];
							console.log("dice is", dice);
							AA = extra;
							BB = ext4;
							CC = ext5;
							DD = ext6;
							EE = di;
							FF = dice;
							console.log("<><><><><><><><><>,AA,BB,CC,DD,EE,FF",AA,BB,CC,DD,EE,FF);
							mon(dice);
							console.log("mon(s)", mon(s))
		}
}



		login = function login(e, c = 0) {
			var count = c;
			if (e.keyCode !== 13) return;
			else {
				console.log("socket.readyState is ", socket.readyState);
				console.log("Entering login");
				setTimeout(() => {
					if (socket.readyState === 1) {
                        playerM = e.target.value;
						console.log("In setTimeout. e.target.value is",	e.target.value);
						console.log("In setTimeout. e.data is", e.data);
						console.log("In setTimeout. count is", count);
						let xx = "CC#$42".concat(e.target.value);
						console.log("xx and e.target.value are", xx, e.target.value);
						xx = "CC#$42".concat(e.target.value);
						console.log("In 'if readyState === 1'. xx is", xx);
						socket.send(xx)
						// setInterval(() => {socket.send("ping")},20000);
					}

					else if (count >= 10) {
						console.log("In count > 10");
						A = "The WebSockets server is currently not available"
					}
					else {
						count += 1;
						console.log("count is", count);
						login(e, count);
					}
				}, 500);
			}
		};
		    function check () {
                console.log("value", document.getElementById("1").innerHTML)
                console.log("value", document.getElementById("2").innerHTML)
                console.log("value", document.getElementById("3").innerHTML)
                console.log("value", document.getElementById("4").innerHTML)

				console.log(dice[0], dice[1], dice[2], dice[3]);
                F = document.getElementById("1")
		    }

function rollFunc () {
			socket.send("CA#$42,solo,playerM,6,6,12,20,0,0");
		 refresh();
		};

		dice = [...di];
		mon = M(di);
		console.log("mon(s) is", mon(s));
console.log("di and dice are", di, dice);

});


let dis1 = "inline";
let dis2 = "inline";
let dis3 = "inline";
let dis4 = "inline";

let nums = [];
$: nums = nums;
let Z = nums;
$: Z = Z
let op = undefined;

function calc (ax,b,cx) {
   /* var d = dM
    var t = DS_T;
    var goal = (goalM)*1;
    var goal2 = goalM+"";
    var impossibleClicker = impossibleClickerM;
    var player = playerM;
    var scoreClicker = scoreClickerM;
    var group = groupM;
    var ddd = dM + 1;
    var d = ddd;
    dM = ddd
    DS_ob.ar = [];
    DS_ob.bool = [];
    var res; */
    var a = parseFloat(ax);
    var c = parseFloat(cx);
	var res;
    switch (b) {
        case "+": res = a + c;
        break;
        case "-": res = a - c;
        break;
        case "*": res = a * c;
        break;
        case "/": res = a / c;
        break;
        case "Concat": res = parseFloat(a+""+c);
        break;
    }
	return res;
}

function b1 () {
	console.log("b1 before. mon('stop'), nums", mon('stop'), nums);
	if (nums.length < 2) {nums.push(dice.shift()); console.log("dice is", dice)}
	if (nums.length > 1 && op) {dice.unshift(calc(nums[0],op,nums[1])); nums = [];}
	console.log("b1 after. mon('stop'), nums", mon('stop'), nums);
	// else dis1 = "none";

}

function b2 () {
	if (nums.length < 2) {nums.push(dice.shift()); console.log("dice is", dice)}
	if (nums.length > 1 && op) {dice.splice(1,1,(calc(nums[0],op,nums[1]))); nums = [];}
	// else dis1 = "none";

}

function b3 () {
	if (nums.length < 2) {nums.push(dice.shift()); console.log("dice is", dice)}
	if (nums.length > 1 && op) {dice.splice(2,2,(calc(nums[0],op,nums[1]))); nums = [];}
	// else dis1 = "none";

}

function b4 () {
	if (nums.length < 2) {nums.push(dice.pop()); console.log("dice is", dice)}
	if (nums.length > 1 && op) {dice.push(calc(nums[0],op,nums[1])); nums = [];}
	// else dis1 = "none";

}

function refresh () {
	di = di;
	roll = [...di]
	console.log("nums is", nums);
	nums = nums;
	console.log("Now nums is", nums);
}



function op1 () {
	op = "+";
	if (nums.length === 2) {nums[1] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
	console.log("document.getElementById('1')).style", document.getElementById("1").style);
	}

function op2 () {
	op = "-";
	if (nums.length === 2) {nums[1] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
	console.log("document.getElementById('1')).style", document.getElementById("1").style);
	}

function op3 () {
	op = "*";
	if (nums.length === 2) {dice[3] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
	console.log("document.getElementById('1')).style", document.getElementById("1").style);
	}

function op4 () {
	op = "/";
	if (nums.length === 2) {dice[3] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
	console.log("document.getElementById('1')).style", document.getElementById("1").style);
	}

function op5 () {
	op = "concat";
	if (nums.length === 2) {dice[3] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
	console.log("document.getElementById('1')).style", document.getElementById("1").style);
	}

	var gCode = `
	function g(ar) {
	  var x = (ar.pop())**3;
	  ar.unshift(x);
	  return ar;
	};
	function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
	function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`

var monCode = `
var f = M([1,2,3,4])`

var demo = `
var mon3 = M([1,2,3,4]);
<h1>{mon3(s)}</h1>
<button on:click={() => fmon3(g)}>mon3(g)</button>
<button on:click={() => fmon3(g2)}>mon3(g2)</button>
<button on:click={() => fmon3(g3)}>mon3(g3)</button>
<button on:click={fmon3Reset}>Re-set mon3</button>
  WHERE fmon3 and fmon3Reset are:
    function fmon3 (f) {mon3 = mon3(f)};
    function fmon3Reset () {mon3 = M([1,2,3,4])}` ;

var demo2 = `
function g(ar) {
  var x = (ar.pop())**3;
  ar.unshift(x);
  return ar;
};
mon(g);
console.log("mon('stop')", mon('stop'));
VM4092:7 mon('stop') (4) [64, 1, 2, 3]     // As expected!`

var funcs = `
function fmon3 (f) {mon3 = mon3(f); return mon3}
function fmon3Reset () {mon3 = M([1,2,3,4])} `

var mon3 = M([1,2,3,4]);
function fmon3 (f) {mon3 = mon3(f)};
function fmon3Reset () {mon3 = M([1,2,3,4])}


var Mcode = `
      function M (x) {
        var choices = [];
        return function (func) {
          if (typeof func === "function") {x = func(x); return M(x)}
          else if (func === "stop") return x
        }
      }`

</script>

<style>
  h1 {text-align: center;}
</style>

<h1>_______________________________________________________________
***************************************************************
</h1>
<div style = "font-family: Times New Roman;  text-align: center; font-size: 38px;" transition:fade>
  Interacting With the Haskell Game of Score Server
  <br>
   <span style="font-style: italic; font-size: 34px">Using a JavaScript Ersatz Monad </span>
</div>

<p> This page will demonstrate the use of recursive explicit closures spawned by a function M defined below. I sometimes call these closures "monads" partly because, like Haskell monads, they facilitate composing functions on encapsulated values. More about this is at <a href="../Monads/">Home</a	></p>
<pre>{Mcode}</pre>
<p>I wrote "explicit" because all functions are closures, as explained in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">CLOSURES</a>. By the way, the word "ersatz" in the caption is there for critics who complain these aren't Category Theory monads. Some of these critics will be surprised to learn that Haskell monads aren't Catagory Theory monads either. </p>
<h2>The Project</h2>
<p> I want to devise an interactive simulated dice game using SvelteKit in the schalk.net Digitalocean droplet and the old "Game of Score" Haskell server located in the schalk.site droplet. The first thing I did was construct M (above) to spawn the monads that will be used to manipulate arrays of random integers simulating rolls of four dice; two are six-sided, one is twelve-sided, and one has twenty sides. </p>
<p> I'll test M with these functions:</p>
<pre>{gCode}</pre>
<p>After calling mon = M([1,2,3,4]), [...mon(s)] (a deep clone of mon) and mon(g)(g(g)(g)(g3)) both return [1,2,3,4]. You can verify this by clicking "mon3(g)" four times and "mon3(g3)" once. "
<h1>{mon3(s)}</h1>
<button on:click={() => fmon3(g)}>mon3(g)</button>
<button on:click={() => fmon3(g2)}>mon3(g2)</button>
<button on:click={() => fmon3(g3)}>mon3(g3)</button>
<button on:click={fmon3Reset}>Re-set mon3</button>
<p> Here's the code for the above demo:</p>
<pre>{demo}</pre>
<p>After mon = M([1,2,3,4]), [...mon(s)] (a deep clone of mon) and mon(g)(g(g)(g)(g3)) both return [1,2,3,4].

<p>The first test will use a function g(<array>) that pops the last element of the argument, tripples it, and inserts the result back into the array at index 0:</p>
<p>Pressing "F12" in the Chrome browser and testing code in the console gave the results below. First: </p>
<pre>{demo}</pre>
<p>No surprises there. Next, mon (defined above as an instance of the anonymous function returned by M) operates on the function g (above). </p>
<pre>{demo2}</pre>
<div> *********************************************** </div>
<div> Incoming A is {A} </div>
<div> *********************************************** </div>
<button id="1" style="display: {dis1}" on:click={b1}>{dice[0]}</button>
<button id="2" style="display: {dis2}" on:click={b2}>{dice[1]}</button>
<button id="3" style="display: {dis3}" on:click={b3}>{dice[2]}</button>
<button id="4" style="display: {dis4}" on:click={b4}>{dice[3]}</button>
<br /><br />
<button on:click={op1}>"+"</button>
<button on:click={op2}>"-"</button>
<button on:click={op3}>"*"</button>
<button on:click={op4}>"/"</button>
<button on:click={op5}>"concat"</button>
<br /><br />

<button on:click={() => (A = "")}>Clear A</button>
<br /><br />
<button on:click={() => (B = [])}>Clear B</button>

<input on:keydown={(v) => login(v)} />
<div>{C}</div>
<br /><br /><br />
<button on:click={rollFunc}>ROLL</button>
<br /><br /><br />
<div>{D}</div>
<br /><br /><br />
<p>nums array is {nums}</p>
<p>di array is {di}</p>
<p>dice array is {dice}</p>
{Z}
<p>{playerM}</p>
<p>{groupM}</p>
<p>{op}</p>
<h1>{mon3(s)}</h1>
<button on:click={() => fmon3(g)}>mon3(g)</button>
<button on:click={() => fmon3(g2)}>mon3(g2)</button>
<button on:click={() => fmon3(g3)}>mon3(g3)</button>
<button on:click={fmon3Reset}>Re-set mon3</button>

<button on:click={check}>CHECK</button>
{AA}
<br>
{BB}
<br>
{CC}
<br>
{DD}
<br>
{EE}
<br>
{FF}
<br><br><br>
<p> example using M will interact with the old server built for the Game of Score in 2014. Each roll of the dice results in four random numbers. By default, the numbers are two integers between 1 and 6, one between 1 and 12, and one between 1 and 20. The goal is to construct the number 20 in two or more operations using add, subtract, multiply, divide, and concatenate. With that in mind, x in our our first instance of M will will be an array of length 4. </p> -->
