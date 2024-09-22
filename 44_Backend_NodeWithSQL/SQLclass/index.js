// Templating using EJS

// to generate fake data
const {faker} = require("@faker-js/faker");

// to connect sql with node
const mysql = require("mysql2");

// Connect Express
const express = require("express");
const app = express();

// Templates path
const path = require("path");

//Connect Ejs
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"));

// Method Override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))

// create connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "root"
});


// requests
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM users`;
    try {
        // connection.query(q, user, (err, result) => {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            console.log(`Total Users = ${result[0]["count(*)"]}`)
            res.render("home.ejs", {count});
            
        })
    } catch (err) {
        console.log(err);
        res.send("Some error in Database....");
    }
    // connection.end();
});

// Show Route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM users ORDER BY id`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            console.log(`Total Users = ${users.length}`)
            res.render("showUsers.ejs", { users});
            
        })
    } catch (err) {
        console.log(err);
        res.send("Some error in Database....");
    }
    // res.send("Done....")
});

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

// // Delete User (using GET)
// app.get("/user/:id/delete", (req, res) => {
//     let { id } = req.params;
//     q = `DELETE FROM users WHERE id=${id}`;

//     try {
//         connection.query(q, (err, result) => {
//             if (err) throw err;
//             console.log(result)
//             console.log("User Removed....")
//             res.redirect("/user");
            
//         })
//     } catch (err) {
//         console.log(err);
//         res.send("Some error in Database....");
//     }
// });

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


// Start Server
const PORT = "3000";
app.listen(PORT, ()=>{
    console.log(`Listening : ${PORT}`);
})














// // Connection wth Database
// try {
//     // connection.query(q, user, (err, result) => {
//     connection.query(q, [users], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }

// // close connection at the end
// connection.end();