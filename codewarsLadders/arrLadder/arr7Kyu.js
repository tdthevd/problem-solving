// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.
// Examples:
// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12
// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11

// Define a function named 'save' which takes an array of 'sizes' and a 'hd' threshold.
function save(sizes, hd) {
    let count = 0;  // Initialize a counter for the number of elements needed.
    let sum = 0;    // Initialize a sum to keep track of the total size.
  
    // Iterate through each 'size' in the 'sizes' array.
    for (const size of sizes) {
      // If adding the current 'size' exceeds the threshold, break out of the loop.
      if (sum + size > hd) {
        break;
      }
      sum += size;  // Add the current 'size' to the total.
      count++;      // Increment the counter.
    }
  
    return count;   // Return the count of sizes needed to reach or exceed the threshold.
  }  


  const save = ($, hd) => (
    // Map over the array elements
    $.map((_, i) => {
      // Slice the array up to the current index, then sum the values
      return $.slice(0, i + 1).reduce((a, b) => a + b, 0) <= hd;
    })
    // Filter for elements that meet the condition (true)
    .filter(el => el === true)
    // Get the length of the filtered array
    .length
  );