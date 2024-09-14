// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://api.example.com/data', true);

// Set up a function to handle the response
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Success: handle the response data
    console.log(xhr.responseText);
  } else {
    // Handle error
    console.error('Request failed:', xhr.statusText);
  }
};

// Handle network errors
xhr.onerror = function() {
  console.error('Request failed');
};

// Send the request
xhr.send();
