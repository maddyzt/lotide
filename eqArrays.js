// assertEqual function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// define eqArrays function
const eqArrays = (arrayOne, arrayTwo) => {
  arrayOne = arrayOne.toString();
  arrayTwo = arrayTwo.toString();
  if (arrayOne === arrayTwo) {
    return true;
  } else {
    return false;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1,2,3]), true);
assertEqual(eqArrays(["hello", "hi"], ["hello", "hi"]), true);
