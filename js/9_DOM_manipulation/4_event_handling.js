// Adding an event listener
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Button was clicked!');
});

// Removing an event listener
const handleClick = () => {
  alert('Button was clicked!');
};
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
