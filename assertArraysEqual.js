// define eqArrays function
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

// assertArraysEqual([1,2,3], [1,2,3]);
// assertArraysEqual([1,2,3], [1,2,3,4]);
// assertArraysEqual(["hi"], ["hi"]);
// assertArraysEqual([],[1]);