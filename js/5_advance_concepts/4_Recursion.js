// 4. Recursion: Tail Call Optimization

function factorial(n, accumulator = 1) {
    if (n <= 1) return accumulator;
    return factorial(n - 1, n * accumulator);
}

console.log(factorial(5)); // Output: 120
