// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.



function capitalize(s){
    s = s.split('')
    let even = []
    let odd = []
    for(let i = 0; i<s.length;i++){
      if(i%2===0||i===0){
        even.push(s[i].toUpperCase())
        odd.push(s[i])
      }else{
        odd.push(s[i].toUpperCase())
        even.push(s[i])
      }
    }
    even = even.join('')
    odd = odd.join('')
    return [even,odd]
    }
  