// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    // Step 1: Sort the array of strings in ascending order
    let sorted = s.sort((a, b) => a.localeCompare(b)); 
  
    // Step 2: Get the first (smallest) string from the sorted array
    let newArr = sorted[0];
  
    // Step 3: Split the string into an array of characters, then join with '***' as separator
    return newArr.split('').join('***');
  }
  