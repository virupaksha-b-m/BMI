var express = require("express");
var bodyparser = require("body-parser")

var app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");
})

app.post("/",function(req,res){

  var weight  = Number(req.body.num1);
  var height  = Number(req.body.num2);

  var bmi = weight/(height*height);

  res.send("BMI " + bmi);
})

app.listen(3000, function(){
  console.log("server started on the port 3000");
})

