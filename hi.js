 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function b64(){
	var x=document.getElementById("b64").value;
	document.getElementById("b64").value=btoa(x);
}
function d64(){
	var x=document.getElementById("b64").value;
	document.getElementById("b64").value=atob(x);
}
