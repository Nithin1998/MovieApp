const Sequelize = require('sequelize');
const db = require('../config/database.js');


const movies = db.define('movies',{
    Title:{
        type:Sequelize.STRING
    },
    Genre:{
        type:Sequelize.STRING
    },
    Rating:{
        type:Sequelize.INTEGER
    }
});
module.exports = movies;