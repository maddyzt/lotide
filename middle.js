// require eqArrays 
const eqArrays = require('./eqArrays');

// require assertArraysEqual
const assertArraysEqual = require('./assertArraysEqual');

// middle function returns the middle element(s) of an array
const middle = (array) => {
  let newArray = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let middlePointEven = array.length / 2;
    for (let i = middlePointEven - 1; i <= middlePointEven; i++) {
      newArray.push(array[i]);
    }
  } else if (array.length % 2 !== 0) {
    let middlePointOdd = Math.floor(array.length / 2);
    newArray.push(array[middlePointOdd]);
  }
  return newArray;
};

module.exports = middle;