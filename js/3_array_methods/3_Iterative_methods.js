// 3. Array Transformation Methods

// slice: Extract a portion of an array
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['grape', 'orange']

// splice: Change the contents of an array
fruits.splice(1, 1, 'pear', 'melon');
console.log(fruits); // Output: ['apple', 'pear', 'melon', 'orange']

// concat: Merge arrays
let moreFruits = ['cherry', 'peach'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'pear', 'melon', 'orange', 'cherry', 'peach']