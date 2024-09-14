// 4. Iterative Array Methods

let numbers2 = [1, 2, 3, 4, 5];

// forEach: Execute a function for each array element
numbers2.forEach(num => console.log(num * 2));
// Output: 2, 4, 6, 8, 10

// map: Create a new array with the results of calling a function for every array element
let doubled = numbers2.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter: Create a new array with all elements that pass the test implemented by the provided function
let evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// reduce: Reduce the array to a single value
let sum = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// find: Return the first element in the array that satisfies the provided testing function
let found = numbers2.find(num => num > 3);
console.log(found); // Output: 4

// some: Test whether at least one element in the array passes the test implemented by the provided function
let hasEven = numbers2.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

// every: Test whether all elements in the array pass the test implemented by the provided function
let allPositive = numbers2.every(num => num > 0);
console.log(allPositive); // Output: true

// 5. Sorting and Searching

let unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// sort: Sort the elements of an array in place
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// reverse: Reverse the order of the elements in an array in place
unsortedNumbers.reverse();
console.log(unsortedNumbers); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]

// indexOf: Return the first index at which a given element can be found in the array
console.log(unsortedNumbers.indexOf(5)); // Output: 2

// lastIndexOf: Return the last index at which a given element can be found in the array
console.log(unsortedNumbers.lastIndexOf(5)); // Output: 4