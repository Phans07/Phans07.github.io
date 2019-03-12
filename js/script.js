function updateStatus() { // this function checks the status of the country radial buttons
	var canadastatus = document.getElementById("canada");
	var postallabel = document.getElementById("postallabel")
	var postaltext = document.getElementById("postal");
	var usstatus = document.getElementById("unitedstates")
	var zipcodelabel = document.getElementById("zipcodelabel");
	var zipcodetext = document.getElementById("zipcode");
	
	if (usstatus.checked) {	// if the United States radial button is pressed, then show the zip code text box
		zipcodelabel.className = "visible";
		zipcodetext.className = "textbox visible";
		
		postallabel.className = "hidden";
		postaltext.className = "textbox hidden";
	} else if (canadastatus.checked) { // if the Canada radial button is checked, then show the postal code text box
		postallabel.className = "visible";
		postaltext.className = "textbox visible";
		
		zipcodelabel.className = "hidden";
		zipcodetext.className = "textbox hidden";
	} else {								// if the other radial button is checked, then hide the Canada and/or the United States text boxes
		zipcodelabel.className = "hidden";
		zipcodetext.className = "textbox hidden";
		postallabel.className = "hidden"
		postaltext.className = "textbox hidden";
	}
}


function checkName() {	//Checks whether the name entered is at least 5 characters
	var nameBox = document.getElementById("name");
	var name = nameBox.value;
	
	
	if (name.length < 5) {
		nameBox.style.borderColor = "red";
	} else {
		nameBox.style.borderColor = "green";
	}
}



function checkEmail() {	//Check whethers the email is entered at least 8 characters
	var emailBox = document.getElementById("email"); 
	var email = emailBox.value;
	
	if (email.length < 8) {
		emailBox.style.borderColor = "red";
	} else {
		emailBox.style.borderColor = "green";
	}
}

function checkPhone() {		//check whethers the phone number is at least characters and is a number
	var phoneBox = document.getElementById("phone");
	var phone = phoneBox.value;
	
	if (phone.length < 8 || isNaN(phone)) {
		phoneBox.style.borderColor = "red";
	} else {
		phoneBox.style.borderColor = "green";
	}
}

function scroll() {
	var t = window.scrollY;
	
	var about = document.getElementById("about");
	var courses = document.getElementById("courses");
	var contact = document.getElementById("contact");
	var references = document.getElementById("references");
	
	var s1 = document.getElementById("s1");
	var s2 = document.getElementById("s2");
	var s3 = document.getElementById("s3");
	var s4 = document.getElementById("s4");
	
	var t1 = s1.offsetTop;
	var t2 = s2.offsetTop;
	var t3 = s3.offsetTop;
	var t4 = s4.offsetTop;
	
	about.style.borderBottomColor = "rgb(79,38,131)";
	courses.style.borderBottomColor = "rgb(79,38,131)";
	contact.style.borderBottomColor = "rgb(79,38,131)";
	references.style.borderBottomColor = "rgb(79,38,131)";
	
	if (t > t4) {
		references.style.borderBottomColor = "black";
	} else if (t > t3) {
		contact.style.borderBottomColor = "black";
	} else if (t > t2) {
		courses.style.borderBottomColor = "black";
	} else if (t > t1) {
		about.style.borderBottomColor = "black";
	}
}
