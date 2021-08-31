<script>
// import store from '../store.js';
import { onMount } from 'svelte';
let A = 10000;
let B = 10000;
let C = 10000;
let D = 10000;
let E = "Enter the number in the text box to see the result.";

var socket1, socket2, handleKeydown1, handleKeydown2;


onMount(async () => {
    socket1 = new WebSocket('wss://schalk.site:3002');
    socket2 = new WebSocket('wss://schalk.site:3003');
    function start () {
handleKeydown1 = function handleKeydown1 (e) {
	console.log("The user generated this event", e.target.value);
	if (e.keyCode == 13) {
		A = e.target.value;
	    socket1.send(e.target.value);
		socket1.addEventListener('message', function (e) {
			B = e.data;
			D = e.data;
		    socket2.send(e.data);
            socket2.onmessage = function (e) {
				C = e.data;
				E = e.data;
			}
		}); 
	};
};
function func ()  {
	let x = socket1.readyState
	if (x !== 1) {
		console.log("Repeat");
		setTimeout(() => {
			func();
		},500)
	}
	else {
	socket1.send(10000);
		socket1.onmessage = function(e) {
			B = e.data;
			D = e.data;
		    socket2.send(e.data);
            socket2.onmessage = function (e) {
				C = e.data;
				E = e.data;
			}
		}
    }
}
func();
	
handleKeydown2 = function handleKeydown2 (e) {
	if (e.keyCode !== 13) {console.log("e.keyCode isn't 'Enter'")}
    else if (e.keyCode == 13) {
	    socket2.send(e.target.value);
		D = e.target.value;
		socket2.onmessage = function (e) {
			E = e.data;
			// A = D;
			B = E;
		};
    };
};
}
start();
});
let one = `function func ()  {
	let x = store.socket1.readyState
	if (x !== 1) {
		console.log("Repeat");
		setTimeout(() => {
			func();
		},500)
	}
	else {
	store.socket1.send(10000);
		store.socket1.onmessage = function(e) {
			B = e.data;
			D = e.data;
		    store.socket2.send(e.data);
            store.socket2.onmessage = function (e) {
				C = e.data;
				E = e.data;
			}
		}
    }
}
func();`;

let two = `<input type="text" on:keydown={handleKeydown1} />
<p></p>
<p>The number to evaluate: {D}</p>
<p></p>
<p>The prime factors of {D} are: {E}</p>
<p></p>
<h3>Enter a number to see its prime decomposition:</h3>
<input type="text" on:keydown={handleKeydown2} />
<p>The prime factors of {D} are {E}.</p>`;

let three = `let handleKeydown1 = function handleKeydown1 (e) {
	console.log("The user generated this event", e.target.value);
	if (e.keyCode == 13) {
		A = e.target.value;
	    store.socket1.send(e.target.value);
		store.socket1.onmessage = function(e) {
			B = e.data;
			D = e.data;
		    store.socket2.send(e.data);
            store.socket2.onmessage = function (e) {
				C = e.data;
				E = e.data;
			}
        }; 
    };
};`;

let four = `let handleKeydown2 = function handleKeydown2 (e) {
	if (e.keyCode !== 13) {console.log("e.keyCode isn't 'Enter'")}
    else if (e.keyCode == 13) {
	    store.socket2.send(e.target.value);
		D = e.target.value;
		store.socket2.onmessage = function (e) {
			E = e.data;
			// A = D;
			B = E;
		};
    };
}`;
let five = `import { writable } from 'svelte/store';

const messageStore = writable('');

const socket1 = new WebSocket('wss://schalk.site:3002');
const socket2 = new WebSocket('wss://schalk.site:3003');

export default {
	subscribe: messageStore.subscribe,
	socket1,
	socket2
}`
</script>

<p>This is an excercise in using WebSockets. A pseudo-random number is fetched from one WebSocket server and sent to another. The second server returns the prime decomposition of the pseudo-random number.</p>

<p></p>
<h3>Enter the upper limit for a pseudo-random number:</h3>
<input type="text" on:keydown={handleKeydown1} />
<p></p>
<p>The number to evaluate: {D}</p>
<p></p>
<p>The prime factors of {D} are: {E}</p>
<p></p>
<h3>Enter a number to see its prime decomposition:</h3>
<input type="text" on:keydown={handleKeydown2} />
<p>The prime factors of {D} are {E}.</p>
<p></p>
<p>I'll find out why indentations are getting skewed when I get around to it. Here's the function that gets things started when the application loads:</p>
<pre>{one}</pre>
<p>This is the code for the user interface:</p>
<pre>{two}</pre>
<p>These are the callback functions:</p>
<pre>{three}</pre>
<pre>{four}</pre>
And here's store:
<pre>{five}</pre>
