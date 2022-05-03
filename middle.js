// eqArrays function checks if two arrays are equal
const eqArrays = (arrayOne, arrayTwo) => {
  arrayOne = arrayOne.toString();
  arrayTwo = arrayTwo.toString();
  if (arrayOne === arrayTwo) {
    return true;
  } else {
    return false;
  }
};

// assertArraysEqual function displays a pass/error message if the arrays are equal or not
const assertArraysEqual = (a, b) => {
  if (eqArrays(a, b)) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

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

// test cases
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
// console.log(assertArraysEqual(middle([1, 2]), []));