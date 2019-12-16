
var db = require('../config/dbConfig.js');
var user = db.sequelize.define('user',
{
	//attributes
	id:{
		type: db.Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement: true,
		allowNull:false
	},
username:{
	type: db.Sequelize.STRING,
	allowNull:false
},
address:{
	type: db.Sequelize.STRING,
	allowNull:false
},
password:{
	type:db.Sequelize.STRING,
	allowNull:false
}
},
{
	freezeTableName:true,
	tableName:"user_tables2",
	paranoid:true

}
)


var image=db.sequelize.define('images',
{
		//attributes
		id:{
		type: db.Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement: true,
		allowNull:false
	},
	imageName:{
	type: db.Sequelize.STRING,
	allowNull:false
}
	
})

user.sync({force:false})
.then(() => {
   // console.log('User table has been created');
  })
  .catch(err => {
    console.error(err);
  });


module.exports={user, image};