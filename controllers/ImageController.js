var image = require('../models/UserModel.js')

function insertImage(req,res,next)
{
	image.image.create({
			imageName:req.file.filename
	})
	.then(function ()
	{

	})
	.catch(function (err)
	{
		next(err)
	})
}

function insertImages(req,res,next)
{
	var array= req.files;
	array.forEach(element => {
image.image.create({
			imageName:element.filename
	})
	.then(function ()
	{

	})
	.catch(function (err)
	{
		next(err)
	})
	})
}


	

module.exports={
	insertImage,
	insertImages
}