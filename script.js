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
 while (1) {
  var special = window.confirm("Include special characters?");
  var numbers = window.confirm("... Numeric charachers?");
  var uppercase = window.confirm("... Uppercase letters?");
  var lowercase = window.confirm("... or Lowercase characters?");
  console.log(special);
  console.log(numbers);
  console.log(uppercase);
  console.log(lowercase);

  
  if (special || numbers || uppercase || lowercase) {
    console.log("!!!!");
    break;
  }
  else {
    window.alert("You must select at least one character type");
  }
}



}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
