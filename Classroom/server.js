const express = require("express");
const app = express();
const PORT = 3000;

const path = require("path");
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}))                    // to get the parameters from the query String 
app.use(methodOverride("_method"));                             //for PUT request in UPDATE Route

// const cookieParser = require("cookie-parser");

const users = require("./routes/users");
const posts = require("./routes/posts");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const session = require("express-session");
const flash = require("connect-flash");


const sessionoptions = {
    secret: "secretCode",
    saveUninitialized: true,
    resave: false
};

app.use(session(sessionoptions));   //connect.sid
app.use(flash());









app.get("/register", (req, res) => {
    // let { req.session.name = "Anonymous" } = req.query;  //Incorrect way to define
    let { name = "Anonymous" } = req.query;
    req.session.name = name;
    // res.send(`${req.session.name}`);
    req.flash("success", "User registered Successfully.");
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    // res.send(`Hello, ${req.session.name}`);
    res.render("page.ejs", {name: req.session.name, msg: req.flash("success")});
});

// Express-Session  -> Session is same if you open another tab for the same route
// app.get("/test", (req, res) => {
//     // res.send("Test Seccessful. ");
//     if(req.session.count){
//         req.session.count ++;
//     } else{
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// });










// Root Directory
app.get("/", (req, res)=>{
    res.send("Server is working....");
});


// Restructured Posts and Users and then import there paths
app.use("/users", users);
app.use("/posts", posts);


// Start Server
app.listen(PORT, ()=>{
    console.log(`Server is listening to PORT: ${PORT}`);
});