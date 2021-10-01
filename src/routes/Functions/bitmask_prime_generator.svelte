
<script>
const buf = new ArrayBuffer(50000);
const view = new Uint32Array(buf);
var A = [];

function set(i) {
  var a = Math.floor(i / 32)
  var b = i % 33
  view[a] = view[a] | (1 << b)
};

function clear(vec, i) {
  var a = Math.floor(i / 32)
  var b = i % 32
  vec[a] = vec[a] & ~(1 << b)
}

function test (i) {
  var a = Math.floor(i / 32);
  var b = i % 32;
  var value = view[a] & (1 << b);
  return value === 0;
}

function sieve (N) {
    A = "";
    var max = Math.sqrt(N) + 1
    for(let i = 2; i < max; i+=1){
		if(test(i)) {
            for(let j = 2*i; j < N; j+=i) {
                set(j);
            }
	    }
    }
	for(let i = 2; i < N; i++) {
		if(test(i)) A = A + i + ", "; //console.log(i);
    }
}
// sieve(view, 1000);


var primes = function primes (e) {
    if (e.keyCode == 13) {
        let num = parseInt(e.target.value);
        sieve(num);
    };
};

var func = `function sieve (N) {
  A = "";;
  var max = Math.sqrt(N) + 1
  for(let i = 2; i < max; i+=1){
    if(test(i)) {
      for(let j = 2*i; j < N; j+=i) {
        set(j);
      }
    }
  }
  for(let i = 2; i < N; i++) {
    if(test(i)) A = A + i + ", "; //console.log(i);
  } `;

var buffer = `const buf = new ArrayBuffer(50000);
const view = new Uint32Array(buf)`;

var masks = `function set(i) {
  var a = Math.floor(i / 32)
  var b = i % 32
  view[a] = view[a] | (1 << b)
};

function test (i) {
  var a = Math.floor(i / 32);
  var b = i % 32;
  var value = view[a] & (1 << b);
  return value === 0;
}`;

</script>
<h3>Efficient Generation of Prime Numbers</h3>
<p>This demonstration runs the <a href = "https://en.wikipedia.org/wiki/sieve_of_Eratosthenes">working with single bits rather than 32-bit numbers.</a> The function "sieve" uses an ArrayBuffer, accessed by a Uint32Array named "view". view() holds 12,500 32-bit integers, each bit holding the key to a positive integer. That's 12,500 * 32 = 400,000 bits so the demonstration can find all the prime numbers under any designated upper bound, as long as it doesn't exceed 400,000.</p> 
<p> The integers in view all start out as zeros. Each time a prime number is identified, all of its multiples up to a designated bound are set to "1". The 0's left over at the end correspond to prime numbers. This is the sieve of Eratosthenes working with great efficiency.  </p>  
<p>Each number, call it "NUM", up to the user-designated limit is in one bit of a 32-bit integer in the Uint32Array "view". Let's say Num is in view[n] where its position can be ascertained and its value changed with bit masks. view[n] is a binary number and its 32 bits are, therefore, not indexed. That's not a problem because NUM can easily be examined and flipped using bit masks.  NUM's precise location in view[n] is resolved into the pair "n,j" pair for lookup, where n is the index in view and j is the position in view[n]. If NUM's value is still 0 after the sieve has run its course, it's a prime number. This is an efficient algorithm. I entered 300000 below and quickly scrolled down to see that the largest prime number less than 300,000 is 299,993. There's no limit to how many integers can be stored in a Uint32Array. Number.MAX_SAFE_INTEGER is 9007199254740991 but given a powerful enough computer and enough time, the largest prime number less than a humongous bigInt much larger than MAX_SAFE_INTEGER could be computed. </p>

<input type="text" on:keydown={primes} />
<p>{A}</p>

<p style = "indent: 3%"><a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">Mozilla Developer Network</a> says, "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer." and "It is an array of bytes, often referred to in other languages as a "byte array".You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer." This is the foundation on which this demo rests:  </p>
<pre>{buffer}</pre>

<div>And here's the function "sieve":</div>
<pre>{func}</pre>
<div>These are the functions that set bits and report the status of bits:</div>
<pre>{masks}</pre>
<br><br><br>
<br><br><br>
<br><br><br>
<slot></slot>
