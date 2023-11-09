// Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(...myArrays) {

    // list of items seen for the first time
    let alreadySeen = [];
    
    // loop to iterate over the input arrays
    for (const arr of myArrays) {
    // loop to iterate over specific array
      for (const i of arr) {
        // if the item hasnt been seen it will be pushed to already seen,
        // if it has it will not be pushed,
        // thus maintaining order while removing duplicates
        if (!alreadySeen.includes(i)) {
          alreadySeen.push(i);
        }
      }
    }
  
    return alreadySeen;
  }