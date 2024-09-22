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
