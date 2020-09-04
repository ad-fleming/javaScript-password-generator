// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  userConfirmations.userChoices = []
  if(characterAmount < 8 || characterAmount > 128){return 
    }

  passwordText.value = password;
  

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let characterAmount = 0;
// define 
let userConfirmations = {
            confirmationQuestions: ["Include lowercase?", "Include uppercase?", "Include numbers?", "Include symbols?"],
            userChoices: []
}
// Set variables equal to arrays and using our arrayFromLowToHigh() to populate them with character code values
const lowercaseCharCodes = arrayFromLowToHigh(97,122)
const uppercaseCharCodes = arrayFromLowToHigh(65, 90)
const numberCharCodes = arrayFromLowToHigh(48,57)
const symbolCharCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58,64)
).concat(
  arrayFromLowToHigh(91,96)
).concat(
  arrayFromLowToHigh(123,126)
)

 
function syncCharacterAmount() {
  const userAmount = prompt("Please enter a password length between 8 - 128.")
  if(userAmount >= 8 && userAmount <= 128){
    characterAmount = parseInt(userAmount);
  }
}


// Write a function that prompts user to confirm types of characters
function confirmationSync () {
  for(var i = 0; i <userConfirmations.confirmationQuestions.length; i++){
      var userChoice = confirm(userConfirmations.confirmationQuestions[i]);
      // For each, if user clicks yes and the first question was the correct question(had to do this because of the object), push the lower character codes into the empty userChoices array
      if(userChoice && userConfirmations.confirmationQuestions[i] === "Include lowercase?"){
        userConfirmations.userChoices.push(lowercaseCharCodes)
      } else if(userChoice && userConfirmations.confirmationQuestions[i] === "Include uppercase?"){
        userConfirmations.userChoices.push(uppercaseCharCodes)
      }else if(userChoice && userConfirmations.confirmationQuestions[i] === "Include numbers?"){
        userConfirmations.userChoices.push(numberCharCodes)
      }else if(userChoice && userConfirmations.confirmationQuestions[i] === "Include symbols?"){
        userConfirmations.userChoices.push(symbolCharCodes)
      }else{if(userChoice[0] === false && userChoice[1] === false && userChoice[2] === false && userChoice[3]){
        return alert("You must make at least one selection to generate password.")
      }
  }
}
}
  
  // define the function listed below
  function generatePassword(){
  // call the SyncCharacterAmount() and the confirmationSync()
    syncCharacterAmount()
    // create a return to stop function if user chooses wrong parameters
    if(characterAmount < 8 || characterAmount > 128){return alert("Password outside of required parameters.")
    }
    confirmationSync()
    // Create an empty array where the randomized character codes will be stored
    var generatedPassword = [];
    // loop an amount of times equal to the specified password character amount
    for(var i = 0; i < characterAmount; i++){
    // choose a random index from inside the array
    var randomIndex = Math.floor(Math.random() * userConfirmations.userChoices.length)
    // return it's value (which is an array)
    var randomIndexValue = userConfirmations.userChoices[randomIndex]
    // repeat the process in the next level down
    var randomCharacterIndex = Math.floor(Math.random() * randomIndexValue.length)
    var randomCharacter = randomIndexValue[randomCharacterIndex];
    //  push a string into the generatedPassword array, converting the character codes into their characters
    generatedPassword.push(String.fromCharCode(randomCharacter));

    }
    // return that string without ,s and set it to be the password
    return generatedPassword.join('') 
    
  }

  

// Write a function to create an array starting at a low number and ending with the highest. So that we can create variables with the character codes.
function arrayFromLowToHigh(low, high){
  const array = []
  for (var i =low; i <=high; i++){
    array.push(i)
  }
  return array
}







// create a loop that iterates randomly through the passwordCharacters { } for a total of times = passwordDetails.length
