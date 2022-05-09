const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1,2,3]), true);
assertEqual(eqArrays(["hello", "hi"], ["hello", "hi"]), true);