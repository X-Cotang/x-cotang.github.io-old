<html>
<head>

<title>Xcotang</title>
<style>
body{
    background-image:url( "pexels-photo-874619.jpeg");	
    background-size:cover;
    background-repeat:no-repeat;			
    background-attachment:fixed;			
    background-position:center;			
}
.hi{
     text-align: center;
     height:75px;
     width: 150px;
}
.hii{
	text-align: center;
     height:75px;
     width: 150px;
	 color:#fe0689;
}
.sidenav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0;
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover, .offcanvas a:focus{
    color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
    transition: margin-left .5s;
    padding: 20px;
    overflow:hidden;
    width:100%;
}
body {
  overflow-x: hidden;
}

/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
    background-color: #4CAF50;
    color: white;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}

a svg{
  transition:all .5s ease;

  &:hover{
    #transform:rotate(180deg);
  }
}

#ico{
  display: none;
}

.menu{
  background: #000;
  display: none;
  padding: 5px;
  width: 320px;
  @include border-radius(5px);

  #transition: all 0.5s ease;

  a{
    display: block;
    color: #fff;
    text-align: center;
    padding: 10px 2px;
    margin: 3px 0;
    text-decoration: none;
    background: #444;

    &:nth-child(1){
      margin-top: 0;
      @include border-radius(3px 3px 0 0 );
    }
    &:nth-child(5){
      margin-bottom: 0;
      @include border-radius(0 0 3px 3px);
    }

    &:hover{
      background: #555;
    }
  }
}
.xacnhan{
	background-color: #333;
    border: none;
    color: white;
    height: 30px;
	width:10%;
}
input.xacnhan:hover{
	background-color:#878787;
}
fieldset {
	margin: 5% 0;
}
.cvnut{
	width: 10%;
    margin: 1% auto;
    background-color: #333;
    border: none;
    height: 25px;
    color: white;
}
.cvinp{
	width:90%;
}
input.cvnut:hover{background-color:#878787;}
</style>
<script type="text/javascript" src="hi.js"></script>
<iframe src="https://www.nhaccuatui.com/mh/background/U2O3UdKGztFR" allowfullscreen="" width="1" height="1" frameborder="0"></iframe>
</head>
<body>
<div id="sideNavigation" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="https://www.facebook.com/cb.xct" onclick="closeNav()">About</a>
  <a href="#"onclick="closeNav()">Features</a>
  <a href="#"onclick="closeNav()">Contact Me</a>
  <a href="#b64" onclick="closeNav()">En-Decode</a>
</div>

<nav class="topnav">
  <a href="#" onclick="openNav()">
    <svg width="30" height="30" id="icoOpen">
        <path d="M0,5 30,5" stroke="#000" stroke-width="5"/>
        <path d="M0,14 30,14" stroke="#000" stroke-width="5"/>
        <path d="M0,23 30,23" stroke="#000" stroke-width="5"/>
    </svg>
  </a>
  <p style="text-align:center;font-family:cursive,florence;font-weight:bolder;font-size:25px;color:#aba0a0;height:5px;text-shadow:5px 3px 4px #9f5555;margin-top: 15px;font-style:italic" title="Now You see me">~XcoTang~</p>

</nav>

<div id="main"></div>
 <h1 style="text-align: center;height: 10px;;">Thời Khóa Biểu</h1>
    <p style="text-align: center;padding-top: 0px;" id="ngay"></p>
<div style="margin-bottom:5%"><table border="1px" cellpadding="0px" cellspacing="0px" width="50%" align="center">
		<tr class="hi" style=" font-size: 20px;">
			<th class="hi" id="t2" >
				Thứ Hai
			</th>
			<th class="hi" id="t3">
				Thứ Ba
			</th>
			<th class="hi" id="t4">
				Thứ Tư
			</th>
			<th class="hi" id="t5">
				Thứ Năm
			</th>
			<th class="hi" id="t6">
				Thứ Sáu
			</th>
			<th class="hi" id="t7">
				Thứ Bảy
			</th>
			<th class="hi" id="cn">
				Chủ Nhật
			</th>
		</tr>
		<tr class="hi">
			<td><strong>Toán A2</br>203-TA2</strong></td><td><b>Toán A2</br>304-TA2</b></td><td>Nghỉ</td><td><b>Đường Lối</br>304-TA2</b></td><td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td>		</tr>
		<tr class="hi">
			<td><strong>Kỹ Năng</br>204-TA2</strong></td><td>Nghỉ</td><td><strong>Đường Lối</br>304-TA2</strong></td><td><strong>Lập Trình</br>203-TA4</strong></td><td><b>Đường Lối</br>304-TA2</b></td><td>Nghỉ</td><td>Nghỉ</td>		</tr>  	
		<tr class="hi">
			<td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td>		</tr>  	
		<tr class="hi">
			<td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td><td>Nghỉ</td>		</tr>
 	</table></div>
	<hr>
	<p id="test">Test</p>
	<div style="margin:5% 0 5%">
	<fieldset>
	<legend>Base64 Encode-Decode</legend>
	<textarea type="text" id="b64" style="width:100%;margin:auto" rows="5"></textarea>
	<input type="submit" onclick="b64()" value="Encode" class="xacnhan">
	<input type="submit" onclick="d64()" value="Decode" class="xacnhan">
	</fieldset>
	
	<fieldset>
	<legend>Converter</legend>
	<input type="submit" onclick="bina()" value="Binary" class="cvnut"><input type="text" id="bina" class="cvinp"></br>
	<input type="submit" onclick="octa()" value="Octal" class="cvnut"><input type="text" id="octa" class="cvinp"></br>
	<input type="submit" onclick="deci()" value="Decimal" class="cvnut"><input type="text" id="deci" class="cvinp"></br>
	<input type="submit" onclick="hexa()" value="Hex" class="cvnut"><input type="text" id="hexa" class="cvinp"></br>
	</fieldset>
	</div>

	<script>
	window.onload=xacdinh();
	</script>
	
	</body>
</html>
