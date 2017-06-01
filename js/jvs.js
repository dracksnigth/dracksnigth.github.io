/**
*
*/
function pageLoad(){
	var ok = document.getElementById("ok");
	ok.onclick = okayclick;
}

function okayclick(){
	var imgxd = document.getElementById("ico1");
	imgxd.src = "img/2.jpg"
}


var link = document.getElementById("fb-link");
link.innerHTML = "MySpace is back in a really buig way";

window.onload = pageLoad;