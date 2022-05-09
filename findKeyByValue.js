const assertEqual = require('./assertEqual');

const findKeyByValue = (object, value) => {
  let listKeys = Object.keys(object);
  let listValues = Object.values(object);
  for (let i of listKeys) {
    if (object[i] === value) {
      return i;
    }
  }
};

module.exports = findKeyByValue;

