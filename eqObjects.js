// assertEqual function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// // test code
// // const ab = { a: "1", b: "2" };
// // const ba = { b: "2", a: "1" };
// // eqObjects(ab, ba); // => true
// // let resultOne = eqObjects(ab, ba);
// // let expectedResultOne = true;
// // assertEqual(resultOne, expectedResultOne);

// // const abc = { a: "1", b: "2", c: "3" };
// // eqObjects(ab, abc); // => false
// // let resultTwo = (eqObjects(ab, abc));
// // let expectedResultTwo = false;
// // assertEqual(resultTwo, expectedResultTwo);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// let result3 = (eqObjects(cd, dc));
// let expectedResult3 = true;
// assertEqual(result3, expectedResult3);

// const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
// let result4 = (eqObjects(cd, cd2));
// let expectedResult4 = false;
// assertEqual(result4, expectedResult4);

// console.log(eqArrays(["2", 3], ["2", 3, 4]));