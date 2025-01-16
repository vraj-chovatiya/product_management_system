const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vraj',
    database: 'product_management_db',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to DB:', err);
    } else {
        console.log('Connected to MySQL DB');
    }
});

module.exports = db;