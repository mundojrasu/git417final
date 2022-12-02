/*Dark Mode*/ 
function dark() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }


/*Form Validation*/ 
  function checkForm() {
    let areFormErrors = false;
    let errorMessages = "<ul>";
 
    // Check full name exists
    const fullNameElement = document.getElementById("fullName");
    if (fullNameElement.value.length === 0) {
       errorMessages += "<li>Missing full name.</li>";
       fullNameElement.classList.add("error");
       areFormErrors = true;
    }
    else {
       fullNameElement.classList.remove("error");
    }
 
    // Check email matches regular expression
    const emailElement = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if (emailElement.value.length === 0 || !emailPattern.test(emailElement.value)) {
       errorMessages += "<li>Invalid or missing email address.</li>";
       emailElement.classList.add("error");
       areFormErrors = true;
    }
    else {
       emailElement.classList.remove("error");
    }
 
    // Check passwork requirements
    const passwordElement = document.getElementById("password");
    const passwordConfirmElement = document.getElementById("passwordConfirm");
    passwordElement.classList.remove("error");
    passwordConfirmElement.classList.remove("error");
    if (passwordElement.value.length < 10 || passwordElement.value.length > 20) {
       errorMessages += "<li>Password must be between 10 and 20 characters.</li>";
       passwordElement.classList.add("error");
       areFormErrors = true;
    }
    if (!(/[a-z]/.test(passwordElement.value))) {
       errorMessages += "<li>Password must contain at least one lowercase character.</li>";
       passwordElement.classList.add("error");
       areFormErrors = true;
    }
    if ( !(/[A-Z]/.test(passwordElement.value)) ) {
       errorMessages += "<li>Password must contain at least one uppercase character.</li>";
       passwordElement.classList.add("error");
       areFormErrors = true;
    }
    if (!(/[0-9]/.test(passwordElement.value))) {
       errorMessages += "<li>Password must contain at least one digit.</li>";
       passwordElement.classList.add("error");
       areFormErrors = true;
    }
    if (passwordElement.value != passwordConfirmElement.value) {
       errorMessages += "<li>Password and confirmation password don't match.</li>";
       passwordElement.classList.add("error");
       passwordConfirmElement.classList.add("error");
       areFormErrors = true;
    }
 
    errorMessages += "</ul>";
 
    // If errors, display error messages
    if (areFormErrors) {
       document.getElementById("formErrors").innerHTML = errorMessages;
       document.getElementById("formErrors").classList.remove("hide");
    }
    // If no errors, hide error messages div
    else {
       document.getElementById("formErrors").classList.add("hide");
    }
 }
 
 document.getElementById("submit").addEventListener("click", function(event) {
    checkForm();
 
    // Prevent default form action. DO NOT REMOVE THIS LINE
    event.preventDefault();
 });

/*Guessing Game*/
 function guessingGame(){
	//get the two spans where we'll display the numbers, and the one for the message
  let display2 = document.getElementById("numGuess");
  /*let display2 = document.getElementById("random2");*/
  /*let gameMessage = document.getElementById("gameOutput");*/
  
  //generate two random numbers between 1 and six (like rolling dice)
  let die1 = getRandomNumber(1, 10);
  let die2 = display2;
  
  //display those numbers to the screen
 	/*display.innerHTML = die1;*/
	display2.innerHTML = die2;
  
  //see if they match, then display winning message
  if(die1 === 1 && die2 === 1){
		gameOutput.innerHTML = "You Win!";
	}else{
		gameOutput.innerHTML = "You Lose. Try Again.";
	}
}

document.getElementById("numGuess").addEventListener("click", guessingGame);