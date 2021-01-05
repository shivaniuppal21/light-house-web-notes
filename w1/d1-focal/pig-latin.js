var myArgs = process.argv.slice(2);
var newword = ""
for (var i=0; i<myArgs.length; i++){
    
        newword += myArgs[i].slice(1) 
        newword += myArgs[i][0]
        newword += 'ay ' 
}
console.log(newword)