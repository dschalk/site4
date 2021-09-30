
<div >  
<nav>
    <ul>
    <li>
        <a href="/">Home</a>    
    </li>

    <li>
        <a href="/Functions">Functions</a>
    </li>
    
    <li>
        <a href="/Mahjong">Riichi Mahjong</a>
    </li>

</ul>
</nav>
</div>
<style>
.container {margin-right: 10px}
ul {
    display:flex;
    list-style: none;
    margin: 0;
    font-size: 14px;
}
li {margin-right: 10px}
		:global(body) {
		/* this will apply to <body> */
		margin-right: 12%;
		margin-left:15%;
		padding-right:3%;
		padding-left: 3%;
		background-color: #DDD;
	}
		:global(html) {
		/* this will apply to <body> */
		background-color: #BBB;    
	}
</style>
<div> </div>
<div class ="container"><slot /></div>