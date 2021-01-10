const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const pythagorean = function(input) {
  let expectedResult = [];
  for (let val of input) {
    expectedResult.push(Math.sqrt(Math.pow(val.x, 2) + Math.pow(val.y, 2)));
  }
  return expectedResult;
};

/*
let result = input.map(function(newZ) {
  return (Math.sqrt(newZ.x * newZ.x + newZ.y * newZ.y));
});*/

let result = pythagorean(input);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
  