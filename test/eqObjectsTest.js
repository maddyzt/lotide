// require
const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');g

// test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
let resultOne = eqObjects(ab, ba);
let expectedResultOne = true;
assertEqual(resultOne, expectedResultOne);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
let resultTwo = (eqObjects(ab, abc));
let expectedResultTwo = false;
assertEqual(resultTwo, expectedResultTwo);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
let result3 = (eqObjects(cd, dc));
let expectedResult3 = true;
assertEqual(result3, expectedResult3);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
let result4 = (eqObjects(cd, cd2));
let expectedResult4 = false;
assertEqual(result4, expectedResult4);

console.log(eqArrays(["2", 3], ["2", 3, 4]));