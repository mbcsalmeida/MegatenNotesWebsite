function sizeMain(){
	if(document.body.clientWidth <= 1000){
		document.getElementById("menu").style.display = "none";
		document.getElementById("home").style.width = "97vw";
		document.getElementById("home").style.float = "none";
		document.getElementById("sub-nav").style.display = "block";
	}
	else{
		document.getElementById("menu").style.display = "initial";
		document.getElementById("home").style.width = "60%";
		document.getElementById("home").style.float = "right";
		document.getElementById("sub-nav").style.display = "none";
	}
}

function sizeNotes(){
	if(document.body.clientWidth <= 1000){
		document.getElementById("menubar").style.display = "none";
		document.getElementById("main").style.width = "100%";
		document.getElementById("index").style.display = "none";
		document.getElementById("sub-nav").style.display = "block";
	}
	else{
		document.getElementById("menubar").style.display = "initial";
		document.getElementById("main").style.width = "100%";
		document.getElementById("index").style.display = "initial";
		document.getElementById("sub-nav").style.display = "none";
	}
	
	
}

function onClickToggle(){
	var x = document.getElementById("toggle-contents");
	if(x.style.display === "none"){
		x.style.display = "block";
	}
	else{
		x.style.display = "none";
	}
}