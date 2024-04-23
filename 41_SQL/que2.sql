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
SET grade = 'O' WHERE marks>=80; 
UPDATE student
SET grade = 'A' WHERE marks BETWEEN 70 AND 79;
UPDATE student
SET grade = "B" WHERE marks <70;

SELECT * FROM student; 