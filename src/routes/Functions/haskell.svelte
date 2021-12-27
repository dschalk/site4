<svelte:head>
	<title>Haskell Programming Language</title>
</svelte:head>

<script>
import {fade} from "svelte/transition";

import { onMount } from 'svelte';
let A = 10000;
let B = 10000;
let C = 10000;
let D = 10000;
let F = 10000;
let G = 10000;
let H = 10000;
let E = "Please enter a name here for the chat app (registration is unnecessary):";
var socket, login, handleKeydown, handleKeydown2, handleKeydown3, handleKeydown4;

let creature = ["samantha"];
let profile = ["species"]
onMount(() => {
    socket = new WebSocket('wss://two.schalk.site'); 
    socket.onmessage = e => {
        console.log(e);
        B = e.data;
    }
    socket.onerror = e => console.log(e);
    login = function login (e) {
            if (e.keyCode == 13) {
                A = e.target.value;
                socket.send("CC#$42"+A);
                socket.onmessage = e => {
                    B = e.data;
                    D = e.data;
                }
            }; 
        };
      
    handleClick = function handleKeydown () {
            if (e.keyCode == 13) {
                socket.send(["CB#$42,"+creature+","+profile]);
                D = e.target.value;
                socket.onmessage = function (e) {
                    E = e.data;
                    B = E;
                };
            };
        };
    });
</script>

<div style = "font-family: Times New Roman;  text-align: center; font-size: 38px;" transition:fade>
    <br>
  Haskell Programming Language
</div>

<div>{A}</div>
<div>{B}</div>
<div>{creature}</div>
<div>{profile}</div>
<div>{E}</div>

<input type="text" on:keydown={login} />
<br><br>

<h2>Creature</h2>

<label>
	<input type=radio bind:group={creatures} value={"samantha"}>
	Samantha
</label>

<label>
	<input type=radio bind:group={creatures} value={"bob"}>
	Bob
</label>

<label>
	<input type=radio bind:group={creatures} value={"sally"}>
	Sally
</label>

<label>
	<input type=radio bind:group={creatures} value={"fido"}>
	Fido
</label>

<label>
	<input type=radio bind:group={creatures} value={"alex"}>
	Alex
</label>

<br><br>

<h2>Creature</h2>

<label>
	<input type=radio bind:group={profile} value={"species"}>
	Species
</label>

<label>
	<input type=radio bind:group={profile} value={"sex"}>
	Sex
</label>

<label>
	<input type=radio bind:group={profile} value={"age"}>
	Age
</label>

<button 






