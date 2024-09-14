// 1. Variables and Data Types

// Variables: var, let, const
var oldWay = "I'm declared with var"; // Function-scoped, can be redeclared
let modernWay = "I'm declared with let"; // Block-scoped, can be reassigned
const constant = "I can't be reassigned"; // Block-scoped, can't be reassigned

// Primitive Types
let stringExample = "I'm a string";
let numberExample = 42;
let booleanExample = true;
let nullExample = null;
let undefinedExample;
let symbolExample = Symbol("unique");
let bigIntExample = 1234567890123456789012345678901234567890n;

// Object Type
let objectExample = {
    name: "John",
    age: 30,
    isStudent: false
};