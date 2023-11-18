// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// Define a function named findOdd that takes an array (arr) as an argument
function findOdd(arr) {
    // Initialize a variable 'result' to 0
    let result = 0;
  
    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // XOR the current result with the current element
      // XOR is a bitwise operation that returns 1 if the bits are different, 0 if the bits are the same
      // This effectively cancels out pairs of identical numbers, leaving only the number that appears an odd number of times
      result ^= arr[i];
    }
  
    // The final result is the number that appears an odd number of times
    return result;
  }