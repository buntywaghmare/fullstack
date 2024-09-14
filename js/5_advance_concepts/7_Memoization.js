
// 7. Memoization: With Complex Input

const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
};

const expensiveOperation = memoize((obj, multiplier) => {
    console.log('Calculating...');
    return obj.num * multiplier;
});

console.log(expensiveOperation({num: 5}, 2)); // Output: Calculating... 10
console.log(expensiveOperation({num: 5}, 2)); // Output: 10 (cached)