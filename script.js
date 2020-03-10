// Define global variables
var passwordLength;
var upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerString = 'qwertyuiopasdfghjklzxcvbnm';
var numberString = '1234567890';
var specialString = "!@#$%^&*";
var approvedCharacters;

// Set up function to determine is user input for length meets standards
function lengthChecker() {
    //Password Length Ask
    passwordLength = prompt("In order to generate your password, please enter a number between 8 and 128.");
    console.log(passwordLength);
    // If user enters in a number between 8 and 128, they meet the required character allotment 
    if (passwordLength >= 8 && passwordLength<= 128) {
        alert("Your entry meets the required character allotment. Let's move on.");
    } 
    // If user does not enter in a number between 8 and 128, they will be prompted to try again.  
    else {
        alert("Your entry did not meet the required character allotment.  Please try again.");
        lengthChecker();
    }
}

// Setup function to check that user selected at least one of the password option choices
function optionChecker() {
    // need to set approvedCharacters to a blank string so that it is blank every time the function is used again- basically acts as a reset
    approvedCharacters = "";
    //Uppercase Letters Confirmation
    if(confirm("Do you want any uppercase letters in your password?")){
        approvedCharacters += upperString;
    }
    console.log(approvedCharacters);
    // Lowercase Letters Confirmation
    if(confirm("Do you want any lowercase letters in your password?")) {
        approvedCharacters += lowerString;
    }
    console.log(approvedCharacters);
    // Number confirmation
    if(confirm("Do you want any numbers in your password?")){
        approvedCharacters += numberString;
    }
    console.log(approvedCharacters);
    // Special Character confirmation
    if(confirm("Do you want any special characters in your password?")){
        approvedCharacters += specialString;
    }
    console.log(approvedCharacters);
    // If user does not confirm any of the password option choices,
    if (approvedCharacters == false) {
    alert("You must select at least one of the options -uppercase letters, lowercase letters, numbers, or special characters- to create your password.");
    optionChecker();
    }
}



// Define a function name getRandom to get all random options
function getRandom() {
    var password = "";
    for (let i=0; i < passwordLength; i++) {
        password += approvedCharacters[Math.floor(Math.random()*approvedCharacters.length)];
    }
    console.log(password);
    return password;
}



function generate(){
    // Call function to run
    lengthChecker();
    // Call function to run
    optionChecker();
    // Call function to run
    document.getElementById("password").innerHTML = getRandom();
}