const assertEqual = require('./assertEqual');

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

module.exports = countOnly;
