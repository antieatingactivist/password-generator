// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var numChars = prompt("How many characters? (must be 8 - 128");
  while (1) {
     if (numChars < 8 || numChars > 128) {
         window.alert("invalid selection");
         numChars = prompt("How many characters? (must be 8 - 128");
     }
  else break;
  
 }



}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
