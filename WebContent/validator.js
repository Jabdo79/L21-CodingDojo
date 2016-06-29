/**
 * 
 */

function checkForm(){
	//window.alert("test");
	if(checkName("firstName", "first name") && checkName("lastName", "last name") && checkPhone() && checkEmail() && checkBootcamp())
		return true;
	
	return false;
	
}

function checkName(name, field){
	var nameValue = document.getElementById(name).value
	if(!containsOnlyLetters(nameValue)){
		window.alert("Your " + field + " contains invalid characters!");
		return false;	
	}else if(nameValue <= 0){
		window.alert("You must enter your " + field + "!");
		return false;
	}
		
	return true;
}

function containsOnlyLetters(input){
	if(input.match(/[^a-z]/i)){
		return false;
	}
	else
		return true;
}

function checkPhone(){
	var phone = document.getElementById("phone").value;
	if(phone.match(/[^0-9]/)){
		window.alert("Your phone # contains invalid characters!");
		return false;
	}
	else if(phone.length < 10){
		window.alert("Your phone # is incomplete!");
		return false;
	}else if(phone.length > 10){
		window.alert("Your phone # is too long!");
		return false;
	}
	return true;
}

function checkEmail(){
	var email = document.getElementById("email").value;
	email.match(/[a-z,@,.]/i);
	var atPos = email.indexOf("@");
	var secondAt = email.indexOf("@", atPos+1);
	var dot = email.indexOf(".", atPos+2);
	var domain = email.substring(dot+1);

	if(!email.charAt(0).match(/[a-z,0-9]/i)){
		window.alert("The first half of your email must contain letters or numbers!");
		return false;
	} else if(atPos < 1 || secondAt > 0){
		window.alert("You have more than one @ in your email!");
		return false;
	}else if(!email.charAt(atPos+1).match(/[a-z,0-9]/i)){
		window.alert("The second half of your email must contain letters or numbers!");
		return false;
	}else if(dot < atPos+1 || domain.match(/[^a-z,0-9]/i) || domain.length < 2){
		window.alert("The domain of your email is incomplete!");
		return false;
	}
	return true;
}

function checkBootcamp(){
	var found = false;
	var inputs = document.getElementsByTagName("input");
	for(var i = 0; i < inputs.length; i++){
		if(inputs[i].checked){
			return true;
		}
	}
	window.alert("You forgot to select a class!");
	return false;
}