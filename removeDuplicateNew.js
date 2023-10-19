// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]
function solve(arr) {
    // Create an object to store the last index of each element
    let lastInstances = {};
  
    // Iterate over the array in reverse order
    for (let i = arr.length - 1; i >= 0; i--) {
      // If the element is encountered for the first time, record its last index
      if (lastInstances[arr[i]] === undefined) {
        lastInstances[arr[i]] = i;
      } else {
        // If the element has been seen before, remove it from the array
        arr.splice(i, 1);
      }
    }
  
    // Return the modified array
    return arr;
  }
  function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}
// Advantages of the First Approach:

// It uses a Set to keep track of seen elements, which allows for constant-time (O(1)) lookup to check if an element has been seen before.
// It iterates through the array only once, making it more efficient in terms of time complexity.
// Advantages of the Second Approach:

// It uses the built-in filter function, which can make the code more concise.
// It avoids using additional data structures like Set, which may be beneficial in terms of memory usage for very large arrays.
// Considerations:

// The second approach relies on the fact that lastIndexOf is an O(n) operation. If the array is very large, this approach may be less efficient.