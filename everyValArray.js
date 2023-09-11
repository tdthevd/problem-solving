// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

function arrCheck(value) {
    // Iterate through all elements in the array
    for (let i = 0; i < value.length; i++) {
      // Check if the current element is NOT an array
      if (!Array.isArray(value[i])) {
        // If it's not an array, return false immediately
        return false;
      }
    }
    // If we successfully iterate through all elements without finding a non-array, return true
    return true;
  }
  
  const arrCheck = value => value.every(Array.isArray)