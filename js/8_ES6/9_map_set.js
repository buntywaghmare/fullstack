// Map
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // John
console.log(map.has('age')); // true
console.log(map.size); // 2

// Set
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, will not be added
console.log(set.has(1)); // true
console.log(set.size); // 2
