const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (stringToCount) => {
  const newObject = {};
  for (let i of stringToCount) {
    if (i !== " ") {
      const toAdd = i;
      const isExist = newObject[i];
      isExist ? newObject[i] += 1 : newObject[i] = 1;
    }
  }
  return newObject;
};

// test code

// console.log(countLetters("maddy tan!"))


