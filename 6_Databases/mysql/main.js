const mysql = require('mysql');

require("dotenv").config();

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

connection.connect();

connection.query('CREATE TABLE top_stupid_questions (question VARCHAR(1024));');

// connection.query('INSERT INTO top_stupid_questions VALUES ("Is a monkey a type of snake?")', (error, results, fields) => {
//     console.log(results);
//     console.log('****************************************************')
//     console.log(fields);
//
//     connection.end();
// });

// connection.query('SELECT * FROM top_stupid_questions;', (error, results, fields) => {
//     console.log(results);
//     console.log('****************************************************')
//     console.log(fields);
//
//     connection.end();
// });

connection.query('SELECT * FROM top_stupid_questions;', (error, results, fields) => {
    console.log(results);
    console.log('****************************************************')
    console.log(fields);

    connection.end();
});