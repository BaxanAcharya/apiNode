  var user=require('../models/UserModel.js');


function validation(req,res,next)
{
 // console.log(req.body.username);
  user.findOne({
    where: {username:req.body.username}
  })
  .then(function(result){
    //console.log(result);
    if(result===null)
    {
      next();

    }else{
        console.log('User already registered!!!!!');
        res.send('You are already registered!!!!')
    }
  })
  .catch(function(err){
    //this will be send to index js to error handling
    // next('this is error')
    // res.json({
    //   status:502
    //   message:err.message
    // })
    res.send(err.message)
  })
}

function registerUser(req,res,next) {
 // console.log(req.body)
  user.create({
    username:req.body.username,
    password:req.body.password
  })
  .then(function(result){
   // console.log(result);
  }).catch(function(error){
    console.log(error);
  })
}





module.exports=
{registerUser,validation}
  