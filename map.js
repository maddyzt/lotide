// assert functions
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');



// the map function takes in two arguments
// an array to map
// a callback function
// the map function will return a new array based on the cb results

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;