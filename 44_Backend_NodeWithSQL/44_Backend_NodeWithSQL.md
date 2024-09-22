# Backend Dev -> Node with SQL

## Rename the main file as index.js for proper functioning

## Faker
    -> to generate fake data
    -> npm i @faker-js/faker
    -> create index.js file

    const {faker} = require("@faker-js/faker");

    function getRandomUser() {
        return {
            id: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
    };

    console.log(getRandomUser());

## MySQL2Package
    -> CLIENT -> (resquest) -> SERVER -> (request) -> DATABASE -> (CRUD operation) -> (response) -> SERVER -> (response) -> CLIENT

    -> to run sql using CLI terminal
        -> /usr/local/mysql/bin/mysql -u root -p  (if not working then run the following cmd)
        -> cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
        ./mysql.exe -u root -p


    -> NOTE (IMPORTANT) : To Close connection  Node with MySQL
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

    // close connection at the end (IMPORTANT)
    connection.end();


## Using SQL from CLI
    -> cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
        ./mysql.exe -u root -p

    -> SQL using WorkBench
    -> SQL using Nodejs -> MySQL package
    -> SQL using CLI
    -> using schema.sql file    (for large  no. of queries)

        -> source schema.sql (write it on terminal) OR following cmd
        -> source G:\Courses\Delta4.0 Apna\College\42_Backend_NodeWithSQL\SQLclass\schema.sql

    -> Check out a video (Connect mysql to vscode) : https://www.youtube.com/watch?v=4KXLY5Sf2fU

#### NOTE: Now we will work with index.js and SQL directly without using schema.sql, without CLI, without Workbench

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


### INSERT in Bulk using Faker
    -> using faker
    -> enter data of 100 users using loop

    -> Sample Code
        // to generate fake data
        const {faker} = require("@faker-js/faker");

        // to connect sql with node
        const mysql = require("mysql2");

        // create connection
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "delta_app",
            password: "root"
        });

        // Store existing IDs to ensure uniqueness
        const existingIDs = new Set();

        function generateUniqueID() {
            let id;
            do {
                id = faker.number.int({ min: 1000, max: 9999 });
            } while (existingIDs.has(id));
            existingIDs.add(id);
            return id;
        }

        // Generate Fake Data
        function getRandomUser() {
            // return Array
            return [
                //faker.datatype.uuid(),
                generateUniqueID(),
                faker.internet.userName(),
                faker.internet.email(),
                faker.internet.password(),
            ];
        };

        let q ="INSERT INTO users (id, userName,    email,     password) VALUES ?"
        let users = [];

        for (let i=0; i<50; i++){
            users.push(getRandomUser());
        }

        try {
            // connection.query(q, user, (err, result) =>   {
            connection.query(q, [users], (err, result) =>   {
                if (err) throw err;
                console.log(result);
            })
        } catch (err) {
            console.log(err);
        }

        // close connection at the end
        connection.end();

## Routing with Database (Important)
    -> GET - Show no. of users
    -> GET - Show users (email, id, username) -> ejs
    -> PATCH - Edit Username
    -> POST - Add User
    -> DELETE - Delete User

### Perform CRUD operations using ejs, sql, js
    -> Setup Express
        -> npm i express
        -> npm i uuid
    
    -> Write Code and to run it do followfollowing step
        -> Go to folder where code file is present
        -> Open cmd there
        -> nodemon index.js

    -> Code (Crete Routes) -> index_routing.js
        const express = require("express");
        const app = express();

        app.get("/", (req, res) => {
            let q = `SELECT count(*) FROM users`;
            try {
                // connection.query(q, user, (err, result) =>       {
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    // console.log(result);
                    // res.send(result);
                    console.log(`Total Users = ${result[0]      ["count(*)"]}`);
                    res.send(`Total Users = ${result[0]["count      (*)"]}`);
                })
            } catch (err) {
                console.log(err);
                res.send("Some error in Database....");
            }
            // res.send(`Welcome to Home Page ${}`)
        });

        const PORT = "3000";
        app.listen(PORT, ()=>{
        console.log(`Listening : ${PORT}`);
        })

### Add Templating to Display User Count(ejs)
    -> index.js
    -> create views named folder inside SQL classs
        -> Store all the templates here
        -> create home.ejs
    -> pass the count fom the DB result to home.ejs via index.js

    app.get("/", (req, res) => {
        let q = `SELECT count(*) FROM users`;
        try {
            // connection.query(q, user, (err, result) =>   {
            connection.query(q, (err, result) => {
                if (err) throw err;
                let count = result[0]["count(*)"];
                console.log(`Total Users = ${result[0]  ["count(*)"]}`)
                res.render("home.ejs", {count});
            })
        } catch (err) {
            console.log(err);
            res.send("Some error in Database....");
        }
        // res.send(`Welcome to Home Page ${}`)
    });


### Create another Route for Users Info
    -> create showUsers.ejs

    <% for(user of users){ %>
        <tr>
            <td><%= user.id %></td>
            <td><%= user.userName %></td>
            <td><%= user.email %></td>
        </tr>
    <% } %>

### Edit Username Functionality
    -> Edit showUsers.ejs 
    -> Create editForm.ejs
    -> npm i method-override

    -> Check the password is correct or not before edit username

    -> Code for index.js
        // To Edit Username (to open Form)
        app.get("/user/:id/edit", (req, res) => {
            let { id } = req.params;
            q = `SELECT * FROM users WHERE id=${id}`;
        
            try {
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    console.log(result)
                    let user = result[0];
                    // let username = result[0].userName.trim();
                    // let email = result[0].email;
        
                    res.render("editForm.ejs", {user});
                    
                })
            } catch (err) {
                console.log(err);
                res.send("Some error in Database....");
            }
        
            // res.render("editForm.ejs", {id});
            // console.log(id);
        });
        
        
        // Edit Username (to change Database from form)
        app.patch("/user/username/:id", (req, res) => {
            // res.send("Updated....")
            // console.log(req)
            // console.log(req.params)
            // console.log(req.body)
            let { id } = req.params;
            let { password: formPass, username: newUsername } = req.body;
            let q = `SELECT * FROM users WHERE id='${id}'`;
        
            try {
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    let user = result[0];
                    // console.log(formPass)
                    // console.log(user.password)
        
                    if (formPass != user.password){
                        res.send("Incorrect Password...");
                    } else{
                        let q2 = `UPDATE users SET username='${newUsername}' WHERE id='${id}'`;
                        connection.query(q2, (err, result) => {
                            if (err) throw err;
                            // res.send(result[0]);
                            res.redirect("/user");
                        })
                    }
                })
                
            } catch (err) {
                console.log(err);
                res.send("Some error in Database....");
            }
        
            // // res.render("editForm.ejs", {id});
            // // console.log(id);
        });
        
        // Edit Password (Database)
        app.patch("/user/password/:id", (req, res) => {
            // res.send("Updated....")
            console.log(req.body)
            let { id } = req.params;
            let { old_password: oldPass, new_password: newPass } = req.body;
            // console.log(oldPass);
            // console.log(newPass);
            let q = `SELECT * FROM users WHERE id='${id}'`;
        
            try {
                connection.query(q, (err, result) => {
                    console.log(result);
                    if (err) throw err;
                    let user = result[0];
        
                    if (oldPass != user.password){
                        res.send("Incorrect Password...");
                    } else{
                        let q2 = `UPDATE users SET password='${newPass}' WHERE id='${id}'`;
                        connection.query(q2, (err, result) => {
                            if (err) throw err;
                            // res.send(result[0]);
                            res.redirect("/user");
                        })
                    }
                })
                
            } catch (err) {
                console.log(err);
                res.send("Some error in Database....");
            }
        });
        

### ADD User
    -> Use PUT request using method Overide in action in form

    -> Code for showUsers.ejs
        <form method="get" action="/user/add">
            <button id="btn_addUsers">Add Users</button>
        </form>

    -> Code for addUsers.ejs
        <form method="post" action="/user/add?_method=PUT">

    -> Code of index.js
        // Method Override
        const methodOverride = require("method-override");
        app.use(methodOverride("_method"));
        app.use(express.urlencoded({extended:true}))

        // Add User (to open Form)
        app.get("/user/add", (req, res) => {
            res.render("addUser.ejs");
        });

        // Add User (to database from Form)
        app.put("/user/add", (req, res) => {
            let { username, password, id, email } = req.body;

            // Perform validation for not null and unique constraints
            if (!username || !password || !email) {
                return res.status(400).send("All fields are required");
            }

            let user = [id, username, email, password];
            let q = `INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)`;

            try {
                connection.query(q, user, (err, result) => {
                    if (err) {
                        if (err.code === 'ER_DUP_ENTRY') {
                            // Extract the column causing the duplicate entry error
                            let columnName = err.message.match(/key '(.+?)'/)[1].split('.')[1];
                            let errorMessage = `Duplicate ${columnName} found`;
                            console.log(errorMessage);
                            return res.status(400).send(errorMessage);
                        } else {
                            // Handle other errors
                            console.error("Error:", err);
                            return res.status(500).send("Internal Server Error");
                        }
                    }

                    console.log("User Added...");
                    res.redirect("/user");
                });
            } catch (err) {
                console.log(err);
                res.status(500).send("Some error in Database....");
            }
        });

### Delete User
    -> Code for editForm.ejs
        <form id="DeleteForm" method="post" action="/user/<%=user.id%>/delete?_method=DELETE">
            <button id="btn_delete">Delete Profile</button>
        </form>

    -> Code of index.js
        // Delete User (using DELETE)
        app.delete("/user/:id/delete", (req, res) => {
            let { id } = req.params;
            q = `DELETE FROM users WHERE id=${id}`;

            try {
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    console.log(result)
                    console.log("User Removed....")
                    res.redirect("/user");

                })
            } catch (err) {
                console.log(err);
                res.send("Some error in Database....");
            }
        });