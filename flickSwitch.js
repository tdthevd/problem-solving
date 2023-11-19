// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.


function flickSwitch(arr) {
    // Initialize a boolean variable to track the state
    let shouldReturnTrue = true;
  
    // Iterate through each element in the array
    return arr.map((element) => {
      // Check if the current element is "flick"
      if (element === "flick") {
        // Toggle the boolean value
        shouldReturnTrue = !shouldReturnTrue;
      }
  
      // Return the current boolean value for the element
      return shouldReturnTrue;
    });
  }