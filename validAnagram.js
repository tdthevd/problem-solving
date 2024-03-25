// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

 

// Constraints:

//     1 <= s.length, t.length <= 5 * 104
//     s and t consist of lowercase English letters.

var isAnagram = function(s, t) {
    // Convert strings to arrays to make them easier to work with
    const sArray = s.split('');
    const tArray = t.split('');
    
    // Check if the lengths of the two arrays are equal
    if (sArray.length !== tArray.length) {
        return false; // If lengths are not equal, they cannot be anagrams
    }
    
    // Create maps to store character frequencies for both strings
    const sMap = new Map();
    const tMap = new Map();
    
    // Count frequencies of characters in string s
    for (let char of sArray) {
        // Increment the count of the character in the map by 1, or set it to 1 if it doesn't exist
        sMap.set(char, (sMap.get(char) || 0) + 1);
    }
    
    // Count frequencies of characters in string t
    for (let char of tArray) {
        // Increment the count of the character in the map by 1, or set it to 1 if it doesn't exist
        tMap.set(char, (tMap.get(char) || 0) + 1);
    }
    
    // Compare character frequencies in both maps
    for (let [key, value] of sMap) {
        // If the frequency of a character in string s is different from that in string t, return false
        if (tMap.get(key) !== value) {
            return false; // If frequencies don't match, strings are not anagrams
        }
    }
    
    // If all characters and their frequencies match, return true indicating that strings are anagrams
    return true;
};

// winner below 

var isAnagram = function(s, t) {
   // Check if the lengths of the two strings are equal
   if (s.length !== t.length) {
       return false; // If lengths are not equal, they cannot be anagrams
   }
   
   // Create a map to store character frequencies for string s
   const charFrequency = new Map();
   
   // Count frequencies of characters in string s
   for (let char of s) {
       charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
   }
   
   // Decrement frequencies for characters in string t
   for (let char of t) {
       // If the character doesn't exist in charFrequency or its frequency is already 0, return false
       if (!charFrequency.has(char) || charFrequency.get(char) === 0) {
           return false;
       }
       charFrequency.set(char, charFrequency.get(char) - 1);
   }
   
   return true; // If all characters and their frequencies match, return true indicating that strings are anagrams
};


