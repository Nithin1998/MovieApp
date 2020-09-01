const Sequelize = require('sequelize');
module.exports =  new Sequelize('movie', 'nithin','nithin@1234' ,{
    host: '127.0.0.1',
    dialect: 'postgres'
  });

