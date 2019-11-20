  var user=require('../models/UserModel.js');

  user.create({
  	username:'Biplav',
  	password:'Acharya'
  })
  .then(function(result){
  	console.log(result);
  }).catch(function(error){
  	console.log(error);
  })