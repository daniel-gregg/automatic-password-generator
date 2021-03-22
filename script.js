// Assignment Code
var generateBtn = document.querySelector("#generate");

//Setting the arrays of characters that may be used in the password
const a="abcdefghijklmnopqrstuvwxyz"; //setting lowercase alphabet
const A=a.toUpperCase();                //setting uppercase alphabet
const specialChar = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'; //special characters
const numbers = "0123456789";

// submit button event does some checks, calls password generator function and returns to main screen.
document.getElementById("btnSubmit").addEventListener("click",function(){
  event.preventDefault();
  event.stopPropagation();

  passwordLength = document.getElementById("passwordRange").value;  //target password length (integer)
  upperCase = document.getElementById("upperCase").checked;         //use upper case letters? (boolean)
  lowerCase = document.getElementById("lowerCase").checked;         //use lower case letters? (boolean)
  numeric = document.getElementById("numeric").checked;             //use numeric characters? (boolean)
  special = document.getElementById("special").checked;             //use 'special' characters? (boolean)

  //check that at least one argument is selected 'true' for password criteria. Return alert if not.
  checkAnyTrue();
  
  // call the generate password function
  genPassword();                                                  

  // return to main screen
  toggleForm();
})

let genPassword = function(){
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

  //For loop to build password for remaining length of password string
  for(i=len; i < passwordLength; i++) {
    charArray = passwordArray[Math.floor(Math.random()*passwordArray.length)];  //randomly select which type of character to append;
    char = charArray[Math.floor(Math.random()*charArray.length)]; //Select the character from the character array type
    passwordString+=char;  //Add the new character to the password - loop until password length is achieved
  }

  passwordShuffle = shuffle(passwordString.split("")).join("");  //shuffle password string randomly
  document.getElementById("password").textContent=passwordShuffle;   // print password to password text area
}

// Show current slider value in the popup form
var slider = document.getElementById("passwordRange");
var output = document.getElementById("currentValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle) in the popup form
slider.oninput = function() {
  output.innerHTML = this.value;
}

//toggles display between popup form (for password selection) and main page
function toggleForm() {
  if(document.getElementById("card").style.display == "none"){
    document.getElementById("card").style.display = "block";  //display main page
    document.getElementById("passwordForm").style.display = "none";  //stop displaying form
  } else {
    document.getElementById("card").style.display = "none";  //stop displaying main page
    document.getElementById("passwordForm").style.display = "block";  //display form
  }
}

function checkAnyTrue(){
  //checks that at least one toggle is checked
  arr1 = [lowerCase, upperCase, numeric, special];                  //array of arrays to enable simple random selections
  let checker = arr => arr.every(v => v === false);                 //check that at least one option is selected
  if(checker(arr1)){
    window.alert("Please select at least one option!");             //   --> if not send alert as window popup
    return checker
  }
}

//Function to shuffle array using Fisher-Yates algorithm from bost.ocks.org/mike/shuffle
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


// open popup form to enter password criteria
function openForm() {
  event.preventDefault();
  toggleForm();
  document.getElementById("password").textContent="";  // clear the password text area
}

// close form without generating a new password
function closeForm() {
  event.preventDefault();
  toggleForm();
}
