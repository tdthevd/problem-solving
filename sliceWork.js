// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    const l = (ending.length) * -1
    if(str.slice(l)===ending){
      return true
    }else if(ending === ''){
      return true
    }else{
      return false
    }
  }