// 1. Closures: Practical Applications

// Module Pattern
const counter = (function() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
})();

counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2


