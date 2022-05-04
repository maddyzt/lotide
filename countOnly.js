const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const newObject = {};
  // countOfItem = 0;
  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i];
    const shouldProcess = itemsToCount[item];
    const isExist = newObject[item];
    if (shouldProcess) {
      isExist ? newObject[item] += 1 : newObject[item] = 1;
    }
  }
  return newObject;
};


// // test code
// console.log(countOnly([1, 2, 3, 3], {1 : true, 2: false, 3: true}));
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);