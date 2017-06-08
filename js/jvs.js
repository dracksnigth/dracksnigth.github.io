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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}