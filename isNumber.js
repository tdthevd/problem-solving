// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

// Define a function named isDigit that takes a string (s) as an argument
function isDigit(s) {
    // Attempt to convert the string to a number
    // If the conversion is successful and the result is a valid number, the condition will be true
    if (!isNaN(Number(s))) {
      // If the condition is true, return true
      return true;
    } else {
      // If the condition is false, return false
      return false;
    }
  }
  