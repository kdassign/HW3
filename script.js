// prompts will show up when asking user whether they want the following characters to be 
var numChoice;

var specCharChoice;

var upCaseChoice;

var lowCaseChoice;

// this is the number array for the password generator
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// this is the array so that special characters can be included in generated passwords
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "-", "+"];
// this is the array for lower case characters
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// this is the array for upper case characters
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var length = prompt
    ("Pick a length for your password");
// makes sure that user inputs the right characters
      var length = userInput;
      if (!userInput) {
        alert("Input is needed");
        return;
      } else if (isNaN(length)) {
        alert("Must input number value");
        return;
      } else if (length < 8 || length > 128) {
        alert("Must be between 8 and 128");
        return
      } else if (length >= 8 && length <= 128) {
        
  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;




  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
