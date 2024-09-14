// 2. Constructor Functions

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.describe = function() {
        console.log(`This is a ${this.year} ${this.make} ${this.model}`);
    };
}

let myCar = new Car("Toyota", "Corolla", 2020);
myCar.describe(); // Output: This is a 2020 Toyota Corolla