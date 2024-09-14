// 5. Object Methods and Properties

// Object.create()
let personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let john = Object.create(personPrototype);
john.name = "John";
john.greet(); // Output: Hello, my name is John

// Object.keys(), Object.values(), Object.entries()
let car = { make: "Toyota", model: "Corolla", year: 2020 };
console.log(Object.keys(car)); // Output: ["make", "model", "year"]
console.log(Object.values(car)); // Output: ["Toyota", "Corolla", 2020]
console.log(Object.entries(car)); // Output: [["make", "Toyota"], ["model", "Corolla"], ["year", 2020]]