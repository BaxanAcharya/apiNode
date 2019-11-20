 //var http = require('http');
const test = require('express');
const bodyParser=require('body-parser');

var userModel= require('./models/UserModel.js');


var userController=require('./controllers/User_Controller.js');

//console.log(db.sequelize)



  // 	const a=10;
  // var promiseVal=new Promise(function(resolve, reject)
  // {
  // 	setTimeOut(function()
  // 	{
  // 		if(a===10)
  // 	{
  // 		resolve('okay,success')
  // 	}else{
  // 		reject("faliure")
  // 	}
  // 	}), 3000

  	
  // })

  // promiseVal.then(function(result)
  // {
  // 	console.log(result);
  // }).catch(function(err)
  // {
  // 	console.log(err);
  // })
  // .finally(function()
  // {
  // 	console.log('in finally')
  // })

var app1=test()


app1.use(bodyParser.urlencoded({extended:true}))

app1.post('/hotel',function(req,res,next){
	console.log(req.body);
	res.status(201);
});

app1.get('/hotel/:id/', function (req,res,next) {
	console.log(req.params.id);
	console.log(req.query);
	console.log('in first midddleware');
	req.testvar={name:'Biplav'}
	next();	
},function (req,res,next) {
	console.log('in secod midddleware');
	console.log(req.testvar.name);
	next('this is error');
	res.status(200);
	res.json({
		'name':'tiger palace',
		'location':'Bhairawa',
		'phone':'01258646'
	});
}), function (req,res) {
	res.set({
		'Content-type':'application/json',
		'abc':'123'
	});	
}


app1.use('/*',function (req,res) {
	res.status(404);
	res.send('NOT FOUND');
})

app1.listen(3000);


// var app=http.createServer(cb);

// function cb(req,res) {
// 	var body='test http';
// 	res.header('Content-type', 'test');
// 	res.statusCode=302;
// 	res.write(body);
// 	res.end('hello');
// }

// public =10
// console.log(10);

// function test(b,a) {
// 	"use strict";
// 	b=10;
// }

// test();
// app.listen(3000);
// console.log('Server Started......');