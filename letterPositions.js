// define eqArrays function
const eqArrays = require('./eqArrays');


const assertArraysEqual = require('./assertArraysEqual');


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

module.exports = letterPositions;

