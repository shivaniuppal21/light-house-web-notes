const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      } if (i === actual.length - 1) {
        return true;
      }
    }
  }
  return false;
};
const assertArraysEquals = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("The arrays are identical!");
  } else {
    console.log("Not Equal!!");
  }
  return assertArraysEquals;
};

const flatten = function(nestedArray ,orig = []) {
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      flatten(nestedArray[i],orig);
    } else {
      orig.push(nestedArray[i]);
    }
  }
  return orig;

};

console.log(flatten([1, 2, [3, [4,5]], 5, [6]]));

console.log(eqArrays(flatten([1, 2, [3, [4,5]], 5, [6]]) , [1,2,3,4,5,5,6]));