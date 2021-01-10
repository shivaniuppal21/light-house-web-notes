/*function makeIdGenerator() {
  let id = 0;
  
  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  };
}
  
// makeIdGenerator returns a function which is assigned to
// the variable nextId
const nextId = makeIdGenerator();
  
console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2
*/



//Exercise 1-Loaded Die
function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let num = -1;

  return function() {
    num += 1;
    return list[num];
  };
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


// exercise 2- Countdown
const countdownGenerator = function(x) {
  let num = x + 1;

  return function() {
    num -= 1;
    return num;
  };
};
const countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown());// T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

  