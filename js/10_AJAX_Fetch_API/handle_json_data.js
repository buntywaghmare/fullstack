fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Automatically parses JSON data
  })
  .then(data => {
    console.log(data); // Handle JSON data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
