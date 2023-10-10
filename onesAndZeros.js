// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
    // Convert the binary array to a string
    const binaryString = arr.join('');
  
    // Convert the binary string to a decimal number
    const decimalNumber = parseInt(binaryString, 2);

    // The parseInt function is used to parse a string and return an integer.
    // It takes two arguments: the string to parse and the radix (base) to use for the conversion.
    // In this case, we're using a radix of 2, which indicates that the string is in binary format.
    // So, it interprets the string as a binary number and converts it to its decimal equivalent.
    
    return decimalNumber;
  };
  