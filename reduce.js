function billboard(name, price = 30) {
    // Split the name into an array of characters
    const characters = name.split('');
    
    // Use the reduce() method to accumulate the total cost
    const totalCost = characters.reduce((acc, character) => {
      // For each character, add the price to the accumulator
      return acc + price;
    }, 0); // Initialize the accumulator to 0
    
    // Return the total cost
    return totalCost;
  }
  
  // // Call the billboard function with 'John'
  // const total = billboard('John');
  
  // // Output the total cost
  // console.log(total); // Output: 150
  // Here's the breakdown of what each part of the code does:
  
  // function billboard(name, price = 30): This defines a function named billboard that takes two parameters: name (the string to be considered) and price (the base cost per character, defaulting to 30).
  
  // const characters = name.split('');: This splits the input name into an array of characters. For example, if name is "John", characters becomes ['J', 'o', 'h', 'n'].
  
  // const totalCost = characters.reduce((acc, character) => {...}, 0);: This uses the reduce() method to iterate over each character in the characters array and accumulate the total cost. acc is the accumulator that keeps track of the total cost as the iteration progresses.
  
  // return acc + price;: For each character, this adds the price to the accumulator (acc). Since you want to add the price for each character, the price is added repeatedly for the length of the characters array.
  
  // }, 0);: The reduce() method starts with an initial value of 0 for the accumulator.
  
  // return totalCost;: This returns the calculated totalCost from the billboard function.
  
  // const total = billboard('John');: This calls the billboard function with the name 'John'.
  
  // console.log(total);: This outputs the calculated total cost, which is 150 in this case (since there are four characters in 'John' and the base price is 30).
  
  // The key here is that the reduce() method accumulates the total cost by repeatedly adding the price for each character in the name, and the final result is the total cost of the billboard with the given name.
  
  
  
  
  