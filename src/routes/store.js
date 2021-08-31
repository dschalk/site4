
import { writable } from 'svelte/store';
import { onMount } from 'svelte';
const messageStore = writable('');

var socket1;
var socket2;

onMount(async () => {
    socket1 = new WebSocket('wss://schalk.site:3002');
    socket2 = new WebSocket('wss://schalk.site:3003');
});

export default {
	subscribe: messageStore.subscribe,
	socket1,
	socket2
}






/*import { writable } from 'svelte/store';

const messageStore = writable('');

const socket = new WebSocket('wss://schalk.site:3002');

// Connection opened
socket.addEventListener('open', function (event) {
    console.log("It's open");
});

// Listen for messages
socket.addEventListener('message', function (event) {
    messageStore.set(event.data);
});

const sendMessage = (message) => {
	if (socket.readyState <= 1) {
		socket.send(message);
	}
}


export default {
	subscribe: messageStore.subscribe,
	sendMessage
}
*/

