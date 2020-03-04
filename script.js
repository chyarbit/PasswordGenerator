//Define variables and arrays to be used
    //Define variable stringLength to be 12 characters
    var stringLength = "12";
        console.log(stringLength);

    // Define variable upperOptions to be an array of A-Z (string)
    var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(upperOptions);

    // Define variable lowerOptions to be an array of a-z (string)
    var lowerOptions = "abcdefghijklmnopqrstuvwxyz";
        console.log(lowerOptions);

    // Define variable numOptions to an array of 0-9 (string)
    var numOptions ="0123456789";
        console.log(numOptions);

    // Define variable spCharOptions to be an array of available special character options (string)
    var spCharOptions ="!@#$%^&*";  
        console.log(spCharOptions);

    // Define variable allOptions to include all variables
        var allOptions = upperOptions + lowerOptions + numOptions + spCharOptions;
        console.log(allOptions);
    
    // Define variable password
        var password = "";

// Initial Asks
    //Password Length Alert
    var passwordAlert = alert("Your randomly generated password will be 12 characters.");
    
    //Uppercase Letters Confirmation
    var confirmUpper = confirm("Do you want any uppercase letters in your password?");

    //Lowercase Letters Confirmation
    var confirmLower = confirm("Do you want any lowercase letters in your password?");

    // Numbers Confirmation
    var confirmNumber = confirm("Do you want any numbers in your password?");

    // Special Characters Confirmation 
    var confirmSpecial = confirm("Do you want any special characters in your password?");

if (confirmUpper) {
    function generate (stringLength = 12) {
        for (var i = 0; i < stringLength; i++){
            var character = Math.floor(Math.random()* allOptions.length);
            password += allOptions.substring(character, character + 1);
            console.log(password);
        }
    }
}


// If user confirms that they want upper letters in their password,
//if (confirmUpper) {
    //for (var i=0; i < 12; i++) {
    // randomly generate upper letters
    //var randomUpper= Math.floor(Math.random()*upperOptions.length)
        //console.log(randomUpper);
    //}
//}

// If user confirms that they want lower letters in their password, 
//if (confirmLower) {
    //for (var i=0; i < 12; i++) {
        // Generate random lower letters
        //var randomLower= Math.floor(Math.random()*lowerOptions.length)
            //console.log(randomLower);
        //}
//}

// If user confirms that they want numbers in their password,
//if (confirmNumber) {
    //for (var i=0; i < 12; i++) {
        // Generate random number
        //var randomNumber= Math.floor(Math.random()*numOptions.length)
            //console.log(randomNumber);
        //}
//}

// If user confirms that they want special characters in their password,
//if (confirmSpecial) {
    
    //for (var i=0; i < 12; i++) {
        // Generate random special character
        //var randomSpecial= Math.floor(Math.random()*spCharOptions.length)
            //console.log(randomSpecial);
        //}

//}

//if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
           //Loop for ?
           //for (var i = 0; i < stringLength ; i++) {
            // Generate random ?
           // var randomUpper = Math.round(Math.random() * 10)  
            //console.log("randomUpper" + i); 
    //}
//}

// array[].push (custom function)
//if 
    //if (confirmLower) {
        //function of all characters for the password
        //nested inside are all the different types 
        // Loop 26 times for lowercase letters a to z
        //for (var i = 0; i < 27; i++) {
         // Generate random letter between a and z
         //var randomLower = Math.round(Math.random() * 10)  
         //console.log("LowerCase" + i); 
 //}
//}

    //if (confirmNumbers) {
        // Loop 10 times for numbers 0-9
        //for (var i = 0; i < 10; i++) {
         // Generate random number between 0 and 9
         //var randomNumbers = Math.round(Math.random() * 10)  
         //console.log("Number" + i); 
 //}
//}

// Assignment Code
//var generateBtn = document.querySelector("#generate").textcontent = "<insert the random password>";

// Write password to the #password input
//function writePassword(<insert paramater?>) {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  
  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
