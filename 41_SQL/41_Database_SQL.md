# Database 

## Database
    -> It is a collection of data in a format that can be easily accessed.

    -> Why Databases?   
        -> Can Store Large Data
        -> Features Like Security, Scalability, etc
        -> Easier to insert, update, delete data

    -> DBMS 
        -> SQL
        -> NoSQL
    
## SQL v/s NoSQL Databses
    -> SQL
        -> Relational Databses (Data Stored in Tabular Form)
        -> MySQL, Oracle, PostgreSQL, etc

    -> NoSQL 
        -> Non Relational Database (Data Stored in Document/ key:val/ graphs, etc)
        -> MongoDB, Cassandra, Neo4j, etc

# SQL (PART 1)

## MySQL
    -> SQL (Structured Query Language)
        -> Not-Casesensitive
        -> Programming Language used to interact with relational Databases
    -> SQL used to perform CRUD Operations on the Relational Databases (Tabular Form)

    -> Table -> Relation
    -> Schema -> Design of the table 
    -> Columns -> Schema / Design
    -> Rows -> Data / Tuple

### Installation -> MySQL Workbench
    -> Install MySQL Server
    -> Install MySQL Workbench
        -> dev.mysql.com/downloads/installer/

        -> Selct FULL during installation
        -> Set password (default -> root)

    -> Form a Connection on MySQL Workbench

## Our First Database
    -> Open MySQL Workbench
    -> Apna College -> create new Connection

    SHOW DATABASES;

    CREATE DATABASE IF NOT EXISTS apnaCollege;

    USE apnaCollege;

    CREATE TABLE student (
    	rollno INT,
        name VARCHAR(30),
        age INT
    );

    INSERT INTO student VALUES (101, "Harsh", 21);
    INSERT INTO student VALUES (102, "Rohan", 30);

    SELECT * FROM student;


## DATABASE Queries
    -> Queries -> Commands

    -> 4 types
        -> DDL  (CREATE, SHOW, DROP)
        -> DML  (INSERT, UPDATE, ALTER, TRUNCATE, DELETE, SELECT)
        -> DCL  ()
        -> TCL

    -> DataTypes
        -> CHAR(size), VARCHAR(size), BLOB(1000), INT, BIGINT, FLOAT, DOUBLE, BOOLEAN -> TINYINT , DATE, YEAR, BIT(1-64)

        -> Unsigned -> used with integer (-128 to 127)
            -> Only positive values then range increases (0 to 255)
        

    -> Constraints
        -> NOT NULL -> name
        -> UNIQUE   -> username / id
        -> DEFAULT  -> 
        -> CHECK    -> to set limits (18+ age limit in instagram)

        -> PRIMARY KEY  -> makes column unique & not null used only for one
            -> PRIMARY KEY (id)
            -> PRIMARY KEY (id, name)   -> COMPOSITE PRIMARY KEY

            -> column that uniquely identified a row
            -> only one PRIMARY KEY in one column

        -> FOREIGN KEY  -> prevent actions that would destroy links between tables
            -> FOREIGN KEY (t_id) REFRENCES teacher(id)

            -> it is a column(set of columns) in a table that refers to the primary key in the another table
            -> FK can have duplicate & NULL values
            -> There can be multiple FK in one table

## Vizualise Tables 
    -> Workbench -> Databses -> Reverse Engineering -> Continue -> Execute -> Finish


## DEMO SQL QUERIES
    SHOW DATABASES;

    CREATE DATABASE IF NOT EXISTS instagram;

    USE instagram;

    DROP TABLE IF EXISTS user ;
    DROP TABLE IF EXISTS posts ;

    CREATE TABLE user (
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

    INSERT INTO user VALUES (5, 14, "Shruti",   "shruti@gmail.com", 10, 100);

    INSERT INTO posts 
    (id, content, user_id) 
    VALUES 
    (1, "RandomText123", 3),
    (2, "RandomText3", 2),
    (3, "RandomText2000", 3);

    SELECT * FROM user;
    SELECT name, email FROM user;
    SELECT DISTINCT age FROM user;


# SQL (PART 2)

## WHERE clause
    -> SELECT name, followers, following FROM user WHERE followers >= 200 AND age > 15;

    -> Operators used with WHERE clause
        -> Arithemetic (+, -, *, /, %)
        -> Comparison (=, !=, >, >=, <=, <)
        -> Logical (AND, OR, NOT, IN, BETWEEN, ALL, LIKE, ANY)
        -> Bitwise (&, |)   -> for bit manupulation

## LIMIT Clause
    -> SELECT col1, col2 FROM table_name LIMIT number;

## ORDER BY clause
    -> SELECT col1, col2 FROM table_name ORDER BY col_name ASC;
    -> ASC / DESC

## Aggregate Functions
    -> To perform a calculation on a set of values, and return a single value

    -> COUNT()
    -> MAX()
    -> MIN()
    -> SUM()
    -> AVG()

    -> SELECT MAX(follower) FROM user;

## GROUP BY clause
    -> It collects the data from multiple records and groups the result by one or more column

    -> Generally it is used with the aggregate function

    -> SELECT col1, col2 FROM table_name GROUP BY col_names;

    -> We can only mention col_names after the SELECT command which are GROUPED. 


## HAVING clause
    -> Similar to WHERE clause, but it is used when we want to apply any condition after grouping.

    -> SELECT col1, col2
    FROM table_name
    GROUP BY col_names
    HAVING condition;

    -> WHERE is for the table, HAVING is for the group

    -> Grouping is necessary for HAVING


## GENERAL ORDER (Important)
    -> SELECT column(s)
    -> FROM table_name
    -> WHERE condition
    -> GROUP BY column(s)
    -> HAVING condition
    -> ORDER BY column(s) ASC;


## UPDATE Queries
    -> UPDATE table_name
    SET col1 = val1, col2 = val2
    WHERE consition;

    -> To update the existing row data

    -> NOTE : SET SQL_SAFE_UPDATES = 0;   
        -> to change the setting , so that you can update data in the table

## DELETE Queries
    -> To delete existing rows

    -> DELETE FROM table_name WHERE condition;

    -> NOTE : WHERE is must to with DELETE

## TABLE Queries
    -> Used whenever we want change in the schema

    -> Add Column
        -> ALTER TABLE table_name
        ADD COLUMN col_name datatypeconstraints;

    -> Drop Column
        -> ALTER TABLE table_name
        DROP COLUMN col_name;

    -> Rename Table
        -> ALTER TABLE table_name
        RENAME TO table_name;

    -> Rename Column
        -> ALTER TABLE table_name
        CHANGE COLUMN oldCol newCol newDatatype newConstraints;

    -> Modify Column (modify datatype/ constraints)
        -> ALTER TABLE table_name
        MODIFY col_name new_datatype new_constraints

## TRUNCATE 
    -> DROP -> Deletes complete table along with schema
    -> Truncate -> Deletes only row data not the column or schema

    -> TRUNCATE TABLE table_name;

