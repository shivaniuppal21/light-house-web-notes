const args = process.argv.slice(2);

const Stringsum = function() {
  return parseInt(args[0]) + parseInt(args[1]);
};
console.log(Stringsum(args[0],args[1]));

