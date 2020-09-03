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

let characterAmount = 0;

let userConfirmations = {
            confirmationQuestions: ["Include lowercase?", "Include uppercase?", "Include numbers?", "Include Symbols?"],
            confirmationStates : [false, false, false, false]
          
}


 

syncCharacterAmount()

function syncCharacterAmount() {
  const userAmount = prompt("Please enter a password length between 8 - 128.")
  if(userAmount >= 8 && userAmount <= 128){
    characterAmount = parseInt(userAmount);
    console.log(characterAmount);
  }else{
    alert("You entered a value outside of the parameters.");
  }
}
confirmationSync()

function confirmationSync () {
  for(var i = 0; i <userConfirmations.confirmationQuestions.length; i++){
     userConfirmations.confirmationStates[i] = confirm(userConfirmations.confirmationQuestions[i])
    console.log(userConfirmations.confirmationStates)
    }
  }





// create a loop that iterates randomly through the passwordCharacters { } for a total of times = passwordDetails.length
