// 3. Lexical Scope and 'this'

const obj = {
    name: 'Object',
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    },
    arrowGreet: () => {
        console.log(`Hello, ${this.name}!`);
    }
};

obj.greet(); // Output: "Hello, Object!"
obj.arrowGreet(); // Output: "Hello, undefined!"

