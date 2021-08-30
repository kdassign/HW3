// Assignment Code
var generateBtn = document.querySelector("#generate");
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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var theInput = prompt
    ("Pick a length for your password");
  // makes sure that user inputs the right characters
  var length = theInput;
  if (!theInput) {
    alert("Input is needed");
    return;
  } else if (isNaN(length)) {
    alert("Must input number value");
    return;
  } else if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
    return

    //once user inputs correct values, the prompts will then begin to ask the user which characters they would want to be a part of their generated passcode

  } else if (length >= 8 && length <= 128) {
    numChoice = window.confirm("Did you want the password to contain numbers?");
    lowCaseChoice = window.confirm(
      "Did you want the password to contain lowercase letters?"
    );
    upCaseChoice = window.confirm(
      "Did you want the password to contain uppercase letters?"
    );
    specCharChoice = window.confirm(
      "Did you want the password to contain special characters?"
    );
    //&& returns if both operands are true and ! inverts a boolean expression
    if (
      !numChoice &&
      !lowCaseChoice &&
      !upCaseChoice &&
      !specCharChoice
    ) {
      alert("Generator requires inputs");
      return
    }

    // concat will join multiple strings between characters
    var userChoices = [];
    if (numChoice) {
      userChoices = userChoices.concat(numChar);
    }
    if (lowCaseChoice) {
      userChoices = userChoices.concat(lowCase);
    }
    if (upCaseChoice) {
      userChoices = userChoices.concat(upCase);
    }
    if (specCharChoice) {
      userChoices = userChoices.concat(specChar);
    }
    // Generates the random password after user inputs choices
    var newPassword = [];
    for (var i = 0; i < length; i++) {
      newPassword.push(
        userChoices[Math.floor(Math.random() * userChoices.length)]
      );
    }
    return newPassword.join('')
  }
}
