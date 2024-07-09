const mysql = require("mysql"); 

const connection = mysql.createConnection({
    host : "localhost",
    port : 3333,
    user : "root", //mysql의 id
    password : "qwer1234", //mysql의 password
    database : "insideout", //사용할 데이터베이스
});


connection.connect((err) => {
    if (err) console.log(err);
    else console.log('Connected to the database');
});

module.exports = connection;

