const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('again', 'baxan', 'acharya', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});
//console.log(test);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error(err);
  });

  module.exports={
  	sequelize,Sequelize
  }