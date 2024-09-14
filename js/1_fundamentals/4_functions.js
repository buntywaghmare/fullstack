// 4. Functions

// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function Expression
let sayGoodbye = function(name) {
    return "Goodbye, " + name + "!";
};

// Arrow Function
let multiply = (a, b) => a * b;

// Function with Default Parameters
function welcome(name = "Guest") {
    return "Welcome, " + name + "!";
}

// Function Call
console.log(greet("John"));  // Output: Hello, John!
console.log(sayGoodbye("Alice"));  // Output: Goodbye, Alice!
console.log(multiply(4, 5));  // Output: 20
console.log(welcome());  // Output: Welcome, Guest!