// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let newArr = []
    const arr = string.split('')
    for(let i = 0; i < arr.length;i++){
      if(arr[i]===arr[i].toUpperCase()){
        newArr.push(` ${arr[i]}`)
      }else{
        newArr.push(arr[i])
      }
    }
    return newArr.join('')
      
  }