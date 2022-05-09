const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

// test cases
console.log(without([1, 2, 3, 4], [1, 2])); // => [3, 4]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([4, 40, -2],[-2, 6])); // => [4, 40]
console.log(without([1, 4, 2],[])); // => [1, 4, 2]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

