// A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

// Given two integers, find the result which the little boy will get.

// Example
// For param1 = 456 and param2 = 1734, the output should be 1180

//     456
//    1734
// + ____
//    1180
// The little boy goes from right to left:

// 6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column

// 5 + 3 = 8

// 4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7.

// There is no digit in the first number corresponding to the leading digit of the second one, so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.

// Input/Output
// [input] integer a

// A non-negative integer.

// Constraints: 0 ≤ a ≤ 99999.

// [input] integer b

// A non-negative integer.

// Constraints: 0 ≤ b ≤ 59999.

// [output] an integer

// The result that the little boy will get.


// This line defines a function named `additionWithoutCarrying` that takes two parameters: a and b.
function additionWithoutCarrying(a, b) {

    // Convert 'a' and 'b' to strings and split them into arrays of individual digits.
    a = a.toString().split('');
    b = b.toString().split('');
  
    // Create an empty array to store the result.
    let result = [];
  
    // Make sure both arrays have the same length by adding leading zeros if necessary.
    while (a.length < b.length) {
      a.unshift('0'); // Add a '0' to the beginning of 'a' array.
    }
    while (b.length < a.length) {
      b.unshift('0'); // Add a '0' to the beginning of 'b' array.
    }
  
    // Iterate through the digits in 'a' and 'b'.
    for (let i = 0; i < a.length; i++) {
  
      // Add the corresponding digits together.
      let sum = parseInt(a[i]) + parseInt(b[i]);
  
      // If the sum is greater than or equal to 10, subtract 10 to avoid carrying.
      if (sum >= 10) {
        result.push(sum - 10);
      } else {
        result.push(sum);
      }
    }
  
    // Convert the result back to a number and return it.
    return parseInt(result.join(''));