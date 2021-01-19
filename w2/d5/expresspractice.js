const express = require("express")
const app = express()
const port = 3002;

app.get("/", function(req,res){
    res.send("Hello World!")
});

app.get("/parks", function(req,res){
    res.send("The Parks You've Seen")
});

app.listen(port,function (){
    console.log("Server Running");
});

