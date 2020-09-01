const fetch = require('./fetch');
const post = require('./Post');
const update = require('./update');
const deleterecord  = require('./delete');

module.exports = [].concat(fetch, post,update,deleterecord);

