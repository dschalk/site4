<script>
let N = 1;
let ar = [];

var first = function first (e) {
    ar = [];
    if (e.keyCode == 13) {
        let num = parseInt(e.target.value);
        main(num);
    };
};

let i = 2;

function main (n) {
    if (n === 1) return;
    N = n;
    var buf = new ArrayBuffer(Math.ceil(N/8));
    var view = new Uint8Array(buf); 
    var top = Math.ceil(Math.sqrt(N));
    let i = 2;
    for(i; i <= N; i+=1){
        if(test(view, i)) {
            for(let j = i; j <= N; j+=i) {
                set(view, j);
                if (j === N) {
                    ar.push(" " + i);
                    N = N / i;
                    main(N);
                }
            }
        }
    }
};

function set(ar,i) {
  var a = Math.floor(i / 8)
  var b = i % 8
  ar[a] |= (1 << b)
};

function test (ar,i) {
  var a = Math.floor(i / 8);
  var b = i % 8;
  var value = ar[a] & (1 << b);
  return value === 0;
}
var display_main = `function main (n) {
    if (n === 1) return;
    N = n;
    var buf = new ArrayBuffer(Math.ceil(N/8));
    var view = new Uint8Array(buf); 
    var top = Math.ceil(Math.sqrt(N));
    let i = 2;
    for(i; i <= N; i+=1){
        if(test(view, i)) {
            for(let j = i; j <= N; j+=i) {
                set(view, j);
                if (j === N) {
                    ar.push(" " + i);
                    N = N / i;
                    main(N);
                }
            }
        }
    }
};

function set(ar,i) {
  var a = Math.floor(i / 8)
  var b = i % 8
  ar[a] |= (1 << b)
};

function test (ar,i) {
  var a = Math.floor(i / 8);
  var b = i % 8;
  var value = ar[a] & (1 << b);
  return value === 0;
}`;

let N2 = 1;
let ar2 = [];

var first2 = function first (e) {
    ar2 = [];
    if (e.keyCode == 13) {
        let num = parseInt(e.target.value);
        main2(num);
    };
};

function main2 (n) {
    N2 = n;
    for(let i = 2; i <= N2; i+=1){
        while (N2 % i === 0) {
            ar2.push(" " + i);
            N2 = N2 / i;
            if (N2 == 1) return
        }
    }
};
var code = `let N2 = 1;
let ar2 = [];

var first2 = function first (e) {
    ar2 = [];
    if (e.keyCode == 13) {
        let num = parseInt(e.target.value);
        main2(num);
    };
};

function main2 (n) {
    N2 = n;
    for(let i = 2; i <= N2; i+=1){
        while (N2 % i === 0) {
            ar2.push(" " + i);
            N2 = N2 / i;
            if (N2 == 1) return
        }
    }
}`;
</script>

<style>
    input {
        margin-left: 5%;
        size: 16px;
        font-size: 22px;
    }
    .marg {
        margin-left: 5%;
        font-size: 22px;    
    }
    p {font-size: 24px}
    pre {font-size: 22px}
</style>
<br><br>
<p>Enter a number between 2 and not much greater than a billion.</p>
<input type="text" on:keydown={first} />
<br>
<h3 class = "marg">{ar}</h3>
<p>This is just a little experiment in decomposing numbers into their prime factors without relying on the the modulo operator "%" or explicitely generating prime numbers.</p>
<p>This is in script tags:</p>
<pre>{display_main}</pre> 
<p>Enter a number between 2 and a quintillion.</p>
<input type="text" on:keydown={first2} />
<h3 class = "marg">{ar2}</h3>;
<p>The function main2 is clearly far superior to main (above). As the target gets bigger, it quickly leaves main struggling or crashing in its dust.</p>
<p>Here's the code:</p>
<pre>{code}</pre>
