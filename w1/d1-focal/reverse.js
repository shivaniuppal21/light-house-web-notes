var myArgs = process.argv.slice(2);

for (var i=0;i<myArgs.length;i++)
{
    var newstring = ''
    for(var j = myArgs[i].length -1 ; j > -1; j--){
       newstring += myArgs[i][j]
    }
console.log(newstring)   
}
