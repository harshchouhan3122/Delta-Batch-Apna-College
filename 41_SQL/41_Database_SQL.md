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

