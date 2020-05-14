
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
	getLength()
}
function d64(){
	var x=document.getElementById("b64").value;
	document.getElementById("b64").value=atob(x);
	getLength()
}
function urlencode(b){
	var x=document.getElementById("b64").value;
	if(b==0){
		document.getElementById("b64").value=encodeURI(x);
	}else{
		document.getElementById("b64").value=encodeURIComponent(x);
	}
	getLength()
}
function urldecode(b){
	var x=document.getElementById("b64").value;
	if(b==0){
		document.getElementById("b64").value=decodeURI(x);
	}else{
		document.getElementById("b64").value=decodeURIComponent(x);
	}
	getLength()
}
function upperAndLower(b){
	var x=document.getElementById("b64").value;
	if(b==0){
		document.getElementById("b64").value=x.toLocaleUpperCase();
	}else{
		document.getElementById("b64").value=x.toLocaleLowerCase();
	}
	getLength()
}
function reverseString() {
	var x=document.getElementById("b64").value;
    document.getElementById("b64").value=x.split("").reverse().join("");
}

function getLength(){
	var x=document.getElementById("b64").value;
	document.getElementById("id_length").value=x.length;
}
function xacdinh(){
	document.getElementById("ngay").innerHTML=Date();
	var d=new Date();
    if(d.getDay()==0){
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
function dkdn(x){
	
	if(x==0){
	$("#fieldset").html('<p class="dangnhap" style="color:white">Họ Tên</p><input class="dangnhap" type="text" id="ten"  required ><p class="dangnhap" style="color:white">Tài Khoản</p><input class="dangnhap" type="text" id="taiKhoanDk" ><p class="dangnhap" style="color:white">Mật Khẩu</p><input class="dangnhap" type="password" id="passDk" required ><p class="dangnhap" style="color:white">Nhập Lại Mật Khẩu</p><input class="dangnhap" type="password" id="repassDk" required><p class="dangnhap" style="color:white">Email</p><input type="email" id="email" class="dangnhap" required><input align="center" type="submit" value="Đăng Ký" class="xacnhan" style="margin-left:32px" onclick="dk()"><a style="font-size:15px" href="#" onclick="dkdn(1)">Đăng Nhập !</a>');
	}else if(x==1){
		$("#fieldset").html('<form action="../test/dndk/dangnhap.php" method="POST"><p class="dangnhap" style="color:white">Tài Khoản</p><input class="dangnhap" type="text" name="taiKhoanDn" ><p class="dangnhap" style="color:white">Mật Khẩu</p><input class="dangnhap" type="password" name="passDn" ><input name="sub2" align="center" type="submit" value="Đăng Nhập" class="xacnhan" style="margin-left:32px"></form><a href="#" style="font-size:15px" onclick="dkdn(0)" id="dangky">Đăng ký !</a>');
	}
}

function toHex(s) {
    // String to hex
    var s = unescape(encodeURIComponent(s))
    var h = ''
    for (var i = 0; i < s.length; i++) {
        h += s.charCodeAt(i).toString(16)
    }
    return h
}

function dk(){
	//var data=new FormData($('#'))
	$('#taiKhoanDk').css( "border", "1px solid white" );
	$('#passDk').css( "border", "1px solid white" );
	$('#repassDk').css( "border", "1px solid white" );
	$('#ten').css( "border", "1px solid white" );
	$('#email').css( "border", "1px solid white" );
	$.ajax({
                    url : "../test/dangky.php",
                    type : "post",
                    dataType:"json",
                    data : {
                        sub1:"Đăng ký",
						taiKhoanDk:$('#taiKhoanDk').val(),
						passDk:$('#passDk').val(),
						repassDk:$('#repassDk').val(),
						ten:$('#ten').val(),
						email:$('#email').val(),
                    },
                    success : function (result){
                        //$('#result').html(result);
					  // var t="";
					   //t+="'"+result+"'";
						//var obj=JSON.parse(t);
						//$('#result').html(t);
						//if(obj.tk=='1'){$('#result').html("chưa nhập tên tài khoản");}
                    //$.each(result,function(key,item){
						//;
					//});
					if(result.success=='1'){
					$("#fieldset").html('<p style="padding-left:32px;color:white;">Đăng ký thành công!!^-^</p><a style="font-size:15px" href="#" onclick="dkdn(1)">Đăng Nhập !</a>')	;
					
	
					}else{
					if(result.tk=='1'){$('#taiKhoanDk').css( "border", "1px solid red" );}
					if(result.mk=='1'){$('#passDk').css( "border", "1px solid red" );$('#repassDk').css( "border", "1px solid red" );}
					if(result.ten=='1'){$('#ten').css( "border", "1px solid red" );}
					if(result.email=='1'){$('#email').css( "border", "1px solid red" );}
					}
					
					}
               
            });}
			
