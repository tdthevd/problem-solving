// Define a function named "decode" that takes a file object as input
function decode(messageFile) {
    // Create a new FileReader object
    const reader = new FileReader();
    
    // Define an event handler for the 'load' event of the FileReader
    reader.onload = function(event) {
        // When the file is loaded, execute this function
        // Access the content of the loaded file using event.target.result
        // Trim any leading or trailing whitespace and split the content into an array of lines
        const content = event.target.result.trim().split('\n');
        
        // Initialize an array to store the decoded words
        let decodedWords = [];
        
        // Loop through each line of the file content
        // j keeps track of the expected number of words in the current line of the pyramid
        for (let i = 0, j = 1; i < content.length; i++, j++) {
            // Extract the word corresponding to the number at the end of the line
            // Split the line by space and take the second element (the word)
            const word = content[i].split(' ')[1];
            // Add the word to the decodedWords array
            decodedWords.push(word);
            
            // If the number of words in decodedWords matches the expected number for the current line,
            // keep only the last j words (corresponding to the numbers in the pyramid line)
            if (decodedWords.length === j) {
                decodedWords = decodedWords.slice(-j);
            }
        }
        
        // Join the decoded words with a space to form the decoded message
        const decodedMessage = decodedWords.join(' ');
        // Output the decoded message to the console
        console.log(decodedMessage);
    };
    
    // Read the contents of the file as text
    reader.readAsText(messageFile);
}

// Example usage:
// Get a reference to the file input element in the HTML document
const fileInput = document.getElementById('fileInput');
// Add an event listener to the file input element for the 'change' event
fileInput.addEventListener('change', function(event) {
    // When a file is selected, execute this function
    // Get the selected file from the event
    const file = event.target.files[0];
    // Call the decode function with the selected file as argument
    decode(file);
});

console.log(decode(dataAnnotation.txt))
