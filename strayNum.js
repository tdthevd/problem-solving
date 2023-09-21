// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    // This function takes an array of numbers as input.
  
    for (const i of numbers) {
      // We're using a for loop to go through each number (i) in the array.
  
      if (numbers.indexOf(i) === numbers.lastIndexOf(i)) {
        // Inside the loop, we're checking if the first and last position
        // of the current number (i) in the array are the same.
  
        // If they are the same, it means the number occurs only once.
  
        return i;
        // When we find such a number, we return it and exit the loop and function.
      }
    }
  }
  

const stray = nums => nums.reduce((a, b) => a ^ b);

  // Define a function called 'stray' that takes an array of numbers called 'nums'.
  
  // The 'reduce' method is used to apply a function to each element of the array and accumulate a result.
  
  // The function provided to 'reduce' takes two arguments: 'a' (the accumulated result) and 'b' (the current element being processed).
  
  // 'a ^ b' performs a bitwise XOR operation on 'a' and 'b'. XOR has the following properties:
  // - x ^ x = 0 (XORing a number with itself results in 0)
  // - 0 ^ x = x (XORing 0 with any number results in the number itself)
  
  // So, in an array with all elements occurring twice except one, that one element will be the result of the XOR operation.
  
  // For example, if we have the array [1, 1, 2, 2, 3], the XOR operation would be like this:
  // 1 ^ 1 = 0
  // 0 ^ 2 = 2
  // 2 ^ 2 = 0
  // 0 ^ 3 = 3
  
  // The final result is 3, which is the unique element.
  
  // The result of the XOR operation is implicitly returned by the arrow function.
  
  // The 'stray' function returns the unique element in the array where all other elements occur twice.
  