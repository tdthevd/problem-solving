// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let count = 0;
  
    // Convert the number to a string and split it into an array of digits
    let numArray = num.toString().split('');
  
    // Use a loop to continue until the length of the array is 1
    while (numArray.length > 1) {
      // Use the reduce function to multiply all the digits in the array
      num = numArray.reduce((a, b) => a * b);
      
      // Convert the result to a string and split it into an array of digits
      numArray = num.toString().split('');
      
      // Increment the count
      count++;
    }
  
    // Return the count
    return count;
  }