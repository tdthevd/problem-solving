// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(x){
    let arr = x.split('')
    let arrNew =[]
    for(let i = 0;i<arr.length;i++){
      
      if(arr[i]<5){
        arrNew.push ('0')
      }else {
        arrNew.push('1')
      } 
    }
     return arrNew.join('')
    }