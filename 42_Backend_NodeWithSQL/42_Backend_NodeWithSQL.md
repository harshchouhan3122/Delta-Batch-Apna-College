# Backend Dev -> Node with SQL

## Faker
    -> to generate fake data
    -> npm i @faker-js/faker
    -> create index.js file

    const {faker} = require("@faker-js/faker");

    function getRandomUser() {
        return {
            id: faker.datatype.uuid(),
            userName: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
    };

    console.log(getRandomUser());

## MySQL2Package
    -> CLIENT -> (resquest) -> SERVER -> (request) -> DATABASE -> (CRUD operation) -> (response) -> SERVER -> (response) -> CLIENT

    -> to run sql using CLI terminal
        -> /usr/local/mysql/bin/mysql -u root -p

    -> NOTE : To Close connection  Node with MySQL
        connection.end();  // to close connection

    -> npm i mysql2

    -> create connection on workbench and index.js
    -> connection.query("SHOW TABLES");

    const mysql = require("mysql2");

    // create connection
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "delta_app",
        password: "root",
    });

    // Queries
    try {
        connection.query("SHOW TABLES", (err, result)   => {
            if (err) throw err;
            console.log(result);
        })
    } catch (err) {
        console.log(err);
    }

    // close connection at the end
    connection.end();


## Using SQL from CLI
    -> SQL using WorkBench
    -> SQL using Nodejs -> MySQL package
    -> SQL using CLI
    -> using schema.sql file    (for large  no. of queries)
        -> sorce schema.sql

    -> Check out a video (Connect mysql to vscode) : https://www.youtube.com/watch?v=4KXLY5Sf2fU

## Insert Values
    -> using Placeholders
        let q ="INSERT INTO users (id, userName, email, password) VALUES (?, ?, ?, ?)"
        let user = ["123", "123Rohan", "abc@mail.com", "123"]
        try {
            connection.query(q, user, (err, result) => {
                if (err) throw err;
                console.log(result);
            })
        } catch (err) {
            console.log(err);
        }


### INSERT in Bulk
    -> using faker

    -> enter data of 100 users using loop

## Routing
    -> 