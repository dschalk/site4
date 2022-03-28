
var A,B,C,D,AA,BB,CC,DD,EE,FF,GG,HH = "wait";
var N = 0;

var s = 'stop';

function M (x) {
      return function (func) {
              if (typeof func === "function") return M(func(x))
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

var f = a => b => c => {c.splice(a,1,b)}
function fo (a,b) {return f(a)(b)};

var A = {op:null, ar: [], arr: [1,2,3,4]};
var s = 'stop'
var mon = M([1,2,3,4]);
var ar = [1,2,3,4];
var fu = a => b => {
A.ar.concat(b.splice(a,1));
A.arr = b;
return b;
}
mon(fu(2));
console.log(A);
mon(s)
var d = fu(2)(ar)
console.log("d is",d,"and ar is",ar)
console.log("A.ar is",A.ar);
console.log("A.arr is",A.arr);
var z = [1,2,3,4];
var a = z.splice(1,1);
console.log("z and a", z, a);

var R6, R66, R12, R20
function roll (a,b,c,d) {
R6 =	Math.floor(Math.random()*a) + 1
R66 =	Math.floor(Math.random()*b) + 1
R12 = Math.floor(Math.random()*c) + 1
R20 = Math.floor(Math.random()*d) + 1
}
var O = { A: [1,2,3,4], B: [], C: [], op: 'concat'}

function compute () {
if (O.B.length === 2 && O.op !== 'empty') {
  var z = calc(O.B[0], O.B[1], O.op);
  O.A.push(z);
  O.C.push(z);
  O.B = [];
  console.log("A, B, C and op", O.A, O.B, O.C, O.p);
}
}

var s = "stop";

function M2 (x) {
return function go (func) {
if (typeof func === "function") {
  func(x);
  console.log("zzzzzzzzzzzzzzzzzzz", x);
  O.A = x;
  return M2(x);
}
else if (func === "stop") return x;
}
}
var mon2 = M2([1,2,3,4]);


function calc(aa,bb,c) {
var a = parseInt(aa,10);
var b = parseInt(bb,10);
if (c === "+") return (a + b);
if (c === "*") return (a * b);
if (c === "-") return (a - b);
if (c === "/") return (a / b);
if (c === "concat") return parseInt("" + a + b, 10);
}

var s = "stop";
var mon2 = M2([2,4,6,8]);
console.log("mon2 and mon2(s) are", mon2, mon2(s));

var num = n => ar => {
O.B.push(ar.splice(n,1));
};

mon2(num(2));
mon2(num(1));
compute();
console.log("mon2(s) is ", mon2(s));

console.log("O is", O);

