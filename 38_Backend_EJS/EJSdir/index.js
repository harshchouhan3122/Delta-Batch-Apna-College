const express = require("express"); //return function
const app = express();
const path = require("path");       //for starting the server outside the directory

const port = 3000;


// Serving Static Files
app.use(express.static("public"));      //public named folder is must and then store css files and other static files in this folder


/*
app.set("view engine", "ejs");  //templates should be in views folder

app.set("views", path.join(__dirname, "/views"));   //for starting the server outside the directory

app.get("/", (req, res) =>{
    // res.send("This is EJS Homepage.");
    res.render("home.ejs");     //express get the file from the views folder
});

app.get("/rolldice", (req, res) =>{

    // Let say you have to display the data from the database
    let val = Math.floor(Math.random()*6)+1;
    // res.render("rollDice", {num: val});     //express get the file from the views folder
    res.render("rollDice", {val});     //express get the file from the views folder
});

app.listen(port, () => {
    console.log(`Listening on port : ${port}`)
});

// nodemon index.js -> on cmd

*/




// Instagram ejs

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));   //for starting the server outside the directory

app.listen(port, ()=>{});

app.get("/", (req, res) => {
    res.send("This is home page. Corrected path-3000/ig/:username");
});

app.get("/ig/:username", (req, res) => {

    let {username} = req.params;
    // let username = "Harsh";
    let follower = Math.floor(Math.random()*800)+200;
    let following = Math.floor(Math.random()*800)+200;;

    // Loops in EJS
    let followerList = ["Rohan", "Mohan", "Shyam", "Rohit", "Virat"]

    res.render("instagram.ejs", {user: username, following: following, followers: follower, followerList:followerList});
});

// app.get("*", (req, res) => {
//     res.send("Error 404 -> Path not found.");
// });





// Conditional Statements

app.get("/rolldice", (req, res) =>{

    let val = Math.floor(Math.random()*6)+1;
    // res.render("rollDice", {num: val});     
    res.render("rollDice", {val});   

});


app.get("*", (req, res) => {
    res.send("Error 404 -> Path not found.");
});