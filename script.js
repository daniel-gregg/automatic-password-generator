// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function openForm() {
  event.preventDefault();
  document.getElementById("card").style.display = "none";
  document.getElementById("passwordForm").style.display = "block";
}

function closeForm() {
  event.preventDefault();
  document.getElementById("passwordForm").style.display = "none";
  document.getElementById("card").style.display = "block";
}
// generatePassword function
function writePassword () {
  
}

function submitForm(){
  event.preventDefault();
  // do some stuff here to generate password based on form entry details
  document.getElementById("card").style.display = "block";
  document.getElementById("password").textContent="HELLO!";
  document.getElementById("passwordForm").style.display = "none";

}

var slider = document.getElementById("passwordRange");
var output = document.getElementById("currentValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
