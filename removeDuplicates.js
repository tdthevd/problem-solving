// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


function distinct(a) {

    // 'new Set(a)' creates a 'Set' object from the elements in the input array 'a'.
    // A 'Set' is a collection of unique values (no duplicates).
    // For example, if 'a' is [1, 2, 2, 3, 3, 4], the set will be {1, 2, 3, 4}.
    // Duplicates are automatically removed by the Set.
  
    // 'Array.from(...)' converts the set back into an array.
    // It takes a data structure (in this case, a Set) and converts it into an array.
    // So, if we have a set {1, 2, 3, 4}, 'Array.from' turns it into [1, 2, 3, 4].
    return Array.from(new Set(a));
  }
  