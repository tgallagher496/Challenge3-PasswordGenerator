// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var haslowercase = lowercase.split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYS";
var hasuppercase = uppercase.split("");
var number = "0123456789";
var hasnumber = number.split("");
var symbol = "!@#$%^&*()+";
var hassymbol = symbol.split("");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

  var temppassword = [];
  var password = "";

  var totallength = prompt("How many characters would you like? \n (8 to 128)");


  if (totallength < 8 || totallength > 128) {
    alert("Must meet length requirements");
  } else {

    if (confirm("Do you want to include lower case letters?"))
    {
      Array.prototype.push.apply(temppassword, haslowercase);

    }
    if (confirm("Do you want to include upper case letters?"))
    {
      Array.prototype.push.apply(temppassword, hasuppercase);
    }
    if (confirm("Do you want to include numbers?")) {
      Array.prototype.push.apply(temppassword, hasnumber);
    }
    if (confirm("Do you want to include symbols?"))
    {
      Array.prototype.push.apply(temppassword, hassymbol);
    }
    if(temppassword.length === 0)
    {
      alert("You must select at least 1 type of character to generate password.");
    }
  else {
      for (var i = 0; i < totallength; i++) {
        var random = Math.floor(Math.random() * temppassword.length);
        password += temppassword[random];
      }
    }
  }
  document.getElementById("password").innerHTML = password;
  console.log(password);
}

