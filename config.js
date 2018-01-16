var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'bdm311512562.my3w.com',
    user            : 'bdm311512562',
    password    : '207106918mmx',
    database: 'bdm311512562_db'
});
module.exports = pool;