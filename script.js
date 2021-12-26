// Assignment Code
// console.log(Math.floor(Math.random()*120));
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.style.backgroundImage = "none";
  passwordText.style.opacity = ".8";

}

function generatePassword() {
  //prompt when Generate password is clicked
  var numChars = prompt("How many characters? (must be 8 - 128)");
  //repeats number of characters prompt 3 times and picks a number for you if the iput is invalid.
  for (var i = 0; i < 3; i++) {  


    if (numChars < 8 || numChars > 128) {
        //  window.alert("invalid selection");
        
     
        if (i === 2) { //if 3rd time dialog has run

        /*random number picker. grabs random number which is a decimal. 
        multiplies by 20 so we end up with 1-20. 
        Adds 8 to ensure result will be greater than 8. */
        numChars = Math.floor(Math.random()*20) + 8; 
        window.alert("You're obviously not taking this seriously. I'm picking for you. You're getting " +
          numChars + " whether you like it or not!");
          break;
        }
        numChars = prompt("Invalid selection. Lets try this again. How many characters? (must be 8 - 128)");
      
    }
    else break;
  

 
  
  }

  //runs through 4 character type dialog boxes. If all are false, dialog re-runs 3 times and then selects only special characters.

  for (var i = 0; i < 3; i++) {
    var special = window.confirm("Include special characters?");
    var numbers = window.confirm("... Numeric characters?");
    var uppercase = window.confirm("... Uppercase letters?");
    var lowercase = window.confirm("... or Lowercase characters?");
    
    
    
    if (i === 2) {
      
    window.alert("Oh come on!!!!! You get all special characters #%*(!!!");
    special = true;
      
      
    } 
    else if (special || numbers || uppercase || lowercase) {
      break;
    }
    else {
      window.alert("You must select at least one character type");
    }
  }

  var result = "";
  while (1) { //endless loop



    if (special) {
                 //generate a random number, mult by 15, round decimal down, end up with a random number 0-15. 
                 //the span of special characters i'm using is 15. add 33 and then convert 
                 // the result to ASCII giving us a posibilty of 15 special characters                
        result += String.fromCharCode( Math.floor( (Math.random()*15) ) + 33 );
        if (result.length >= numChars) return result;
    } 

    if (numbers) {
                // generates a number 0-9
      result += Math.floor( (Math.random() * 10));
      if (result.length >= numChars) return result;
    }

    if (uppercase) {
              // same as Special chars, but we move the ASCII index to 65 where the uppercase letters are.
      result += String.fromCharCode( Math.floor( (Math.random()*26) ) + 65 );
      if (result.length >= numChars) return result;
    }

    if (lowercase) {
              // move ASCII index to 97
      result += String.fromCharCode( Math.floor( (Math.random()*26) ) + 97 );
      if (result.length >= numChars) return result;
    }

  }
   

   
  return result;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
