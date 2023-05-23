// index.js

// Test 1: Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Test 2: Create a variable 'newHeader' that points to an <h1> element
const newHeader = document.createElement('h1');

// Test 3: Assign an id of 'victory' to the 'newHeader' element
newHeader.id = 'victory';

// Test 4: Set the text of 'newHeader' to "YOUR-NAME is the champion"
newHeader.textContent = 'Rachael is the champion'; // Replace YOUR-NAME with your desired name

// Append 'newHeader' to the document body
document.body.appendChild(newHeader);
// Write your code here!