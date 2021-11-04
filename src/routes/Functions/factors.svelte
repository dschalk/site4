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
<p>This is just a little experiment in decomposing numbers into their prime factors without relying on the the modulo operator "%" or explicitely generating prime numbers. I haven't benchmarked it against traditional methods, but I doubt that it is more efficient. </p>
<p>This is in script tags:</p>
<pre>{display_main}</pre> 
<br><br><br>