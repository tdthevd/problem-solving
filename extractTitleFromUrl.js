// Define the asynchronous function to fetch the title from a given URL
async function getTitleFromURL(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const html = await response.text();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
  
      const title = tempDiv.querySelector('title').textContent;
  
      // Return the extracted title
      return title;
    } catch (error) {
      console.error('Error fetching or parsing the title:', error.message);
      throw error;
    }
  }
  
  // Function to fetch and display the title based on user input
  function fetchAndDisplayTitle() {
    const urlInput = document.getElementById('urlInput');
    const resultDiv = document.getElementById('result');
  
    const url = urlInput.value;
  
    // Call the function and update the HTML content with the result
    getTitleFromURL(url)
      .then(title => {
        // Display the title in the 'result' div
        resultDiv.innerHTML = `<p>Title: ${title}</p>`;
      })
      .catch(error => {
        console.error('Error:', error.message);
        // Display an error message in the 'result' div
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
  