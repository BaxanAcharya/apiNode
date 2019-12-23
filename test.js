var chai=require('chai');
var chai_http=require('chai-http');
var server=require('./index')
var should=chai.should()

chai.use(chai_http)

describe('User', function()
{
	describe('Login test', function(){
		it('should generate token and response 200 status code', function(done)
		{
			chai.request(server.app1)
			.post('/login')
			.set({"Content-Type":"application/x-www-form-urlencoded"})
			.send({'username':'biplav','password':'acharya'})
			.end(function(err,res){
				res.should.have.status(200);
				// res.body.should.have.property('')
				done();
			});
		});
	});
});

