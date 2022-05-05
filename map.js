// assert functions
const eqArrays = (arrayOne, arrayTwo) => {
  arrayOne = arrayOne.toString();
  arrayTwo = arrayTwo.toString();
  if (arrayOne === arrayTwo) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = (a, b) => {
  if (eqArrays(a, b)) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

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

// test code
const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

const results2 = map(words, word => word[1]);
console.log(assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]));

const results3 = map(words, word => word.length);
console.log(assertArraysEqual(results3, [ 6, 7, 2, 5, 3 ]));
