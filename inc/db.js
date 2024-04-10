const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bseidf40',
    database: 'saboroso',
    multipleStatements: true
});

module.exports = connection;