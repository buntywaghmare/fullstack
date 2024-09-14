// Array destructuring
const [a, b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2

// Object destructuring
const person = { name: 'Bunty', age: 25 };
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 30

// Nested destructuring
const user = { id: 1, profile: { name: 'Bunty', age: 25 } };
const { profile: { name: profileName } } = user;
console.log(profileName); // Bob
