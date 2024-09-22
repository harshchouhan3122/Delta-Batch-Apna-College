// Routing


// to generate fake data
const {faker} = require("@faker-js/faker");

// to connect sql with node
const mysql = require("mysql2");

// Connect Express
const express = require("express");
const app = express();

// create connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "root"
});

// // Fake Data
// function getRandomUser() {
//     // return Array
//     return [
//         faker.datatype.uuid(),
//         faker.internet.userName(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// };

// requests
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM users`;
    try {
        // connection.query(q, user, (err, result) => {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // console.log(result);
            // res.send(result);
            console.log(`Total Users = ${result[0]["count(*)"]}`);
            res.send(`Total Users = ${result[0]["count(*)"]}`);
        })
    } catch (err) {
        console.log(err);
        res.send("Some error in Database....");
    }
    // res.send(`Welcome to Home Page ${}`)
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