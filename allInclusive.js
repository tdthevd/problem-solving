// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true
// Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations

function containAllRots(strng, arr) {
    // Check if the input string is empty or the array is empty
    if (strng === '' || arr.length === 0) {
      return true; // If so, return true (as technically, all rotations are present)
    }
  
    // Iterate through all possible rotations of the input string
    for (let i = 0; i < strng.length; i++) {
      // Generate a rotation by concatenating substrings
      const rotation = strng.slice(i) + strng.slice(0, i);
      // strng.slice(i) extracts a substring starting from index `i` to the end of the string.
      // strng.slice(0, i) extracts a substring from the beginning up to index i (not inclusive).
      // Concatenating these substrings creates a rotated version of the string.
  
      // Check if the rotation exists in the array
      if (!arr.includes(rotation)) {
        // arr.includes(rotation) checks if the array contains the rotation.
        // It returns true if the rotation is found, false otherwise.
        return false; // If not found, return false
      }
    }
  
    return true; // If all rotations are found in the array, return true
  }
  