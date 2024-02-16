// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    // Check if the input is not an array or if the array has fewer than three elements
    if (!Array.isArray(array) || array.length < 3) {
      // If so, return 0 or handle the case as desired
      return 0; // You can modify this to handle the case differently if needed
    }
    
    // Sort the array in descending order
    array = array.sort((a, b) => b - a);
    
    let sum = 0;
    
    // Iterate over the array starting from the second element and ending before the last element
    for (let i = 1; i < array.length - 1; i++) {
      // Add each element to the sum
      sum += array[i];
    }
    
    return sum;
  }
  
  