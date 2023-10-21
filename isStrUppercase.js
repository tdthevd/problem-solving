// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False

String.prototype.isUpperCase = function() {

    // Initialize a counter variable i
    let i = 0;
  
    // While i is less than the length of the string
    while (i < this.length) {
      // Check if the character at position i is not uppercase
      if (this[i] !== this[i].toUpperCase()) {
        return false; // If not, return false
      }
      i++; // Move to the next character
    }
  
    // If all characters are uppercase, return true
    return true;
  }
  