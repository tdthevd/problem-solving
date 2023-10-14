// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552
// You will be receiving values higher than 10, all valid.




// Helper function to check if a number is a palindrome
function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

// Main function to find the next palindrome number
function nextPal(val) {
    // Start checking from the next number after val
    let nextValue = val + 1;

    // Keep looping until we find a palindrome
    while (true) {
        // Check if nextValue is a palindrome
        if (isPalindrome(nextValue)) {
            // If it is, return it
            return nextValue;
        }

        // If not, try the next number
        nextValue++;
    }
}