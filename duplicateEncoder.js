// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
 
    let lowerCaseString = word.toLowerCase();
    
    // Initialize an empty result string
    let result = '';
    
    for (let i = 0; i < lowerCaseString.length; i++) {
      // Check if the current character occurs more than once in the string
      if (lowerCaseString.indexOf(lowerCaseString[i]) !== lowerCaseString.lastIndexOf(lowerCaseString[i])) {
        result += ')';
      } else {
        result += '(';
      }
    }
    
    return result;
  }