const Sequelize = require("sequelize");
const db = require('../config/database.js');

const Session  = db.define('session',{
    sessionId:{
        type:Sequelize.INTEGER
    },
    accesstoken:{
        type:Sequelize.STRING
    }
});


module.exports = Session;