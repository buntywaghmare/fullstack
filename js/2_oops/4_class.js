// 4. Classes (ES6+)

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

let animal = new Animal("Generic Animal");
animal.speak(); // Output: Generic Animal makes a sound.

let dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.