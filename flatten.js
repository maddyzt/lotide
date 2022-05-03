const flatten = (array) => {
  let newArray = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      for (let j = 0; j < i.length; j++) {
        newArray.push(i[j]);
      }
    } else {
      newArray.push(i);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2, 3, 4], 5, [6], [7]]));
console.log(flatten([1, 2, [3, 4], 5, [6], 7, 8, 9, 10]));
console.log(flatten([[1], 2, [3], [4], 5, 6, 7, [8], 9, 10, 11, 12]));