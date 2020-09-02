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

generatePassword(){
  // TODO: GENERATE A REAL PASSWORD AND REPLACE THE RETURN STRING WITH A REAL PASSWORD STRING
  return ("This is a placeholder password");
}

var passwordLength = 0;
var includeLowerCase = false;
var includeUpperCase = false;
var includeNumeric = false;
var includeSpecial = false;

// When user clicks the generate password button-->ask, if they would like to create password- if not, end. If so, begin prompts.
var initPassword = confirm("Would you like to generate a new, secure password?");
if(initPassword === false){
  alert("Okay...maybe later then.");
}else{
  // Ask user how many characters they'd like to be. Convert the string into numeric data and update the passwordLength variable to equal this number.
 var passwordLengthString = prompt("How many characters would you like your password to be?" + "\n" + "Please keep password between 8 - 128 characters.");
  if (parseInt(passwordLengthString) < 8 || parseInt(passwordLengthString) > 128){
    alert("Please keep your answer within the specified amount of characters.");
  }else{
    passwordLength = parseInt(passwordLengthString);
    console.log(passwordLength);
  } //Working//
}

