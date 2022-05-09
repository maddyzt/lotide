// require 
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

// test code

let ob1 = {
  a: '1',
  b: 2
};

let ob2 = {
  b: 2,
  a: '1'
};

assertObjectsEqual(ob1, ob2);