const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      index = i;
      found(index);   // execute callback
    }
  }
};
  
/*const actionWhenFound = function(index) {
    console.log("Found him! at index " + index);
  }*/
  
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found him! at index " + index);
});