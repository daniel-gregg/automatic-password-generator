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
document.getElementById("btnSubmit").addEventListener("click",function(){
  event.preventDefault();
  event.stopPropagation();

  // do some stuff here to generate password based on form entry details
  passwordLength = document.getElementById("passwordRange").value;
  upperCase = document.getElementById("upperCase").checked;
  lowerCase = document.getElementById("lowerCase").checked;
  numeric = document.getElementById("numeric").checked;
  special = document.getElementById("special").checked;

  //Setting the arrays of characters that may be used in the password
  a="abcdefghijklmnopqrstuvwxyz"; //setting lowercase alphabet
  A=a.toUpperCase();                //setting uppercase alphabet
  specialChar = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'; //special characters
  numbers = "0123456789";

  //initialising an empty array to hold the selected character arrays
  passwordArray = [];

  //one of each selected character MUST be included in the password
  passwordString = "";
  if(upperCase===true){
    passwordString+=(A[Math.floor(Math.random()*26)]);  //add at least one of these characters to the password if selected
    passwordArray.push(A);  //add this set of characters to the holding array if selected
  }

  if(lowerCase===true){
    passwordString+=(a[Math.floor(Math.random()*26)]);  //add at least one of these characters to the password if selected
    passwordArray.push(a);  //add this set of characters to the holding array if selected
  }

  if(special===true){
    passwordString+=(specialChar[Math.floor(Math.random()*specialChar.length)]);  //add at least one of these characters to the password if selected
    passwordArray.push(specialChar);  //add this set of characters to the holding array if selected
  }

  if(numeric===true){
    passwordString+=(numbers[Math.floor(Math.random()*numbers.length)]);  //add at least one of these characters to the password if selected
    passwordArray.push(numbers);  //add this set of characters to the holding array if selected
  }

  //Set length of the base string with minimum character requirements
  len = passwordString.length;

  //For loop to build password for remaining length
  for(i=len; i < passwordLength; i++) {
    charArray = passwordArray[Math.floor(Math.random()*passwordArray.length)];  //randomly select which type of character to append;
    char = charArray[Math.floor(Math.random()*charArray.length)]; //Select the character from the character array type
    passwordString+=char;  //Add the new character to the password - loop until password length is achieved
  }

  //then close the window and print password to the password text area
  document.getElementById("card").style.display = "block";
  document.getElementById("password").textContent=passwordString;/
  document.getElementById("passwordForm").style.display = "none";
});

// Show current slider value in the popup
var slider = document.getElementById("passwordRange");
var output = document.getElementById("currentValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
