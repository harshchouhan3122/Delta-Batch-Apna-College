// to generate fake data
const {faker} = require("@faker-js/faker");

// to connect sql with node
const mysql = require("mysql2");

// -> to run sql using CLI terminal
// -> /user/local/mysql/bin/mysql -u root -p

// create connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "root"
});


// // Queries
// let q ="SHOW TABLES"
// try {
//     connection.query(q, (err, result) => {
//         if (err) throw err;
//             // console.log(result);   // returns an array
//         for (table of result){
//             console.log(table.Tables_in_delta_app);
//         }
//     })
// } catch (err) {
//     console.log(err);
// }


// Insert a data
// let q ="INSERT INTO users (id, userName, email, password) VALUES (?, ?, ?, ?)"
// let user = ["123", "123Rohan", "abc@mail.com", "123"]

// Fake Data
function getRandomUser() {
    // return Array
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

let q ="INSERT INTO users (id, userName, email, password) VALUES ?"
let users = [];

for (let i=0; i<50; i++){
    users.push(getRandomUser());
}

try {
    // connection.query(q, user, (err, result) => {
    connection.query(q, [users], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
}

// close connection at the end
connection.end();



// console.log(getRandomUser());
