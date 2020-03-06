//Password Length Ask
var passwordAlert = prompt("In order to generate your password, please enter a number between 8 and 128.");
    console.log(passwordAlert);
    // If user enters in number greater than 8 or greater than 128
    if (passwordAlert >= 8 || passwordAlert <= 128) {
        alert("Your entry meets the required character allotment. Let's move on.")
    }
 // *I am not sure why the else if isn't working?  It was working when I switched the order earlier*   
    else if (passwordAlert < 8 || passwordAlert > 128){
        alert("Your entry did not meet the required character allotment.  Please try again.");
    //insert loop back to passwordAlert if user doesn't enter in a valid number
    }

//Define variable called passwordLength
var passwordLength = [passwordAlert];
    console.log(passwordLength);

    //Uppercase Letters Confirmation
var confirmUpper = confirm("Do you want any uppercase letters in your password?");
    // If user confirms that they want upper letters in their password,
    if (confirmUpper) {
        // Define a function named getRandomUpper to get a random uppercase letter
        function getRandomUpper () {
        // This will return a random uppercase letter based on a string calling a predetermined set of values that have been paired to a number.  There are 26 options and the uppercase letters start at a value of 65.
        return String.fromCharCode(Math.floor(Math.random()*26)+65);
        }
    };
    console.log(getRandomUpper());

    //Lowercase Letters Confirmation
var confirmLower = confirm("Do you want any lowercase letters in your password?");
    // If user confirms that they want lower letters in their password, 
    if (confirmLower) {
        // Define a function named getRandomLower to get a random lowercase letter
        function getRandomLower () {
        // This will return a random lowercase letter based on a string calling a predetermined set of values that have been paired to a number.  There are 26 options and the lowercase letters start at a value of 97.
        return String.fromCharCode(Math.floor(Math.random()*26)+97);
        }
    };
    console.log(getRandomLower());

// Numbers Section
    // Define variable numOptions to an array of 0-9 (string)    
    var numOptions ="0123456789";
    // Number confirmation
    var confirmNumber = confirm("Do you want any numbers in your password?");
    // If user confirms that they want numbers in their password,
    if (confirmNumber) {
        var getRandomNumber= Math.floor(Math.random()*numOptions.length)
    };
    console.log(getRandomNumber);

// Special Characters Section 
    // Define variable spCharOptions to be an array of available special character options (string)
    const spCharOptions ="!@#$%^&*"; 
    // Special Character confirmation
    var confirmSpecial = confirm("Do you want any special characters in your password?");
    // If user confirms that they want special characters in their password,
    if (confirmSpecial){
    function getRandomSpecial(){
        return spCharOptions[Math.floor(Math.random()*spCharOptions.length)];
        }
    };
    console.log(getRandomSpecial());

// Define variable finalPassword 
var finalPassword = ["getRandomUpper", "GetRandomLower", "getRandomNumber", "getRandomSpecial"];
    console.log(finalPassword)

//**I don't really understand anything else after this.  I can get a loop to go by each random element if I wanted to program them individually, but I can't when I combine all the components into a variable.  The array is then 4, but I set it to the password length and then tried to randomize the outcome to get the final password */

// Create a function called generatePassword which will loop for the length that the user defined in passwordLength
function generatePassword(){
    for (var i=0; i < passwordLength; i++) {
    // Randomize the array of characters that are generated
    Math.random(finalPassword*passwordLength)
    }
}
    console.log(generatePassword)

// Assignment Code
var generateBtn = document.querySelector("#generate").textcontent = "<insert the random password>";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
