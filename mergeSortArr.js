// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
  let set1 = new Set(a);
  let set2 = new Set(b);

  // Merge the sets
  let mergedSet = new Set([...set1, ...set2]);

  // Convert the merged set back to an array, then sort it
  let mergedArray = Array.from(mergedSet).sort((a, b) => a - b);

  return mergedArray;
}