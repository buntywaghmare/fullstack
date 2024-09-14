// 3. Prototypes and Inheritance

// Adding a method to Car's prototype
Car.prototype.start = function() {
    console.log("The car is starting...");
};

myCar.start(); // Output: The car is starting...

// Creating a subclass
function ElectricCar(make, model, year, batteryCapacity) {
    Car.call(this, make, model, year);
    this.batteryCapacity = batteryCapacity;
}

// Inherit from Car
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Add a method specific to ElectricCar
ElectricCar.prototype.chargeBattery = function() {
    console.log("Charging the battery...");
};

let myTesla = new ElectricCar("Tesla", "Model 3", 2022, "75 kWh");
myTesla.describe(); // Output: This is a 2022 Tesla Model 3
myTesla.start(); // Output: The car is starting...
myTesla.chargeBattery(); // Output: Charging the battery...