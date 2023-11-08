// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    // since it is case insensitive, start by making everything lowercase
      text = text.toLowerCase()
    // then break up the string into an array
      text = text.split('')
    // next create an empty array to store the seen content
      let alreadySeen = []
    // create an empty array to store duplicates
      let duplicates = []
    // set up a counter
      let count = 0
      
    // for loop to iterate through the array
      for(let i = 0;i<text.length;i++){
    // push unseen instances to seen
        if(!alreadySeen.includes(text[i])){
          alreadySeen.push(text[i])
        }else if(alreadySeen.includes(text[i])){
    // if the item has already been seen see if it is the first instance
    // if it is count++ otherwise continue on
          if(!duplicates.includes(text[i])){
            duplicates.push(text[i])
            count++
          }
        }
      }
    //   finally, return the count of duplicates
      return count
    }


    // chatgpt's more streamlined function
    // notice the use of Set which  is a built-in data structure in JavaScript that allows you to store unique values. It's similar to an array, but it only stores unique elements, which makes it very efficient for checking whether a value is already present.

    // This is an example of how you can loop through a string and use a Set to keep track of already seen characters


    // function duplicateCount(text) {
    //     text = text.toLowerCase();
    //     let alreadySeen = new Set();
    //     let duplicates = new Set();
    //     let count = 0;
    
    //     for (let i = 0; i < text.length; i++) {
    //         let char = text[i];
    //         if (alreadySeen.has(char)) {
    //             if (!duplicates.has(char)) {
    //                 duplicates.add(char);
    //                 count++;
    //             }
    //         } else {
    //             alreadySeen.add(char);
    //         }
    //     }
    
    //     return count;
    // }
    