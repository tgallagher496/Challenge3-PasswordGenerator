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
  length = prompt("Enter the length of your password");
  //  Password length isn't long enough
  if (length < 8) {
    alert("Length isn't big enough.");
    alert("Please choose another length.");
    generatePassword();
    //  Password Length is too long
  } else if (length > 128) {
    alert("Length is too big");
    alert("Please choose another length.");
    generatePassword();

    //  Password should meet length requirements.
  } else {
    var temppassword = [];
    for (let i = 0; i < length; i++) {
      temppassword.push(generateRandomlowerLetter());
    }
  }


  console.log(temppassword);

}

function generateRandomlowerLetter() {
  var randomloweralphabet = Math.floor((Math.random()*25)+97);
  var random_string = String.fromCharCode(randomloweralphabet);
  return (random_string);
}
