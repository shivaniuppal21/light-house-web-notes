const titleCase = function(text) {
    let lowercase = text.toLowerCase();
    let splitStr = lowercase.split(" ");
    for(let i = 0; i < splitStr.length; i++){
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);  
    }
    return splitStr.join(" ");
}

console.log(titleCase("this is an example"))
console.log(titleCase("WHAT HAPPENS HERE") )