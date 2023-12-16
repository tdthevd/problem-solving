// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    // Extracting odd numbers
    let oddNumbers = array.filter(num => num % 2 !== 0);
    
    // Sorting the array of even numbers
    oddNumbers.sort((a, b) => a - b);
    
    // Inserting sorted even numbers back into the original array
    let sortedNumbers = array.map(num => (num % 2 !== 0 ? oddNumbers.shift() : num));
    
    // Displaying the original array with even numbers sorted
    return sortedNumbers;
    
    }