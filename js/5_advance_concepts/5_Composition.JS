
// 5. Higher-Order Functions: Composition

const add = x => y => x + y;
const multiply = x => y => x * y;

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const addThenMultiply = compose(multiply(2), add(3));

console.log(addThenMultiply(5)); // Output: 16

