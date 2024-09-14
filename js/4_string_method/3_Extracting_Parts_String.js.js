
// 3. String Methods for Extracting Parts of a String

let sentence = 'The quick brown fox jumps over the lazy dog.';

// slice()
console.log(sentence.slice(4, 9)); // Output: 'quick'
console.log(sentence.slice(-4)); // Output: 'dog.'

// substring()
console.log(sentence.substring(4, 9)); // Output: 'quick'

// substr() (deprecated)
console.log(sentence.substr(4, 5)); // Output: 'quick'