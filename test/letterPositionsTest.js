const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// test code
console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);

