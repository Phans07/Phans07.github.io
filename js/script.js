
function scroll() {		//used as a scrollfire function for parallax image on about page
	var t = window.scrollY;
	var para = document.getElementsByClassName("large-img");
	var m = -0.25;
	var b = 0;
	var newY = m*t + b;
	para.style.backgroundPositionY = newY + "px";
	
	
}

function enlarge() {			//function is used to enlarge logo on index page
	var s = window.scrollY;
	var logo = document.getElementById("logo");
	if (s > 800) {
		logo.style.transform = "scale(2,2)";
	}
}




function checkEmail() {	//Check whethers the email has @ symbol
	var emailBox = document.getElementById("email"); 
	var email = emailBox.value;
	
	if (email.indexOf('@') >=0) {
		emailBox.style.borderColor = "green";
	} else {
		emailBox.style.borderColor = "red";
	}
}

function checkPassword() {	//Check whether the password is greater than 8 characters and checks to see if confirm password matches password
	var passwordBox = document.getElementById("password"); 
	var password = passwordBox.value;
	var confirmBox = document.getElementById("confirm");
	var confirm = confirmBox.value;
	
	if (password.length < 8) {
		passwordBox.style.borderColor = "red";
	} else {
		passwordBox.style.borderColor = "green";
	}
	
	if (confirm === password) {
		confirmBox.style.borderColor = "green";
	}
	else {
		confirmBox.style.borderColor = "red";
	}
}

