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

// Set password criteria variable like switches

// generatePassword(){
//   // TODO: GENERATE A REAL PASSWORD AND REPLACE THE RETURN STRING WITH A REAL PASSWORD STRING
//   return ("This is a placeholder password");
// }
var passwordDetails = {
    passLength : 0,
    includeLowerCase : false,
    includeUpperCase : false,
    includeNumeric : false,
    includeSpecial : false
}
// var passwordLength = 0;
// var includeLowerCase = false;
// var includeUpperCase = false;
// var includeNumeric = false;
// var includeSpecial = false;

// Dummy Steps
// 1. Ask user fill out our 'password preferences questionnaire' 
// 2.Use that information to fill in our 'template' with user data
// 3.Take that data template to the password 'machine' and build it to their specifications
// 4.Once it's built, put a label on it (define it);
// 5.Send it back to them (display on screen)


// When user clicks button begin prompts.

  // Ask user how many characters they'd like to be. Convert the string into numeric data and update the passwordLength variable to equal this number.
 var userLengthString = prompt("How many characters would you like your password to be?" + "\n" + "Please keep password between 8 - 128 characters.");
  if (parseInt(userLengthString) > 8 || parseInt(userLengthString) < 128){
          // convert the string into a number and save to variable
          var passwordLength = parseInt(userLengthString);
          console.log(passwordLength);
          // set the passLength in the passwordDetails object to be equal to this variable in the passwordDetails object
          passwordDetails.passLength = passwordLength;
          console.log(passwordDetails.passLength);
          // prompt the user if they would like to like to include lower case characters in their password         
  }else {
    alert("Please keep your answer within the specified amount of characters.")
  }
// confirm if the user would like to use lowercase
var userLowerCase = confirm("Would you like to include lowercase characters in your password?")
          console.log(userLowerCase);
          // if yes, update includeLowerCase in passwordDetails object to be true;
          if(userLowerCase === true){
            passwordDetails.includeLowerCase = true;
            console.log(passwordDetails.includeLowerCase) 
            // Working
            // if no, update passwordDetails.includeLowerCase = false.
          }else{ if(userLowerCase === false){
              passwordDetails.includeLowerCase = false;
              console.log(passwordDetails.includeLowerCase)
            }
          }
// Confirm if user would like to use uppercase characters
  var userUpperCase = confirm("Would you like to include uppercase characters in your password?")
  console.log(userUpperCase);
  // if yes, update includeUpperCase in passwordDetails object to be true;
  if(userUpperCase === true){
    passwordDetails.includeUpperCase = true;
    console.log(passwordDetails.includeUpperCase) 
    // working
    // if no, update passwordDetails.includeUpperCase = false.
  }else if(userUpperCase === false){
      passwordDetails.includeUpperCase = false;
      console.log(passwordDetails.includeUpperCase)
    }

// Confirm if user would like to use numeric characters
var userNumeric = confirm("Would you like to include numeric characters in your password?")
console.log(userNumeric);
// if yes, update includeUpperCase in passwordDetails object to be true;
if(userNumeric === true){
  passwordDetails.includeNumeric = true;
  console.log(passwordDetails.includeNumeric) 
  // working
  // if no, update passwordDetails.includeNumeric = false.
}else if(userNumeric === false){
    passwordDetails.includeNumeric = false;
    console.log(passwordDetails.includeNumeric)
  }

// Confirm if user would like to use special characters
var userSpecialCharacter = confirm("Would you like to include special characters in your password?")
console.log(userSpecialCharacter);
// if yes, update includeUpperCase in passwordDetails object to be true;
if(userSpecialCharacter === true){
  passwordDetails.includeSpecial = true;
  console.log(passwordDetails.includeSpecial) 
  // working
  // if no, update passwordDetails.includeSpecial = false.
}else if(userSpecialCharacter === false){
    passwordDetails.includeSpecial = false;
    console.log(passwordDetails.includeSpecial)
  }
  console.log(passwordDetails)

