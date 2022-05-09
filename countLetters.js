const assertEqual = require('./assertEqual');

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

module.exports = countLetters;



