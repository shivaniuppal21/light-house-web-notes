function diceroll(times) {
  let diceret = [];
  for (let i = 0; i < times; i++) {
    diceret.push(Math.ceil(Math.random() * Math.floor(6)));
  }
  return (`Rolled ${times} dice ${diceret.toString()}`);
}

console.log(diceroll(3));