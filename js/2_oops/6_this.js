// 6. this Keyword

let person2 = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person2.greet(); // Output: Hello, my name is Alice
person2.greetArrow(); // Output: Hello, my name is undefined (arrow functions don't bind their own 'this')