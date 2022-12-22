// Random Password Generator to generate a password meeting a criteria between 8-128 characters, where the random password can contain numbers, special characters and upper and lower case letters

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Assigning arrays to include numbers, special characters, lowercase letters, and uppercase letters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", ",$", "%", "^", "&", "*", "(", ")", "+", "=","?"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables
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
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
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

      // Assign an action to the password parameters
      var characters = []
      
    if (confirmSpecialCharacter) {
      characters = characters.concat(specialChar)
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

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + characters[Math.floor(Math.random() * characters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



 
 
 
