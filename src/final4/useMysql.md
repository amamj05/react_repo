<!-- 결국 사용된 코드들 -->

CREATE TABLE post (
  `id_post` int NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
  `id_user` int NOT NULL,
  `title` varchar(45) NOT NULL,
  `body` varchar(600) NOT NULL,
  `anonymity` tinyint NOT NULL,
	FOREIGN KEY (id_user) REFERENCES user(id_user),
	FOREIGN KEY (id_post) REFERENCES post(id_post)
);

CREATE TABLE user (
  `id_user` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_post` int,
  `inputid` varchar(15) NOT NULL UNIQUE,
  `nickname` varchar(20) NOT NULL UNIQUE,
  `email` varchar(45) NOT NULL UNIQUE,
  `password` varchar(100) NOT NULL
  );

insert into user(inputid, nickname,email,password) values(
	"test id 01","nickname 01","test01@test.com", "123456789"
),(
	"test id 02","nickname 02","test02@test.com", "123456789"
),(
	"test id 03","nickname 03","test03@test.com", "123456789"
),(
	"test id 04","nickname 04","test04@test.com", "123456789"
),(
	"test id 05","nickname 05","test05@test.com", "123456789"
),(
	"test id 06","nickname 06","test06@test.com", "123456789"
),(
	"test id 07","nickname 07","test07@test.com", "123456789"
),(
	"test id 08","nickname 08","test08@test.com", "123456789"
),(
	"test id 09","nickname 09","test09@test.com", "123456789"
);

- 외래키 삭제
ALTER TABLE post DROP FOREIGN KEY post_ibfk_1;
- 외래키 적용 (뒤쪽이 부모 테이블)
alter table user add foreign key (id_post) REFERENCES post(id_post);
- 외래키 제약 조건 비활성화
SET FOREIGN_KEY_CHECKS = 0;
- 컬럼 속성 재설정
ALTER TABLE post MODIFY id_user int not null;
- create 조회
SHOW CREATE TABLE post;
- 유니크 적용 조회
SHOW FULL COLUMNS FROM post;
- table row 삭제
delete from post WHERE title= "0";
SET FOREIGN_KEY_CHECKS = 1;
SET SQL_SAFE_UPDATES = 1;  