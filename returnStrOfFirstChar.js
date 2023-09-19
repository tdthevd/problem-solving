// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

// Define a function called makeString that takes a string 's' as input
function makeString(s) {
    // Initialize an empty array to store the first characters of each word
    let sNew = [];
  
    // Split the input string into an array of words
    s = s.split(' ');
  
    // Iterate through each word in the array
    for (const f of s) {
      // Get the first character of the current word and push it to 'sNew' array
      sNew.push(f.charAt(0));
    }
  
    // Join the first characters of each word into a single string and return it
    return sNew.join('');
  }

// Define a constant named makeString that is assigned a function using arrow function syntax
const makeString = s => 

  // Split the input string 's' into an array of words using spaces as the delimiter
  s.split(' ')

  // Use the map() function to iterate over each word in the array
  .map(x => x[0])

  // Use the join() function to concatenate the first characters into a single string
  .join('');