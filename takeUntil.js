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

// test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])

