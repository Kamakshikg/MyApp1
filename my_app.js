var express=require('express');
var app=express();

app.get('/',function(req,res){
	res.send("Hello all. This is a demo project");
	res.end();
});

app.listen(3000);