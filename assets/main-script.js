var heroPanel = document.getElementById("hero");
var brnoPanel = document.getElementById("brno");
var careerPanel = document.getElementById("career");
var header = document.getElementsByTagName("header")[0];

header.style.position = "fixed";


var onScroll = function(){
	header.className = window.scrollY > 10 ? "floating" : "";
}

if(	window.navigator.userAgent.indexOf("Trident")<0 &&
	window.navigator.userAgent.indexOf("Edge")<0){
	var originalonScroll = onScroll;
	onScroll = function(){
		originalonScroll();
		if(heroPanel) heroPanel.style.backgroundPositionY = "center, " + (window.scrollY/2) + "px";
		if(brnoPanel) brnoPanel.style.backgroundPositionY = ((window.scrollY - brnoPanel.offsetTop-150)/2) + "px";
		if(careerPanel) careerPanel.style.backgroundPositionY = ((window.scrollY - careerPanel.offsetTop)/2) + "px";
	}
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
//onScroll();