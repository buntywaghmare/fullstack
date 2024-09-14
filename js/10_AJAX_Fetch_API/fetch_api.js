// Make a GET request
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data from the response
  })
  .then(data => {
    console.log(data); // Handle the JSON data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
