// Assignment Code
// console.log(Math.floor(Math.random()*120));
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var numChars = prompt("How many characters? (must be 8 - 128)");
  for (var i = 0; i < 3; i++) {

    if (i === 2) {
      numChars = Math.floor(Math.random()*20) + 8;
      window.alert("You're obviously not taking this seriously. I'm picking for you. You're getting " +
        numChars + " whether you like it or not!");
      
      
    }
    else if (numChars < 8 || numChars > 128) {
        //  window.alert("invalid selection");
         numChars = prompt("Invalid selection. Lets try this again. How many characters? (must be 8 - 128)");
     }
     else break;
  

 
  
 }


 console.log(numChars);
 for (var i = 0; i < 3; i++) {
  var special = window.confirm("Include special characters?");
  var numbers = window.confirm("... Numeric charachers?");
  var uppercase = window.confirm("... Uppercase letters?");
  var lowercase = window.confirm("... or Lowercase characters?");
  
  
  
  if (i === 2) {
    
    window.alert("Oh come on!!!!! You get all special characters #%*(!!!");
    special = true;
    
    
  }

  
  else if (special || numbers || uppercase || lowercase) {
    console.log("!!!!");
    break;
  }
  else {
    window.alert("You must select at least one character type");
  }
}

var result = "";
while (1) {



   if (special) {
      result+= String.fromCharCode( Math.floor( (Math.random()*15) ) + 33 );
      if (result.length >= numChars) return result;
   } 

   if (numbers) {
     result+= Math.floor( (Math.random() * 10));
     if (result.length >= numChars) return result;
   }

   if (uppercase) {
     result+= String.fromCharCode( Math.floor( (Math.random()*26) ) + 65 );
     if (result.length >= numChars) return result;
   }

   if (lowercase) {
     result+= String.fromCharCode( Math.floor( (Math.random()*26) ) + 97 );
     if (result.length >= numChars) return result;
   }

}
   

   
return result;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
