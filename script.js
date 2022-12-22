//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Assigment of variables of numbers special characters, lowercase letters, and uppercase letters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", ",$", "%", "^", "&", "*", "(", ")", "+", "=","?"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables beign used. var confirmLength is an empty string so that it does not result as undefined
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the password will contain
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to be?"));

  // Loop where password criteria must be greater than 8 characters, but less than 129 characters
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters. Please try again");
      var confirmLength = (prompt("How many characters would you like your password to be?"));
      } 

      // Alert confirming how many characters the password will have 
      alert('Your password will have' + confirmLength + 'characters');

    // Determine parameters of password where you click to confirm the criteria or cancel if you do not want a specific criteria
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

      // Loop if answer is outside the parameters 
      while(!confirmUpperCase === true && !confirmLowerCase === true && !confirmSpecialCharacter === true && !confirmNumericCharacter === true) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      // var characters in an empty array for value does not return undefined
      var characters = []
    
    // if statements with concatenations of each variable 
    if (confirmSpecialCharacter) {
      characters = characters.concat(specialCharacters)
    }

    if (confirmNumericCharacter) {
      characters = characters.concat(number)
    }
      
    if (confirmLowerCase) {
      characters = characters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      characters = characters.concat(alphaUpper)
    }

      console.log(characters)

      // Empty string to be that will be filled from the loop where it selects random characters in the array from lines 69-73
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + characters[Math.floor(Math.random() * characters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// This will write the password to the ID password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



 
 
 
