// Add event listener to a parent element
const container = document.getElementById('container');
container.addEventListener('click', (event) => {
  if (event.target && event.target.matches('button.dynamic')) {
    alert('Dynamic button was clicked!');
  }
});

// Dynamically add a button to the container
const newButton = document.createElement('button');
newButton.textContent = 'Click me';
newButton.className = 'dynamic';
container.appendChild(newButton);
