# automatic-password-generator
Automatic password generator

*Overview:*
This site provides an automatic password generator that allows for inclusion of lower-case, upper-case, numeric, and special characters. The password is limited to between 8-128 characters. After selecting which types of character to include in the password via a popup form, the password is generated in javascript and printed to a read-only text box on the main page. 

*form inputs:*
There are five user inputs:
1. Password length - a slider with range set to 8-128 characters
2. lowerCase - a boolean toggle switch indicating whether to include lower-case letters in the password
3. upperCase - a boolean toggle switch indicating whether to include upper-case letters in the password
4. numeric - a boolean toggle switch indicating whether to include numeric characters in the password
5. special - a boolean toggle switch indicating whether to include special characters in the password

*validation*
Users must select at least one type of input for their password. If they do not an alert is raised asking the user to select at least one type of input

*generation*
Once inputs have been validated, the password is generated in a javascript function. Once the password string has been generated it is shuffled using the Fisher-Yates algorithm. 

*form operations*
The form input appears as a pop-up box. This is a html/css box rather than an alert box. The pop-up functionality is controlled by the 'toggleForm' function that operates on both the 'generate password' button and on the 'submit' button via a check function for display of the main page. 

*output*
The password generated based on a randomised string including user-chosen character types and password length is printed to the 'password' text area (read-only).

