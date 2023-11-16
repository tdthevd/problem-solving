// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].


function explode(x) {
    // Check if both values are numbers
    if (typeof x[0] === 'number' && typeof x[1] === 'number') {
      // If both are numbers, calculate the score as the sum of the two
      const score = x[0] + x[1];
      // Use Array.from to create an array of 'score' length
      // Use map to create subarrays with the same elements as x
      return Array.from({ length: score }, () => [...x]);
    } else if (typeof x[0] === 'number') {
      // If only the first value is a number, score is that number
      const score = x[0];
      // Use Array.from and map to create subarrays with the same elements as x
      return Array.from({ length: score }, () => [...x]);
    } else if (typeof x[1] === 'number') {
      // If only the second value is a number, score is that number
      const score = x[1];
      // Use Array.from and map to create subarrays with the same elements as x
      return Array.from({ length: score }, () => [...x]);
    } else {
      // If neither is a number, return 'Void!'
      return 'Void!';
    }
  }
  