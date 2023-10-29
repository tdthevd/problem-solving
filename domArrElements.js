// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.

function solve(arr) {
    // Initialize max as the last element of the array
    let max = arr[arr.length - 1];
  
    // Initialize an array to store dominant elements, starting with the last element
    let dominants = [max];
  
    // Iterate through the array in reverse order, starting from the second last element
    for (let i = arr.length - 2; i >= 0; i--) {
      // Check if the current element is greater than the current max
      if (arr[i] > max) {
        // If it is, add it to the list of dominants at the beginning
        dominants.unshift(arr[i]);
  
        // Update the max to the new dominant element
        max = arr[i];
      }
    }
  
    // Return the list of dominant elements
    return dominants;
  }
  