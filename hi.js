
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
	document.getElementById("ngay").innerHTML=Date();
	var d=new Date();
    if(d.getDay==0){
    document.getElementById("cn").className="hii"}	
	else if(d.getDay()==1){document.getElementById("t2").className="hii";}
	else if(d.getDay()==2){document.getElementById("t3").className="hii";}
	else if(d.getDay()==3){document.getElementById("t4").className="hii";}
	else if(d.getDay()==4){document.getElementById("t5").className="hii";}
	else if(d.getDay()==5){document.getElementById("t6").className="hii";}
	else if(d.getDay()==6){document.getElementById("t7").className="hii";}
}
function conV(x,y){
	z=0;
	v=x.length-1;
    for(i=0;i<=v;i++){
	a=x[i];
	if(x[i]=="a"){a="10";}
	if(x[i]=="b"){a="11";}
	if(x[i]=="c"){a="12";}
	if(x[i]=="d"){a="13";}
	if(x[i]=="e"){a="14";}
	if(x[i]=="f"){a="15";}
	z+=Number(a)*Math.pow(y,v-i);
    }
	document.getElementById("deci").value=z;
	document.getElementById("bina").value=(z).toString(2);
	document.getElementById("hexa").value=(z).toString(16);
	document.getElementById("octa").value=(z).toString(8);
}
function hexa(){
	x=document.getElementById("hexa").value;
	conV(x,16);
}
function octa(){
	x=document.getElementById("octa").value;
	conV(x,8);
}
function bina(){
	x=document.getElementById("bina").value;
	conV(x,2);
}
function deci(){
	x=document.getElementById("deci").value;
	conV(x,10);
}
