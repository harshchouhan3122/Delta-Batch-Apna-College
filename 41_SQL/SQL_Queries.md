SHOW DATABASES;

DROP DATABASE instagram;

CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

DROP TABLE IF EXISTS user ;

CREATE TABLE IF NOT EXISTS user (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    CONSTRAINT CHECK (age>=13),
    PRIMARY KEY (id)
);

CREATE TABLE posts(
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO user 
(id, age, name, email, followers, following) 
VALUES 
(1, 14, "Harsh", "harsh@gmail.com", 123, 145),
(2, 15, "Mohan", "mohan@gmail.com", 200, 200),
(3, 16, "Rohit", "rohit@gmail.com", 300, 100),
(4, 17, "Virat", "virat@gmail.com", 200, 90);

INSERT INTO user VALUES (5, 14, "Shruti", "shruti@gmail.com", 10, 100);

INSERT INTO user 
(id, age, name, email, followers, following) 
VALUES 
(6, 14, "Karan", "karan@gmail.com", 1230, 145),
(7, 16, "Mohit", "mohit@gmail.com", 2000, 2400),
(8, 19, "Ashwin", "ashwin@gmail.com", 3000, 1000),
(9, 17, "Rohan", "rohan@gmail.com", 2000, 9000);


INSERT INTO posts 
(id, content, user_id) 
VALUES 
(1, "RandomText123", 3),
(2, "RandomText3", 2),
(3, "RandomText2000", 3);

SELECT * FROM user;
SELECT name, email FROM user;
SELECT DISTINCT age FROM user;

SELECT name, followers, following FROM user
WHERE followers >= 200;

SELECT name, age, followers, following FROM user
WHERE followers >= 200 OR age > 15;

SELECT name, age, followers, following FROM user
WHERE age BETWEEN 15 AND 17;

SELECT name, email FROM user
WHERE email IN ("harsh@gmail.com", "virat@gmail.com", "abc@gmail.com");

SELECT name, age, email FROM user 
WHERE age IN (14,16);

SELECT name, age, email FROM user 
WHERE age NOT IN (14, 16);

SELECT name, age FROM user 
WHERE age > 15
LIMIT 2;

SELECT id, name, followers FROM user
ORDER BY followers ASC;

SELECT id, name, following FROM user
ORDER BY following DESC;

-- SELECT name, followers FROM user
-- WHERE followers = MAX(followers);

SELECT COUNT(age) FROM user
WHERE age = 14;

SELECT name, age FROM user
WHERE age = 14;

SELECT AVG(age), SUM(followers), MIN(age) FROM user;

SELECT SUM(followers), COUNT(id), AVG(followers) FROM user;

SELECT age, COUNT(id) FROM user 
GROUP BY age
ORDER BY age;

SELECT age , COUNT(id), MAX(followers) FROM user
GROUP BY age ORDER BY age;


SELECT age , COUNT(id), MAX(followers) FROM user
GROUP BY age 
HAVING MAX(followers)>1500
ORDER BY MAX(followers) DESC, age DESC;

SELECT * FROM user;

SET SQL_SAFE_UPDATES = 0;

-- Add Bonous column into table and then set bonous as followers*10 
ALTER TABLE user 
ADD bonous INT;

UPDATE user
SET bonous = followers*10;

SELECT followers, bonous FROM user;

DELETE FROM user
WHERE bonous < 500;

ALTER TABLE users
CHANGE COLUMN bonous bonus INT;

ALTER TABLE users
MODIFY followers INT DEFAULT 0;



### Practice Que1

SHOW DATABASES;

CREATE DATABASE college;

USE college;

CREATE TABLE IF NOT EXISTS teacher(
	id INT PRIMARY KEY,
    name VARCHAR(30),
    subject VARCHAR(20),
    salaray DOUBLE
);

SELECT * FROM teacher;

ALTER TABLE teacher
CHANGE COLUMN salaray salary DOUBLE;

INSERT INTO teacher (id, name, subject, salary)
VALUES (23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM teacher
WHERE salary > 55000;

-- Rename Column-- 
ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

SELECT * FROM teacher;

-- Update Column--  
UPDATE teacher
SET ctc = ctc*1.25;

-- Add Column --
ALTER TABLE teacher
ADD city VARCHAR(20) DEFAULT "Gurgaon";

-- Delete Column--
ALTER TABLE teacher
DROP COLUMN city;


### Practice Que 2
USE college;

CREATE TABLE IF NOT EXISTS student(
	roll_no INT PRIMARY KEY,
    name VARCHAR(20),
    city VARCHAR(30),
    marks DOUBLE DEFAULT 0
);

INSERT INTO student (roll_no, name, city, marks)
VALUES 
	(110, "adam", "Delhi", 76),
	(108, "bob", "Mumbai", 65),
    (124, "casey", "Pune", 94),
    (112, "duke", "Pune", 80);
    
    
SELECT * FROM student;

SELECT * FROM student
WHERE marks > 75;

SELECT city FROM student
GROUP BY city
ORDER BY city;

SELECT city, max(marks) FROM student
GROUP BY city
ORDER BY Max(marks) DESC;

SELECT AVG(marks) FROM student;

ALTER TABLE student
ADD COLUMN grade CHAR(1);

UPDATE student
SET grade = "B" WHERE marks <70;
UPDATE student
SET grade = 'A' WHERE marks BETWEEN 70 AND 80;
UPDATE student
SET grade = 'O' WHERE marks>=80; 

SELECT * FROM student;