// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }

  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

// generate password function
function generatePassword() {
  var userInput = window.prompt("What is your desired password length?");

  var passwordLength = parseInt(userInput);

  //Lets the user exit the program if cancelled
  if (userInput === null) {
    return;
  }
  if (isNaN(passwordLength)) {
    window.alert("That's not a valid number!");
    // return;

    // if the userinput is not a valid number the function will stop
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length should be between 8 & 128 characters!");
    // return;
  } 

  var wantNumber = window.confirm(
    "Do you want to include numbers in your password?"
  );
  var wantUpperCase = window.confirm(
    "Do you want to include upper case characters in your password?"
  );
  var wantLowerCase = window.confirm(
    "Do you want to include lower case characters in your password?"
  );
  var wantSymbol = window.confirm(
    "Do you want to include symbols in your password?"
  );

  //   array for numbers
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // // array for uppercase letters
  var alpha = Array.from(Array(26)).map((e, i) => i + 65);
  var upperCaseList = alpha.map((x) => String.fromCharCode(x));
  // var upperCaseList = [
  //   "A",
  //   "B",
  //   "C",
  //   "D",
  //   "E",
  //   "F",
  //   "G",
  //   "H",
  //   "I",
  //   "J",
  //   "K",
  //   "L",
  //   "M",
  //   "N",
  //   "O",
  //   "P",
  //   "Q",
  //   "R",
  //   "S",
  //   "T",
  //   "U",
  //   "W",
  //   "X",
  //   "Y",
  //   "Z",
  // ];
  //   array for lowercase leters
  // var lowerCaseList = [];

  // converted upperCased array from uppercase to lowercas letters
  var lowerCaseList = upperCaseList.map((name) => name.toLowerCase());

  // symbols array
  var symbolList = ["!", "@", "#", "$", "%", "&", "*"];

  // if user selects any category THEN push that category into empty array (in this case selectionArr)
  var selectionArr = [];

  if (wantNumber === true) {
    selectionArr.push(numberList);
  }
  if (wantUpperCase === true) {
    selectionArr.push(upperCaseList);
  }
  if (wantLowerCase === true) {
    selectionArr.push(lowerCaseList);
  }
  if (wantSymbol === true) {
    selectionArr.push(symbolList);
  }
  if (!selectionArr) {
    window.alert("User has to select at least one item");
    // selectionArr.push(upperCaseList);
  }
  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(selectionArr);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar;
  }

  // console.log(generatedPassword);
  return generatedPassword;
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
