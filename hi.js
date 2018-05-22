
function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
 
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
function xacdinh(){
	var d=new Date();
    if(d.getDay==0){
    document.getElementById("cn").className="hii"}	
	else if(d.getDay()==1){document.getElementById('t2').className="hii";}
	else if(d.getDay()==2){document.getElementById('t3').className="hii";}
	else if(d.getDay()==3){document.getElementById("t4").className="hii";}
	else if(d.getDay()==4){document.getElementById("t5").className="hii";}
	else if(d.getDay()==5){document.getElementById("t6").className="hii";}
	else if(d.getDay()==6){document.getElementById("t7").className="hii";}
}
