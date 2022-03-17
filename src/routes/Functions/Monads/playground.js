
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
var WW;
var XX;
var YY;
var ZZ;
var ZYXW;
var WXYZ;
var m2;
var Z = "";

var fu;

function calc(aa,bb,c) {
var a = parseInt(aa,10);
var b = parseInt(bb,10);
if (c === "+") return (a + b);
if (c === "*") return (a * b);
if (c === "-") return (a - b);
if (c === "/") return (a / b);
if (c === "concat") return parseInt("" + a + b, 10);
}

function g(ar) {
  var x = (ar.pop())**3;
  ar.unshift(x);
  return ar;
};

fu = b => {
  var a = b;
  var result;
  if (a[1].length === 2 && a[2].length === 1)   {
    console.log("In fu. a[1]", a[1]);
    result = calc(a[1][0], a[1][1],a[2][0]);
    a[0].push(result);
    a[1] = [];
  }

  if (a[1].length === 3) {
    a[1].pop();
  }

  if (result == 20) {
    if (a[0].length < 3) {
      Z = "Congratulations! You made it.";
      setTimeout(() => Z = "", 2000);
      console.log("Z is", Z);
      runRoll();
    }
    else if (a[0].length === 3) {
      a[0].push(result)
      a[1] = a[2] = [];
      return a;
    }
    else return a;
  }
  return "done";
};

function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};

function clone (x) {return JSON.parse(JSON.stringify(x))};

var clean = a => a.map( ar => ar.filter(x => (x != (undefined && 0))));

var cleanB = a => a.filter(x => x != (undefined && 0));

function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
};

m2 = M( [ [0,6,0,223], [], []])

var roll = ar => {
  ar = [ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [] ];
  b4 = b5 = b6 = b7 = 'none';
};

function runRoll () {
  m2 = M( [ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [] ]);
  updateRoll();
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
  
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
   
  EE = m2(s)[2][0];
  console.log(AA,BB,CC,DD,WW,XX,YY,ZZ,EE);
  return "done";
}
async function run () {
    await m2(fu)
    update()
    sfunc();
}
var mon3 = M([1,2,3,4]);
function fmon3 (f) {mon3 = mon3(f)};
function fmon3Reset () {mon3 = M([1,2,3,4])}

var click0 = m => ar => {
    ar[1].push(ar[0].splice(0,1)[0]);
    update();
    sfunc();
    ar = ar;
    m(fu);
    return ar;
};

var click1 = m => ar => {
    ar[1].push(ar[0].splice(1,1)[0]);
    update();
    sfunc();
    ar = ar;
    m(fu);
    return ar;
};

var click2 = m => ar => {
    ar[1].push(ar[0].splice(2,1)[0]);
    update();
    sfunc();
    ar = ar;
    m(fu);
    return ar;
};

var click3 = m => ar => {
    ar[1].push(ar[0].splice(3,1)[0]);
    update();
    sfunc();
    ar = ar;
    m(fu);
    return ar;
};

function clic0 () {
  m2(click0);
  console.log("m2(s) in clic0 is", m2(s));
  console.log("m2(s) is", m2(s));
  update();
} 

function clic1 () {
  m2(click1);
  console.log("m2(s) in clic1 is", m2(s));
  update();
  console.log("m2(s) is", m2(s));
} 

function clic2 () {
  m2(click2);
  console.log("m2(s) in clic2 is", m2(s));
  update();
  console.log("m2(s) is", m2(s));
} 

function clic3 () {
  m2(click3);
  console.log("m2(s) in clic3 is", m2(s));
  update();
  console.log("m2(s) is", m2(s));
} 

function choose (index) {
    return click(index);
}

function m2Func () {console.log("In m2Func m2(s), b4, b5, b6 and b7 are", m2(s),b4,b5,b6,b7)};
var s = 'stop';
var m3 = M(3);
var cube = x => x**3;
var square = x => x*x;
var pow = n => x => x**n;
var add = n => x => x + n;
var mult = n => x => x * n;
console.log(m3(s));
console.log(m3(pow(3))(s));
console.log(m3(s));
console.log(m3(add(-6))(mult(2))(s));
console.log(m3(add(7))(pow(1/2))(mult(6))(s));
console.log(m3(s));
m2 = M([ [2,4,6,8], [], ['concat'] ])

console.log("m2(s)[0] ... ", m2(s)[0], m2(s)[1], m2(s)[2]);
    
m2(click2(m2));
console.log("m2(s)[0] ... ", m2(s)[0], m2(s)[1], m2(s)[2]);

m2(click1(m2));
console.log("m2(s)[0] ... ", m2(s)[0], m2(s)[1], m2(s)[2]);

m2(click2(m2));
console.log("m2(s)[0] ... ", m2(s)[0], m2(s)[1], m2(s)[2]);

m2(click0(m2));
console.log("m2(s)[0] ... ", m2(s)[0], m2(s)[1], m2(s)[2]);

run();

console.log("after run(). m2(s)[0] ... ", m2(s)[0], m2(s)[1], m2(s)[2]);



var fmon = f => x => x(f);
var reset = x => [1,2,3,4]

mon3 = M([1,2,3,4]);

console.log("mon3(g)(g)(g)(g)", mon3(g)(g)(g)(g)(g3)(s))
