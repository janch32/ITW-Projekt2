var heroPanel = document.getElementById("hero");
var header = document.getElementsByTagName("header")[0];

header.style.position = "fixed";

window.addEventListener("scroll", function(){
	if(heroPanel) heroPanel.style.backgroundPositionY = "center, " + (window.scrollY/2) + "px";
	header.className = window.scrollY > 10 ? "floating" : "";
});