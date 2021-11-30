

<script>
import { onMount } from 'svelte';
let A = 10000;
let B = 10000;
let C = 10000;
let D = 10000;
let E = "Enter the number in the text box to see the result.";
var socket1, socket2, handleKeydown1, handleKeydown2;
let O = {a: 1, b:2, c:3};
onMount(() => {
    socket1 = new WebSocket('wss://schalk.site:3002');
    socket2 = new WebSocket('wss://schalk.site:3003');
    function start () {
        handleKeydown1 = function handleKeydown1 (e) {
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
                    B = E;
                };
            };
        };
    }
    start();
});

let code = `onMount(() => {
    socket1 = new WebSocket('wss://schalk.site:3002');
    socket2 = new WebSocket('wss://schalk.site:3003');
    function start () {
        handleKeydown1 = function handleKeydown1 (e) {
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
                    B = E;
                };
            };
        };
    }
    start();
}); `;

var setup = `import { onMount } from 'svelte';
let A = 10000;
let B = 10000;
let C = 10000;
let D = 10000;
let E = "Enter the number in the text box to see the result.";
var socket1, socket2, handleKeydown1, handleKeydown2; `;
var html = `<h3>Enter the upper limit for a pseudo-random number:</h3>
<input type="text" on:keydown={handleKeydown1} />
<p></p>
<p>The number to evaluate: {D}</p>
<p></p>
<p>The prime factors of {D} are: {E}</p>
<p></pI'm just experimenting with Replit here. The first example shows how to add and subtract binary numbers using C++ and bitwise operators. ><h3>Enter a number to see its prime decomposition:</h3>
<input type="text" on:keydown={handleKeydown2} />
<p>The prime factors of {D} are {E}.</p> `;
</script>
<h3>Enter the upper limit for a pseudo-random number:</h3>
<input type="text" on:keydown={handleKeydown1} />
<br>
<p>The number to evaluate: {D}</p>
<p>The prime factors of {D} are: {E}</p>
<h3>Enter a number to see its prime decomposition:</h3>
<input type="text" on:keydown={handleKeydown2} />
<p>The prime factors of {D} are {E}.</p>
Here's how the script begins:
<pre>{setup}</pre>
<p>The work is done in a single function named "start" placed in "onMount."  Here's the code:</p>
<pre>{code}</pre>
<p>Finally, Here's the HTML:</p>
<pre>{html}</pre>
<br>
<p>The code isn't annotated, but the key to understanding it is that socket1 returns a pseudo-prine number and socket2 returns the prime factors of the integer it receives. The purpose of this page is to show one way of using WebSockets in SvelteKit. </p>

