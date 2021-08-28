
// this is the number array for the password generator
var numChar = [0,1,2,3,4,5,6,7,8,9];
// this is the array so that special characters can be included in generated passwords
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "-", "+"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
