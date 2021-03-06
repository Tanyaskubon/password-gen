// Assignment Code
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*',]
var numbersCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'i', 'e', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uprercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'y', 'Z']



function passwordOptions() {
  var length = parseInt(prompt("How many characters whould you like?"))
  if (length < 8) {
    alert("Your password must be at least 8 characters")
    return null
  }
  if (length > 128) {
    alert("your password must be less then 128 characters")
    return null
  }
  if (Number.isNaN(length)) {
    alert("The lenghth of your password must be a number")
    return null
  } 

  var wantSpecialCharacters = confirm("click yes to confirm characters")
  var wantLowercaseCharcters = confirm("click yes to confirm lowercase characters")
  var wantUppercaseCharcters = confirm("click yes to confirm uppercase characters")
  var wantNumbersCharcters = confirm("click yes to confirm numbers characters")
  var opptionsPassword = {
    length:length,
    wantSpecialCharacters:wantSpecialCharacters,
    wantLowercaseCharcters:wantLowercaseCharcters,
    wantUppercaseCharcters:wantUppercaseCharcters,
    wantNumbersCharcters:wantNumbersCharcters,
  }
  return opptionsPassword
}

function random (arr) {
var randomIndex = Math.floor(Math.random()*arr.length) 
var randomElement = arr[randomIndex]
       return randomElement
}

function generatePassword () {
  var options = passwordOptions ()
  var results = []
  var charactersPossible = []
  var charactersGaranteed = []
if (options.wantSpecialCharacters) {
  charactersPossible = charactersPossible.concat(specialCharacters)
  charactersGaranteed.push(random(specialCharacters))
}
if (options.wantLowercaseCharcters) {
  charactersPossible = charactersPossible.concat(lowercaseCharacters)
  charactersGaranteed.push(random(lowercaseCharacters))
}
if (options.wantUppercaseCharcters) {
  charactersPossible = charactersPossible.concat(uprercaseCharacters)
  charactersGaranteed.push(random(uprercaseCharacters))
}
if (options.wantNumbersCharcters) {
  charactersPossible = charactersPossible.concat(numbersCharacters)
  charactersGaranteed.push(random(numbersCharacters))
}
for (let i = 0; i <options.length; i++) {
  var characterPossible= random(charactersPossible)
  results.push(characterPossible) 
}

for (let i = 0; i < charactersGaranteed.length; i++) {
  results[i]=charactersGaranteed[i]
  
}
return results.join("")

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
