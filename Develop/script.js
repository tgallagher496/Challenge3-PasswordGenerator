// Assignment Code
var generateBtn = document.querySelector("#generate");
var password;
var length;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
if (generateBtn.addEventListener("click", writePassword)) {
  generatePassword();
}

function generatePassword() {
  length = prompt("Enter the length of your password.  The password should be between 8 and 128 characters.");
  //  Password length isn't long enough
  if (length < 8) {
    alert("Length isn't big enough.  You need at least 8 characters.");
    alert("Please choose another length.");
    generatePassword();
    //  Password Length is too long
  } else if (length > 128) {
    alert("Length is too big.  You need less than 128 characters.");
    alert("Please choose another length.");
    generatePassword();

    //  Password should meet length requirements.
  } else {
    //  How many lower case letters?
    lengthabc = prompt("How many lower case letters do you want?")
    var temppassword = [];
    for (let i = 0; i < lengthabc; i++) {
      temppassword.push(generateRandomlowerLetter());
    }
    var lengthABC = prompt("How many upper case letters do you want?");
    for (let i = 0; i< lengthABC;i++){
      temppassword.push(generateRandomUpperLetter());
    }
    var lengthnum = prompt("How many numbers do you want?");
    for (let i = 0; i< lengthnum ;i++){
      temppassword.push(generateRandomNumber());
    }
    var lengthsymb = prompt("How many symbols do you want?");
    for (let i = 0; i< lengthsymb ;i++){
      temppassword.push(generateRandomSymbol());
    }

    var correct = prompt("Is this correct? (y/n)?");
    if(correct == 'y'){
const shuffleArray = temppassword.sort((a,b)=>0.5-Math.random());
    }

  }

  console.log(temppassword);

}

function generateRandomlowerLetter() {
  var randomloweralphabet = Math.floor((Math.random()*25)+97);
  var random_string = String.fromCharCode(randomloweralphabet);
  return (random_string);
}

function generateRandomUpperLetter(){
  var randomUpperLetter = Math.floor((Math.random()*25)+65);
  var random_string = String.fromCharCode(randomUpperLetter);
  return(random_string);
}

function generateRandomNumber(){
  var randomNumber= Math.floor((Math.random()*9)+48);
  var random_string = String.fromCharCode(randomNumber);
  return(random_string);
}

function generateRandomSymbol(){
  var randomSymbol= Math.floor((Math.random()*14)+32);
  var random_string = String.fromCharCode(randomSymbol);
  return(random_string);
}

