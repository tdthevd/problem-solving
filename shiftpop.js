// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = str => str.slice(1,-1)

function removeChar(str){
    let arr = str.split('');
    const arr2 = [arr.shift(),arr.pop()]
    arr = arr.join('')
    return arr
   };