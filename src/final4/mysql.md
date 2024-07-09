use insideout;

select * from user;
select * from post;
select * from comment;


create table comment(
	id_comment int primary key NOT NULL auto_increment,
    body varchar(150),
    id_user int,
    id_post int,
    foreign key (id_user) references user(id_user),
    foreign key (id_post) references post(id_post)
);

drop table comment;

insert into comment(body, id_user,id_post) values(
	"test comment 6", 1,2
);

alter table post add foreign key (id_user) REFERENCES user(id_user);
alter table user add foreign key (id_user) REFERENCES post(id_user);

SET GLOBAL FOREIGN_KEY_CHECKS=0;
SET GLOBAL FOREIGN_KEY_CHECKS=1;

SELECT * FROM user WHERE id_user = '2';

SHOW FULL COLUMNS FROM post;
ALTER TABLE post DROP FOREIGN KEY post_ibfk_1;
COMMIT;

ALTER TABLE user ADD id_post INT not null AFTER id_user;
alter table user add foreign key (id_post) REFERENCES post(id_post);


SHOW FULL COLUMNS FROM post;
-- 유니크 조회
SHOW INDEX FROM user WHERE Non_unique = 0;
-- 유니크 제약 조건 삭제 (따로 삭제해줘야하나봄, fk라서 원래 테이블 값에서도 삭제)
ALTER TABLE user DROP INDEX id_post;  
-- 컬럼 속성 다시 설정
ALTER TABLE post MODIFY id_user int not null;

-- 외래키를 끊었다가(삭제했다가) 다시 해줘야하나봄
ALTER TABLE user DROP FOREIGN KEY user_ibfk_1;

-- 데이터 무결성에 걸린다. 외래키로 연결할 두 컬럼의 데이터가 똑같아야한다
-- 그래서 post 테이블을 비우고 다시 연결하기로 했다

DELETE from post;
-- safe mode 비활성화
SET SQL_SAFE_UPDATES = 1;  
-- 외래키로 설정해둔 부모테이블 값을 지울수 없어서 에러 생김 
-- 부모테이블 값부터 지워줘야함, user 테이블 지우자
DELETE from user;
-- 왜 똑같은 에러 뜨는데 ㄷㄷㄷㄷㄷ 지금 외래키 설정도 다 날렸는데 뭐하는거냐고

-- 다시 제약 조건 확인
SHOW CREATE TABLE post;
-- 제약 조건도 없잖아 뭔데

DELETE FROM post WHERE id_post=3;

-- 일단 부모니까 user부터 지워
DELETE FROM user WHERE id_post=0;

drop table user;
drop table post;
-- 외래키 제약조건 비활성화
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE user (
  `id_user` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_post` int,
  `inputid` varchar(15) NOT NULL UNIQUE,
  `nickname` varchar(20) NOT NULL UNIQUE,
  `email` varchar(45) NOT NULL UNIQUE,
  `password` varchar(100) NOT NULL,
	FOREIGN KEY (id_post) REFERENCES post(id_post)
  );

-- 자식 테이블 먼저 만들어야 에러 없이 적용된다
CREATE TABLE post (
  `id_post` int NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
  `id_user` int NOT NULL,
  `title` varchar(45) NOT NULL,
  `body` varchar(600) NOT NULL,
  `anonymity` tinyint NOT NULL,
  	FOREIGN KEY (id_user) REFERENCES user(id_user)
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


select * from user;
select * from post;

ALTER TABLE post DROP FOREIGN KEY post_ibfk_1;
alter table user add foreign key (id_post) REFERENCES post(id_post);

delete from user where id_user=null;
delete from post WHERE title= "0";
SET FOREIGN_KEY_CHECKS = 0;
SET SQL_SAFE_UPDATES = 1;  