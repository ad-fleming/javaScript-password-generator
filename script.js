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


// When user clicks button begin prompts.

  // Ask user how many characters they'd like to be. Convert the string into numeric data and update the passwordLength variable to equal this number.
 var passwordLengthString = prompt("How many characters would you like your password to be?" + "\n" + "Please keep password between 8 - 128 characters.");
  if (parseInt(passwordLengthString) > 8 || parseInt(passwordLengthString) < 128){
          // convert the string into a number and save to variable
          var passwordLength = parseInt(passwordLengthString);
          console.log(passwordLength);
          // set the passLength to be equal to this variable in the passwordDetails object
          passwordDetails.passLength = passwordLength;
          console.log(passwordDetails.passLength);
  }else{
    alert("Please keep your answer within the specified amount of characters.")
  } 


