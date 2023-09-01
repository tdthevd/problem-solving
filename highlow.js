// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(inputString) {
    // Split the input string into an array of numbers
    const numbers = inputString.split(' ').map(Number);
  
    if (numbers.length === 0) {
      return 'No numbers found';
    }
  
    const result = numbers.reduce(
      (result, number) => {
        result.highest = Math.max(result.highest, number);
        result.lowest = Math.min(result.lowest, number);
        return result;
      },
      { highest: numbers[0], lowest: numbers[0] }
    );
    }