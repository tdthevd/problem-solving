// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    // Sorting the array to bring the unique number to one of the ends
    arr.sort((a, b) => a - b);
  
    // Check the first two elements and the last two elements
    if (arr[0] !== arr[1]) return arr[0];
    if (arr[arr.length - 1] !== arr[arr.length - 2]) return arr[arr.length - 1];
  
    // If the unique number is in the middle, find it
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
  }
  
  
  