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

// letterPositions function
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== " ") {
      const isExist = results[char];
      if (!isExist) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }
  return results;
};

// test code
// console.log(letterPositions("hello"));
// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").e, [1]);

