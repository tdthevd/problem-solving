// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')
    let arr = []
    for (let i = 0; i < s1.length; i++){
      if(!arr.includes(s1[i])){
        arr.push(s1[i])
      }
        }
    for (let i = 0; i < s2.length; i++){
      if(!arr.includes(s2[i])){
        arr.push(s2[i])
      }
        }
    arr = arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  //   localeCompare returns a negative value if a comes before b and a positive value
  //   if a comes after b, and 0 if they are equal which doesnt happen in this case
    arr = arr.join('')
    return arr
  }