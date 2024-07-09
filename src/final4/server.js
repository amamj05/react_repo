// 백엔드 서버에서 돌아갈 DB 연결 코드

const express = require('express');
const app = express();
const connection = require("./db.js");
const cors = require("cors");
const mysql = require("mysql2"); 

app.use(express.json())
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
// }));
// cors 문제 다른 해결 코드
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     next();
//   });


const mydb = mysql.createConnection({
    host : "localhost",
    // port : 3333,
    user : "root", //mysql의 id
    password : "qwer1234", //mysql의 password
    database : "insideout", //사용할 데이터베이스
    port : 3306  // 사용할 데이터 베이스의 포트번호
});

// mydb.connect((error) => {
//     if (error) {
//       return console.error("데이터베이스 연결 실패:", error);
//     }
//     console.log("데이터베이스에 성공적으로 연결됨");
//   });


//127.0.0.1:3333 에서 확인
app.get("/", (req, res) => {
    res.json("hello this is the backend")
  })

//   app.get("/post", (req, res) => {
//     const q = "select * from post"
//      mydb.query(q, (err, data) => {
//       if(err) return res.json(err)
//       else return res.json(data)
//     })
//   })


// 예제) post table 의 0번째 인덱스의 title값 불러오기
  app.get("/post", (req, res) => {
    mydb.query("SELECT * from post", (error, results, fields) => {
      if (error) {
        return res.send("쿼리 실행 실패: " + error.message);
      }
      res.send("데이터베이스 서버 버전: " + results[0]["title"]);
    });
  });


//   app.use(cors({
//     origin: "*",                // 출처 허용 옵션
//     credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
//     optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
// }))

// post 요청 시 값을 객체로 바꿔줌
// app.use(express.urlencoded({ extended: true })) 




app.listen(3333, () => {
    console.log(`DB Server running`)
})

module.exports = mydb;