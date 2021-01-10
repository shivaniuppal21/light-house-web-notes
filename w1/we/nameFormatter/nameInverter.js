const nameInverter = function(name) {
  if (name === "") {
    return "";
  }
  if (name.indexOf(' ') < 0) {
    return name;
  }
  if (name.indexOf(' ') === 0 || name.indexOf(' ') === name.length) {
    return name.trim();
  } else {
    let retstr =  name.substring(name.indexOf(' ') + 1, name.length) + ", " + name.substring(0,name.indexOf(' '));
    return retstr;
  }

};

module.exports = nameInverter;
