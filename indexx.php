<!DOCTYPE html>
<html lang="vi-VN">
	<!dung de cong cu tim kiem biet ngon ngu cua trang web>
	<html>
	<head>
	<meta  http-equiv=”Content-Type” content=”text/html; charset="UTF-8"/>
	<title>
	Hello
	</title>
	<style>
	body {			background-image:url( "https://images.pexels.com/photos/874619/pexels-photo-874619.jpeg ");			background-size:cover;			background-repeat:no-repeat;			background-attachment:fixed;			background-position:center			}            .hi{                text-align: center;                height:75px;                width: 150px;                            }			.sidenav {			height:100%; /* 100% Full-height */			width:0; /* 0 width - change this with JavaScript */			position:fixed; /* Stay in place */			z-index:1; /* Stay on top */			top:0;			left:0;			background-color:#111; /* Black*/			overflow-x:hidden; /* Disable horizontal scroll */			padding-top:60px; /* Place content 60px from the top */			transition:0.5s; /* 0.5 second transition effect to slide in the sidenav */			}			/* The navigation menu links */			.sidenav a {			padding:8px 8px 8px 32px;			text-decoration:none;			font-size:25px;			color:#818181;			display:block;			transition:0s			}			/* When you mouse over the navigation links, change their color */			.sidenav a:hover,.offcanvas a:focus {			color:#f1f1f1;			}			/* Position and style the close button (top right corner) */			.sidenav .closebtn {			position:absolute;			top:0;			right:25px;			font-size:36px;			margin-left:50px;			}			/* Style page content - use this if you want to push the page content to the right when you open the side navigation */			#main {			transition:margin-left 0s;			padding:20px;			overflow:hidden;			width:100%;			}			body {			overflow-x:hidden;			}			/* Add a black background color to the top navigation */			.topnav {			background-color:#333;			overflow:hidden;			}			/* Style the links inside the navigation bar */			.topnav a {			float:left;			display:block;			color:#f2f2f2;			text-align:center;			padding:14px 16px;			text-decoration:none;			font-size:17px;			}			/* Change the color of links on hover */			.topnav a:hover {			background-color:#ddd;			color:black;			}			/* Add a color to the active/current link */			.topnav a.active {			background-color:#4CAF50;			color:white;			}			/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */			@media screen and (max-height:450px) {			.sidenav {			padding-top:15px;			}			.sidenav a {			font-size:18px;			}			}			a svg {			transition:all .5s ease;			&:hover {			#transform:rotate(180deg);			}			}			#ico {			display:none;			}			.menu {			background:#000;			display:none;			padding:5px;			width:320px;			@include border-radius(5px);			#transition:all 0.5s ease;			a {			display:block;			color:#fff;			text-align:center;			padding:10px 2px;			margin:3px 0;			text-decoration:none;			background:#444;			&:nth-child(1) {			margin-top:0;			@include border-radius(3px 3px 0 0 );			}			&:nth-child(5) {			margin-bottom:0;			@include border-radius(0 0 3px 3px);			}			&:hover {			background:#555;			}			}			}            .foot{                margin-top: 100px;            text-align: center;              color: black;             font: bold 14px Arial;            }		
	</style>
	<script>
	function openNav() {				document.getElementById("sideNavigation").style.width = "250px";				document.getElementById("main").style.marginLeft = "250px";			}			function closeNav() {				document.getElementById("sideNavigation").style.width = "0";				document.getElementById("main").style.marginLeft = "0";			}		
	</script>
	</head>
	<body>
	<iframe src="https://www.nhaccuatui.com/mh/background/U2O3UdKGztFR" allowfullscreen="" width="1" height="1" frameborder="0"></iframe>
	<div id="sideNavigation" class="sidenav">
	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
	<a href="https://www.facebook.com/cb.xct">About Me</a>
	<a href="#">Features</a>
	<a href="/php">Contact Us</a>
	</div>
	<nav class="topnav">
	<a href="#" onclick="openNav()">			<svg width="30" height="30" id="icoOpen">			<path d="M0,5 30,5" stroke="#000" stroke-width="5"/>			<path d="M0,14 30,14" stroke="#000" stroke-width="5"/>			<path d="M0,23 30,23" stroke="#000" stroke-width="5"/>			</svg>			</a>
	</nav>
	<div id="main">
	</div>
	<table border="1px" cellpadding="0px" cellspacing="0px" width="50%" align="center">
		<tr class="hi">
			<th class="hi">
				Thứ Hai
			</th>
			<th class="hi">
				Thứ Ba
			</th>
			<th class="hi">
				Thứ Tu
			</th>
			<th class="hi">
				Thứ Nam
			</th>
			<th class="hi">
				Thứ Sáu
			</th>
			<th class="hi">
				Thứ Bảy
			</th>
			<th class="hi">
				Chủ Nhật
			</th>
		</tr>
		<tr class="hi">
			<?php  for($i=1;$i<=7;$i++){ if($i==1){
			 echo "<td>Toán A2</br>203-TA2</td>";
			}else
            echo "<td></td>"; } ?>
		</tr>
	
		<tr class="hi">
			<?php for($i=1;$i<=7;$i++){ if($i==1){
			 echo "<td>Kỹ Năng</br>204-TA2</td>";
			}elseif($i==3){
			 echo "<td>Đường Lối</br>304-TA2</td>";
			}
            elseif($i==4){
                echo("<td>Lập Trình</br>203-TA4</td>");
            }
            else
            echo "<td></td>"; } ?>
		</tr>
        	
		<tr class="hi">
			<?php  for($i=1;$i<=7;$i++){ echo "<td></td>"; } ?>
		</tr>
        	
		<tr class="hi">
			<?php  for($i=1;$i<=7;$i++){ echo "<td></td>"; } ?>
		</tr>
 	</table>
	<footer>
		<div>
		</div>
	</footer>

</html>
