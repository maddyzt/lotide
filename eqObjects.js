// assertEqual function
const assertEqual = require('./assertEqual');

// define eqArrays function
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let listKeys1 = Object.keys(object1);
  let listKeys2 = Object.keys(object2);
  let same = false;

  if (listKeys1.length !== listKeys2.length) {
    return same;
  } else {
    for (let i of listKeys1) {

      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        same = eqArrays(object1[i], object2[i]);
      } else if (object1[i] === object2[i]) {
        same = 3;
      } else if (object1[i] !== object2[i]) {
        same = false;
      }
    }
  }
  return same;
};

module.exports = eqObjects;

