
var obfuscate = (myArgs) => {
    var newpassword = ""
for( var i = 0; i < myArgs.length; i++){
    if(myArgs[i] === "a"){
        newpassword += "4"
    } else if(myArgs[i] === "e"){
        newpassword += "3"
    } else if (myArgs[i] === "o"){
        newpassword += "0"
    } else if (myArgs[i] === "l"){
        newpassword += "1"
    }else {
        newpassword += myArgs[i]
    }
    
}
return newpassword
}
var myArg = process.argv.slice(2);
console.log(obfuscate(myArg[0]))
