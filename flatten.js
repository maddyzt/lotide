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

module.exports = flatten;