// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

function descendingOrder(n) {
    n = n.toString(); // Convert to string
    n = n.split('');
    n.sort(function(a, b) {
        return b - a; // This compares numbers in descending order
    });
    return Number(n.join('')); // Join the sorted digits and convert back to a number
}

let result = descendingOrder(53421);
console.log(result); // Output: 54321
