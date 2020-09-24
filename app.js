//index.js

var express = require("express");
var app = express();
var path = require('path');


app.listen(3000, function(){
    console.log("App is running on port 3000");
});

app.use(express.static(path.join(__dirname, 'resouces/css')));
app.use(express.static(path.join(__dirname, 'resouces/js')));
app.get("/", function(req, res){
    res.sendfile("momentumTodo.html");
});