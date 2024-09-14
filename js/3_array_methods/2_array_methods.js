// 2. Basic Array Methods

// push: Add to the end
fruits.push('mango');
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// pop: Remove from the end
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'mango'
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// unshift: Add to the beginning
fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'apple', 'grape', 'orange']

// shift: Remove from the beginning
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'kiwi'
console.log(fruits); // Output: ['apple', 'grape', 'orange']