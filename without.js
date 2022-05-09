// eqArrays function
const eqArrays = require('./eqArrays');

// assertArraysEqual function
const assertArraysEqual = require('./assertArraysEqual');

// without function
const without = (source, itemsToRemove) => {
// declare a new array for the result
  let newArray = source.slice(0);
  // loop through itemsToRemove array, then loop through source array, if an item matches delete it from source
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === newArray[i]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

module.exports = without;

