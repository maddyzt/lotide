// eqArrays function
const eqArrays = (arrayOne, arrayTwo) => {
  arrayOne = arrayOne.toString();
  arrayTwo = arrayTwo.toString();
  if (arrayOne === arrayTwo) {
    return true;
  } else {
    return false;
  }
};

// assertArraysEqual function
const assertArraysEqual = (a, b) => {
  if (eqArrays(a, b)) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

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

// // // test cases
// console.log(without([1, 2, 3, 4], [1, 2])); // => [3, 4]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
// console.log(without([4, 40, -2],[-2, 6])); // => [4, 40]
// console.log(without([1, 4, 2],[])); // => [1, 4, 2]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

