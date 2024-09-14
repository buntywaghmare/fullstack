// 1. Object Literals

let person = {
    name: "John Doe",
    age: 30,
    profession: "Developer",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // Output: John Doe
person.greet(); // Output: Hello, my name is John Doe