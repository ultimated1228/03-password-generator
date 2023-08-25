// Assignment code here
//Pseudo-code:
//Provide a new secure password that can have the following criteria applied based on user preference
//Preferences are chosen through user prompts and include:
    //1. 8-128 characters - NEEDS TO BE DONE
    //2. the following characters:
        //lowercase
        //uppercase
        //numeric
        //special characters
    //3. if true is chosen on any of these characters preferences at least one of these characters shows in the password
    //4. generate password and write to page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //picks up HTML line 28

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",";",":","'",",",".","<",">","/","?"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //observe for click event on html line 28 then writePassword function

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //need to define this generate password function and it needs to return a string
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function preferences(){
  
  var passLength;

  while (true) {
    passLength = (prompt("How many characters would you like your password to contain?"));

    if (isNaN(passLength)) {
      alert("Please enter a valid number.");
    } else if (passLength < 8 || passLength > 128) {
      alert("You must enter a number between 8 and 128.");
    } else {
      break;
    }
  }

  var passLower = confirm("Would you like lowercase characters?");
  var passUpper = confirm("Would you like uppercase characters?");
  var passNumber = confirm("Would you like a number?");
  var passSpecial = confirm("Would you like special characters?");
  console.log(passLength, passLower, passUpper, passNumber, passSpecial);

  var passObject = {
    userLengthChoice: passLength, 
    userLowerChoice: passLower,
    userUpperChoice: passUpper,
    userNumberChoice: passNumber,
    userSpecialChoice: passSpecial,
  }

  return passObject;

}

// function validate() {
//   const value = parseInt(input, 10)
//   return !isNaN(value) && value >= 8 && value <= 128;
// }
// let userInput = prompt("please enter a number between 8 and 128");
// while (!validate(userInput)) {
//   userInput = prompt("Invalid. Password length must be between 8 and 128.")
// }

console.log("Valid input:", userInput)

function generatePassword() {
  var prefs = preferences()
  var charSet = [];
  

  if (prefs.userLowerChoice) {
    charSet = charSet.concat(lower);
  }

  if (prefs.userUpperChoice) {
    charSet = charSet.concat(upper);
  }

  if (prefs.userNumberChoice) {
    charSet = charSet.concat(numbers);
  }

  if (prefs.userSpecialChoice) {
    charSet = charSet.concat(special);
  }

  var password = "";
  
  for (let i = 0; i < prefs.userLengthChoice; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password = password += charSet[randomIndex];

  
}
return password;
}