// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    // Step 1: Split the input string into an array of words
    s = s.split(' ')
    
    // Step 2: Sort the array based on the length of the words (ascending order)
    s = s.sort((a, b) => a.length - b.length)
    
    // Step 3: Return the length of the shortest word (which is the first element after sorting)
    return s[0].length
  }

//not mine but really nice code
// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }