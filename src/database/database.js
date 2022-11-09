const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({    
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'archive'
});

// Connect

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("mysql connected")
})

const app = express();

app.listen('3001', () =>{
    console.log('server started on port 3000')
})

module.exports = db;