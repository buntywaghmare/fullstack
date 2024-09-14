// 6. Currying: Partial Application

const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

const sum = curry((a, b, c) => a + b + c);
console.log(sum(1)(2)(3)); // Output: 6
console.log(sum(1, 2)(3)); // Output: 6
