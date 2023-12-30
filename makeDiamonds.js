function diamond(n) {
    let diamond = ''; // Initialize an empty string to build the diamond pattern.
  
    // Check for invalid input (n is non-positive or even).
    if (n <= 0 || n % 2 === 0) {
      return null; // Return null for invalid input.
    } else {
      // Count up
      for (let i = 1; i <= n; i += 2) {
        // Handle the case when n is 1 (a single '*').
        if (n === 1) {
          diamond = '*\n';
        } else if (i !== n) {
          // Add spaces, then add '*' characters using a loop.
          diamond += ' '.repeat((n - i) / 2);
          for (let j = 0; j < i; j++) {
            diamond += '*';
          }
          diamond += '\n'; // Move to the next line.
        } else {
          // Handle the last line of the 'count up' section.
          // Add '*' characters without spaces.
          for (let j = 0; j < i; j++) {
            diamond += '*';
          }
          diamond += '\n'; // Move to the next line.
        }
      }
  
      // Count down
      for (let i = n - 2; i >= 1; i -= 2) {
        // Add spaces, then add '*' characters using a loop.
        diamond += ' '.repeat((n - i) / 2);
        for (let j = 0; j < i; j++) {
          diamond += '*';
        }
        diamond += '\n'; // Move to the next line.
      }
    }
  
    return diamond; // Return the constructed diamond pattern.
  }
  
//   Count Up: The first loop (count up) builds the upper part of the diamond. It iterates over odd values of i from 1 to n, adding spaces and '*' characters to create each line.

//   The repeat method is used to add spaces, and a second loop with j is used to add '*' characters.
//   Count Down: The second loop (count down) builds the lower part of the diamond. It iterates over odd values of i from n-2 to 1, adding spaces and '*' characters similar to the count-up loop.
  
//   The loops and repeat method are used to construct the diamond pattern by concatenating strings with the appropriate number of spaces and '*' characters.
  
//.repeat method in JavaScript is used to create and return a new string by concatenating the original string a specified number of times
  
  
  
  
  