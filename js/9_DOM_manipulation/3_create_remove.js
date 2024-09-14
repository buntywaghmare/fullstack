// Create a new element
const newElement = document.createElement('div');
newElement.textContent = 'I am a new element';
newElement.className = 'newClass';

// Append the new element to the body
document.body.appendChild(newElement);

// Remove an element
const elementToRemove = document.getElementById('elementToRemove');
if (elementToRemove) {
  elementToRemove.parentNode.removeChild(elementToRemove);
}
