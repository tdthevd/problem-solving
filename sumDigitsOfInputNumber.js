// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    number = number.toString().split('')
    let sum = 0
    for(let i = 0;i<number.length;i++){
      if(number[i]!=='-'){
        sum+= Number(number[i])
      }
    }
    return sum
  }
//   not mine but very sharp code 
// This function takes a number as input and returns the sum of its digits.
function sumDigits(number) {
    // Convert the number to its absolute value (ignoring the sign),
    // then convert it to a string.
    const numberString = Math.abs(number).toString();
  
    // Split the string into an array of individual digits.
    const digitsArray = numberString.split('');
  
    // Use the reduce function to sum up all the digits.
    // The accumulator (a) starts at 0, and for each digit (b),
    // convert it to a number and add it to the accumulator.
    const sum = digitsArray.reduce(function (accumulator, digit) {
      // The unary plus operator (+) is used to convert the string digit
      // to a number before adding it to the accumulator.
      return +accumulator + +digit;
    }, 0);
  
    // Return the final sum of digits.
    return sum;
  }
  
  