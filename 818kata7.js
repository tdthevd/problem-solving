// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
function tailSwap(arr) {


    const strNew= arr[0].split(':')
    const strNew2 = arr[1].split(':')
    
    const newArr = [(strNew[0])+':'+(strNew2[1]) ,(strNew2[0])+':'+(strNew[1]) ]
    return newArr
    }



function tailSwap(arr) {
    const [a, b] = arr.map(el => el.split(":"));
    return [`${a[0]}:${b[1]}`, `${b[0]}:${a[1]}`];
  }
  
  
  
  function tailSwap(arr) {
    let newArr = arr
    .map(string => string.split(':'))
    return [newArr[0][0]+':'+newArr[1][1], newArr[1][0]+':'+newArr[0][1]];
  }

