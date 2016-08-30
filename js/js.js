//time
var body = document.body;
var h2 = document.createElement('h2');
body.appendChild(h2);
var timerId = setInterval(function() {
	var now = new Date();
	h2.innerHTML = now.getHours()+":"+now.getMinutes()+":"+ now.getSeconds();

},1);
