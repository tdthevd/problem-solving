// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    // Initialize an empty string to store the filtered result
    var filteredString = "";

    // Iterate through each character in the input string
    for (var i = 0; i < str.length; i++) {
        // Get the current character at the current index
        var currentChar = str.charAt(i);

        // Check if the current character is a letter (using ASCII values)
        if ((currentChar >= 'a' && currentChar <= 'z') || (currentChar >= 'A' && currentChar <= 'Z')) {
            // If it's a letter, append it to the filtered string
            filteredString += currentChar;
        }
    }

    // Return the filtered string containing only letters
    return filteredString.split('').reverse().join('');
}