const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

// test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

const results2 = map(words, word => word[1]);
console.log(assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]));

const results3 = map(words, word => word.length);
console.log(assertArraysEqual(results3, [ 6, 7, 2, 5, 3 ]));
