// assertEqual function
const assertEqual = require('./assertEqual');


// define findKey function
// takes in an object and a callback
// loops through the object and returns the first key for which the callback returns a truthy value
// if no key is found, return undefined
const inspect = require('util').inspect;

const findKey = (object, callback) => {
  for (let key in object) {

    for (let key2 in object[key]) {

      if (callback(object[key])) {
        return (key);
      }
    }
  }
};

module.exports = findKey;

