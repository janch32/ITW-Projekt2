var heroPanel = document.getElementById("hero");
var brnoPanel = document.getElementById("brno");
var dealPanel = document.getElementById("deal");
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
		if(dealPanel) dealPanel.style.backgroundPositionY = ((window.scrollY - dealPanel.offsetTop)/2) + "px";
	}
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(key){
	var cookie = document.cookie.split(";");
	for(var i = 0; i < cookie.length; i++){
		var pair = cookie[i];
		var data = pair.split("=");
		if(data[0].trim() == key) return data[1];
	}
	return null;
}

function getSavedState(id){
	return getCookie("savestate" + id) == "1";
}

function setSavedState(id, state){
	setCookie("savestate"+id, state);
}

function stateClickEvent(){
	var saveid = this.parentElement.getAttribute("saveid");
	if(this.parentElement.className.indexOf("hide") > 0){
		this.parentElement.className = this.parentElement.className.split(" ")[0];
		setSavedState(saveid, "1");
	}else{
		this.parentElement.className += " hide";
		setSavedState(saveid, "0");
	}
}

var toggleState;
var showmoreElements = document.getElementsByClassName("showmore");
for(var i = 0; i < showmoreElements.length; i++){
	var element = showmoreElements[i];
	var saveid = element.getAttribute("saveid");
	if(!getSavedState(saveid)) element.className += " hide";
	
	var button = element.getElementsByClassName("toggleshow")[0];
	button.addEventListener("click", stateClickEvent);

}