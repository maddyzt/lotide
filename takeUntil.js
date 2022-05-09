const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');
// define function takeUntil
// takes in 2 parameters
  // an array
  // callback
// returns a slice of the array with elements taken from the beginning
// keeps going until the callback returns a truthy value
// the callback only takes in one value (the item in the array)

// takeUntil
const takeUntil = (array, callback) => {
  array.forEach((i, index) => {
    if (callback(i)) {
      array.splice(index, array.length);
    }
  });
  return array;
};

module.exports = takeUntil;
