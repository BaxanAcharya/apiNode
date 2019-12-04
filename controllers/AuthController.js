
var jwt = require('jsonwebtoken');
var user=require('../models/UserModel.js');

function validtor (req,res,next){
//next

if(req.body.username===null)
{
	res.send('Username cannot be empty');
}

user.findOne({
	where:{username:req.body.username}
})
.then(function(result)
{
	if(result===null)
	{
		res.send('You  have not registered')
	}
	else{
		console.log(result);
		req.passworkFromDB=result.datavalues.passwordCheck
		next();
	}
})
}

function passwordCheck(){

bcrypt.compare(req.body.password, req.passworkFromDB)
.then(function(result)
{
	if(result===true){
		next()
	}else{
		res.send('Invalid password');
		//next
	}
})
}

function jwtTokenGen(req,res){

	console.log(req.body.username)
var payloadd = {
	username : req.body.username,
	userLevel:'superadmin',

}

jwt.sign(payloadd, 'thisisSecretKey'
	,{expiresIn:"10h"},function(err,resultToken){
		console.log(err)
		console.log(resultToken)
		res.json({"usertoken":resultToken})
	})


//  function verifyToken(req,res,next){
// 	//console.log(req.headers);
// 	console.log(req.headers.authorization);
// 	jwt.verify(token,'thisisSecretKey', )
// }



}

module.exports = {
 jwtTokenGen,
 validtor,
 passwordCheck,
 // verifyToken
}