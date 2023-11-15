// DESCRIPTION:
// Write function makeParts or make_parts (depending on your language) that will take an array as argument and the size of the chunk.

// Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3

// Function to break an array into smaller chunks
function makeParts(arr, chunkSize) {
    // Initialize an empty array to store the result
    const result = [];
  
    // Loop through the input array with a step of chunkSize
    for (let i = 0; i < arr.length; i += chunkSize) {
      // Use the slice method to extract a chunk of the array
      // The slice method takes two parameters: start and end
      // The start parameter is the index at which to begin extraction (inclusive)
      // The end parameter is the index at which to stop extraction (exclusive)
      // So, arr.slice(i, i + chunkSize) extracts a chunk from index i to i + chunkSize - 1
      // and pushes it into the result array
      result.push(arr.slice(i, i + chunkSize));
    }
  
    // Return the resulting array of chunks
    return result;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const chunkedArray = makeParts(originalArray, 3);
  console.log(chunkedArray);
  