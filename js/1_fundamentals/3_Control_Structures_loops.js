// 3. Control Structures

// if...else
let age = 18;
if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You're too young to vote.");
}

// switch
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("It's a regular day");
}

// Loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// do...while loop
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 3);

// for...in loop (for object properties)
let person = {name: "Alice", age: 25, job: "Developer"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for...of loop (for iterable objects like arrays)
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}