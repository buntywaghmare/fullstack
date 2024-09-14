// let
let x = 10;
if (true) {
  let x = 20; // Block-scoped variable
  console.log(x); // 20
}
console.log(x); // 10

// const
const pi = 3.14;
// pi = 3.14159; // Error: Assignment to constant variable.
