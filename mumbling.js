// The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let newArr = [];
  
    for (let i = 0; i < s.length; i++) {
      newArr.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i)); // Repeat the lowercase character i times
      if (i !== s.length - 1) newArr.push('-'); // Add a hyphen after each repeated character sequence, except for the last one
    }
  
    return newArr.join('');
  }