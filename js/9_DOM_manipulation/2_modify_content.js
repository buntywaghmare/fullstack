// Modify text content
const element = document.getElementById('myElement');
element.textContent = 'New text content';

// Modify HTML content
element.innerHTML = '<p>New HTML content</p>';

// Modify attributes
element.setAttribute('data-custom', 'value');
console.log(element.getAttribute('data-custom')); // value

// Modify style
element.style.color = 'blue';
element.style.backgroundColor = 'lightgrey';
