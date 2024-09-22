// to generate fake data
const { faker } = require("@faker-js/faker");

// to connect SQL with node
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

// Fake Data
function getRandomUser() {
    // return Array
    return [
        generateUniqueID(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

let q = "INSERT INTO users (id, username, email, password) VALUES ?";
let users = [];

for (let i = 0; i < 50; i++) {
    users.push(getRandomUser());
}

try {
    connection.query(q, [users], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

// Close connection at the end
connection.end();
